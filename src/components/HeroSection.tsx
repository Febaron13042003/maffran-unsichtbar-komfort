import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import colorSchwarz from "@/assets/color-schwarz.png";
import colorSandbeige from "@/assets/color-sandbeige.png";
import colorNude from "@/assets/color-nude.png";
import colorMokka from "@/assets/color-mokka.png";
import colorKristallweiss from "@/assets/color-kristallweiss.png";

const COLOR_OPTIONS = [
  { id: "schwarz", label: "Schwarz", hex: "#1A1A1A", image: colorSchwarz },
  { id: "sandbeige", label: "Sandbeige", hex: "#D4B896", image: colorSandbeige },
  { id: "nude", label: "Natürliches Nude", hex: "#E8C9A8", image: colorNude },
  { id: "mokka", label: "Mokka", hex: "#6B3A2E", image: colorMokka },
  { id: "kristallweiss", label: "Kristallweiß", hex: "#F5F0E8", image: colorKristallweiss },
];

type ColorOption = (typeof COLOR_OPTIONS)[number];

const SIZES = ["S", "M", "L", "XL", "XXL", "XXXL"] as const;

const HeroSection = () => {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <section className="border-b border-border">
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left - Copy & Selectors */}
        <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16 border-b lg:border-b-0 lg:border-r border-border">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight-display text-foreground mb-6">
            Die unsichtbare Revolution für jede Kurve
          </h1>
          <p className="font-body text-base md:text-lg font-light text-muted-foreground leading-relaxed mb-10 max-w-md">
            Nahtlos. Unsichtbar. Ganztägiger Komfort. Engineered mit Laser-Cut-Technologie für null sichtbare Linien unter engster Kleidung — in den Größen S bis XXXL.
          </p>

          {/* Color Selector */}
          <div className="mb-8">
            <p className="font-display text-xs uppercase tracking-editorial text-muted-foreground mb-3">
              Farbauswahl — <span className="text-foreground">{selectedColor.label}</span>
            </p>
            <div className="flex gap-3">
              {COLOR_OPTIONS.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  aria-label={color.label}
                  className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    selectedColor.id === color.id
                      ? "border-foreground scale-110 shadow-md"
                      : "border-border hover:border-muted-foreground"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <p className="font-display text-xs uppercase tracking-editorial text-muted-foreground mb-3">
              Größenauswahl
            </p>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`font-display text-xs uppercase tracking-editorial min-w-[3rem] px-4 py-3 border transition-colors duration-200 ${
                    selectedSize === size
                      ? "border-foreground bg-foreground text-primary-foreground"
                      : "border-border text-foreground hover:border-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="font-body text-xs text-muted-foreground mt-3 italic">
              Optimiert für Kurven. Im Zweifel die größere Nummer wählen.
            </p>
          </div>

          <a
            href="#bundles"
            className="font-display text-xs uppercase tracking-editorial border border-foreground px-8 py-4 text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors self-start"
          >
            In den Warenkorb
          </a>
        </div>

        {/* Right - Image */}
        <div className="flex items-center justify-center py-16 lg:py-24 lg:pl-16">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedColor.id}
              src={selectedColor.image}
              alt={`Maffran Invisible Seamless Comfort Brief — ${selectedColor.label}`}
              className="w-full max-w-md lg:max-w-lg object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
