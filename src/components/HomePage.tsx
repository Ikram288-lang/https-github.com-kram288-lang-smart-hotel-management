'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { useTheme } from '../contexts/ThemeContext';
import { useNotification } from '../contexts/NotificationContext';

export default function HomePage() {
  const { language, toggleLanguage } = useLanguage();
  const { currency, toggleCurrency } = useCurrency();
  const { theme, toggleTheme } = useTheme();
  const { addNotification } = useNotification();

  const [currentSection, setCurrentSection] = useState('home');

  const menuItems = [
    { id: 1, name: 'Grilled Chicken', price: 25, category: 'Main Course', image: '/api/placeholder/300/200' },
    { id: 2, name: 'Beef Burger', price: 18, category: 'Main Course', image: '/api/placeholder/300/200' },
    { id: 3, name: 'Caesar Salad', price: 12, category: 'Salads', image: '/api/placeholder/300/200' },
    { id: 4, name: 'Chocolate Cake', price: 8, category: 'Desserts', image: '/api/placeholder/300/200' },
  ];

  const renderHomeSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'en' ? 'Welcome to Smart Hotel' : 'سمارٹ ہوٹل میں خوش آمدید'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {language === 'en'
              ? 'Experience modern dining with our innovative hotel management system'
              : 'ہمارے جدید ہوٹل مینجمنٹ سسٹم کے ساتھ جدید کھانے کا تجربہ حاصل کریں'
            }
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setCurrentSection('menu')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {language === 'en' ? 'View Menu' : 'مینو دیکھیں'}
            </button>
            <button
              onClick={() => setCurrentSection('about')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {language === 'en' ? 'About Us' : 'ہمارے بارے میں'}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {language === 'en' ? 'Dining Experience' : 'کھانے کا تجربہ'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'en'
                ? 'Enjoy our carefully crafted menu with fresh ingredients'
                : 'تازہ اجزاء کے ساتھ ہمارے احتیاط سے تیار کردہ مینو سے لطف اندوز ہوں'
              }
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {language === 'en' ? 'Fast Service' : 'تیزی سے سروس'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'en'
                ? 'Quick and efficient service to meet your needs'
                : 'آپ کی ضروریات کو پورا کرنے کے لیے تیزی سے اور موثر سروس'
              }
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {language === 'en' ? 'Digital Menu' : 'ڈیجیٹل مینو'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'en'
                ? 'Scan QR codes for instant access to our menu'
                : 'ہمارے مینو تک فوری رسائی کے لیے QR کوڈ اسکین کریں'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMenuSection = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? 'Our Menu' : 'ہمارا مینو'}
          </h2>
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
  );

  const renderAboutSection = () => (
    <div className="min-h-screen bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {language === 'en' ? 'About Smart Hotel' : 'سمارٹ ہوٹل کے بارے میں'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            {language === 'en'
              ? 'Smart Hotel is a cutting-edge hotel management system that combines traditional hospitality with modern technology. Our platform provides seamless dining experiences, efficient order management, and comprehensive administrative tools to ensure the best service for our guests.'
              : 'سمارٹ ہوٹل ایک جدید ہوٹل مینجمنٹ سسٹم ہے جو روایتی مہمان نوازی کو جدید ٹیکنالوجی کے ساتھ جوڑتا ہے۔ ہمارا پلیٹ فارم ہمارے مہمانوں کے لیے بہترین سروس کو یقینی بنانے کے لیے ہموار کھانے کے تجربے، موثر آرڈر مینجمنٹ، اور جامع انتظامی ٹولز فراہم کرتا ہے۔'
            }
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Our Mission' : 'ہمارا مشن'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'en'
                  ? 'To revolutionize hotel dining through innovative technology and exceptional service.'
                  : 'جدت طرازی ٹیکنالوجی اور استثنائی سروس کے ذریعے ہوٹل کھانے میں انقلاب برپا کرنا۔'
                }
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Our Vision' : 'ہماری ویژن'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'en'
                  ? 'To be the leading provider of smart hotel management solutions worldwide.'
                  : 'دنیا بھر میں سمارٹ ہوٹل مینجمنٹ حل فراہم کرنے والا لیڈنگ فراہم کنندہ بننا۔'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'Contact Us' : 'ہم سے رابطہ کریں'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === 'en' ? 'Get in touch with our team' : 'ہماری ٹیم سے رابطہ کریں'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? 'Get In Touch' : 'رابطہ کریں'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {language === 'en' ? '123 Hotel Street, City, Country' : '123 ہوٹل اسٹریٹ، شہر، ملک'}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">✉️</span>
                  <span className="text-gray-600 dark:text-gray-300">info@smarthotel.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? 'Business Hours' : 'کاروباری اوقات'}
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Monday - Friday' : 'پیر سے جمعہ'}</span>
                  <span>9:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Saturday' : 'ہفتہ'}</span>
                  <span>10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Sunday' : 'اتوار'}</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {currentSection === 'home' && renderHomeSection()}
      {currentSection === 'menu' && renderMenuSection()}
      {currentSection === 'about' && renderAboutSection()}
      {currentSection === 'contact' && renderContactSection()}
    </div>
  );
}
