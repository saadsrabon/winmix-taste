import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { heroSlides } from '@/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import a hero background image
import heroKitchenBg from '@/assets/hero-kitchen.jpg';

const HeroCarousel = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative pt-32">
      {/* Hero Slider */}
      <div className="relative h-[700px] md:h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroKitchenBg} 
            alt="Kitchen background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Category Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${slide.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/90 mb-6"
                >
                  <span className="text-sm font-medium text-primary-foreground">
                    {language === 'en' ? 'Winmix Essential Products' : 'উইনমিক্স এসেনশিয়াল প্রোডাক্টস'}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Main Headline */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${slide.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight"
                >
                  {language === 'en' ? slide.taglineEn : slide.taglineBn}
                </motion.h1>
              </AnimatePresence>

              {/* Subtitle */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtitle-${slide.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-background/80 text-base md:text-lg max-w-md mb-8 leading-relaxed"
                >
                  {language === 'en' ? slide.subtitleEn : slide.subtitleBn}
                </motion.p>
              </AnimatePresence>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                >
                  {language === 'en' ? 'Get Distributor' : 'ডিস্ট্রিবিউটর হন'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-background/50 text-background hover:bg-background/10 px-8"
                >
                  {language === 'en' ? 'Explore Categories' : 'ক্যাটাগরি দেখুন'}
                </Button>
              </motion.div>
            </div>

            {/* Right - Product Preview (Hidden on mobile for cleaner look) */}
            <div className="hidden lg:flex justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`product-${slide.id}`}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {slide.image && (
                    <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-background/20">
                      <img 
                        src={slide.image} 
                        alt={language === 'en' ? slide.category.nameEn : slide.category.nameBn}
                        className="w-full h-full object-fit"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-background/40 hover:bg-background/60'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-background/10 backdrop-blur-sm text-background hover:bg-background/20 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-background/10 backdrop-blur-sm text-background hover:bg-background/20 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="bg-secondary ">
        <div className="container-wide py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4">
            <TrustBadge icon="🏆" textEn="Best Quality since 2025" textBn="২০২৫ থেকে সেরা মান" />
            <TrustBadge icon="✓" textEn="100% Quality Guarantee" textBn="১০০% মান গ্যারান্টি" />
            <TrustBadge icon="🌿" textEn="Pure Ingredients" textBn="বিশুদ্ধ উপাদান" />
            <TrustBadge icon="🚚" textEn="Fast Delivery" textBn="দ্রুত ডেলিভারি" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBadge = ({ icon, textEn, textBn }: { icon: string; textEn: string; textBn: string }) => {
  const { language } = useLanguage();
  return (
    <div className="flex items-center gap-4 text-white">
      {/* <span className="text-lg">{icon}</span> */}
      <span className="text-sm font-medium">{language === 'en' ? textEn : textBn}</span>
    </div>
  );
};

export default HeroCarousel;
