import { Button } from "@/components/ui/button";
import { Monitor, Shield, Activity, Network } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/3233802a-3aab-4144-b7d2-670bc8ede20a.png" 
            alt="MKF Solutions"
            className="h-32 w-auto mx-auto mb-6 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
          Monitoramento e Cibersegurança
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Soluções avançadas de monitoramento, firewall e SIEM para empresas e provedores de internet.
          Proteja sua infraestrutura e mantenha tudo sob controle com nossa tecnologia de ponta.
        </p>
        
        {/* Feature Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center">
            <Monitor className="h-12 w-12 mb-2 text-green-300" />
            <span className="text-sm">24/7</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 mb-2 text-blue-300" />
            <span className="text-sm">Seguro</span>
          </div>
          <div className="flex flex-col items-center">
            <Activity className="h-12 w-12 mb-2 text-green-300" />
            <span className="text-sm">Tempo Real</span>
          </div>
          <div className="flex flex-col items-center">
            <Network className="h-12 w-12 mb-2 text-blue-300" />
            <span className="text-sm">Conectado</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://wa.me/557498042836?text=Olá! Gostaria de saber mais sobre os serviços de monitoramento da MKF Solutions.', '_blank')}
          >
            Solicitar Orçamento
          </Button>
          <Button 
            variant="premium" 
            size="lg"
            className="text-lg px-8 py-4"
          >
            Conhecer Soluções
          </Button>
        </div>
      </div>
      
      {/* Animated Network Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-3000" />
      </div>
    </section>
  );
};

export default Hero;