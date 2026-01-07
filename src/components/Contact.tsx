import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2 mb-4">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary mb-1">{t.contact.phone}</h3>
                <a href="tel:+41794779638" className="text-foreground/70 hover:text-primary transition">
                  +41 79 477 96 38
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary mb-1">{t.contact.email}</h3>
                <a href="mailto:letiroir19@gmail.com" className="text-foreground/70 hover:text-primary transition">
                  letiroir19@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary mb-1">{t.contact.address}</h3>
                <p className="text-foreground/70">
                  Route des Écoles 3<br />
                  1726 Farvagny-le-Grand<br />
                  Switzerland
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="tel:+41794779638">{t.contact.callNow}</a>
            </Button>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-soft h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.389534887547!2d7.067620000000001!3d46.72265099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f2e6e8e8e8e8d%3A0x8e8e8e8e8e8e8e8e!2sRoute%20des%20%C3%89coles%203%2C%201726%20Farvagny-le-Grand!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
