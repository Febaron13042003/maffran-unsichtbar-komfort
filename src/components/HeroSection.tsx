import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)] gap-8">
        {/* Left - Copy */}
        <div className="flex flex-col justify-center py-12 lg:py-20 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Social Proof Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-foreground text-foreground" />
                ))}
              </div>
              <span className="font-body text-xs text-muted-foreground">
                4.9/5 · Über 12.000 zufriedene Kundinnen
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-tight-display text-foreground mb-5">
              Die unsichtbare Revolution für jede Kurve
            </h1>
            <p className="font-body text-base md:text-lg font-light text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Nahtlos. Unsichtbar. Ganztägiger Komfort. Engineered mit Laser-Cut-Technologie
              für null sichtbare Linien unter engster Kleidung — in den Größen S bis XXXL.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/angebote"
                className="inline-flex items-center justify-center gap-2 font-display text-sm font-medium bg-foreground text-primary-foreground px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                Jetzt Spar-Paket wählen
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/produkt"
                className="inline-flex items-center justify-center gap-2 font-display text-sm font-medium border border-border text-foreground px-7 py-3.5 rounded-lg hover:bg-muted transition-colors"
              >
                Produkt ansehen
              </Link>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Kostenloser Versand", "30-Tage Rückgabe", "Sichere Bezahlung"].map((t) => (
                <span key={t} className="font-body text-[11px] text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - Image */}
        <div className="flex items-center justify-center py-8 lg:py-16 order-1 lg:order-2">
          <motion.img
            src={heroProduct}
            alt="Maffran Invisible Seamless Comfort Brief"
            className="w-full max-w-sm lg:max-w-md object-contain rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;