import { useState } from "react";
import { X, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const UpsellModal = () => {
  const { items, isOpen: cartOpen } = useCart();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { addItem } = useCart();

  // Show upsell when cart is closed after having items
  // We use a simpler approach: show when cart closes and has items
  useState(() => {
    const interval = setInterval(() => {
      if (!cartOpen && items.length > 0 && !dismissed && !sessionStorage.getItem("maffran_upsell_shown")) {
        // Only show after a delay when user might abandon
        const timer = setTimeout(() => {
          if (!dismissed) {
            setShow(true);
            sessionStorage.setItem("maffran_upsell_shown", "1");
          }
        }, 15000);
        return () => clearTimeout(timer);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleAccept = () => {
    addItem({
      id: `upsell-extra-${Date.now()}`,
      name: "Extra Paar",
      color: "Schwarz",
      colorHex: "#1A1A1A",
      size: items[0]?.size || "M",
      quantity: 1,
      price: 7,
      bundleLabel: "Extra Paar (+1)",
    });
    setShow(false);
    setDismissed(true);
  };

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-background rounded-2xl border border-border shadow-2xl max-w-sm w-full p-8 text-center">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
          <Plus size={28} className="text-foreground" />
        </div>

        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          Exklusives Angebot!
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-6">
          Fügen Sie <span className="text-foreground font-semibold">1 weiteres Paar</span> für nur{" "}
          <span className="text-foreground font-semibold">7,00 €</span> hinzu — solange der Vorrat reicht.
        </p>

        <div className="space-y-3">
          <button
            onClick={handleAccept}
            className="w-full font-display text-sm font-medium py-3.5 rounded-xl bg-foreground text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Ja, hinzufügen für 7 €
          </button>
          <button
            onClick={handleClose}
            className="w-full font-display text-sm font-medium py-3.5 rounded-xl border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            Nein, danke
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpsellModal;
