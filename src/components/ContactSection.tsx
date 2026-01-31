import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

const ContactSection = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-16 bg-muted/30" id="contact">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {language === 'en' ? '— Get in Touch' : '— যোগাযোগ করুন'}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-3">
            {language === 'en' ? 'Contact Us' : 'আমাদের সাথে যোগাযোগ'}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {language === 'en' 
              ? 'Have questions or want to become a distributor? We\'d love to hear from you.'
              : 'প্রশ্ন আছে বা পরিবেশক হতে চান? আমরা আপনার কথা শুনতে চাই।'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              {language === 'en' ? 'Contact Information' : 'যোগাযোগের তথ্য'}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {language === 'en' ? 'Our Location' : 'আমাদের ঠিকানা'}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Abdullapur, Uttara, Dhaka-1230<br />
                    Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {language === 'en' ? 'Hotline' : 'হটলাইন'}
                  </h4>
                  <a href="tel:+8801819993300" className="text-primary hover:underline">
                    +88 01819 99 33 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {language === 'en' ? 'Email' : 'ইমেইল'}
                  </h4>
                  <a href="mailto:winmixbd@gmail.com" className="text-primary hover:underline">
                    winmixbd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {language === 'en' ? 'Facebook' : 'ফেসবুক'}
                  </h4>
                  <a 
                    href="https://facebook.com/winmixbd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    facebook.com/winmixbd
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">
                {language === 'en' ? 'Map Location' : 'মানচিত্রে অবস্থান'}
              </span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              {language === 'en' ? 'Send us a Message' : 'আমাদের একটি বার্তা পাঠান'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {language === 'en' ? 'Your Name' : 'আপনার নাম'}
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={language === 'en' ? 'John Doe' : 'জন ডো'}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {language === 'en' ? 'Phone Number' : 'ফোন নম্বর'}
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {language === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={language === 'en' ? 'your@email.com' : 'your@email.com'}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {language === 'en' ? 'Your Message' : 'আপনার বার্তা'}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={language === 'en' ? 'Write your message here...' : 'এখানে আপনার বার্তা লিখুন...'}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto px-8">
                {language === 'en' ? 'Send Message' : 'বার্তা পাঠান'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
