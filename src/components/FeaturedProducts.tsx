import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';

// Import feat images
import ChocoChocoImg from '@/assets/feat/choco choco.png';
import bakingpowderImg from '@/assets/feat/bakingpowder.png';
import barbqImg from '@/assets/feat/barbq.png';
import biriyaniImg from '@/assets/feat/biriyani.png';
import chocolateImg from '@/assets/feat/chocolate.png';
import cornflowerImg from '@/assets/feat/cornflower.png';
import custardImg from '@/assets/feat/custard.png';
import sauceImg from '@/assets/feat/sauce.png';
import tastysaltImg from '@/assets/feat/tastysalt.png';
import goldteaImage from '@/assets/feat/gold tea.png';
import { Link, useNavigate } from 'react-router-dom';

// Create featured products list based on image names from /feat folder
const featuredProducts = [
  {
    id: 'choco-choco',
    nameEn: 'Choco Choco',
    nameBn: 'চকো চকো',
    image: ChocoChocoImg,
    link: '/products?brand=Winmix&category=chocolate',
  },
  {
    id: 'baking-powder',
    nameEn: 'Baking Powder',
    nameBn: 'বেকিং পাউডার',
    image: bakingpowderImg,
    link: '/products?brand=Cookwell&category=baking',
  },
  {
    id: 'goldtea',
    nameEn: 'Gold Tea',
    nameBn: 'রোড টিউ',
    image: goldteaImage,
    link: '/products?brand=Winmix&category=snacks-beverages',
  },
  {
    id: 'biriyani',
    nameEn: 'Biriyani Masala',
    nameBn: 'বিরিয়ানি মসলা',
    image: biriyaniImg,
    link: '/products?brand=Cookwell&category=ready-mix-masala',
  },
  {
    id: 'chocolate',
    nameEn: 'Chocolate Essence',
    nameBn: 'চকলেট এসেন্স',
    image: chocolateImg,
    link: '/products?brand=Cookwell&category=food-essence',
  },
  {
    id: 'cornflower',
    nameEn: 'Corn Flour',
    nameBn: 'কর্ন ফ্লাওয়ার',
    image: cornflowerImg,
    link: '/products?brand=Cookwell&category=baking',
  },
  {
    id: 'sauce',
    nameEn: 'Special Sauce',
    nameBn: 'বিশেষ সস',
    image: sauceImg,
    link: '/products?brand=Cookwell&category=seasoning',
  },
  {
    id: 'tastysalt',
    nameEn: 'Tasty Salt',
    nameBn: 'টেস্টি সল্ট',
    image: tastysaltImg,
    link: '/products?brand=Cookwell&category=seasoning',
  },
  {
    id: 'barbq',
    nameEn: 'BBQ Sauce',
    nameBn: 'বিবিকিউ সস',
    image: barbqImg,
    link: '/products?brand=Cookwell&category=ready-mix-masala',
  },
  {
    id: 'custard',
    nameEn: 'Custard Powder',
    nameBn: 'কাস্টার্ড পাউডার',
    image: custardImg,
    link: '/products?brand=Cookwell&category=baking',
  },
];


const FeaturedProducts = () => {
  const { language } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-background" id="featured">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {language === 'en' ? '— Our Products' : '— আমাদের পণ্য'}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              {language === 'en' ? 'Featured Products' : 'বৈশিষ্ট্যযুক্ত পণ্য'}
            </h2>
          </div>
          <Link
            to="/products" 
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {language === 'en' ? 'View all products' : 'সব পণ্য দেখুন'}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Scrolling Carousel */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 pb-4">
            {/* Clone products for infinite loop */}
            {[...featuredProducts, ...featuredProducts].map((product, index) => {
              return (
                <motion.div
                  key={`${product.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % featuredProducts.length) * 0.05 }}
                  className="group flex-shrink-0 w-1/4"
                >
                  <div onClick={()=>navigate(product.link)} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    {/* Product Image */}
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={language === 'en' ? product.nameEn : product.nameBn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                          {language === 'en' ? 'Featured' : 'বৈশিষ্ট্যযুক্ত'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="md:hidden mt-8 text-center">
          <Link
            to="/products" 
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            {language === 'en' ? 'View all products' : 'সব পণ্য দেখুন'}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
