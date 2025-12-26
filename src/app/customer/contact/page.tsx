'use client';

import { useLanguage } from '../../../contexts/LanguageContext';
import { Providers } from '../../../components/Providers';
import { Layout } from '../../../components/layout/Layout';

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <Providers>
      <Layout>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {language === 'en' ? 'Contact Us' : 'ہم سے رابطہ کریں'}
                </h1>
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
      </Layout>
    </Providers>
  );
}
