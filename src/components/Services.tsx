import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = t.services.items;

  return (
    <section id="services" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2 mb-4">{t.services.title}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.services.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className="rounded-xl bg-card p-8 shadow-soft hover:shadow-medium transition hover:border-primary border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 mb-4" />
              <h3 className="font-serif text-lg text-primary mb-3">{service.title}</h3>
              <p className="text-sm text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
