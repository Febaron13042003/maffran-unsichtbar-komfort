const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20 max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight-display text-foreground mb-8">
          Impressum
        </h1>

        <div className="space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
            <p>[Firmenname GmbH]<br />[Straße Nr.]<br />[PLZ Ort], Deutschland</p>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Kontakt</h2>
            <p>E-Mail: kontakt@maffran.de<br />Telefon: +49 (0) XXX XXXXXXX</p>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Handelsregister</h2>
            <p>Registergericht: Amtsgericht [Ort]<br />Registernummer: HRB XXXXX</p>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Umsatzsteuer-ID</h2>
            <p>USt-IdNr. gemäß § 27a UStG: DE XXXXXXXXX</p>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Geschäftsführung</h2>
            <p>[Vorname Nachname]</p>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>[Vorname Nachname]<br />[Straße Nr.]<br />[PLZ Ort]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;