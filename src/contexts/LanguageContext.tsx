
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    services: 'Services',
    clients: 'Clients',
    partners: 'Partners',
    products: 'Products',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Professional Painting Solutions in Dubai',
    heroSubtitle: 'Transform your space with premium painting services from Paint Tech Contracting WLL',
    getQuote: 'Get Free Quote',
    viewPortfolio: 'View Portfolio',
    
    // Services
    interiorPainting: 'Interior Painting',
    exteriorPainting: 'Exterior Painting',
    decorativePainting: 'Decorative Painting',
    industrialPainting: 'Industrial Painting',
    waterproofing: 'Waterproofing',
    woodCoating: 'Wood Coating',
    
    // Company Info
    companyName: 'Paint Tech Contracting WLL',
    location: 'Dubai, UAE',
    phone: '+971 XX XXX XXXX',
    email: 'info@painttechdubai.com',
    
    // Call to Actions
    contactUs: 'Contact Us',
    learnMore: 'Learn More',
    viewAll: 'View All',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'حولنا',
    portfolio: 'أعمالنا',
    services: 'خدماتنا',
    clients: 'عملاؤنا',
    partners: 'شركاؤنا',
    products: 'منتجاتنا',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'حلول الطلاء المهنية في دبي',
    heroSubtitle: 'حول مساحتك مع خدمات الطلاء المتميزة من شركة بينت تك للمقاولات ذ.م.م',
    getQuote: 'احصل على عرض سعر مجاني',
    viewPortfolio: 'عرض الأعمال',
    
    // Services
    interiorPainting: 'طلاء داخلي',
    exteriorPainting: 'طلاء خارجي',
    decorativePainting: 'طلاء زخرفي',
    industrialPainting: 'طلاء صناعي',
    waterproofing: 'عزل مائي',
    woodCoating: 'طلاء الخشب',
    
    // Company Info
    companyName: 'شركة بينت تك للمقاولات ذ.م.م',
    location: 'دبي، الإمارات العربية المتحدة',
    phone: '+971 XX XXX XXXX',
    email: 'info@painttechdubai.com',
    
    // Call to Actions
    contactUs: 'اتصل بنا',
    learnMore: 'اعرف المزيد',
    viewAll: 'عرض الكل',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  // Apply RTL direction for Arabic
  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
