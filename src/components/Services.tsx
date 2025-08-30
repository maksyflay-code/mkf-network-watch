import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Wifi, AlertTriangle, BarChart3, Settings } from "lucide-react";

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
      icon: AlertTriangle,
      title: "Sistema de Alertas",
      description: "Notificações inteligentes para problemas críticos via email, SMS e WhatsApp.",
      features: ["Alertas personalizados", "Escalação automática", "Múltiplos canais"]
    },
    {
      icon: BarChart3,
      title: "Relatórios e Analytics",
      description: "Dashboards interativos e relatórios detalhados para análise de performance.",
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
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas de monitoramento para manter sua infraestrutura 
            funcionando com máxima eficiência e disponibilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-glow transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;