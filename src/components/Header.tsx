import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { labelEn: "Home", labelBn: "হোম", href: "/" },
    { labelEn: "Products", labelBn: "পণ্য", href: "/products" },
    // { labelEn: "Categories", labelBn: "ক্যাটাগরি", href: "#categories" },
    { labelEn: "About Us", labelBn: "আমাদের সম্পর্কে", href: "/about" },
    { labelEn: "Contact", labelBn: "যোগাযোগ", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <>
      {/* Top Bar with Marquee */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground py-2 overflow-hidden">
        <div className="flex animate-marquee">
          <span className="whitespace-nowrap mx-4">
             For Distribution Call: +88 01819993300

             
          </span>
          <span className="whitespace-nowrap mx-4">
             For Distribution Call: +88 01819993300  
          </span>
          <span className="whitespace-nowrap mx-4">
             For Distribution Call: +88 01819993300
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-10 left-0 right-0 z-[60] transition-all duration-500  ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
            : "bg-transparent py-4"
        }`}
      >
      <div className="container-wide flex items-center justify-between h-full px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Winmix Logo" 
            className="h-12    object-contain"
          />
          
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {language === 'en' ? link.labelEn : link.labelBn}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {language === 'en' ? link.labelEn : link.labelBn}
              </a>
            )
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          {/* <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          >
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">
              {language === "en" ? "বাংলা" : "EN"}
            </span>
          </button> */}
          
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {language === 'en' ? 'Get Distributor' : 'ডিস্ট্রিবিউটর হন'}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="p-2 text-foreground"
          >
            <Globe size={20} />
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border animate-fade-up">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-lg font-medium text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'en' ? link.labelEn : link.labelBn}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'en' ? link.labelEn : link.labelBn}
                </a>
              )
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                {language === 'en' ? 'Get Distributor' : 'ডিস্ট্রিবিউটর হন'}
              </Button>
            </Link>
          </nav>
        </div>
      )}
      </header>
    </>
  );
};

export default Header;
