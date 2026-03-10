import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Ruler, ArrowRight, ChevronLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useCart } from "@/contexts/CartContext";
import ScrollReveal from "@/components/ScrollReveal";
import TrustSection from "@/components/TrustSection";

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

const SIZES = ["S", "M", "L", "XL", "XXL", "XXXL"] as const;

const sizeData = [
  { size: "S", waist: "60–65 cm", hip: "86–91 cm" },
  { size: "M", waist: "66–71 cm", hip: "92–97 cm" },
  { size: "L", waist: "72–79 cm", hip: "98–105 cm" },
  { size: "XL", waist: "80–87 cm", hip: "106–113 cm" },
  { size: "XXL", waist: "88–97 cm", hip: "114–123 cm" },
  { size: "XXXL", waist: "98–110 cm", hip: "124–136 cm" },
];

const bundles = [
  {
    id: "starter",
    tag: null,
    name: "Starter Pack",
    count: 3,
    countLabel: "3 Stück",
    price: 34.9,
    priceLabel: "34,90 €",
    perUnit: "11,63 € / Stück",
    highlight: false,
    savings: null,
  },
  {
    id: "bestseller",
    tag: "EMPFOHLEN",
    name: "Bestseller Bundle",
    count: 5,
    countLabel: "5 Stück",
    price: 49.9,
    priceLabel: "49,90 €",
    perUnit: "9,98 € / Stück",
    highlight: true,
    savings: "Spare 33%",
  },
  {
    id: "maxvalue",
    tag: "BESTER WERT",
    name: "Max Value Pack",
    count: 7,
    countLabel: "7 Stück",
    price: 59.9,
    priceLabel: "59,90 €",
    perUnit: "8,56 € / Stück",
    highlight: false,
    savings: "Spare 42%",
  },
];

type Bundle = (typeof bundles)[number];
type ColorOption = (typeof COLOR_OPTIONS)[number];
type ColorMode = "einheitsfarbe" | "farbmix";

const Angebote = () => {
  const { addItem } = useCart();
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);
  const [colorMode, setColorMode] = useState<ColorMode>("einheitsfarbe");
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLOR_OPTIONS[0]);
  const [mixColors, setMixColors] = useState<ColorOption[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const handleSelectBundle = (bundle: Bundle) => {
    setSelectedBundle(bundle);
    setColorMode("einheitsfarbe");
    setSelectedColor(COLOR_OPTIONS[0]);
    setMixColors(Array(bundle.count).fill(COLOR_OPTIONS[0]));
    setSelectedSize(null);
    setAdded(false);
  };

  const handleMixColorChange = (index: number, color: ColorOption) => {
    setMixColors((prev) => {
      const next = [...prev];
      next[index] = color;
      return next;
    });
  };

  const previewColor = colorMode === "einheitsfarbe" ? selectedColor : mixColors[0] ?? COLOR_OPTIONS[0];

  const handleAddToCart = () => {
    if (!selectedBundle || !selectedSize) return;
    const colorLabel =
      colorMode === "einheitsfarbe"
        ? selectedColor.label
        : mixColors.map((c) => c.label).join(", ");
    const colorHex = colorMode === "einheitsfarbe" ? selectedColor.hex : mixColors[0].hex;

    addItem({
      id: `${selectedBundle.id}-${colorMode}-${colorLabel}-${selectedSize}`,
      name: selectedBundle.name,
      color: colorLabel,
      colorHex,
      size: selectedSize,
      quantity: 1,
      price: selectedBundle.price,
      bundleLabel: `${selectedBundle.name} (${selectedBundle.countLabel})`,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20">
        <AnimatePresence mode="wait">
          {!selectedBundle ? (
            <motion.div
              key="bundles"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">
                  Schritt 1 von 2
                </p>
                <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-3">
                  Wählen Sie Ihr Paket
                </h1>
                <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
                  Je mehr Sie kaufen, desto mehr sparen Sie. Kostenloser Versand bei allen Paketen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {bundles.map((bundle, i) => (
                  <ScrollReveal key={bundle.id} delay={i * 0.1}>
                    <button
                      onClick={() => handleSelectBundle(bundle)}
                      className={`relative flex flex-col p-6 rounded-2xl border transition-all text-left w-full ${
                        bundle.highlight
                          ? "border-foreground bg-card shadow-lg ring-1 ring-foreground/10"
                          : "border-border bg-background hover:shadow-md hover:border-foreground/30"
                      }`}
                    >
                      {bundle.tag && (
                        <span
                          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-display font-semibold uppercase tracking-editorial ${
                            bundle.highlight
                              ? "bg-foreground text-primary-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          {bundle.tag}
                        </span>
                      )}
                      <div className="pt-2">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">{bundle.name}</h3>
                        <p className="font-body text-sm text-muted-foreground mb-5">{bundle.countLabel}</p>
                        <div className="mb-1">
                          <span className="font-display text-3xl font-bold text-foreground">{bundle.priceLabel}</span>
                        </div>
                        <p className="font-body text-xs text-muted-foreground mb-1">{bundle.perUnit}</p>
                        {bundle.savings && (
                          <p className="font-body text-xs font-medium text-success">{bundle.savings}</p>
                        )}
                        <div className="mt-6 w-full font-display text-sm font-medium py-3 rounded-lg text-center border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors">
                          Auswählen
                        </div>
                      </div>
                    </button>
                  </ScrollReveal>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mt-10">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <span className="font-body text-xs text-muted-foreground">
                  4.9/5 basierend auf 12.000+ Bewertungen
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="config"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedBundle(null)}
                className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ChevronLeft size={16} />
                Zurück zur Paketauswahl
              </button>

              <div className="text-center mb-10">
                <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">
                  Schritt 2 von 2
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight-display text-foreground mb-2">
                  Wählen Sie Ihre Farben & Größe
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  {selectedBundle.name} — {selectedBundle.countLabel} für {selectedBundle.priceLabel}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
                {/* Product image */}
                <div className="flex items-center justify-center bg-card rounded-2xl p-8 lg:p-12 border border-border">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={previewColor.id}
                      src={previewColor.image}
                      alt={`Maffran — ${previewColor.label}`}
                      className="w-full max-w-sm object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Selectors */}
                <div className="flex flex-col justify-center">
                  {/* Color Mode Toggle */}
                  <div className="mb-6">
                    <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">
                      Wählen Sie Ihre Farben
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setColorMode("einheitsfarbe")}
                        className={`flex-1 font-display text-xs font-medium py-3 px-4 rounded-lg border transition-all ${
                          colorMode === "einheitsfarbe"
                            ? "border-foreground bg-foreground text-primary-foreground"
                            : "border-border text-foreground hover:border-foreground/40"
                        }`}
                      >
                        Einheitsfarbe
                      </button>
                      <button
                        onClick={() => setColorMode("farbmix")}
                        className={`flex-1 font-display text-xs font-medium py-3 px-4 rounded-lg border transition-all ${
                          colorMode === "farbmix"
                            ? "border-foreground bg-foreground text-primary-foreground"
                            : "border-border text-foreground hover:border-foreground/40"
                        }`}
                      >
                        Farbmix
                      </button>
                    </div>
                  </div>

                  {/* Color Swatches */}
                  <AnimatePresence mode="wait">
                    {colorMode === "einheitsfarbe" ? (
                      <motion.div
                        key="single"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mb-8"
                      >
                        <p className="font-body text-xs text-muted-foreground mb-3">
                          Eine Farbe für alle {selectedBundle.count} Stück —{" "}
                          <span className="text-foreground font-medium">{selectedColor.label}</span>
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
                      </motion.div>
                    ) : (
                      <motion.div
                        key="mix"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mb-8"
                      >
                        <p className="font-body text-xs text-muted-foreground mb-4">
                          Wählen Sie für jedes Stück eine Farbe
                        </p>
                        <div className="space-y-3">
                          {Array.from({ length: selectedBundle.count }).map((_, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <span className="font-display text-xs font-medium text-muted-foreground w-16 shrink-0">
                                Stück {idx + 1}
                              </span>
                              <div className="flex gap-2">
                                {COLOR_OPTIONS.map((color) => (
                                  <button
                                    key={color.id}
                                    onClick={() => handleMixColorChange(idx, color)}
                                    aria-label={`${color.label} für Stück ${idx + 1}`}
                                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                                      mixColors[idx]?.id === color.id
                                        ? "border-foreground scale-110 ring-2 ring-foreground/20"
                                        : "border-border hover:border-muted-foreground"
                                    }`}
                                    style={{ backgroundColor: color.hex }}
                                  />
                                ))}
                              </div>
                              <span className="font-body text-[11px] text-muted-foreground hidden sm:inline">
                                {mixColors[idx]?.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Size */}
                  <div className="mb-8">
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

                  {/* Add to cart */}
                  <button
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    className={`w-full font-display text-sm font-medium py-4 rounded-lg transition-all ${
                      added
                        ? "bg-success text-primary-foreground"
                        : !selectedSize
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : "bg-foreground text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    {added ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Check size={16} /> Hinzugefügt!
                      </span>
                    ) : !selectedSize ? (
                      "Bitte Größe wählen"
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        In den Warenkorb <ArrowRight size={16} />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <TrustSection />
    </div>
  );
};

export default Angebote;
