'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  formatPrice: (price: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrencyState] = useState<string>('PKR');

  // Initialize currency from localStorage on client side
  useEffect(() => {
    const stored = localStorage.getItem('currency');
    if (stored) {
      setCurrencyState(stored);
    }
  }, []);

  const setCurrency = (curr: string) => {
    setCurrencyState(curr);
    localStorage.setItem('currency', curr);
  };

  const exchangeRates = {
    PKR: 1,
    USD: 0.0036,
    EUR: 0.0033
  };

  const formatPrice = (price: number): string => {
    const convertedPrice = price * exchangeRates[currency as keyof typeof exchangeRates];

    switch(currency) {
      case 'PKR':
        return `Rs. ${convertedPrice.toFixed(0)}`;
      case 'USD':
        return `$ ${convertedPrice.toFixed(2)}`;
      case 'EUR':
        return `€ ${convertedPrice.toFixed(2)}`;
      default:
        return `Rs. ${price}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
