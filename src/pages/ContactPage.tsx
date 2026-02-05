import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Facebook, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,  
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
//che
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Back to Home */}
      <div className="container-wide mb-8 pt-36">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'en' ? 'Back to Home' : 'হোমে ফিরে যান'}
        </Link>
      </div>

      {/* Header */}
      <div className="container-wide text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          {language === 'en' ? 'Contact Us' : 'আমাদের সাথে যোগাযোগ'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          {language === 'en'
            ? "Have questions or want to become a distributor? We'd love to hear from you."
            : 'প্রশ্ন আছে বা পরিবেশক হতে চান? আমরা আপনার কথা শুনতে চাই।'}
        </motion.p>
      </div>

      <div className="container-wide pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6">
              {language === 'en' ? 'Contact Information' : 'যোগাযোগের তথ্য'}
            </h3>

            <div className="space-y-6">
              <InfoItem
                icon={<MapPin />}
                title={language === 'en' ? 'Our Location' : 'আমাদের ঠিকানা'}
                value={
                  <>
                    Abdullapur, Uttara, Dhaka-1230
                    <br />
                    Bangladesh
                  </>
                }
              />

              <InfoItem
                icon={<Phone />}
                title={language === 'en' ? 'Hotline' : 'হটলাইন'}
                value={
                  <a href="tel:+8801819993300" className="text-primary hover:underline">
                    +88 01819 99 33 00
                  </a>
                }
              />

              <InfoItem
                icon={<Mail />}
                title={language === 'en' ? 'Email' : 'ইমেইল'}
                value={
                  <a
                    href="mailto:winmixbd@gmail.com"
                    className="text-primary hover:underline"
                  >
                    winmixbd@gmail.com
                  </a>
                }
              />

              <InfoItem
                icon={<Facebook />}
                title={language === 'en' ? 'Facebook' : 'ফেসবুক'}
                value={
                  <a
                    href="https://facebook.com/winmixbd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    facebook.com/winmixbd
                  </a>
                }
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6">
              {language === 'en' ? 'Send us a Message' : 'আমাদের একটি বার্তা পাঠান'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label={language === 'en' ? 'Your Name' : 'আপনার নাম'}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <InputField
                  label={language === 'en' ? 'Phone Number' : 'ফোন নম্বর'}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                />
              </div>

              <InputField
                label={language === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
              />

              <div>
                <label className="text-sm font-medium mb-2 block">
                  {language === 'en' ? 'Your Message' : 'আপনার বার্তা'}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" disabled={loading}>
                {loading
                  ? language === 'en'
                    ? 'Sending...'
                    : 'পাঠানো হচ্ছে...'
                  : language === 'en'
                  ? 'Send Message'
                  : 'বার্তা পাঠান'}
              </Button>

              {status === 'success' && (
                <p className="text-green-600 text-sm">
                  {language === 'en'
                    ? 'Message sent successfully!'
                    : 'বার্তা সফলভাবে পাঠানো হয়েছে!'}
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-sm">
                  {language === 'en'
                    ? 'Failed to send message. Please try again.'
                    : 'বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।'}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

/* ---------------------------------- */
/* Reusable Sub Components             */
/* ---------------------------------- */

const InfoItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <div className="text-muted-foreground text-sm">{value}</div>
    </div>
  </div>
);

const InputField = ({
  label,
  ...props
}: {
  label: string;
} & React.ComponentProps<typeof Input>) => (
  <div>
    <label className="text-sm font-medium mb-2 block">{label}</label>
    <Input {...props} />
  </div>
);

export default ContactPage;
