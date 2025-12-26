'use client';

import { useState, useEffect } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { CurrencyProvider } from '../contexts/CurrencyContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { NotificationProvider } from '../contexts/NotificationContext';
import { Providers } from '../components/Providers';
import { Layout } from '../components/layout/Layout';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <Providers>
      <Layout>
        <HomePage />
      </Layout>
    </Providers>
  );
}
