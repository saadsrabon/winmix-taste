import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.story': 'Our Story',
    'nav.quality': 'Quality',
    'nav.chefs': 'For Chefs',
    'nav.partner': 'Partner With Us',
    'nav.shop': 'Shop Now',
    
    // Hero
    'hero.badge': 'Proudly Bangladeshi Since 2025',
    'hero.title.1': 'Where',
    'hero.title.2': 'Tradition',
    'hero.title.3': 'Meets',
    'hero.title.4': 'Excellence',
    'hero.subtitle': 'Born from Bangladesh\'s rich culinary heritage — rivers, spices, and centuries of flavor. Winmix brings you the purest ingredients to make every meal a celebration.',
    'hero.cta.products': 'Explore Our Products',
    'hero.cta.story': 'Our Story',
    'hero.stat.pure': 'Pure Ingredients',
    'hero.stat.partners': 'Retail Partners',
    'hero.stat.love': 'Made with Love',
    
    // Story
    'story.label': 'Our Heritage',
    'story.title.1': 'A Legacy of',
    'story.title.2': 'Flavor',
    'story.quote': '"Food is the heart of every home."',
    'story.quote.author': '— Winmix Philosophy',
    'story.p1': 'Bangladesh\'s culinary story is written in its rivers, rice fields, and the aromatic spices that have traveled through centuries of trade and tradition. From the Mughal emperors to the humble household, flavor has always been our birthright.',
    'story.p2': 'Winmix Essential Limited was born in July 2025 with a singular mission: to honor this heritage by bringing the purest, most authentic cooking ingredients to every Bangladeshi kitchen.',
    'story.p3': 'We believe that great food begins with great ingredients — carefully sourced, honestly prepared, and lovingly delivered.',
    'story.value.purity': 'Purity',
    'story.value.purity.desc': 'Uncompromised quality',
    'story.value.trust': 'Trust',
    'story.value.trust.desc': 'Honest & transparent',
    'story.value.care': 'Care',
    'story.value.care.desc': 'Made with love',
    
    // Quality
    'quality.label': 'Our Commitment',
    'quality.title.1': 'Quality You Can',
    'quality.title.2': 'Taste',
    'quality.subtitle': 'Every ingredient that carries the Winmix name goes through a journey of meticulous selection, testing, and preparation. Because we understand that in your kitchen, quality isn\'t optional — it\'s everything.',
    'quality.natural.title': 'Naturally Sourced',
    'quality.natural.desc': 'Direct from trusted farms across Bangladesh, ensuring freshness from field to kitchen.',
    'quality.assured.title': 'Quality Assured',
    'quality.assured.desc': 'Rigorous testing and quality control at every stage of production.',
    'quality.authentic.title': 'Authentic Taste',
    'quality.authentic.desc': 'Traditional recipes and methods preserved to deliver genuine Bangladeshi flavors.',
    'quality.purity': 'Purity Guaranteed',
    'quality.cert.iso': 'ISO Certified',
    'quality.cert.bsti': 'BSTI Approved',
    'quality.cert.halal': 'Halal Certified',
    'quality.cert.preservatives': 'No Preservatives',
    
    // Chefs
    'chefs.label': 'For Every Kitchen',
    'chefs.title.1': 'Your Trusted Cooking',
    'chefs.title.2': 'Partner',
    'chefs.subtitle': 'Whether you\'re creating everyday meals for your family or crafting culinary masterpieces in a professional kitchen, Winmix delivers the quality you need.',
    'chefs.home.badge': 'For Home Cooks',
    'chefs.home.title': 'Everyday Excellence',
    'chefs.home.desc': 'Transform your daily cooking into moments of joy. Our ingredients bring the same authentic flavors your grandmother knew — pure, honest, and full of love. Make every family meal memorable.',
    'chefs.home.point1': 'Easy-to-use, consistent quality',
    'chefs.home.point2': 'Family-safe, pure ingredients',
    'chefs.home.point3': 'Available at your local store',
    'chefs.home.cta': 'Find a Store Near You',
    'chefs.pro.badge': 'For Professionals',
    'chefs.pro.title': 'Culinary Excellence',
    'chefs.pro.desc': 'When your reputation depends on consistency and quality, trust Winmix. Our premium-grade ingredients meet the exacting standards of professional kitchens across Bangladesh.',
    'chefs.pro.point1': 'Bulk ordering & reliable supply',
    'chefs.pro.point2': 'Restaurant-grade consistency',
    'chefs.pro.point3': 'Dedicated business support',
    'chefs.pro.cta': 'Become a Partner Chef',
    
    // Mission
    'mission.title': 'Our Mission',
    'mission.text': 'To become the most trusted cooking partner for chefs and households across Bangladesh — one meal at a time, one family at a time.',
    'mission.vision.title': 'Our Vision',
    'mission.vision.text': '"Bringing happiness and goodness into everyday life through food."',
    'mission.value1.title': 'Goodness',
    'mission.value1.desc': 'Every product embodies our commitment to wholesome, nutritious ingredients.',
    'mission.value2.title': 'Delicacy',
    'mission.value2.desc': 'Crafted with care to preserve the authentic flavors of Bangladesh.',
    'mission.value3.title': 'Trust',
    'mission.value3.desc': 'Building lasting relationships through transparency and consistency.',
    
    // Partner
    'partner.label': 'Grow With Us',
    'partner.title.1': 'Partner With',
    'partner.title.2': 'Winmix',
    'partner.subtitle': 'Join Bangladesh\'s fastest-growing food brands. Together, we can bring quality and trust to every kitchen in the nation.',
    'partner.retail.title': 'Retail Partners',
    'partner.retail.desc': 'Bring Winmix products to your store shelves and delight your customers with premium quality.',
    'partner.retail.cta': 'Become a Retailer',
    'partner.distributor.title': 'Distributors',
    'partner.distributor.desc': 'Join our distribution network and grow your business with Bangladesh\'s most trusted food brand.',
    'partner.distributor.cta': 'Partner as Distributor',
    'partner.business.title': 'Business Inquiries',
    'partner.business.desc': 'Custom orders, bulk purchases, or unique business proposals — we\'re ready to collaborate.',
    'partner.business.cta': 'Contact Our Team',
    'partner.cta.question': 'Ready to start a conversation?',
    'partner.cta.button': 'Contact Our Business Team',
    
    // Footer
    'footer.tagline': 'Bringing goodness, delicacy, and trust into the everyday cooking habits of Bangladeshi people.',
    'footer.links.title': 'Quick Links',
    'footer.links.story': 'Our Story',
    'footer.links.quality': 'Quality Commitment',
    'footer.links.chefs': 'For Chefs',
    'footer.links.partner': 'Partner With Us',
    'footer.links.careers': 'Careers',
    'footer.products.title': 'Products',
    'footer.products.spices': 'Spices & Masala',
    'footer.products.oils': 'Cooking Oils',
    'footer.products.rice': 'Rice & Grains',
    'footer.products.mixes': 'Ready Mixes',
    'footer.products.all': 'All Products',
    'footer.contact.title': 'Contact Us',
    'footer.copyright': '© 2025 Winmix Essential Limited. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  bn: {
    // Header
    'nav.story': 'আমাদের গল্প',
    'nav.quality': 'গুণমান',
    'nav.chefs': 'শেফদের জন্য',
    'nav.partner': 'আমাদের সাথে যোগ দিন',
    'nav.shop': 'এখনই কিনুন',
    
    // Hero
    'hero.badge': 'গর্বের সাথে বাংলাদেশি ২০২৫ থেকে',
    'hero.title.1': 'যেখানে',
    'hero.title.2': 'ঐতিহ্য',
    'hero.title.3': 'মিলিত হয়',
    'hero.title.4': 'শ্রেষ্ঠত্বের সাথে',
    'hero.subtitle': 'বাংলাদেশের সমৃদ্ধ রন্ধন ঐতিহ্য থেকে জন্ম — নদী, মশলা এবং শতাব্দীর স্বাদ। উইনমিক্স আপনার প্রতিটি খাবারকে উৎসবে পরিণত করতে বিশুদ্ধতম উপকরণ নিয়ে এসেছে।',
    'hero.cta.products': 'আমাদের পণ্য দেখুন',
    'hero.cta.story': 'আমাদের গল্প',
    'hero.stat.pure': 'বিশুদ্ধ উপকরণ',
    'hero.stat.partners': 'খুচরা অংশীদার',
    'hero.stat.love': 'ভালোবাসায় তৈরি',
    
    // Story
    'story.label': 'আমাদের ঐতিহ্য',
    'story.title.1': 'স্বাদের এক',
    'story.title.2': 'উত্তরাধিকার',
    'story.quote': '"খাবার হলো প্রতিটি ঘরের হৃদয়।"',
    'story.quote.author': '— উইনমিক্স দর্শন',
    'story.p1': 'বাংলাদেশের রন্ধন গল্প লেখা হয়েছে তার নদী, ধানক্ষেত এবং শতাব্দীর বাণিজ্য ও ঐতিহ্যের সুগন্ধি মশলায়। মুঘল সম্রাট থেকে সাধারণ গৃহস্থ পর্যন্ত, স্বাদ সবসময় আমাদের জন্মগত অধিকার।',
    'story.p2': 'উইনমিক্স এসেনশিয়াল লিমিটেড জুলাই ২০২৫-এ একটি মাত্র লক্ষ্য নিয়ে জন্মগ্রহণ করে: প্রতিটি বাংলাদেশি রান্নাঘরে বিশুদ্ধতম, সবচেয়ে খাঁটি রান্নার উপকরণ পৌঁছে দিয়ে এই ঐতিহ্যকে সম্মান জানানো।',
    'story.p3': 'আমরা বিশ্বাস করি যে দুর্দান্ত খাবার শুরু হয় দুর্দান্ত উপকরণ দিয়ে — যত্নের সাথে সংগৃহীত, সততার সাথে প্রস্তুত এবং ভালোবাসার সাথে সরবরাহ করা।',
    'story.value.purity': 'বিশুদ্ধতা',
    'story.value.purity.desc': 'অবিচল গুণমান',
    'story.value.trust': 'বিশ্বাস',
    'story.value.trust.desc': 'সৎ ও স্বচ্ছ',
    'story.value.care': 'যত্ন',
    'story.value.care.desc': 'ভালোবাসায় তৈরি',
    
    // Quality
    'quality.label': 'আমাদের প্রতিশ্রুতি',
    'quality.title.1': 'গুণমান যা আপনি',
    'quality.title.2': 'অনুভব করবেন',
    'quality.subtitle': 'উইনমিক্স নাম বহনকারী প্রতিটি উপকরণ সতর্ক নির্বাচন, পরীক্ষা এবং প্রস্তুতির যাত্রার মধ্য দিয়ে যায়। কারণ আমরা বুঝি যে আপনার রান্নাঘরে গুণমান ঐচ্ছিক নয় — এটাই সবকিছু।',
    'quality.natural.title': 'প্রাকৃতিক উৎস',
    'quality.natural.desc': 'বাংলাদেশ জুড়ে বিশ্বস্ত খামার থেকে সরাসরি, মাঠ থেকে রান্নাঘর পর্যন্ত সতেজতা নিশ্চিত।',
    'quality.assured.title': 'নিশ্চিত গুণমান',
    'quality.assured.desc': 'উৎপাদনের প্রতিটি পর্যায়ে কঠোর পরীক্ষা এবং মান নিয়ন্ত্রণ।',
    'quality.authentic.title': 'খাঁটি স্বাদ',
    'quality.authentic.desc': 'প্রকৃত বাংলাদেশি স্বাদ প্রদানের জন্য ঐতিহ্যবাহী রেসিপি এবং পদ্ধতি সংরক্ষিত।',
    'quality.purity': 'বিশুদ্ধতা নিশ্চিত',
    'quality.cert.iso': 'ISO সার্টিফায়েড',
    'quality.cert.bsti': 'BSTI অনুমোদিত',
    'quality.cert.halal': 'হালাল সার্টিফায়েড',
    'quality.cert.preservatives': 'প্রিজার্ভেটিভ মুক্ত',
    
    // Chefs
    'chefs.label': 'প্রতিটি রান্নাঘরের জন্য',
    'chefs.title.1': 'আপনার বিশ্বস্ত রান্নার',
    'chefs.title.2': 'সঙ্গী',
    'chefs.subtitle': 'আপনি পরিবারের জন্য দৈনন্দিন খাবার তৈরি করুন বা পেশাদার রান্নাঘরে রন্ধন শিল্পকর্ম তৈরি করুন, উইনমিক্স আপনার প্রয়োজনীয় গুণমান সরবরাহ করে।',
    'chefs.home.badge': 'গৃহিণীদের জন্য',
    'chefs.home.title': 'প্রতিদিনের শ্রেষ্ঠত্ব',
    'chefs.home.desc': 'আপনার দৈনন্দিন রান্নাকে আনন্দের মুহূর্তে পরিণত করুন। আমাদের উপকরণ আপনার দাদির জানা সেই একই খাঁটি স্বাদ নিয়ে আসে — বিশুদ্ধ, সৎ এবং ভালোবাসায় পূর্ণ।',
    'chefs.home.point1': 'সহজে ব্যবহারযোগ্য, সামঞ্জস্যপূর্ণ গুণমান',
    'chefs.home.point2': 'পরিবার-নিরাপদ, বিশুদ্ধ উপকরণ',
    'chefs.home.point3': 'আপনার স্থানীয় দোকানে পাওয়া যায়',
    'chefs.home.cta': 'কাছের দোকান খুঁজুন',
    'chefs.pro.badge': 'পেশাদারদের জন্য',
    'chefs.pro.title': 'রন্ধন শ্রেষ্ঠত্ব',
    'chefs.pro.desc': 'যখন আপনার সুনাম সামঞ্জস্য এবং গুণমানের উপর নির্ভর করে, উইনমিক্সকে বিশ্বাস করুন। আমাদের প্রিমিয়াম-গ্রেড উপকরণ বাংলাদেশ জুড়ে পেশাদার রান্নাঘরের কঠোর মান পূরণ করে।',
    'chefs.pro.point1': 'বাল্ক অর্ডার ও নির্ভরযোগ্য সরবরাহ',
    'chefs.pro.point2': 'রেস্তোরাঁ-গ্রেড সামঞ্জস্য',
    'chefs.pro.point3': 'নিবেদিত ব্যবসায়িক সহায়তা',
    'chefs.pro.cta': 'পার্টনার শেফ হন',
    
    // Mission
    'mission.title': 'আমাদের মিশন',
    'mission.text': 'বাংলাদেশ জুড়ে শেফ এবং পরিবারের জন্য সবচেয়ে বিশ্বস্ত রান্নার সঙ্গী হয়ে ওঠা — একটি একটি খাবার, একটি একটি পরিবার।',
    'mission.vision.title': 'আমাদের ভিশন',
    'mission.vision.text': '"খাবারের মাধ্যমে দৈনন্দিন জীবনে সুখ ও মঙ্গল আনা।"',
    'mission.value1.title': 'মঙ্গল',
    'mission.value1.desc': 'প্রতিটি পণ্যে স্বাস্থ্যকর, পুষ্টিকর উপকরণের প্রতি আমাদের প্রতিশ্রুতি।',
    'mission.value2.title': 'সুস্বাদু',
    'mission.value2.desc': 'বাংলাদেশের খাঁটি স্বাদ সংরক্ষণে যত্নের সাথে তৈরি।',
    'mission.value3.title': 'বিশ্বাস',
    'mission.value3.desc': 'স্বচ্ছতা এবং সামঞ্জস্যের মাধ্যমে দীর্ঘস্থায়ী সম্পর্ক তৈরি।',
    
    // Partner
    'partner.label': 'আমাদের সাথে বেড়ে উঠুন',
    'partner.title.1': 'উইনমিক্সের সাথে',
    'partner.title.2': 'অংশীদার হন',
    'partner.subtitle': 'বাংলাদেশের দ্রুত বর্ধনশীল খাদ্য ব্র্যান্ডে যোগ দিন। একসাথে, আমরা দেশের প্রতিটি রান্নাঘরে গুণমান এবং বিশ্বাস আনতে পারি।',
    'partner.retail.title': 'খুচরা অংশীদার',
    'partner.retail.desc': 'আপনার দোকানের তাকে উইনমিক্স পণ্য আনুন এবং প্রিমিয়াম গুণমান দিয়ে আপনার গ্রাহকদের সন্তুষ্ট করুন।',
    'partner.retail.cta': 'খুচরা বিক্রেতা হন',
    'partner.distributor.title': 'পরিবেশক',
    'partner.distributor.desc': 'আমাদের বিতরণ নেটওয়ার্কে যোগ দিন এবং বাংলাদেশের সবচেয়ে বিশ্বস্ত খাদ্য ব্র্যান্ডের সাথে আপনার ব্যবসা বাড়ান।',
    'partner.distributor.cta': 'পরিবেশক হন',
    'partner.business.title': 'ব্যবসায়িক অনুসন্ধান',
    'partner.business.desc': 'কাস্টম অর্ডার, বাল্ক ক্রয়, বা অনন্য ব্যবসায়িক প্রস্তাব — আমরা সহযোগিতা করতে প্রস্তুত।',
    'partner.business.cta': 'আমাদের টিমে যোগাযোগ করুন',
    'partner.cta.question': 'কথা বলতে প্রস্তুত?',
    'partner.cta.button': 'আমাদের ব্যবসায়িক টিমে যোগাযোগ করুন',
    
    // Footer
    'footer.tagline': 'বাংলাদেশি মানুষের দৈনন্দিন রান্নার অভ্যাসে মঙ্গল, সুস্বাদু এবং বিশ্বাস আনা।',
    'footer.links.title': 'দ্রুত লিঙ্ক',
    'footer.links.story': 'আমাদের গল্প',
    'footer.links.quality': 'গুণমান প্রতিশ্রুতি',
    'footer.links.chefs': 'শেফদের জন্য',
    'footer.links.partner': 'আমাদের সাথে যোগ দিন',
    'footer.links.careers': 'ক্যারিয়ার',
    'footer.products.title': 'পণ্যসমূহ',
    'footer.products.spices': 'মশলা',
    'footer.products.oils': 'রান্নার তেল',
    'footer.products.rice': 'চাল ও শস্য',
    'footer.products.mixes': 'রেডি মিক্স',
    'footer.products.all': 'সব পণ্য',
    'footer.contact.title': 'যোগাযোগ',
    'footer.copyright': '© ২০২৫ উইনমিক্স এসেনশিয়াল লিমিটেড। সর্বস্বত্ব সংরক্ষিত।',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'সেবার শর্তাবলী',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
