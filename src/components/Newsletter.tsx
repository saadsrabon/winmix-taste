import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/20 mb-6">
            <Mail className="w-7 h-7 text-primary-foreground" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {language === 'en' ? 'Subscribe to Our Newsletter' : 'আমাদের নিউজলেটারে সাবস্ক্রাইব করুন'}
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            {language === 'en' 
              ? 'Stay updated with our latest products, offers and cooking tips delivered straight to your inbox.'
              : 'আমাদের সর্বশেষ পণ্য, অফার এবং রান্নার টিপস সরাসরি আপনার ইনবক্সে পান।'}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={language === 'en' ? 'Enter your email address' : 'আপনার ইমেইল দিন'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
              required
            />
            <Button 
              type="submit" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8"
            >
              {language === 'en' ? 'Subscribe' : 'সাবস্ক্রাইব'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
