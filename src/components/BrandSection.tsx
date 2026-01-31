import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import heroKitchenBg from '@/assets/hero-kitchen.jpg';

const BrandSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative pt-4 md:pt-4 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 ">
        <div className="max-w-8xl mx-auto w-full space-y-12">
          {/* Top Section - Logo and Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-6 pt-48"
          >
            {/* Logo */}
            <img 
              src={logo} 
              alt="Winmix Logo" 
              className="w-32 h-auto md:w-96 lg:w-56 object-contain mx-auto"
            />
            
            {/* Text */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {language === 'en' ? (
                  <>Where Every <span className="text-primary">Mix Wins</span></>
                ) : (
                  <>যেখানে প্রতিটি <span className="text-primary">মিক্স জেতে</span></>
                )}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {language === 'en' 
                  ? 'Premium quality ingredients that transform ordinary cooking into extraordinary culinary experiences. Trust Winmix for excellence in every meal.'
                  : 'প্রিমিয়াম মানের উপাদান যা সাধারণ রান্নাকে অসাধারণ কালিনারি অভিজ্ঞতায় পরিণত করে। প্রতিটি খাবারের জন্য উইনমিক্সের উৎকর্ষের উপর আস্থা রাখুন।'
                }
              </p>
            </div>
          </motion.div>

          {/* Bottom Section - Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl max-w-6xl mx-auto"
          >
            <img 
              src={heroKitchenBg} 
              alt="Winmix Brand Background" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
