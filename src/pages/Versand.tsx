import { Globe, Clock, Package } from "lucide-react";

const Versand = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20 max-w-3xl">
        <h1 className="font-display text-3xl font-semibold tracking-tight-display text-foreground mb-8">
          Versandinformationen
        </h1>
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <Globe size={20} className="text-foreground" />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-foreground mb-1">Weltweiter Versand</h2>
              <p className="font-body text-sm text-muted-foreground">Wir versenden weltweit aus unserem Lager. Kostenloser Versand innerhalb Deutschlands ab 29 €.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <Clock size={20} className="text-foreground" />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-foreground mb-1">Lieferzeiten</h2>
              <p className="font-body text-sm text-muted-foreground">Deutschland: 3–5 Werktage<br />EU: 5–10 Werktage<br />International: 7–15 Werktage</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <Package size={20} className="text-foreground" />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-foreground mb-1">Sendungsverfolgung</h2>
              <p className="font-body text-sm text-muted-foreground">Nach dem Versand erhalten Sie eine Bestätigung mit Tracking-Nummer per E-Mail.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Versand;