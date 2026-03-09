const Widerruf = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20 max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight-display text-foreground mb-8">
          Widerrufsbelehrung
        </h1>
        <div className="space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Widerrufsrecht</h2>
            <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Folgen des Widerrufs</h2>
            <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">Muster-Widerrufsformular</h2>
            <p>An [Firmenname GmbH], [Adresse]:<br />
            Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über den Kauf der folgenden Waren: [Beschreibung]<br />
            Bestellt am / erhalten am: [Datum]<br />
            Name des/der Verbraucher(s): [Name]<br />
            Anschrift des/der Verbraucher(s): [Adresse]<br />
            Unterschrift (nur bei Mitteilung auf Papier)<br />
            Datum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widerruf;