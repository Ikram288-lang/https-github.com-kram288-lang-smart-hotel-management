'use client';

import React from 'react';

export const MenuItemSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="skeleton w-full h-48"></div>
      <div className="p-4">
        <div className="skeleton h-6 w-3/4 mb-2"></div>
        <div className="skeleton h-4 w-full mb-4"></div>
        <div className="skeleton h-10 w-full rounded-lg"></div>
      </div>
    </div>
  );
};
