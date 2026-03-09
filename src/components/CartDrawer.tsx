import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Lock, ShieldCheck } from "lucide-react";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, total } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-lg font-semibold tracking-tight-display">
            Warenkorb
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground font-body text-sm py-12">
              Ihr Warenkorb ist leer.
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                <div
                  className="w-10 h-10 rounded-full border border-border flex-shrink-0"
                  style={{ backgroundColor: item.colorHex }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-sm font-medium text-foreground">{item.bundleLabel}</p>
                  <p className="font-body text-xs text-muted-foreground">
                    {item.color} · Größe {item.size}
                  </p>
                  <p className="font-display text-sm font-semibold text-foreground mt-1">
                    {item.price.toFixed(2).replace(".", ",")} €
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Entfernen"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-display text-sm font-medium">Zwischensumme</span>
              <span className="font-display text-lg font-semibold">
                {total.toFixed(2).replace(".", ",")} €
              </span>
            </div>

            <button className="w-full bg-foreground text-primary-foreground font-display text-sm font-medium py-4 rounded-lg hover:opacity-90 transition-opacity">
              Zur Kasse
            </button>

            <div className="flex items-center justify-center gap-4 py-2">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Lock size={14} />
                <span className="font-body text-[11px]">SSL</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <ShieldCheck size={14} />
                <span className="font-body text-[11px]">PayPal & Klarna</span>
              </div>
            </div>
            <p className="text-center font-body text-[11px] text-muted-foreground">
              Sicherer Checkout mit PayPal & Klarna
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;