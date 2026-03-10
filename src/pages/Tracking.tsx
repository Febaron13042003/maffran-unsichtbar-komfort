import { useState } from "react";
import { Package, Search, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Tracking = () => {
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
            <p className="font-body text-sm text-muted-foreground">
              Geben Sie Ihre Sendungsnummer ein, um den Status Ihrer Bestellung zu verfolgen.
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
                placeholder="Sendungsnummer eingeben…"
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
              Sendung verfolgen
            </button>
          </form>
        </ScrollReveal>

        {submitted && (
          <ScrollReveal>
            <div className="mt-8 p-6 rounded-2xl border border-border bg-card text-center">
              <Truck size={24} className="text-muted-foreground mx-auto mb-3" />
              <p className="font-display text-sm font-semibold text-foreground mb-1">
                Sendung wird gesucht…
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Die Sendungsverfolgung wird in Kürze mit unserem Versandpartner verbunden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns unter support@maffran.com.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};

export default Tracking;
