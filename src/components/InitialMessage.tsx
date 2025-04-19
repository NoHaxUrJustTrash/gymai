import React from 'react';
import { Camera, Dumbbell, Lightbulb } from 'lucide-react';

const InitialMessage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto px-4 mt-8 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-primary-100 p-3">
            <Lightbulb className="w-8 h-8 text-primary-600" />
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-3">How It Works</h2>
        
        <div className="space-y-4 text-left">
          <div className="flex items-start">
            <div className="bg-primary-100 rounded-full p-2 mr-3 mt-1">
              <Camera className="w-4 h-4 text-primary-600" />
            </div>
            <p className="text-gray-700">Take a photo of any gym equipment you have access to</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-100 rounded-full p-2 mr-3 mt-1">
              <Dumbbell className="w-4 h-4 text-primary-600" />
            </div>
            <p className="text-gray-700">Get personalized exercise suggestions specifically for that equipment</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700">Learn proper form and technique with direct links to video tutorials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialMessage;