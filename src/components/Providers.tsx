'use client';

import React, { ReactNode } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { CurrencyProvider } from '../contexts/CurrencyContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { NotificationProvider } from '../contexts/NotificationContext';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CurrencyProvider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </CurrencyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};
