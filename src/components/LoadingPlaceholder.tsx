import React from 'react';

const LoadingPlaceholder: React.FC = () => {
  return (
    <div className="max-w-md mx-auto px-4 mt-6 fade-in">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
        
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4">
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 rounded-full bg-gray-200 mr-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-3 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="flex flex-wrap gap-1 mb-3">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-6 bg-gray-200 rounded-full w-16"></div>
              ))}
            </div>
            <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPlaceholder;