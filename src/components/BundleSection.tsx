import * as React from "react";

const bundles = [
  {
    tag: null,
    name: "Zum Testen",
    count: "1 Stück",
    price: "29,90 €",
    perUnit: "29,90 € / Stück",
    highlight: false,
    link: "#",
  },
  {
    tag: "BESTSELLER",
    name: "Bestseller",
    count: "3 Stück",
    price: "54,90 €",
    perUnit: "18,30 € / Stück",
    highlight: true,
    link: "#",
  },
  {
    tag: "BESTER WERT",
    name: "Premium Pack",
    count: "5 Stück",
    price: "69,90 €",
    perUnit: "13,98 € / Stück",
    highlight: false,
    link: "#",
  },
];

const BundleSection = () => {
  return (
    <section id="bundles" className="border-b border-border bg-[#F5EBE0]/10">
      <div className="container py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="font-display text-xs uppercase tracking-editorial text-muted-foreground mb-4">Spar-Angebote</p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight-display text-foreground">
            Wählen Sie Ihr Paket
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border max-w-4xl mx-auto shadow-sm">
          {bundles.map((bundle, i) => (
            <div
              key={bundle.name}
              className={`relative flex flex-col p-8 ${bundle.highlight ? "bg-white border-2 border-black z-10 scale-105 shadow-xl" : "bg-background"} ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-border" : ""
              }`}
            >
              {bundle.tag && (
                <span className={`absolute top-0 left-0 right-0 border-b py-2 px-4 font-display text-[11px] uppercase tracking-editorial text-center font-bold ${bundle.highlight ? "bg-black text-white border-black" : "border-border text-foreground"}`}>
                  {bundle.tag}
                </span>
              )}
              <div className={bundle.tag ? "mt-8" : ""}>
                <h3 className="font-display text-lg font-medium text-foreground mb-1">{bundle.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">{bundle.count}</p>
                <p className="font-display text-3xl font-light text-foreground mb-1">{bundle.price}</p>
                <p className="font-body text-xs text-muted-foreground mb-8">{bundle.perUnit}</p>
                <a
                  href={bundle.link}
                  className={`block text-center font-display text-xs uppercase tracking-editorial px-6 py-4 transition-all duration-300 ${
                    bundle.highlight 
                      ? "bg-black text-white hover:bg-black/80 shadow-md font-bold" 
                      : "border border-foreground text-foreground hover:bg-black hover:text-white"
                  }`}
                >
                  Jetzt sicher bestellen
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundleSection;
