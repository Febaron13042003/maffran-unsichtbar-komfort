import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

const sizeData = [
  { size: "S", waist: "60–65 cm", hip: "86–91 cm" },
  { size: "M", waist: "66–71 cm", hip: "92–97 cm" },
  { size: "L", waist: "72–79 cm", hip: "98–105 cm" },
  { size: "XL", waist: "80–87 cm", hip: "106–113 cm" },
  { size: "XXL", waist: "88–97 cm", hip: "114–123 cm" },
  { size: "XXXL", waist: "98–110 cm", hip: "124–136 cm" },
];

const Produkt = () => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLOR_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Image */}
          <div className="flex items-center justify-center bg-card rounded-2xl p-8 lg:p-12 border border-border">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedColor.id}
                src={selectedColor.image}
                alt={`Maffran Invisible Seamless — ${selectedColor.label}`}
                className="w-full max-w-sm object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </div>

          {/* Right - Config */}
          <div className="flex flex-col justify-center">
            <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-2">Maffran</p>
            <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight-display text-foreground mb-2">
              Invisible Seamless Comfort Brief
            </h1>
            <p className="font-body text-sm text-muted-foreground mb-8">
              100% unsichtbar unter engster Kleidung. Laser-Cut, atmungsaktiv, S–XXXL.
            </p>

            {/* Color Selector */}
            <div className="mb-6">
              <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">
                Farbauswahl — <span className="text-foreground font-medium">{selectedColor.label}</span>
              </p>
              <div className="flex gap-3">
                {COLOR_OPTIONS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    aria-label={color.label}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                      selectedColor.id === color.id
                        ? "border-foreground scale-110 ring-2 ring-foreground/20"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground">
                  Größenauswahl
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
                      <Ruler size={12} />
                      Größentabelle
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-display text-lg font-semibold">Größentabelle</DialogTitle>
                    </DialogHeader>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="font-display text-xs uppercase tracking-editorial py-3 px-3">Größe</th>
                            <th className="font-display text-xs uppercase tracking-editorial py-3 px-3">Taille</th>
                            <th className="font-display text-xs uppercase tracking-editorial py-3 px-3">Hüfte</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sizeData.map((row, i) => (
                            <tr key={row.size} className={i < sizeData.length - 1 ? "border-b border-border" : ""}>
                              <td className="font-display text-sm font-medium py-3 px-3">{row.size}</td>
                              <td className="font-body text-sm text-muted-foreground py-3 px-3">{row.waist}</td>
                              <td className="font-body text-sm text-muted-foreground py-3 px-3">{row.hip}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="font-body text-xs text-muted-foreground italic mt-2">
                      Optimiert für Kurven. Im Zweifel die größere Nummer wählen.
                    </p>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`font-display text-sm min-w-[3rem] px-4 py-2.5 rounded-lg border transition-all duration-200 ${
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

            {/* CTA */}
            <Link
              to="/angebote"
              className="inline-flex items-center justify-center gap-2 font-display text-sm font-medium bg-foreground text-primary-foreground px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Spar-Paket wählen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produkt;