import { useState } from "react";
import { Check, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ScrollReveal from "@/components/ScrollReveal";
import TrustSection from "@/components/TrustSection";

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

const Angebote = () => {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (bundle: (typeof bundles)[number]) => {
    addItem({
      id: `${bundle.id}-default`,
      name: bundle.name,
      color: "Schwarz",
      colorHex: "#1A1A1A",
      size: "M",
      quantity: 1,
      price: bundle.price,
      bundleLabel: `${bundle.name} (${bundle.countLabel})`,
    });
    setAddedId(bundle.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Spar-Angebote</p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-3">
            Wählen Sie Ihr Paket
          </h1>
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
            Je mehr Sie kaufen, desto mehr sparen Sie. Kostenloser Versand bei allen Paketen.
          </p>
        </div>

        <div id="bundles" className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {bundles.map((bundle, i) => (
            <ScrollReveal key={bundle.id} delay={i * 0.1}>
              <div
                className={`relative flex flex-col p-6 rounded-2xl border transition-shadow ${
                  bundle.highlight
                    ? "border-foreground bg-card shadow-lg ring-1 ring-foreground/10"
                    : "border-border bg-background hover:shadow-md"
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

                  <button
                    onClick={() => handleAdd(bundle)}
                    className={`w-full mt-6 font-display text-sm font-medium py-3 rounded-lg transition-all ${
                      addedId === bundle.id
                        ? "bg-success text-primary-foreground"
                        : bundle.highlight
                        ? "bg-foreground text-primary-foreground hover:opacity-90"
                        : "border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
                    }`}
                  >
                    {addedId === bundle.id ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Check size={16} /> Hinzugefügt!
                      </span>
                    ) : (
                      "In den Warenkorb"
                    )}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Social proof */}
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
      </div>

      <TrustSection />
    </div>
  );
};

export default Angebote;