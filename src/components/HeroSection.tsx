import heroProduct from "@/assets/hero-product.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#F5F5F5]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroProduct}
          alt="Maffran Invisible Seamless Comfort Brief"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5]/90 via-[#F5F5F5]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight-display text-foreground">
            Maffran: Unsichtbare Freiheit bis Größe XXXL
          </h1>
          <p className="font-body text-base sm:text-lg lg:text-xl font-light text-muted-foreground leading-relaxed max-w-lg">
            Die nahtlose Laser-Cut-Unterwäsche, die sich wie eine zweite Haut anfühlt. Kein Einrollen, keine Abdrücke, 100% Komfort.
          </p>
          <a
            href="#bundles"
            className="inline-block font-display text-sm uppercase tracking-editorial bg-foreground text-primary-foreground px-10 py-4 hover:bg-foreground/90 transition-colors"
          >
            Jetzt Spar-Paket wählen
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
