'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useNotification } from '../../contexts/NotificationContext';

export const Navigation: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { currency, setCurrency } = useCurrency();
  const { theme, setTheme } = useTheme();
  const { unreadCount } = useNotification();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SH</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">SmartHotel</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('home')}
            </Link>
            <Link href="/customer/menu" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('menu')}
            </Link>
            <Link href="/customer/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('about')}
            </Link>
            <Link href="/customer/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t('contact')}
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-1 text-sm border-0 focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">EN</option>
              <option value="ur">UR</option>
            </select>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-1 text-sm border-0 focus:ring-2 focus:ring-blue-500"
            >
              <option value="PKR">PKR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative">
                <i className="fas fa-bell"></i>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
            </div>

            {/* Cart */}
            <Link href="/customer/cart" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white text-sm"></i>
                </div>
                <span className="hidden sm:block">Guest</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('home')}
              </Link>
              <Link href="/customer/menu" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('menu')}
              </Link>
              <Link href="/customer/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('about')}
              </Link>
              <Link href="/customer/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
