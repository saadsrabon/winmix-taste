import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LotusIcon, GoodnessIcon, TrustIcon, DelicacyIcon } from '@/components/icons/CustomIcons';

const features = [
  {
    icon: GoodnessIcon,
    titleEn: 'Premium Quality',
    titleBn: 'প্রিমিয়াম মান',
    descEn: 'All products undergo strict quality checks to ensure purity and freshness',
    descBn: 'সমস্ত পণ্য বিশুদ্ধতা এবং সতেজতা নিশ্চিত করতে কঠোর মান পরীক্ষার মধ্য দিয়ে যায়',
  },
  // {
  //   icon: LotusIcon,
  //   titleEn: 'Natural Ingredients',
  //   titleBn: 'প্রাকৃতিক উপাদান',
  //   descEn: 'Sourced from trusted suppliers with no artificial additives',
  //   descBn: 'কোনো কৃত্রিম সংযোজন ছাড়াই বিশ্বস্ত সরবরাহকারীদের কাছ থেকে সংগ্রহ করা',
  // },
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

const WhyChooseUs = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            {language === 'en' ? 'Why Choose Winmix?' : 'উইনমিক্স কেন বেছে নেবেন?'}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {language === 'en' 
              ? 'We are committed to providing the best quality products and services'
              : 'আমরা সেরা মানের পণ্য এবং সেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-muted/30 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <feature.icon size={28} className="text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                {language === 'en' ? feature.titleEn : feature.titleBn}
              </h4>
              <p className="text-muted-foreground text-sm">
                {language === 'en' ? feature.descEn : feature.descBn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
