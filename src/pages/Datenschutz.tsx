const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20 max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight-display text-foreground mb-8">
          Datenschutzerklärung
        </h1>
        <div className="space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">3. Datenerfassung auf dieser Website</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-2">4. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Details dazu finden Sie in den folgenden Abschnitten dieser Datenschutzerklärung.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;