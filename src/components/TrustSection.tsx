import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import qualitySpicesImg from '@/assets/quality-spices.jpg';
import logo2 from '@/assets/logo2.png';
const stats = [
  { valueEn: '15+', valueBn: '১৫+', labelEn: 'Years Experience', labelBn: 'বছরের অভিজ্ঞতা' },
  { valueEn: '500+', valueBn: '৫০০+', labelEn: 'Products', labelBn: 'পণ্য' },
  { valueEn: '10K+', valueBn: '১০হা+', labelEn: 'Happy Customers', labelBn: 'সন্তুষ্ট গ্রাহক' },
  { valueEn: '50+', valueBn: '৫০+', labelEn: 'Distributors', labelBn: 'পরিবেশক' },
];

const TrustSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {language === 'en' ? '— About Us' : '— আমাদের সম্পর্কে'}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              {language === 'en' ? (
                <>Your Trusted Partner in <span className="text-primary">Quality Food Products</span></>
              ) : (
                <>মানসম্মত খাদ্য পণ্যে আপনার <span className="text-primary">বিশ্বস্ত অংশীদার</span></>
              )}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {language === 'en' 
                ? 'Winmix Essential Limited has been serving Bangladesh with premium quality food ingredients since 2025. We are committed to delivering pure, authentic products that help you create delicious meals for your family.'
                : 'উইনমিক্স এসেনশিয়াল লিমিটেড ২০২৫ সাল থেকে প্রিমিয়াম মানের খাদ্য উপকরণ দিয়ে বাংলাদেশের সেবা করছে। আমরা বিশুদ্ধ, খাঁটি পণ্য সরবরাহ করতে প্রতিশ্রুতিবদ্ধ যা আপনাকে আপনার পরিবারের জন্য সুস্বাদু খাবার তৈরি করতে সাহায্য করে।'}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {language === 'en'
                ? 'Our products are sourced from the finest suppliers and undergo rigorous quality checks to ensure you get nothing but the best. From everyday essentials to specialty ingredients, we have everything you need.'
                : 'আমাদের পণ্যগুলি সেরা সরবরাহকারীদের কাছ থেকে সংগ্রহ করা হয় এবং কঠোর মান পরীক্ষার মধ্য দিয়ে যায় যাতে আপনি সেরাটাই পান। দৈনন্দিন প্রয়োজনীয়তা থেকে বিশেষ উপাদান পর্যন্ত, আপনার যা প্রয়োজন সবই আমাদের কাছে আছে।'}
            </p>

            {/* Logo/Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-background rounded-lg border border-border">
              <div className="w-24 h-10 flex items-center justify-center">
                <img src={logo2} alt="" />
              </div>
              <div className="-ml-8 pr-4">
                <span className="font-display font-bold text-foreground">Winmix Essential</span>
                <p className="text-xs text-muted-foreground ">
                  {language === 'en' ? 'Trusted Since 2025' : '২০২৫ থেকে বিশ্বস্ত'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={qualitySpicesImg} 
                alt={language === 'en' ? 'Quality spices' : 'মানসম্মত মশলা'}
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full border-2 border-primary/20 -z-10" />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-background rounded-xl border border-border"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {language === 'en' ? stat.valueEn : stat.valueBn}
              </div>
              <div className="text-muted-foreground text-sm">
                {language === 'en' ? stat.labelEn : stat.labelBn}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
