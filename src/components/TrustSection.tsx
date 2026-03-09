import { Lock, CreditCard, Globe, ShieldCheck } from "lucide-react";

const badges = [
  { icon: CreditCard, label: "PayPal" },
  { icon: ShieldCheck, label: "Klarna" },
  { icon: Lock, label: "SSL Secure" },
  { icon: Globe, label: "Express Versand · 7–15 Tage" },
];

const TrustSection = () => {
  return (
    <section className="border-b border-border">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className={`flex flex-col items-center justify-center py-8 px-4 ${
                i < badges.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""
              } ${i < 2 ? "border-b md:border-b-0" : ""}`}
            >
              <badge.icon size={28} strokeWidth={1} className="mb-3 text-foreground" />
              <span className="font-display text-[10px] uppercase tracking-editorial text-foreground text-center">
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
