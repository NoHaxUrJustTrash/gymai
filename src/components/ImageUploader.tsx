import React, { useState, useRef } from 'react';
import { Camera, Upload, Loader2 } from 'lucide-react';

interface ImageUploaderProps {
  onImageCapture: (base64Image: string) => void;
  isLoading: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageCapture, isLoading }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setPreview(base64String);
      onImageCapture(base64String);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="card p-6 mb-8">
      <div className="flex flex-col items-center space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
          capture="environment"
        />
        
        {preview ? (
          <div className="w-full">
            <div className="relative aspect-[4/3] mb-4">
              <img
                src={preview}
                alt="Equipment preview"
                className="w-full h-full object-contain rounded-xl bg-gray-50"
              />
            </div>
            {!isLoading && (
              <button
                onClick={triggerFileInput}
                className="btn btn-primary w-full"
                aria-label="Take another photo"
              >
                <Camera className="w-5 h-5 mr-2 inline-block" />
                Take Another Photo
              </button>
            )}
          </div>
        ) : (
          <div className="w-full space-y-6">
            <div 
              onClick={triggerFileInput}
              className="border-2 border-dashed border-gray-200 rounded-xl p-8 
                flex flex-col items-center justify-center aspect-[4/3] cursor-pointer 
                hover:border-primary-400 hover:bg-primary-50/50 transition-colors duration-200"
            >
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <Upload className="w-8 h-8 text-primary-600" />
              </div>
              <p className="text-gray-700 font-medium text-center">
                Click to upload or take a photo
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Supports JPG, PNG, GIF
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={triggerFileInput}
                className="btn btn-primary"
                aria-label="Upload photo"
              >
                <Upload className="w-5 h-5 mr-2 inline-block" />
                Upload
              </button>
              <button
                onClick={triggerFileInput}
                className="btn bg-accent-500 hover:bg-accent-600 text-white"
                aria-label="Take photo"
              >
                <Camera className="w-5 h-5 mr-2 inline-block" />
                Take Photo
              </button>
            </div>
          </div>
        )}
        
        {isLoading && (
          <div className="flex items-center justify-center gap-3 mt-4">
            <Loader2 className="w-6 h-6 text-primary-600 animate-spin" />
            <p className="text-gray-700 font-medium">Analyzing equipment...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;