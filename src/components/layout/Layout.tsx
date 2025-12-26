'use client';

import React, { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ToastContainer } from '../ToastContainer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};
