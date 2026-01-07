import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-serif text-xl font-bold mb-2">Le Tiroir</h3>
            <p className="text-sm text-primary-foreground/70">{t.footer.tagline}</p>
            <p className="text-xs text-primary-foreground/60 mt-4">{t.footer.description}</p>
          </motion.div>

          {/* Navigation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#a-propos" className="hover:text-accent transition">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-accent transition">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="hover:text-accent transition">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="tel:+41794779638" className="hover:text-accent transition">
                  +41 79 477 96 38
                </a>
              </li>
              <li>
                <a href="mailto:letiroir19@gmail.com" className="hover:text-accent transition">
                  letiroir19@gmail.com
                </a>
              </li>
              <li>Route des Écoles 3</li>
              <li>1726 Farvagny-le-Grand</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {year} Le Tiroir. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
