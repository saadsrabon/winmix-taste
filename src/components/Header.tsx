import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

import logo from '@/assets/logo.png';
import cookwellLogo from '@/assets/cook.png';
import winmixLogo from '@/assets/win.png';

const Header = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  /* ---------------- Scroll behavior ---------------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------------- Outside click closes dropdown ---------------- */
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-products-dropdown]')) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  /* ---------------- Route change closes everything ---------------- */
  useEffect(() => {
    setIsProductsOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-secondary-foreground py-2 overflow-hidden">
        <div className="flex animate-marquee">
          <span className="whitespace-nowrap mx-4">
            For Distribution Call: +88 01819993300 (Hotline)
          </span>
          <span className="whitespace-nowrap mx-4">
            For Distribution Call: +88 01819993300 (Hotline)
          </span>
          <span className="whitespace-nowrap mx-4">
            For Distribution Call: +88 01819993300 (Hotline)
          </span>
          <span className="whitespace-nowrap mx-4">
            For Distribution Call: +88 01819993300 (Hotline)
          </span>
          <span className="whitespace-nowrap mx-4">
            For Distribution Call: +88 01819993300 (Hotline)
          </span>
          <span className="whitespace-nowrap mx-4">
            For Distribution Call: +88 01819993300 (Hotline)
          </span>
          <span className="whitespace-nowrap mx-4">
            For Distribution Call: +88 01819993300 (Hotline)
          </span>
          <span className="whitespace-nowrap mx-4">
            For Distribution Call: +88 01819993300 (Hotline)
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-10 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between  py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Winmix" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">

            <Link to="/" className="nav-link">
              {language === 'en' ? 'Home' : 'হোম'}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              data-products-dropdown
              onMouseEnter={() => setIsProductsOpen(true)}
            >
              <button
                type="button"
                className="nav-link flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProductsOpen(prev => !prev);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setIsProductsOpen(true);
                  if (e.key === 'Escape') setIsProductsOpen(false);
                }}
                aria-haspopup="menu"
                aria-expanded={isProductsOpen}
              >
                {language === 'en' ? 'Products' : 'পণ্য'}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-64 bg-background border border-border rounded-xl shadow-xl p-2 z-50"
                  role="menu"
                >
                  <Link
                    to="/products?brand=Cookwell"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    <img src={cookwellLogo} alt="Cookwell" className="h-6" />
                    <span>Cookwell</span>
                  </Link>

                  <Link
                    to="/products?brand=Winmix"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    <img src={winmixLogo} alt="Winmix" className="h-6" />
                    <span>Winmix</span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="nav-link">
              {language === 'en' ? 'About' : 'আমাদের সম্পর্কে'}
            </Link>

            <Link to="/contact" className="nav-link">
              {language === 'en' ? 'Contact' : 'যোগাযোগ'}
            </Link>
            <Link to="/contact" className="nav-link">
              {language === 'en' ? 'Become a Distributor' : 'বিতরণকারী হতে চান'}
            </Link>
            
          </nav>

          {/* Brand Logos */}
          <div className="hidden md:flex items-center gap-0">
           <Link
                    to="/products?brand=Cookwell"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    <img src={cookwellLogo} alt="Cookwell" className="h-10" />
                 
                  </Link>
            <Link
                    to="/products?brand=Winmix"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    <img src={winmixLogo} alt="Winmix" className="h-10" />
                    
                  </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container-wide py-6 flex flex-col gap-4">

              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'en' ? 'Home' : 'হোম'}
              </Link>

              <div>
                <p className="font-medium mb-2">
                  {language === 'en' ? 'Products' : 'পণ্য'}
                </p>
                <div className="flex flex-col gap-2 pl-4">
                  <Link
                    to="/products?brand=Cookwell"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Cookwell
                  </Link>
                  <Link
                    to="/products?brand=Winmix"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Winmix
                  </Link>
                </div>
              </div>

              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'}
              </Link>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'en' ? 'Contact' : 'যোগাযোগ'}
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {language === 'en' ? 'Become a Distributor' : 'বিতরণকারী হতে চান'}
              </Link>

              {/* <div className="flex gap-4 mt-6">
                <img src={cookwellLogo} alt="Cookwell" className="h-8" />
                <img src={winmixLogo} alt="Winmix" className="h-8" />
              </div> */}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
