import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, Network, Lock, Zap, Eye } from "lucide-react";

const Firewall = () => {
  const benefits = [
    { icon: ShieldCheck, title: "Proteção Multi-camada", desc: "Bloqueio de ameaças na borda da rede com inspeção profunda de pacotes (DPI)." },
    { icon: Network, title: "Controle de Tráfego", desc: "Políticas granulares por usuário, aplicação, porta e protocolo." },
    { icon: Eye, title: "Visibilidade Total", desc: "Logs detalhados de todo tráfego de entrada e saída em tempo real." },
    { icon: Zap, title: "Alta Performance", desc: "Throughput otimizado sem comprometer a velocidade da sua rede." },
    { icon: Lock, title: "VPN Site-to-Site", desc: "Conexões criptografadas seguras entre filiais e usuários remotos." },
    { icon: Shield, title: "IPS/IDS Integrado", desc: "Prevenção e detecção de intrusões com assinaturas atualizadas." },
  ];

  return (
    <section id="firewall" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-[0.4em] mb-4">
            // [ firewall_module ] // perimeter_defense
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">Firewall</span> Corporativo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Implementação e gerenciamento de firewalls de próxima geração (NGFW) que
            protegem sua infraestrutura contra ameaças cibernéticas modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Visual block - simulated terminal */}
          <div className="relative corner-brackets p-6 bg-card/60 backdrop-blur-sm border border-primary/30 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/20">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-warning" />
              <span className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-2 text-xs text-muted-foreground uppercase tracking-widest">mkf-fw-01 :: status</span>
            </div>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="text-muted-foreground">[<span className="text-primary">root@mkf-fw01</span>]# fw status</div>
              <div className="text-success">● Firewall ......... ACTIVE</div>
              <div className="text-success">● IPS/IDS .......... ACTIVE</div>
              <div className="text-success">● VPN Tunnel ....... 12 ESTABLISHED</div>
              <div className="text-success">● Threat Engine ... UPDATED (2026-05-03)</div>
              <div className="pt-2 text-muted-foreground">[<span className="text-primary">root@mkf-fw01</span>]# blocked --last-24h</div>
              <div className="text-foreground"><span className="text-destructive">[BLOCK]</span> 14.832 ataques bloqueados</div>
              <div className="text-foreground"><span className="text-destructive">[BLOCK]</span> 287 tentativas de brute-force</div>
              <div className="text-foreground"><span className="text-warning">[WARN]</span>  43 IPs em quarentena</div>
              <div className="text-foreground"><span className="text-success">[ OK ]</span>  Tráfego legítimo: 99.7%</div>
              <div className="pt-2 text-muted-foreground">[<span className="text-primary">root@mkf-fw01</span>]# <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle" /></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="p-4 border border-primary/20 bg-card/40 hover:border-primary/60 hover:bg-card/80 transition-all">
                <b.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center border border-primary/40 bg-gradient-cyber p-8 md:p-12 corner-brackets">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Sua rede está realmente protegida?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Receba uma <span className="text-primary font-semibold">avaliação gratuita</span> da
            postura de segurança do seu firewall e descubra vulnerabilidades antes que invasores o façam.
          </p>
          <Button
            variant="premium"
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => window.open('https://wa.me/5574991115690?text=Olá! Gostaria de solicitar uma avaliação gratuita do meu firewall com a MKF Solutions.', '_blank')}
          >
            Solicitar Avaliação Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Firewall;
