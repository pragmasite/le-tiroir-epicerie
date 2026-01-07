import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image descriptions in French and German
  const imageDescriptions: Record<string, string[]> = {
    fr: ["Sélection bio", "Intérieur chaleureux", "Produits en vrac", "Aménagement artisanal", "Emballages naturels", "Produits artisanaux", "Atmosphère accueillante"],
    de: ["Bio-Auswahl", "Wärmliches Interieur", "Unverpackte Produkte", "Handwerkliches Design", "Natürliche Verpackungen", "Handwerkliche Produkte", "Einladende Atmosphäre"],
    en: ["Bio Selection", "Warm Interior", "Bulk Products", "Artisan Design", "Natural Packaging", "Artisan Products", "Welcoming Atmosphere"],
  };

  const descriptions = imageDescriptions[lang] || imageDescriptions.fr;

  const images = [
    { src: "/images/img-1.jpg", alt: descriptions[0] },
    { src: "/images/img-2.jpg", alt: descriptions[1] },
    { src: "/images/img-3.jpg", alt: descriptions[2] },
    { src: "/images/img-4.jpg", alt: descriptions[3] },
    { src: "/images/img-5.jpg", alt: descriptions[4] },
    { src: "/images/img-6.jpg", alt: descriptions[5] },
    { src: "/images/img-7.jpg", alt: descriptions[6] },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galerie" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2 mb-4">{t.gallery.title}</h2>
          <p className="text-lg text-foreground/70">{t.gallery.description}</p>
        </motion.div>

        {/* Slider for >6 images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl bg-foreground">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-96 md:h-screen object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent" />

            {/* Image Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <p className="text-xl md:text-2xl font-serif text-white">{images[currentIndex].alt}</p>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 p-3 backdrop-blur-sm transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 p-3 backdrop-blur-sm transition"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden transition ${
                  index === currentIndex ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={image.src} alt={image.alt} className="h-24 w-24 object-cover" />
              </motion.button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
