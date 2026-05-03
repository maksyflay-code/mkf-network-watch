import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="icon"
        className="w-16 h-16 rounded-full shadow-2xl animate-pulse hover:animate-none"
        onClick={() => window.open('https://wa.me/5574998042836?text=Olá! Gostaria de saber mais sobre os serviços de monitoramento da MKF Solutions.', '_blank')}
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;