import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 bg-background border-b border-border flex items-center">
      <div className="container flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-medium tracking-tight-display text-foreground">
          Maffran
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#vorteile" className="font-display text-xs uppercase tracking-editorial text-foreground hover:text-muted-foreground transition-colors">
            Vorteile
          </a>
          <a href="#groessentabelle" className="font-display text-xs uppercase tracking-editorial text-foreground hover:text-muted-foreground transition-colors">
            Größentabelle
          </a>
          <a
            href="#bundles"
            className="font-display text-xs uppercase tracking-editorial border border-foreground px-6 py-3 text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Jetzt Paket wählen
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background border-b border-border md:hidden">
          <div className="flex flex-col p-6 gap-6">
            <a href="#vorteile" onClick={() => setMobileOpen(false)} className="font-display text-xs uppercase tracking-editorial">Vorteile</a>
            <a href="#groessentabelle" onClick={() => setMobileOpen(false)} className="font-display text-xs uppercase tracking-editorial">Größentabelle</a>
            <a href="#bundles" onClick={() => setMobileOpen(false)} className="font-display text-xs uppercase tracking-editorial border border-foreground px-6 py-3 text-center">
              Jetzt Paket wählen
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
