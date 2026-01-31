import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GoodnessIcon, DelicacyIcon, TrustIcon, LotusIcon } from "@/components/icons/CustomIcons";

const MissionSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: GoodnessIcon,
      number: "01",
      titleKey: "mission.value1.title",
      descKey: "mission.value1.desc",
    },
    {
      icon: DelicacyIcon,
      number: "02",
      titleKey: "mission.value2.title",
      descKey: "mission.value2.desc",
    },
    {
      icon: TrustIcon,
      number: "03",
      titleKey: "mission.value3.title",
      descKey: "mission.value3.desc",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute top-40 left-20 w-48 h-48 border border-primary/5 rounded-full" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-accent/10 rounded-full" />
      <div className="absolute bottom-40 right-24 w-64 h-64 border border-accent/5 rounded-full" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/8 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-accent/8 to-transparent blur-3xl" />

      <div className="container-narrow relative z-10">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-10 shadow-lg shadow-primary/10"
          >
            <LotusIcon size={40} className="text-primary" />
          </motion.div>

          {/* Mission Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-display-md md:text-display-lg font-bold text-foreground mb-8"
          >
            {t("mission.title")}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            {t("mission.text")}
          </motion.p>

          {/* Elegant Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-primary" />
            <div className="w-3 h-3 rotate-45 border-2 border-primary/50" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-primary/50 to-primary" />
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-display text-display-sm font-bold text-foreground mb-6">
              {t("mission.vision.title")}
            </h3>
            <p className="text-2xl md:text-3xl text-primary/90 italic max-w-xl mx-auto font-display leading-relaxed">
              {t("mission.vision.text")}
            </p>
          </motion.div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative text-center p-8 rounded-2xl bg-gradient-to-b from-background to-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-warm"
            >
              {/* Number Watermark */}
              <div className="absolute top-4 right-4 font-display text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                {value.number}
              </div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500"
              >
                <value.icon size={32} className="text-primary" />
              </motion.div>
              
              <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                {t(value.titleKey)}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {t(value.descKey)}
              </p>
              
              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-24 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
