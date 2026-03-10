import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Droplets, Wind, Scissors, Eye, ShieldCheck, ThumbsUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TrustSection from "@/components/TrustSection";
import heroProduct from "@/assets/hero-product.jpg";
import colorSchwarz from "@/assets/color-schwarz.png";
import colorNude from "@/assets/color-nude.png";

const testimonials = [
  { name: "Lisa M.", city: "München", text: "Endlich keine sichtbaren Linien mehr! Trage sie jeden Tag.", rating: 5 },
  { name: "Anna K.", city: "Berlin", text: "Super bequem, auch bei Größe XXL perfekter Sitz. Absolute Empfehlung!", rating: 5 },
  { name: "Sophie R.", city: "Hamburg", text: "Die Mokka-Farbe passt perfekt zu meinem Hautton. Unsichtbar unter allem.", rating: 5 },
  { name: "Julia W.", city: "Köln", text: "Habe das 7er-Pack bestellt und spare richtig. Qualität ist top!", rating: 5 },
];

const Produkt = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Problem */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroProduct} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/30" />
        </div>
        <div className="relative container py-20 lg:py-32">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs uppercase tracking-editorial text-primary-foreground/60 mb-4">Das Problem</p>
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight-display text-primary-foreground mb-5 leading-[1.1]">
              Sichtbare Unterwäsche-Linien ruinieren jedes Outfit.
            </h1>
            <p className="font-body text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-8">
              92% aller Frauen kennen das Problem: Enge Kleider, helle Hosen, Röcke — überall zeichnet sich die Unterwäsche ab. Unbequem. Peinlich. Unnötig.
            </p>
            <Link
              to="/angebote"
              className="inline-flex items-center gap-2 font-display text-sm font-medium bg-primary-foreground text-foreground px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Zur Lösung <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Solution */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Die Lösung</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-4">
                Maffran — Die unsichtbare Revolution
              </h2>
              <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
                Entwickelt für Frauen, die Stil und Komfort nicht kompromittieren wollen. Unsere Laser-Cut-Technologie macht jede Naht unsichtbar.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            <ScrollReveal>
              <img src={colorNude} alt="Maffran Invisible Brief" className="w-full max-w-sm mx-auto object-contain rounded-2xl" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                {[
                  { icon: Eye, title: "100% Unsichtbar", desc: "Kein Abdruck, keine Linien — unter jeder Kleidung." },
                  { icon: Scissors, title: "Laser-Cut Kanten", desc: "Keine Nähte, die sich abzeichnen oder einschneiden." },
                  { icon: Wind, title: "Ganztägiger Komfort", desc: "Ultra-leicht, kein Verrutschen, kein Einrollen." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Details */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Technische Details</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-4">
                Engineered für Perfektion
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Scissors, title: "Laser-Cut", desc: "Ultrapräzise geschnittene Kanten — keine traditionellen Nähte." },
              { icon: Droplets, title: "Eis-Seide", desc: "Kühlender Seideneffekt auf der Haut. Ideal für warme Tage." },
              { icon: Wind, title: "Atmungsaktiv", desc: "Feuchtigkeitsableitend und antibakteriell. Den ganzen Tag frisch." },
              { icon: ShieldCheck, title: "Langlebig", desc: "Form- und farbbeständig nach 50+ Waschgängen." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="text-center p-6 rounded-2xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-foreground" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/angebote"
              className="inline-flex items-center gap-2 font-display text-sm font-medium bg-foreground text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Spar-Angebote ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Social Proof */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Kundenstimmen</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-4">
                Über 12.000 begeisterte Kundinnen
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-foreground text-foreground" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-foreground mb-4 leading-relaxed">„{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp size={14} className="text-muted-foreground" />
                    <span className="font-display text-xs font-medium text-foreground">{t.name}</span>
                    <span className="font-body text-xs text-muted-foreground">· {t.city}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-foreground">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight-display text-primary-foreground mb-4">
            Bereit für unsichtbaren Komfort?
          </h2>
          <p className="font-body text-sm text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Wählen Sie Ihr Spar-Paket und erleben Sie den Unterschied. Kostenloser Versand & 30 Tage Rückgabe.
          </p>
          <Link
            to="/angebote"
            className="inline-flex items-center gap-2 font-display text-sm font-medium bg-primary-foreground text-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Spar-Angebote ansehen <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <TrustSection />
    </div>
  );
};

export default Produkt;
