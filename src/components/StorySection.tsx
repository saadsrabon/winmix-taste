import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { WheatIcon, TrustIcon, CareIcon } from "@/components/icons/CustomIcons";
import heritageImage from "@/assets/heritage-story.jpg";

const StorySection = () => {
  const { t } = useLanguage();

  const values = [
    { icon: WheatIcon, titleKey: "story.value.purity", descKey: "story.value.purity.desc" },
    { icon: TrustIcon, titleKey: "story.value.trust", descKey: "story.value.trust.desc" },
    { icon: CareIcon, titleKey: "story.value.care", descKey: "story.value.care.desc" },
  ];

  return (
    <section id="story" className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heritageImage}
                alt="Bangladesh's culinary heritage - rice fields and traditional spices"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-background rounded-xl p-6 shadow-elevated max-w-xs hidden md:block"
            >
              <p className="font-display text-xl font-semibold text-foreground mb-2">
                {t("story.quote")}
              </p>
              <p className="text-sm text-muted-foreground">
                {t("story.quote.author")}
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pl-8"
          >
            {/* Section Label */}
            <div className="divider-ornament mb-8">
              <span className="px-4 text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                {t("story.label")}
              </span>
            </div>

            <h2 className="font-display text-display-md md:text-display-lg font-bold text-foreground mb-6">
              {t("story.title.1")}{" "}
              <span className="text-primary italic">{t("story.title.2")}</span>
            </h2>

            <div className="space-y-6 text-body-md text-muted-foreground">
              <p>{t("story.p1")}</p>
              <p>{t("story.p2")}</p>
              <p className="text-foreground font-medium">{t("story.p3")}</p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {t(value.titleKey)}
                  </h4>
                  <p className="text-sm text-muted-foreground">{t(value.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
