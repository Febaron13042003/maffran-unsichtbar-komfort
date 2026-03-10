import { useState } from "react";
import beforeImage from "@/assets/before-lines.jpg";
import afterImage from "@/assets/after-smooth.jpg";

const TransformationSection = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="bg-foreground text-primary-foreground border-b border-border">
      <div className="container py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="font-display text-xs uppercase tracking-editorial text-primary-foreground/60 mb-4">
            Vorher & Nachher
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight-display">
            Die Maffran Transformation
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Comparison */}
          <div className="relative w-full aspect-[3/4] overflow-hidden select-none">
            {/* After (bottom layer) */}
            <img src={afterImage} alt="Mit Maffran — keine sichtbaren Linien" className="absolute inset-0 w-full h-full object-cover" />
            {/* Before (top layer, clipped) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <img src={beforeImage} alt="Ohne Maffran — sichtbare Linien" className="w-full h-full object-cover" />
            </div>
            {/* Slider line */}
            <div className="absolute top-0 bottom-0 w-px bg-primary-foreground/80" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 border border-primary-foreground/80 flex items-center justify-center font-display text-xs text-primary-foreground/80">
                ↔
              </div>
            </div>
            {/* Labels */}
            <div className="absolute bottom-6 left-6 font-display text-[10px] md:text-xs uppercase tracking-editorial bg-foreground/60 backdrop-blur-sm px-3 py-1.5 text-primary-foreground">Ohne Maffran</div>
            <div className="absolute bottom-6 right-6 font-display text-[10px] md:text-xs uppercase tracking-editorial bg-foreground/60 backdrop-blur-sm px-3 py-1.5 text-primary-foreground">Mit Maffran</div>
            {/* Invisible range input */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
              aria-label="Vorher/Nachher Vergleich"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
