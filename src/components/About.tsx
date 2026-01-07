import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = t.about.features;

  return (
    <section id="a-propos" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2 mb-6">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80">{t.about.p1}</p>
            <p className="text-lg text-foreground/80">{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="rounded-xl bg-white p-8 shadow-soft text-center">
              <div className="text-4xl font-serif text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">{t.about.stat1}</p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-soft text-center">
              <div className="text-4xl font-serif text-primary mb-2">100+</div>
              <p className="text-sm text-muted-foreground">{t.about.stat2}</p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-soft text-center col-span-2">
              <div className="text-4xl font-serif text-primary mb-2">5.0★</div>
              <p className="text-sm text-muted-foreground">{t.about.stat3}</p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="rounded-xl bg-white p-6 shadow-soft hover:shadow-medium transition"
            >
              <h3 className="font-serif text-lg text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
