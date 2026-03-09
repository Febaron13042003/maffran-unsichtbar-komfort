const bundles = [
  {
    tag: null,
    name: "Starter Pack",
    count: "3 Stück",
    price: "49,90 €",
    perUnit: "16,63 € / Stück",
    highlight: false,
  },
  {
    tag: "BESTSELLER",
    name: "Comfort Bundle",
    count: "5 Stück",
    price: "74,90 €",
    perUnit: "14,98 € / Stück",
    highlight: true,
  },
  {
    tag: "BEST VALUE",
    name: "Full Wardrobe",
    count: "7 Stück",
    price: "94,90 €",
    perUnit: "13,56 € / Stück",
    highlight: false,
  },
];

const BundleSection = () => {
  return (
    <section id="bundles" className="border-b border-border">
      <div className="container py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="font-display text-xs uppercase tracking-editorial text-muted-foreground mb-4">Pakete</p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight-display text-foreground">
            Wählen Sie Ihr Paket
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border max-w-4xl mx-auto">
          {bundles.map((bundle, i) => (
            <div
              key={bundle.name}
              className={`relative flex flex-col p-8 ${bundle.highlight ? "bg-sand/40" : "bg-background"} ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-border" : ""
              }`}
            >
              {bundle.tag && (
                <span className="absolute top-0 left-0 right-0 border-b border-border py-2 px-4 font-display text-[10px] uppercase tracking-editorial text-foreground text-center">
                  {bundle.tag}
                </span>
              )}
              <div className={bundle.tag ? "mt-8" : ""}>
                <h3 className="font-display text-lg font-medium text-foreground mb-1">{bundle.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">{bundle.count}</p>
                <p className="font-display text-3xl font-light text-foreground mb-1">{bundle.price}</p>
                <p className="font-body text-xs text-muted-foreground mb-8">{bundle.perUnit}</p>
                <a
                  href="#"
                  className="block text-center font-display text-xs uppercase tracking-editorial border border-foreground px-6 py-3 text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
                >
                  Auswählen
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
