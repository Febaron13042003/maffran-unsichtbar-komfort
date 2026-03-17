import { Lock, CreditCard, Globe, Apple } from "lucide-react";

const badges = [
  { icon: CreditCard, label: "Kreditkarten & PayPal" },
  { icon: Apple, label: "Apple Pay" },
  { icon: Lock, label: "SSL Secure" },
  { icon: Globe, label: "Express Versand · 7–15 Werktage" },
];

const TrustSection = () => {
  return (
    <section className="py-10 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center justify-center py-5 px-4 rounded-xl"
            >
              <badge.icon size={24} strokeWidth={1.5} className="mb-2 text-foreground" />
              <span className="font-body text-[11px] text-muted-foreground text-center">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
