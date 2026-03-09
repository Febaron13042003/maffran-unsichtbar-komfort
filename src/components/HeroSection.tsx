import heroProduct from "@/assets/hero-product.jpg";

const HeroSection = () => {
  return (
    <section className="border-b border-border">
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left - Copy */}
        <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16 border-b lg:border-b-0 lg:border-r border-border">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight-display text-foreground mb-6">
            Die unsichtbare Revolution für jede Kurve
          </h1>
          <p className="font-body text-base md:text-lg font-light text-muted-foreground leading-relaxed mb-10 max-w-md">
            Nahtlos. Unsichtbar. Ganztägiger Komfort. Engineered mit Laser-Cut-Technologie für null sichtbare Linien unter engster Kleidung — in den Größen S bis XXXL.
          </p>
          <a
            href="#bundles"
            className="font-display text-xs uppercase tracking-editorial border border-foreground px-8 py-4 text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors self-start"
          >
            Jetzt Paket wählen
          </a>
        </div>

        {/* Right - Image */}
        <div className="flex items-center justify-center py-16 lg:py-24 lg:pl-16">
          <img
            src={heroProduct}
            alt="Maffran Invisible Seamless Comfort Brief — nahtlose Unterwäsche in Sand"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
