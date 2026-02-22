import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LotusIcon, GoodnessIcon, TrustIcon, DelicacyIcon } from '@/components/icons/CustomIcons';
import { Link } from 'react-router-dom';
import professionalChef from '@/assets/professional-chef.jpg';
import qualitySpices from '@/assets/quality-spices.jpeg';
import TrustSection from '@/components/TrustSection';

const features = [
  {
    icon: GoodnessIcon,
    titleEn: 'Premium Quality',
    titleBn: 'প্রিমিয়াম মান',
    descEn: 'All products undergo strict quality checks to ensure purity and freshness',
    descBn: 'সমস্ত পণ্য বিশুদ্ধতা এবং সতেজতা নিশ্চিত করতে কঠোর মান পরীক্ষার মধ্য দিয়ে যায়',
  },
  {
    icon: LotusIcon,
    titleEn: 'Natural Ingredients',
    titleBn: 'প্রাকৃতিক উপাদান',
    descEn: 'Sourced from trusted suppliers with no artificial additives',
    descBn: 'কোনো কৃত্রিম সংযোজন ছাড়াই বিশ্বস্ত সরবরাহকারীদের কাছ থেকে সংগ্রহ করা',
  },
  {
    icon: TrustIcon,
    titleEn: 'Customer Focus',
    titleBn: 'গ্রাহক কেন্দ্রিক',
    descEn: 'Your satisfaction is our priority with excellent customer service',
    descBn: 'চমৎকার গ্রাহক সেবার মাধ্যমে আপনার সন্তুষ্টি আমাদের অগ্রাধিকার',
  },
  {
    icon: DelicacyIcon,
    titleEn: 'Best Prices',
    titleBn: 'সেরা দাম',
    descEn: 'Competitive pricing without compromising on quality',
    descBn: 'মান নিয়ে আপস না করে প্রতিযোগিতামূলক মূল্য',
  },
];

const AboutPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="py-36">
        <TrustSection />
      </div>
      
      <main className="pt-24">
        {/* Page Header */}
        <div className="container-wide text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {language === 'en' ? 'About Our Mission & Vison' : 'উইনমিক্স সম্পর্কে'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {language === 'en' 
              ? 'We are committed to providing the best quality products and services'
              : 'আমরা সেরা মানের পণ্য এবং সেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ'}
          </motion.p>
        </div>

        {/* Mission and Vision with Images */}
        <div className="container-wide mb-16 space-y-12">
          {/* Mission - Left Text, Right Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 lg:order-2">
              <h3 className="font-display text-3xl font-bold text-primary mb-6">
                {language === 'en' ? 'Mission' : 'অভিযান'}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === 'en' 
                  ? 'Delivering superior culinary essentials and premium chocolates through sustainable sourcing and innovative processing.'
                  : 'টেকসই উৎস এবং উদ্ভাবনী প্রক্রিয়াকরণের মাধ্যমে উন্নত রন্ধনসম্পর্কীয় প্রয়োজনীয় জিনিস এবং প্রিমিয়াম চকোলেট সরবরাহ করা।'}
              </p>
            </div>
            <div className="order-1 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={professionalChef} 
                  alt="Professional Chef"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Vision - Left Text, Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="font-display text-3xl font-bold text-primary mb-6">
                {language === 'en' ? 'Vision' : 'দৃষ্টি'}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === 'en' 
                  ? 'Bringing Happiness and Goodness in Life.'
                  : 'জীবনে সুখ এবং ভালোবাসা নিয়ে আসা।'}
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={qualitySpices} 
                  alt="Quality Spices"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
