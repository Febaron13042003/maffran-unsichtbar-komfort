import { Scissors, Wind, Shield } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Laser-Cut Tech",
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
];

const FeatureGrid = () => {
  return (
    <section id="vorteile" className="border-b border-border">
      <div className="container">
        <div className="py-16 lg:py-20 text-center mb-12">
          <p className="font-display text-xs uppercase tracking-editorial text-muted-foreground mb-4">Vorteile</p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight-display text-foreground">
            Engineered für Unsichtbarkeit
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`py-16 px-8 text-center ${i < 2 ? "border-b md:border-b-0 md:border-r border-border" : ""}`}
            >
              <feature.icon size={120} strokeWidth={1} className="mx-auto mb-8 text-foreground" />
              <h3 className="font-display text-lg font-medium text-foreground mb-3">{feature.title}</h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
