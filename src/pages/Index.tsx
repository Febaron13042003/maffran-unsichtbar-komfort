import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import TransformationSection from "@/components/TransformationSection";
import BundleSection from "@/components/BundleSection";
import SizeChart from "@/components/SizeChart";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeatureGrid />
      </ScrollReveal>
      <ScrollReveal>
        <TransformationSection />
      </ScrollReveal>
      <ScrollReveal>
        <BundleSection />
      </ScrollReveal>
      <ScrollReveal>
        <SizeChart />
      </ScrollReveal>
      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
