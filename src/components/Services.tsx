import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Wifi, AlertTriangle, BarChart3, Settings, Shield, ShieldAlert, Lock } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Monitoramento de Equipamentos",
      description: "Acompanhamento em tempo real de servidores, switches, roteadores e demais equipamentos de rede.",
      features: ["Status em tempo real", "Alertas automáticos", "Histórico de performance"]
    },
    {
      icon: Wifi,
      title: "Monitoramento de Rede",
      description: "Supervisão completa da infraestrutura de rede para garantir conectividade e performance.",
      features: ["Largura de banda", "Latência e jitter", "Qualidade do sinal"]
    },
    {
      icon: Server,
      title: "Infraestrutura de Servidores",
      description: "Monitoramento avançado de servidores físicos e virtuais com métricas detalhadas.",
      features: ["CPU e memória", "Armazenamento", "Processos críticos"]
    },
    {
      icon: Shield,
      title: "Firewall e Proteção de Perímetro",
      description: "Implementação e gerenciamento de firewalls de próxima geração (NGFW) para proteger sua rede contra ameaças externas.",
      features: ["Filtragem avançada de tráfego", "Prevenção de intrusão (IPS)", "Controle de aplicações e VPN"]
    },
    {
      icon: ShieldAlert,
      title: "SIEM - Gestão de Eventos",
      description: "Centralização e correlação de logs de segurança para detecção rápida de incidentes e resposta a ameaças.",
      features: ["Correlação de eventos em tempo real", "Detecção de anomalias", "Compliance e auditoria"]
    },
    {
      icon: Lock,
      title: "Cibersegurança Corporativa",
      description: "Soluções completas de segurança da informação para proteger dados, usuários e ativos críticos do seu negócio.",
      features: ["Análise de vulnerabilidades", "Hardening de servidores", "Resposta a incidentes"]
    },
    {
      icon: AlertTriangle,
      title: "Sistema de Alertas",
      description: "Notificações inteligentes para problemas críticos via email, SMS e Telegram.",
      features: ["Alertas personalizados", "Escalação automática", "Múltiplos canais"]
    },
    {
      icon: BarChart3,
      title: "Relatórios e Analytics",
      description: "Dashboards interativos e relatórios detalhados para análise de performance e segurança.",
      features: ["Dashboards personalizados", "Relatórios automáticos", "Análise de tendências"]
    },
    {
      icon: Settings,
      title: "Configuração Personalizada",
      description: "Soluções sob medida para atender às necessidades específicas de cada cliente.",
      features: ["Setup personalizado", "Integração com sistemas", "Suporte especializado"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary text-glow">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de monitoramento e cibersegurança para manter sua infraestrutura
            funcionando com máxima eficiência, disponibilidade e proteção.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <TiltCard key={index} className="h-full">
              <Card className="h-full border border-primary/20 bg-card/60 backdrop-blur-sm hover:border-primary/60 hover:shadow-cyber transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 border border-primary/50 bg-primary/10 rounded flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-mono uppercase tracking-wider">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-mono">
                        <span className="text-primary mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;