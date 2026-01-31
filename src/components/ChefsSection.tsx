import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import homeCookImage from "@/assets/home-cook.jpg";
import professionalChefImage from "@/assets/professional-chef.jpg";

const ChefsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="chefs" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="divider-ornament mb-8">
            <span className="px-4 text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              {t("chefs.label")}
            </span>
          </div>
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-foreground mb-6">
            {t("chefs.title.1")}{" "}
            <span className="text-primary italic">{t("chefs.title.2")}</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            {t("chefs.subtitle")}
          </p>
        </motion.div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Home Cooks Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-shadow duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={homeCookImage}
                alt="Family cooking together at home"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t("chefs.home.badge")}
              </span>
              <h3 className="font-display text-display-sm font-bold text-foreground mb-4">
                {t("chefs.home.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("chefs.home.desc")}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">✓</span>
                  {t("chefs.home.point1")}
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">✓</span>
                  {t("chefs.home.point2")}
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">✓</span>
                  {t("chefs.home.point3")}
                </li>
              </ul>
              <Button variant="hero" size="lg" className="w-full">
                {t("chefs.home.cta")}
              </Button>
            </div>
          </motion.div>

          {/* Professional Chefs Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-shadow duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={professionalChefImage}
                alt="Professional chef preparing gourmet dish"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                {t("chefs.pro.badge")}
              </span>
              <h3 className="font-display text-display-sm font-bold text-foreground mb-4">
                {t("chefs.pro.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("chefs.pro.desc")}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs">✓</span>
                  {t("chefs.pro.point1")}
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs">✓</span>
                  {t("chefs.pro.point2")}
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs">✓</span>
                  {t("chefs.pro.point3")}
                </li>
              </ul>
              <Button variant="earth" size="lg" className="w-full">
                {t("chefs.pro.cta")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
