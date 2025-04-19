import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Youtube, Dumbbell } from 'lucide-react';
import { Exercise as ExerciseType } from '../types';

const Exercise: React.FC<ExerciseType> = ({ 
  name, 
  description, 
  targetMuscles,
  youtubeSearchQuery
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeSearchQuery)}`;
  
  return (
    <div className="card transform transition-transform duration-200 hover:-translate-y-1">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        role="button"
        aria-label={`${name} exercise details`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary-50 p-2 rounded-lg">
            <Dumbbell className="w-5 h-5 text-primary-600" />
          </div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
        </div>
        <div className="transition-transform duration-200">
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 border-t border-gray-100">
          <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Target Muscles:</h4>
            <div className="flex flex-wrap gap-2">
              {targetMuscles.map((muscle, index) => (
                <span 
                  key={index} 
                  className="exercise-tag"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>
          
          <a
            href={youtubeSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white 
              py-2.5 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] 
              active:scale-[0.98] font-medium"
            aria-label={`Watch ${name} tutorial on YouTube`}
          >
            <Youtube className="w-5 h-5 mr-2" />
            Watch Tutorial
          </a>
        </div>
      </div>
    </div>
  );
};

export default Exercise;