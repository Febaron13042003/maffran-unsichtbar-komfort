const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg tracking-tight-display text-foreground">Maffran</span>
        <nav className="flex gap-8">
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Impressum</a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Datenschutz</a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Versandrichtlinien</a>
        </nav>
        <span className="font-body text-xs text-muted-foreground">© 2026 Maffran</span>
      </div>
    </footer>
  );
};

export default Footer;
