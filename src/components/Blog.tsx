'use client'; 

import React from 'react';

interface BlogProps {
  imageSrc: string;
  paragraphText: string;
  buttonText: string;

}

const Blog: React.FC<BlogProps> = ({ imageSrc, paragraphText, buttonText }) => {
  return (
    <div className="max-w-xs rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <img src={imageSrc} alt="Blog image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-700 text-base mb-4">{paragraphText}</p>
        <button
          
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Blog;
