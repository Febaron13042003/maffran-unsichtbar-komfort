import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import TransformationSection from "@/components/TransformationSection";
import BundleSection from "@/components/BundleSection";
import SizeChart from "@/components/SizeChart";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <TransformationSection />
      <BundleSection />
      <SizeChart />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
