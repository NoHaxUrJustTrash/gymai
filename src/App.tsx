import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageUploader from './components/ImageUploader';
import ExerciseList from './components/ExerciseList';
import LoadingPlaceholder from './components/LoadingPlaceholder';
import InitialMessage from './components/InitialMessage';
import { Exercise } from './types';
import { getExercisesForEquipment } from './utils/groq-client';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [equipmentName, setEquipmentName] = useState<string>('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleImageCapture = async (base64Image: string) => {
    setLoading(true);
    setError(null);
    setHasInteracted(true);
    
    try {
      const result = await getExercisesForEquipment(base64Image);
      setEquipmentName(result.equipment);
      setExercises(result.exercises);
    } catch (err) {
      console.error('Error getting exercise data:', err);
      setError('Failed to analyze the equipment image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Discover New Exercises
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Take a photo of gym equipment to get personalized exercise suggestions
            </p>
          </div>
          
          <ImageUploader onImageCapture={handleImageCapture} isLoading={loading} />
          
          {loading ? (
            <LoadingPlaceholder />
          ) : exercises.length > 0 ? (
            <ExerciseList 
              exercises={exercises} 
              equipmentName={equipmentName}
              error={error}
            />
          ) : !hasInteracted && !error ? (
            <InitialMessage />
          ) : error ? (
            <ExerciseList 
              exercises={[]} 
              equipmentName=""
              error={error}
            />
          ) : null}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;