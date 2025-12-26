'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useCurrency } from '../../../contexts/CurrencyContext';
import { useTheme } from '../../../contexts/ThemeContext';
import { useNotification } from '../../../contexts/NotificationContext';
import { Providers } from '../../../components/Providers';
import { Layout } from '../../../components/layout/Layout';

export default function MenuPage() {
  const { language } = useLanguage();
  const { currency } = useCurrency();
  const { addNotification } = useNotification();

  const menuItems = [
    { id: 1, name: 'Grilled Chicken', price: 25, category: 'Main Course', image: '/api/placeholder/300/200' },
    { id: 2, name: 'Beef Burger', price: 18, category: 'Main Course', image: '/api/placeholder/300/200' },
    { id: 3, name: 'Caesar Salad', price: 12, category: 'Salads', image: '/api/placeholder/300/200' },
    { id: 4, name: 'Chocolate Cake', price: 8, category: 'Desserts', image: '/api/placeholder/300/200' },
  ];

  return (
    <Providers>
      <Layout>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Our Menu' : 'ہمارا مینو'}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === 'en' ? 'Discover our delicious offerings' : 'ہمارے لذیذ پیش کردہ کھانوں کا دریافت کریں'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">
                        {currency === 'USD' ? '$' : 'Rs'}{item.price}
                      </span>
                      <button
                        onClick={() => addNotification(`${item.name} added to cart!`, 'success')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      >
                        {language === 'en' ? 'Add to Cart' : 'کارٹ میں شامل کریں'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </Providers>
  );
}
