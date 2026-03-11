import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={heroProduct}
          alt="Maffran Invisible Seamless Comfort Brief"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
      </div>

      {/* Content overlay */}
      <div className="relative container flex items-center min-h-[calc(100vh-64px)]">
        <motion.div
          className="max-w-xl py-16 lg:py-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Social Proof Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary-foreground text-primary-foreground" />
              ))}
            </div>
            <span className="font-body text-xs text-primary-foreground/70">
              4.9/5 · Über 12.000 zufriedene Kundinnen
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-tight-display text-primary-foreground mb-5">
            Die unsichtbare Revolution für jede Kurve
          </h1>
          <p className="font-body text-base md:text-lg font-light text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
            Nahtlos. Unsichtbar. Ganztägiger Komfort. Engineered mit Laser-Cut-Technologie
            für null sichtbare Linien unter engster Kleidung — in den Größen S bis XXXL.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/angebote"
              className="inline-flex items-center justify-center gap-2 font-display text-sm font-medium bg-primary-foreground text-foreground px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Jetzt Spar-Paket wählen
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/produkt"
              className="inline-flex items-center justify-center gap-2 font-display text-sm font-medium border border-primary-foreground/40 text-primary-foreground px-7 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Produkt ansehen
            </Link>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Kostenloser Versand", "30-Tage Rückgabe", "Sichere Bezahlung"].map((t) => (
              <span key={t} className="font-body text-[11px] text-primary-foreground/70 bg-primary-foreground/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary-foreground/20">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
