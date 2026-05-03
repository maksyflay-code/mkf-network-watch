import { Button } from "@/components/ui/button";
import { ShieldAlert, AlertTriangle, UserX, KeyRound, Bug, Globe, Send } from "lucide-react";

const SIEM = () => {
  const alerts = [
    {
      icon: KeyRound,
      severity: "CRITICAL",
      color: "text-destructive border-destructive/50",
      title: "Brute-force em SSH",
      desc: "Múltiplas tentativas de login falhas detectadas em servidor de produção.",
      sample: "[CRIT] 47 tentativas falhas em 192.168.1.10:22 - origem 203.0.113.45",
    },
    {
      icon: UserX,
      severity: "HIGH",
      color: "text-warning border-warning/50",
      title: "Acesso fora do horário",
      desc: "Login de usuário privilegiado em horário não usual ou geo-localização suspeita.",
      sample: "[HIGH] usuário 'admin' logou às 03:42 de IP em país não autorizado",
    },
    {
      icon: Bug,
      severity: "HIGH",
      color: "text-warning border-warning/50",
      title: "Malware/Ransomware",
      desc: "Comportamento de criptografia em massa ou execução de binário desconhecido.",
      sample: "[HIGH] processo desconhecido criptografando arquivos em /home/users/*",
    },
    {
      icon: Globe,
      severity: "MEDIUM",
      color: "text-primary border-primary/50",
      title: "Tráfego para C2",
      desc: "Comunicação com domínios/IPs presentes em listas de threat intelligence.",
      sample: "[MED] conexão de saída para IP malicioso conhecido (botnet)",
    },
    {
      icon: AlertTriangle,
      severity: "MEDIUM",
      color: "text-primary border-primary/50",
      title: "Escalada de privilégios",
      desc: "Usuário comum executando comandos administrativos ou alterando permissões.",
      sample: "[MED] uso de 'sudo su' por conta sem perfil administrativo",
    },
    {
      icon: ShieldAlert,
      severity: "INFO",
      color: "text-success border-success/50",
      title: "Compliance & Auditoria",
      desc: "Eventos de mudança de configuração, criação de usuários e alterações sensíveis.",
      sample: "[INFO] regra de firewall modificada por admin@mkf.local",
    },
  ];

  return (
    <section id="siem" className="py-20 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-[0.4em] mb-4">
            // [ siem_engine ] // event_correlation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">SIEM</span> — Inteligência de Segurança
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Centralize, correlacione e responda a eventos de segurança em tempo real.
            Detecte ameaças antes que se tornem incidentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {alerts.map((alert) => (
            <div
              key={alert.title}
              className={`p-6 bg-card/80 backdrop-blur-sm border ${alert.color.split(' ')[1]} hover:shadow-cyber transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <alert.icon className={`h-7 w-7 ${alert.color.split(' ')[0]}`} />
                <span className={`font-mono text-xs px-2 py-1 border ${alert.color} uppercase tracking-wider`}>
                  {alert.severity}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{alert.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{alert.desc}</p>
              <div className="font-mono text-[11px] p-3 bg-background/80 border border-border text-foreground/80 leading-relaxed">
                {alert.sample}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Telegram */}
        <div className="border border-primary/40 bg-gradient-cyber p-8 md:p-10 corner-brackets text-center">
          <Send className="h-10 w-10 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Receba alertas direto no <span className="text-primary">Telegram</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Integramos seu SIEM com canais e bots no Telegram para que sua equipe receba
            notificações críticas em segundos, de qualquer lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="telegram"
              size="lg"
              className="text-base px-8"
              onClick={() => window.open(`https://t.me/+5574991115690?text=${encodeURIComponent('Olá MKF Solutions! Quero conversar sobre o SIEM e integração de alertas no Telegram.')}`, '_blank')}
            >
              <Send className="mr-2 h-5 w-5" />
              Conversar no Telegram
            </Button>
            <Button
              variant="cyber"
              size="lg"
              onClick={() => document.getElementById('checklist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              &gt; Avaliar Maturidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIEM;
