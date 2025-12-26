'use client';

import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose: (id: number) => void;
  id: number;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose, id }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div className={`p-4 rounded-lg shadow-lg border-l-4 mb-2 flex justify-between items-center ${
      type === 'success' ? 'bg-green-50 border-green-500 text-green-700' :
      type === 'error' ? 'bg-red-50 border-red-500 text-red-700' :
      type === 'warning' ? 'bg-yellow-50 border-yellow-500 text-yellow-700' :
      'bg-blue-50 border-blue-500 text-blue-700'
    } dark:bg-gray-800 dark:text-white transition-all duration-300 transform translate-x-0`}>
      <div>
        <p className="font-medium">{message}</p>
        <p className="text-sm opacity-75 mt-1">{new Date().toLocaleTimeString()}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="text-gray-500 hover:text-gray-700 ml-2"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
