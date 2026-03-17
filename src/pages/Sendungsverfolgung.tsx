import { useState } from "react";
import { Package, Search, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Sendungsverfolgung = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingCode.trim().length > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20 max-w-lg">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
              <Truck size={28} className="text-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-3">
              Sendungsverfolgung
            </h1>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Geben Sie unten Ihre Tracking-Nummer ein, um den Status Ihrer Lieferung in Echtzeit zu überprüfen. Die Tracking-Nummer finden Sie in Ihrer Versandbestätigungs-E-Mail.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Package size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={trackingCode}
                onChange={(e) => {
                  setTrackingCode(e.target.value);
                  setSubmitted(false);
                }}
                placeholder="Tracking-Nummer eingeben…"
                className="w-full font-body text-sm bg-card border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                maxLength={50}
              />
            </div>
            <button
              type="submit"
              disabled={trackingCode.trim().length === 0}
              className="w-full inline-flex items-center justify-center gap-2 font-display text-sm font-medium py-4 rounded-xl bg-foreground text-primary-foreground hover:opacity-90 transition-opacity disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
            >
              <Search size={16} />
              Suchen
            </button>
          </form>
        </ScrollReveal>

        {submitted && (
          <ScrollReveal>
            <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
              {/* 17TRACK Widget Container — replace this div's content with the 17TRACK iframe */}
              <div id="tracking-widget-container" className="min-h-[300px] flex items-center justify-center p-8">
                <div className="text-center">
                  <Truck size={28} className="text-muted-foreground mx-auto mb-3" />
                  <p className="font-display text-sm font-semibold text-foreground mb-1">
                    Sendung wird gesucht…
                  </p>
                  <p className="font-body text-xs text-muted-foreground max-w-xs mx-auto">
                    Die Sendungsverfolgung wird geladen. Falls kein Ergebnis erscheint, versuchen Sie es in einigen Stunden erneut oder kontaktieren Sie uns unter{" "}
                    <a href="mailto:support@maffran.com" className="underline underline-offset-2 hover:text-foreground transition-colors">
                      support@maffran.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.15}>
          <div className="mt-10 p-6 rounded-2xl bg-muted/50 text-center">
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              Aufgrund der hohen viralen Nachfrage auf TikTok und unserer exklusiven Laser-Cut-Produktion beträgt die aktuelle Lieferzeit <strong className="text-foreground">7 bis 15 Werktage</strong>. Vielen Dank für Ihre Geduld!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Sendungsverfolgung;
