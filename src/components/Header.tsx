import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Le Tiroir
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#a-propos"
            className={`text-sm font-medium transition ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            {t.nav.about}
          </a>
          <a
            href="#services"
            className={`text-sm font-medium transition ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#galerie"
            className={`text-sm font-medium transition ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#horaires"
            className={`text-sm font-medium transition ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium transition ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild size="sm">
            <a href="tel:+41794779638">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            to={otherLangPath}
            className={`text-sm font-medium transition ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            <Globe className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#a-propos" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.about}
            </a>
            <a href="#services" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.services}
            </a>
            <a href="#galerie" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.gallery}
            </a>
            <a href="#horaires" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.hours}
            </a>
            <a href="#contact" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.contact}
            </a>
            <Button asChild className="w-full">
              <a href="tel:+41794779638">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
