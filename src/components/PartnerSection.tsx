import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { StoreIcon, DeliveryIcon, PartnershipIcon } from "@/components/icons/CustomIcons";
import brandImage from '@/assets/brand image.webp';
import winmixtest from '@/assets/winmixtest.png';
import win from '@/assets/win.png';
import cook from '@/assets/cook.png';
import { Link } from "react-router-dom";

const PartnerSection = () => {
  const { t } = useLanguage();

  const handleContactTeam = () => {
    window.location.href = 'tel:+8801819993300';
  };

  const partnerTypes = [
    {
      icon: StoreIcon,
      titleKey: "partner.retail.title",
      descKey: "partner.retail.desc",
      ctaKey: "partner.retail.cta",
      action: "contact" // Navigate to contact page
    },
    {
      icon: DeliveryIcon,
      titleKey: "partner.distributor.title",
      descKey: "partner.distributor.desc",
      ctaKey: "partner.distributor.cta",
      action: "phone" // Call the team
    },
    {
      icon: PartnershipIcon,
      titleKey: "partner.business.title",
      descKey: "partner.business.desc",
      ctaKey: "partner.business.cta",
      action: "contact" // Navigate to contact page
    },
  ];

  return (
    <section id="partner" className="section-padding bg-background text-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-foreground/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-foreground/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-foreground/20" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 mb-8">
            <span className="text-sm uppercase tracking-[0.2em] text-primary/80 font-medium">
              {t("partner.label")}
            </span>
          </div>
          <h2 className="font-display text-display-md md:text-display-lg font-bold mb-6">
            {t("partner.title.1")}{" "}
            <img src={winmixtest} alt="" className="h-20 inline " />
          </h2>
          <div className="flex justify-center items-center gap-4">
            <img src={cook} alt="Winmix Brand" className="w-24 md:w-60" />
            <img src={win} alt="Winmix Brand" className="w-24 md:w-60  " />
          </div>
          <p className="text-body-lg   text-muted-foreground">
            {t("partner.subtitle")}
          </p>
        </motion.div>

        {/* Partffner Type Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-primary text-white rounded-2xl p-8 border border-primary hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <partner.icon size={28} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                {t(partner.titleKey)}
              </h3>
              <p className="text-blue-100 mb-8">
                {t(partner.descKey)}
              </p>
              {partner.action === 'contact' ? (
                <Link to="/contact" className="inline-block">
                  <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                    {t(partner.ctaKey)}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              ) : (
                <button 
                  onClick={handleContactTeam}
                  className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300"
                >
                  {t(partner.ctaKey)}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Brand Image */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center my-16"
        >
          <img 
            src={brandImage} 
            alt="Winmix Brand" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div> */}

        {/* CTA Banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            {t("partner.cta.question")}
          </p>
          <Button variant="hero" size="xl" className="group">
            {t("partner.cta.button")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div> */}
        
      </div>
    </section>
  );
};

export default PartnerSection;
