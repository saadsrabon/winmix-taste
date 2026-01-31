import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const CulinaryHabitSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-background" id="culinary-habits">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            {language === 'en' ? (
              <>A Brief of Bangladesh <span className="text-primary">Culinary Habit</span></>
            ) : (
              <>বাংলাদেশের <span className="text-primary">রন্ধনপ্রণালীর</span> সংক্ষিপ্ত বিবরণ</>
            )}
          </h2>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bangladeshi cuisine has been shaped by the region's history and river-line geography. Bangladesh has a tropical monsoon Climate. The staple foods of Bangladesh are rice and fish. The majority of Bangladeshi people are ethnic Bengali with a minority of non-Bengalis, many used to cuisines from different traditions and regions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bangladeshi culinary habits were strongly influenced by the cuisine and culture of the area's history of Mughal Rulers. Dhaka was the Mughal capital of the Bengal Subah and a major trading centre in South Asia. Traders, immigrants and visitors brought culinary styles from around the world, which influenced the city's cuisine.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              After Dhaka became the capital of East Bengal, Persian, Turkish and Arabic-influenced dishes became popular. Black pepper and Chui-Jhal were used to add spiciness before chili was introduced from the Americas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CulinaryHabitSection;
