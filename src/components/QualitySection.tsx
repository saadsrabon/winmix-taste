import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { NaturalIcon, ShieldIcon, AuthenticIcon } from "@/components/icons/CustomIcons";
import qualityImage from "@/assets/quality-spices.jpg";

const QualitySection = () => {
  const { t } = useLanguage();

  const qualityPoints = [
    {
      icon: NaturalIcon,
      titleKey: "quality.natural.title",
      descKey: "quality.natural.desc",
    },
    {
      icon: ShieldIcon,
      titleKey: "quality.assured.title",
      descKey: "quality.assured.desc",
    },
    {
      icon: AuthenticIcon,
      titleKey: "quality.authentic.title",
      descKey: "quality.authentic.desc",
    },
  ];

  const certifications = [
    "quality.cert.iso",
    "quality.cert.bsti",
    "quality.cert.halal",
    "quality.cert.preservatives",
  ];

  return (
    <section id="quality" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-saffron blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-chili blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Label */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-foreground/10 mb-8">
              <span className="text-sm uppercase tracking-[0.2em] text-secondary-foreground/80 font-medium">
                {t("quality.label")}
              </span>
            </div>

            <h2 className="font-display text-display-md md:text-display-lg font-bold mb-6">
              {t("quality.title.1")}{" "}
              <span className="text-saffron-light italic">{t("quality.title.2")}</span>
            </h2>

            <p className="text-body-lg text-secondary-foreground/80 mb-12">
              {t("quality.subtitle")}
            </p>

            {/* Quality Points */}
            <div className="space-y-8">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-saffron/20 flex items-center justify-center">
                    <point.icon size={28} className="text-saffron-light" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xl text-secondary-foreground mb-2">
                      {t(point.titleKey)}
                    </h4>
                    <p className="text-secondary-foreground/70">
                      {t(point.descKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-secondary-foreground/10"
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-foreground/10"
                >
                  <Check className="w-4 h-4 text-saffron-light" />
                  <span className="text-sm font-medium text-secondary-foreground/90">{t(cert)}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={qualityImage}
                alt="Premium quality spices and ingredients"
                className="w-full aspect-square object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-elevated text-foreground"
            >
              <p className="font-display text-4xl font-bold text-primary mb-1">99.9%</p>
              <p className="text-sm text-muted-foreground">{t("quality.purity")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
