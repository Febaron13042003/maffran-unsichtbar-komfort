import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-display text-lg font-semibold tracking-tight-display block mb-3">Maffran</span>
            <p className="font-body text-xs text-primary-foreground/60 leading-relaxed max-w-xs">
              Unsichtbare Unterwäsche für jede Kurve. Laser-Cut-Technologie, Größen S–XXXL.
            </p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-editorial mb-3 text-primary-foreground/60">Shop</p>
            <nav className="flex flex-col gap-2">
              <Link to="/produkt" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Produkt</Link>
              <Link to="/angebote" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Spar-Angebote</Link>
            </nav>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-editorial mb-3 text-primary-foreground/60">Service</p>
            <nav className="flex flex-col gap-2">
              <Link to="/kontakt" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Kontakt</Link>
              <Link to="/tracking" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sendungsverfolgung</Link>
              <Link to="/retoure" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Retoure</Link>
            </nav>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-editorial mb-3 text-primary-foreground/60">Rechtliches</p>
            <nav className="flex flex-col gap-2">
              <Link to="/impressum" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Datenschutz</Link>
              <Link to="/widerruf" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Widerrufsbelehrung</Link>
              <Link to="/versand" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Versand</Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <span className="font-body text-xs text-primary-foreground/40">© 2026 Maffran. Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
