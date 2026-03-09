import HeroSection from "@/components/HeroSection";
import WhyMaffran from "@/components/WhyMaffran";
import TransformationSection from "@/components/TransformationSection";
import SocialProof from "@/components/SocialProof";
import TrustSection from "@/components/TrustSection";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ScrollReveal>
        <WhyMaffran />
      </ScrollReveal>
      <ScrollReveal>
        <TransformationSection />
      </ScrollReveal>
      <ScrollReveal>
        <SocialProof />
      </ScrollReveal>
      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>
    </div>
  );
};

export default Index;