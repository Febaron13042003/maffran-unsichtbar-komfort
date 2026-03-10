import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/4915123456789?text=${encodeURIComponent("Hallo Maffran, ich habe eine Frage zu euren Produkten.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Support"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
