import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/produkt", label: "Produkt" },
  { to: "/angebote", label: "Spar-Angebote" },
  { to: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items, setIsOpen } = useCart();
  const location = useLocation();
  const cartCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="sticky top-0 z-50 h-16 bg-background/95 backdrop-blur-sm border-b border-border flex items-center">
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight-display text-foreground">
          Maffran
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm transition-colors ${
                location.pathname === link.to ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/angebote"
            className="font-display text-xs font-medium uppercase tracking-editorial bg-foreground text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Jetzt Paket wählen
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Warenkorb"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-foreground text-primary-foreground text-[10px] font-display font-semibold rounded-full flex items-center justify-center min-w-[18px] h-[18px]">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden z-50">
          <div className="flex flex-col p-5 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-sm py-2 ${
                  location.pathname === link.to ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/angebote"
              onClick={() => setMobileOpen(false)}
              className="font-display text-xs font-medium uppercase tracking-editorial bg-foreground text-primary-foreground px-5 py-3 rounded-lg text-center mt-2"
            >
              Jetzt Paket wählen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
