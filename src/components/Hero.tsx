import { Button } from "@/components/ui/button";
import { Shield, Activity, Lock, Radar } from "lucide-react";
import mkfLogoText from "@/assets/mkf-logo-text.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cyber grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Scanline effect */}
      <div className="absolute inset-0 scanline" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Status bar */}
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-primary/40 bg-background/60 backdrop-blur-sm font-mono text-xs uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-success">SECURE</span>
          <span className="text-muted-foreground">//</span>
          <span className="text-primary">ONLINE</span>
          <span className="text-muted-foreground">//</span>
          <span className="text-foreground">MONITORED</span>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <img
            src={mkfLogoText}
            alt="MKF Solutions"
            className="h-64 md:h-80 lg:h-96 w-auto mx-auto mb-6"
          />
        </div>

        <p className="font-mono text-xs text-primary uppercase tracking-[0.4em] mb-4">
          // MKF-SEC-GW01 // MONITORING & CYBERSECURITY
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          <span className="text-glow text-primary">Monitoramento</span>
          <br />
          <span className="text-foreground">e Cibersegurança</span>
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
          Soluções avançadas de <span className="text-primary font-semibold">monitoramento</span>,{" "}
          <span className="text-primary font-semibold">firewall</span> e{" "}
          <span className="text-primary font-semibold">SIEM</span> para empresas e provedores de internet.
          Proteja sua infraestrutura com tecnologia de ponta.
        </p>

        {/* Feature icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {[
            { icon: Shield, label: "FIREWALL", status: "ACTIVE" },
            { icon: Radar, label: "IDS/IPS", status: "ACTIVE" },
            { icon: Activity, label: "MONITORING", status: "ACTIVE" },
            { icon: Lock, label: "ENCRYPTION", status: "AES-256" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="w-14 h-14 mb-2 border border-primary/50 rounded flex items-center justify-center bg-background/60 animate-pulse-glow">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="font-mono text-xs uppercase text-foreground tracking-wider">{item.label}</span>
              <span className="font-mono text-[10px] uppercase text-success">{item.status}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            variant="premium"
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => window.open('https://wa.me/5574991115690?text=Olá! Gostaria de solicitar um orçamento da MKF Solutions.', '_blank')}
          >
            Solicitar Orçamento
          </Button>
          <Button
            variant="cyber"
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            &gt; Conhecer Soluções
          </Button>
        </div>
      </div>

      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-pulse delay-3000" />
      </div>
    </section>
  );
};

export default Hero;
