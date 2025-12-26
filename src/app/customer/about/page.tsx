'use client';

import { useLanguage } from '../../../contexts/LanguageContext';
import { Providers } from '../../../components/Providers';
import { Layout } from '../../../components/layout/Layout';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <Providers>
      <Layout>
        <div className="min-h-screen bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                {language === 'en' ? 'About Smart Hotel' : 'سمارٹ ہوٹل کے بارے میں'}
              </h1>
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
      </Layout>
    </Providers>
  );
}
