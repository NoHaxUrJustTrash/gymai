import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-sm text-gray-600 mb-3">
            © {new Date().getFullYear()} GymEquip AI - Made with{' '}
            <Heart className="w-4 h-4 inline-block text-red-500 mx-1" fill="currentColor" /> 
            for fitness enthusiasts
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/frostico" 
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;