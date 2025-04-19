import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary-50 p-2 rounded-xl">
              <Dumbbell className="w-6 h-6 text-primary-600" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 text-transparent bg-clip-text">
              GymEquip AI
            </h1>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Discover exercises for any gym equipment
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;