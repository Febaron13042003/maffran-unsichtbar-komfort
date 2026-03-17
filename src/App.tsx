import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import UpsellModal from "@/components/UpsellModal";
import Index from "./pages/Index";
import Produkt from "./pages/Produkt";
import Angebote from "./pages/Angebote";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Widerruf from "./pages/Widerruf";
import Versand from "./pages/Versand";
import Retoure from "./pages/Retoure";
import Tracking from "./pages/Tracking";
import Sendungsverfolgung from "./pages/Sendungsverfolgung";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <ExitIntentPopup />
          <UpsellModal />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produkt" element={<Produkt />} />
            <Route path="/angebote" element={<Angebote />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/widerruf" element={<Widerruf />} />
            <Route path="/versand" element={<Versand />} />
            <Route path="/retoure" element={<Retoure />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/sendungsverfolgung" element={<Sendungsverfolgung />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
