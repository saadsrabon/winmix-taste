import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Premium Bangladeshi cooking with fresh spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-display-lg md:text-display-xl font-bold text-foreground mb-6"
          >
            {t("hero.title.1")}{" "}
            <span className="text-primary">{t("hero.title.2")}</span>
            <br />
            {t("hero.title.3")} <span className="italic">{t("hero.title.4")}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-body-lg text-muted-foreground max-w-xl mb-10"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl">
              {t("hero.cta.products")}
            </Button>
            <Button variant="hero-outline" size="xl">
              {t("hero.cta.story")}
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-8 mt-16 pt-8 border-t border-border/50"
          >
            <div>
              <p className="font-display text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">{t("hero.stat.pure")}</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-display text-3xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">{t("hero.stat.partners")}</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="font-display text-3xl font-bold text-foreground">♥</p>
              <p className="text-sm text-muted-foreground">{t("hero.stat.love")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
