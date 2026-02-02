import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';

// Import featured images
import biriyaniImg from '@/assets/featured/Biriyani.png';
import bakingImg from '@/assets/featured/baking.png';
import foodessenceImg from '@/assets/featured/foodessence.png';
import masalaImg from '@/assets/featured/masala.png';
import seasoningImg from '@/assets/featured/seasoning.png';
import spicesImg from '@/assets/featured/spices.png';
import { useNavigate } from 'react-router-dom';

// Map categories to featured images
const categoryImages: { [key: string]: string } = {
  'baking': bakingImg,
  'condiments': seasoningImg,
  'spices': spicesImg,
  'masala': masalaImg,
  'essences': foodessenceImg,
};

const CategoryBrowse = () => {
  const { language } = useLanguage();
  const navigate = useNavigate()
  return (
    <section className="py-16 bg-muted/30" id="categories">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            {language === 'en' ? 'Browse Our Categories' : 'আমাদের ক্যাটাগরি দেখুন'}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {language === 'en' 
              ? 'Explore our diverse range of premium quality products for your daily needs.'
              : 'আপনার রন্ধনসম্পর্কীয় প্রয়োজনের জন্য আমাদের প্রিমিয়াম মানের উপাদান অন্বেষণ করুন'}
          </p>
        </div>

        {/* Category Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.filter(category => category.id !== 'specialty').map((category, index) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              onClick={()=>navigate(`/products?category=${category.id}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              {/* Category Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center mb-4 overflow-hidden group-hover:border-primary group-hover:shadow-warm transition-all duration-300">
                <img 
                  src={categoryImages[category.id] || category.icon} 
                  alt={language === 'en' ? category.nameEn : category.nameBn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Category Name */}
              <span className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors text-center">
                {language === 'en' ? category.nameEn : category.nameBn}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBrowse;
