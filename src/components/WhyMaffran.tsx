import { Scissors, Wind, Shield, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Scissors,
    title: "Laser-Cut Technologie",
    description: "Präzise geschnittene Kanten eliminieren sichtbare Nähte — für eine makellos glatte Silhouette.",
  },
  {
    icon: Wind,
    title: "Atmungsaktiv",
    description: "Ultraleichtes, feuchtigkeitsableitendes Material hält Sie den ganzen Tag kühl und trocken.",
  },
  {
    icon: Shield,
    title: "Kein Einrollen",
    description: "Der Anti-Roll-Bund bleibt an Ort und Stelle — bei jeder Bewegung, jeder Figur.",
  },
  {
    icon: Heart,
    title: "Für jede Kurve",
    description: "Inklusives Größensystem von S bis XXXL — designed für echte Frauen, echte Körper.",
  },
];

const WhyMaffran = () => {
  return (
    <section id="vorteile" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Vorteile</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground">
            Warum Maffran?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-muted mb-5">
                  <feature.icon size={24} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMaffran;