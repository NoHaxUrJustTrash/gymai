import React from 'react';
import Exercise from './Exercise';
import { AlertCircle } from 'lucide-react';
import { Exercise as ExerciseType } from '../types';

interface ExerciseListProps {
  exercises: ExerciseType[];
  equipmentName: string;
  error: string | null;
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises, equipmentName, error }) => {
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto fade-in">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-red-800">Error analyzing image</h3>
            <p className="text-sm text-red-700 mt-1">{error}</p>
            <p className="text-sm text-red-700 mt-2">Please try another image or try again later.</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (exercises.length === 0) {
    return null;
  }
  
  return (
    <div className="max-w-md mx-auto px-4 fade-in">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center text-gray-800">
          Exercises for {equipmentName}
        </h2>
        <p className="text-gray-600 text-center text-sm">
          Tap on an exercise to see details and tutorial
        </p>
      </div>
      
      <div className="space-y-3">
        {exercises.map((exercise, index) => (
          <Exercise key={index} {...exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;