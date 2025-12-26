'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<string>('en');

  // Initialize language from localStorage on client side
  useEffect(() => {
    const stored = localStorage.getItem('language');
    if (stored) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const translations = {
    en: {
      // Navigation
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      login: "Login",
      logout: "Logout",
      orders: "Orders",
      profile: "Profile",

      // Common
      welcome: "Welcome",
      orderNow: "Order Now",
      addToCart: "Add to Cart",
      viewCart: "View Cart",
      total: "Total",
      subtotal: "Subtotal",
      tax: "Tax",
      serviceCharge: "Service Charge",
      proceedToPayment: "Proceed to Payment",
      confirmOrder: "Confirm Order",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      clear: "Clear",
      apply: "Apply",

      // Menu
      allItems: "All Items",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
      appetizers: "Appetizers",
      snacks: "Snacks",
      drinks: "Drinks",
      desserts: "Desserts",
      popular: "Popular",
      new: "New",
      bestseller: "Bestseller",
      spicy: "Spicy",
      available: "Available",
      notAvailable: "Not Available",

      // Cart & Checkout
      yourOrder: "Your Order",
      cartEmpty: "Your cart is empty",
      specialInstructions: "Special Instructions",
      tableNumber: "Table Number",
      enterTableNumber: "Enter Table Number",
      paymentMethod: "Payment Method",
      cash: "Cash",
      creditCard: "Credit Card",
      jazzCash: "JazzCash",
      easyPaisa: "EasyPaisa",

      // User
      customerLogin: "Customer Login",
      createAccount: "Create Account",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      password: "Password",
      rememberMe: "Remember Me",
      forgotPassword: "Forgot Password?",
      noAccount: "No account? Create one",
      haveAccount: "Already have an account? Login",

      // Order
      orderHistory: "Order History",
      orderDetails: "Order Details",
      orderStatus: "Order Status",
      pending: "Pending",
      preparing: "Preparing",
      ready: "Ready",
      delivered: "Delivered",
      completed: "Completed",
      orderId: "Order ID",
      orderDate: "Order Date",
      orderTotal: "Order Total",

      // Reviews
      reviews: "Reviews",
      writeReview: "Write Review",
      yourRating: "Your Rating",
      yourReview: "Your Review",
      submitReview: "Submit Review",
      noReviews: "No reviews yet",

      // Loyalty
      loyaltyPoints: "Loyalty Points",
      points: "points",
      earnPoints: "Earn points with every order",
      redeemPoints: "Redeem Points",

      // Admin
      dashboard: "Dashboard",
      menuManagement: "Menu Management",
      orderManagement: "Order Management",
      reports: "Reports",
      settings: "Settings",
      inventory: "Inventory",
      staff: "Staff",
      tables: "Tables",
      notifications: "Notifications",
      analytics: "Analytics"
    },
    ur: {
      // Navigation
      home: "ہوم",
      menu: "مینو",
      about: "ہمارے بارے میں",
      contact: "رابطہ",
      login: "لاگ ان",
      logout: "لاگ آؤٹ",
      orders: "آرڈرز",
      profile: "پروفائل",

      // Common
      welcome: "خوش آمدید",
      orderNow: "ابھی آرڈر کریں",
      addToCart: "کارٹ میں شامل کریں",
      viewCart: "کارٹ دیکھیں",
      total: "کل",
      subtotal: "ذیلی کل",
      tax: "ٹیکس",
      serviceCharge: "سروس چارج",
      proceedToPayment: "ادائیگی پر جائیں",
      confirmOrder: "آرڈر کی تصدیق کریں",
      search: "تلاش کریں",
      filter: "فلٹر",
      sort: "ترتیب",
      clear: "صاف کریں",
      apply: "لاگو کریں",

      // Menu
      allItems: "تمام آئٹمز",
      breakfast: "ناشتہ",
      lunch: "دوپہر کا کھانا",
      dinner: "رات کا کھانا",
      appetizers: "اشتہا انگیز",
      snacks: "سنیکس",
      drinks: "مشروبات",
      desserts: "میٹھے",
      popular: "مقبول",
      new: "نیا",
      bestseller: "سب سے زیادہ فروخت",
      spicy: "مسالہ دار",
      available: "دستیاب",
      notAvailable: "دستیاب نہیں",

      // Cart & Checkout
      yourOrder: "آپ کا آرڈر",
      cartEmpty: "آپ کا کارٹ خالی ہے",
      specialInstructions: "خصوصی ہدایات",
      tableNumber: "ٹیبل نمبر",
      enterTableNumber: "ٹیبل نمبر درج کریں",
      paymentMethod: "ادائیگی کا طریقہ",
      cash: "کیش",
      creditCard: "کریڈٹ کارڈ",
      jazzCash: "جاز کیش",
      easyPaisa: "ایزی پیسہ",

      // User
      customerLogin: "کسٹمر لاگ ان",
      createAccount: "اکاؤنٹ بنائیں",
      fullName: "پورا نام",
      email: "ای میل",
      phone: "فون",
      password: "پاس ورڈ",
      rememberMe: "مجھے یاد رکھیں",
      forgotPassword: "پاس ورڈ بھول گئے؟",
      noAccount: "اکاؤنٹ نہیں ہے؟ ایک بنائیں",
      haveAccount: "پہلے سے اکاؤنٹ ہے؟ لاگ ان کریں",

      // Order
      orderHistory: "آرڈر کی تاریخ",
      orderDetails: "آرڈر کی تفصیلات",
      orderStatus: "آرڈر کی حیثیت",
      pending: "زیر التواء",
      preparing: "تیاری",
      ready: "تیار",
      delivered: "پہنچا دیا گیا",
      completed: "مکمل",
      orderId: "آرڈر آئی ڈی",
      orderDate: "آرڈر کی تاریخ",
      orderTotal: "آرڈر کا کل",

      // Reviews
      reviews: "جائزے",
      writeReview: "جائزہ لکھیں",
      yourRating: "آپ کی درجہ بندی",
      yourReview: "آپ کا جائزہ",
      submitReview: "جائزہ جمع کروائیں",
      noReviews: "ابھی تک کوئی جائزہ نہیں",

      // Loyalty
      loyaltyPoints: "وفاداری پوائنٹس",
      points: "پوائنٹس",
      earnPoints: "ہر آرڈر کے ساتھ پوائنٹس حاصل کریں",
      redeemPoints: "پوائنٹس استعمال کریں",

      // Admin
      dashboard: "ڈیش بورڈ",
      menuManagement: "مینو مینجمنٹ",
      orderManagement: "آرڈر مینجمنٹ",
      reports: "رپورٹس",
      settings: "ترتیبات",
      inventory: "انوینٹری",
      staff: "اسٹاف",
      tables: "ٹیبلز",
      notifications: "نوٹیفیکیشنز",
      analytics: "تجزیات"
    }
  };

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || translations.en[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
