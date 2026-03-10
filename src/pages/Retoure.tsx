import ScrollReveal from "@/components/ScrollReveal";
import { RotateCcw, Package, Mail, Clock } from "lucide-react";

const steps = [
  { icon: Mail, title: "E-Mail senden", desc: "Schreiben Sie uns an support@maffran.com mit Ihrer Bestellnummer und dem Rückgabegrund." },
  { icon: Package, title: "Paket versenden", desc: "Sie erhalten ein Rücksendeetikett per E-Mail. Verpacken Sie die Ware originalverpackt." },
  { icon: RotateCcw, title: "Erstattung erhalten", desc: "Nach Eingang und Prüfung erstatten wir den Kaufpreis innerhalb von 5–7 Werktagen." },
];

const Retoure = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20 max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
              <RotateCcw size={28} className="text-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-3">
              Retoure & Rückgabe
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
              Nicht zufrieden? Kein Problem. Sie haben 30 Tage Zeit, Ihre Bestellung kostenlos zurückzusenden.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6 mb-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="flex gap-5 p-6 rounded-2xl border border-border bg-card">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <step.icon size={20} className="text-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-xs font-semibold text-muted-foreground">Schritt {i + 1}</span>
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="p-6 rounded-2xl bg-muted text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock size={16} className="text-foreground" />
              <span className="font-display text-sm font-semibold text-foreground">30 Tage Rückgaberecht</span>
            </div>
            <p className="font-body text-xs text-muted-foreground">
              Widerrufsrecht gemäß § 355 BGB. Rücksendung innerhalb von 30 Tagen nach Erhalt möglich.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Retoure;
