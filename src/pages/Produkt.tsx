import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Droplets, Wind, Scissors, Eye, ShieldCheck, ThumbsUp, Zap, Heart, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TrustSection from "@/components/TrustSection";
import heroProduct from "@/assets/hero-product.jpg";
import beforeImage from "@/assets/before-lines.jpg";
import afterImage from "@/assets/after-smooth.jpg";
import colorNude from "@/assets/color-nude.png";
import colorSchwarz from "@/assets/color-schwarz.png";

const testimonials = [
  { name: "Lisa M.", city: "München", text: "Endlich keine sichtbaren Linien mehr unter meiner Legging! Trage sie jeden Tag im Gym.", rating: 5 },
  { name: "Anna K.", city: "Berlin", text: "Super bequem, auch bei Größe XXL perfekter Sitz. Absolute Empfehlung für Sport und Alltag!", rating: 5 },
  { name: "Sophie R.", city: "Hamburg", text: "Die Mokka-Farbe passt perfekt zu meinem Hautton. Komplett unsichtbar unter weißer Legging.", rating: 5 },
  { name: "Julia W.", city: "Köln", text: "Habe das 5er-Pack bestellt und spare richtig. Qualität ist top, kein Einrollen beim Training!", rating: 5 },
  { name: "Marie S.", city: "Frankfurt", text: "Endlich kann ich helle Yogahosen tragen ohne mich unwohl zu fühlen. Absolut unsichtbar!", rating: 5 },
  { name: "Lena B.", city: "Düsseldorf", text: "Nach 30+ Wäschen immer noch wie neu. Das ist echte Qualität. Nie wieder normale Unterwäsche.", rating: 5 },
];

const bundles = [
  {
    id: "single",
    name: "Zum Testen",
    count: "1 Stück",
    price: "29,90 €",
    perUnit: "29,90 € / Stück",
    highlight: false,
    tag: null,
  },
  {
    id: "bestseller",
    name: "Bestseller",
    count: "3 Stück",
    price: "54,90 €",
    perUnit: "18,30 € / Stück",
    highlight: true,
    tag: "BESTSELLER",
  },
  {
    id: "premium",
    name: "Premium Pack",
    count: "5 Stück",
    price: "69,90 €",
    perUnit: "13,98 € / Stück",
    highlight: false,
    tag: "BESTER WERT",
  },
];

const Produkt = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Pain-focused Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroProduct} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/30" />
        </div>
        <div className="relative container py-20 lg:py-32">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary-foreground text-primary-foreground" />
                ))}
              </div>
              <span className="font-body text-xs text-primary-foreground/60">
                12.000+ zufriedene Kundinnen
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight-display text-primary-foreground mb-5 leading-[1.08]">
              Schluss mit abzeichnender Unterwäsche!{" "}
              <span className="text-primary-foreground/70 font-light">Die unsichtbare Fitness-Panty.</span>
            </h1>
            <p className="font-body text-base md:text-lg text-primary-foreground/75 leading-relaxed mb-8 max-w-xl">
              Kennen Sie das? Sichtbare Unterwäsche-Linien unter der Legging im Gym, unter dem Kleid beim Date, unter der Hose im Büro. Peinlich. Unbequem. <strong className="text-primary-foreground">Ab heute nicht mehr.</strong>
            </p>
            <Link
              to="/angebote"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold bg-primary-foreground text-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Spar-Angebote ansehen <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Vorher / Nachher */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Der Unterschied</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-3">
                Vorher vs. Nachher
              </h2>
              <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
                Links: Normale Unterwäsche, die sich unter enger Kleidung abzeichnet. Rechts: Maffran — komplett unsichtbar.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[3/4]">
                <img src={beforeImage} alt="Vorher: Sichtbare Unterwäsche-Linien" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                  <span className="inline-block font-display text-xs uppercase tracking-editorial bg-destructive/90 text-primary-foreground px-3 py-1.5 rounded-full mb-2">Vorher</span>
                  <p className="font-body text-sm text-primary-foreground/90">Sichtbare Linien & Abdrücke unter Leggings</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[3/4]">
                <img src={afterImage} alt="Nachher: Maffran unsichtbar" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                  <span className="inline-block font-display text-xs uppercase tracking-editorial bg-success/90 text-primary-foreground px-3 py-1.5 rounded-full mb-2">Nachher</span>
                  <p className="font-body text-sm text-primary-foreground/90">Maffran: Null Linien, null Abdrücke</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Der Mechanismus — Warum es funktioniert */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto items-center">
            <ScrollReveal>
              <img src={colorNude} alt="Maffran Invisible Brief — Nahaufnahme" className="w-full max-w-md mx-auto object-contain" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Warum Maffran funktioniert</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-6">
                  Der Mechanismus
                </h2>
                <div className="space-y-5">
                  {[
                    { icon: Scissors, title: "Laser-Cut-Technologie", desc: "Ultrapräzise geschnittene Kanten statt traditioneller Nähte. Kein Abdruck, der sich durch Kleidung zeigt." },
                    { icon: Droplets, title: "Eisseide (Ice Silk)", desc: "Kühlender Seideneffekt direkt auf der Haut. Kein Schwitzen, kein Kleben — auch bei intensivem Workout." },
                    { icon: Zap, title: "Kein Einrollen & kein Verrutschen", desc: "Ohne dicke Gummibänder an den Kanten. Die Panty liegt flach an und haftet sanft an der Haut, den ganzen Tag." },
                    { icon: Wind, title: "Atmungsaktiv & Antibakteriell", desc: "Feuchtigkeitsableitend und geruchsneutralisierend. Frisch vom Morgen bis Abend — auch nach dem Sport." },
                    { icon: ShieldCheck, title: "50+ Waschgänge formstabil", desc: "Kein Ausleiern, kein Verblassen. Investition, die sich lohnt." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-semibold text-foreground mb-0.5">{item.title}</h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/angebote"
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold bg-foreground text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity mt-8"
                >
                  Spar-Angebote ansehen <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4: Spar-Angebote — Preise */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Spar-Angebote</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-3">
                Wählen Sie Ihr Paket
              </h2>
              <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
                Je mehr Sie bestellen, desto mehr sparen Sie pro Stück. Jedes Paket mit Zufriedenheitsgarantie.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {bundles.map((bundle, i) => (
              <ScrollReveal key={bundle.id} delay={i * 0.08}>
                <div className={`relative flex flex-col p-6 rounded-2xl border text-center ${
                  bundle.highlight
                    ? "border-foreground bg-background shadow-lg ring-1 ring-foreground/10"
                    : "border-border bg-background"
                }`}>
                  {bundle.tag && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-display font-semibold uppercase tracking-editorial ${
                      bundle.highlight ? "bg-foreground text-primary-foreground" : "bg-muted text-foreground"
                    }`}>
                      {bundle.tag}
                    </span>
                  )}
                  <div className="pt-3">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{bundle.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-5">{bundle.count}</p>
                    <p className="font-display text-3xl font-bold text-foreground mb-1">{bundle.price}</p>
                    <p className="font-body text-xs text-muted-foreground mb-6">{bundle.perUnit}</p>
                    <Link
                      to="/angebote"
                      className={`block w-full font-display text-xs font-medium uppercase tracking-editorial py-3.5 rounded-lg transition-all ${
                        bundle.highlight
                          ? "bg-foreground text-primary-foreground hover:opacity-90"
                          : "border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
                      }`}
                    >
                      Jetzt sicher bestellen
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="font-body text-xs text-muted-foreground italic max-w-lg mx-auto">
              Aufgrund der hohen viralen Nachfrage auf TikTok und unserer exklusiven Laser-Cut-Produktion beträgt die aktuelle Lieferzeit 7 bis 15 Werktage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Social Proof */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Kundenstimmen</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-3">
                Über 12.000 begeisterte Kundinnen
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.06}>
                <div className="p-6 rounded-2xl border border-border bg-card h-full">
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
            Wählen Sie Ihr Spar-Paket und erleben Sie den Unterschied. 30 Tage Rückgabe-Garantie.
          </p>
          <Link
            to="/angebote"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold bg-primary-foreground text-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
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
