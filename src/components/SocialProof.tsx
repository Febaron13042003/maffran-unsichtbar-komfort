import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  { name: "Lena M.", text: "Endlich eine Unterhose, die man wirklich nicht sieht! Perfekt unter meinem Bleistiftrock.", rating: 5 },
  { name: "Sarah K.", text: "Ich habe in XXL bestellt und der Sitz ist fantastisch. Kein Einschneiden, kein Rutschen.", rating: 5 },
  { name: "Julia R.", text: "Die beste Investition für meine Garderobe. Trage sie jeden Tag im Büro.", rating: 5 },
];

const SocialProof = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-editorial text-muted-foreground mb-3">Kundenstimmen</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground">
            Das sagen unsere Kundinnen
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.1}>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed mb-4">„{review.text}"</p>
                <p className="font-display text-xs font-semibold text-muted-foreground">{review.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;