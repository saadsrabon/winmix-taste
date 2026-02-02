import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import logo from '@/assets/logo2.png';
const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2xl flex items-center justify-center">
               <img src={logo} alt="" />
              </div>
             
            </div>
            <p className="text-secondary-foreground/70 text-sm mb-6 leading-relaxed">
              {language === 'en' 
                ? 'Your Trusted Partner in Quality Food Products'
                : 'প্রিমিয়াম মানের খাদ্য উপাদানের জন্য আপনার বিশ্বস্ত অংশীদার। আমরা আপনার রান্নাঘরে খাঁটি স্বাদ নিয়ে আসি।'}
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com/winmixbd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Products */}
          {/* Products */}
<div>
  <h4 className="font-display font-semibold text-lg mb-6">
    {language === 'en' ? 'Products' : 'পণ্য'}
  </h4>
  <ul className="space-y-3">
    {categories.slice(0, 5).map(category => (
      <li key={category.id}>
        <Link
          to={`/products?category=${category.id}&brand=all`}
          className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
        >
          {language === 'en' ? category.nameEn : category.nameBn}
        </Link>
      </li>
    ))}
  </ul>
</div>


          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              {language === 'en' ? 'Company' : 'কোম্পানি'}
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">{language === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'}</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">{language === 'en' ? 'Contact' : 'যোগাযোগ'}</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">{language === 'en' ? 'Become a Distributor' : 'পরিবেশক হন'}</Link></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">{language === 'en' ? 'Careers' : 'ক্যারিয়ার'}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              {language === 'en' ? 'Contact' : 'যোগাযোগ'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  Abdullapur, Uttara,<br />Dhaka-1230, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+8801819993300" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  +88 01819 99 33 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:winmixbd@gmail.com" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  winmixbd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {currentYear} Winmix Essential Products. {language === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
          </p>
          {/* <div className="flex gap-6">
            <a href="#" className="text-secondary-foreground/50 hover:text-secondary-foreground text-sm transition-colors">
              {language === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
            </a>
            <a href="#" className="text-secondary-foreground/50 hover:text-secondary-foreground text-sm transition-colors">
              {language === 'en' ? 'Terms of Service' : 'সেবার শর্তাবলী'}
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
