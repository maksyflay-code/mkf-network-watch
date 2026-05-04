import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Network, Router, Activity, Signal, Database, Globe, Gauge } from "lucide-react";

const MonitoringServices = () => {
  const enterprise = [
    {
      icon: Building2,
      title: "Monitoramento Corporativo",
      description: "Visibilidade total da TI corporativa: servidores, aplicações, bancos de dados e serviços críticos.",
      features: ["Servidores Windows/Linux", "Bancos de dados", "Aplicações web e APIs"],
    },
    {
      icon: Database,
      title: "Servidores e Virtualização",
      description: "Monitoramento de ambientes VMware, Proxmox, Hyper-V e clusters físicos com métricas detalhadas.",
      features: ["CPU, memória e disco", "Hipervisores e VMs", "Storage e backup"],
    },
    {
      icon: Activity,
      title: "Disponibilidade de Serviços",
      description: "SLA garantido com checagens ativas de HTTP, HTTPS, DNS, SMTP e portas customizadas.",
      features: ["Checagens sintéticas", "SLA e tempo de resposta", "Relatórios de uptime"],
    },
  ];

  const isp = [
    {
      icon: Router,
      title: "Monitoramento de OLTs e PoPs",
      description: "Acompanhamento de OLTs, ONUs, switches e roteadores de borda em tempo real.",
      features: ["SNMP e telemetria", "Status de portas e ONUs", "Temperatura e potência óptica"],
    },
    {
      icon: Signal,
      title: "Tráfego e Banda",
      description: "Monitoramento de tráfego por interface, VLAN e cliente, com histórico e análise de picos.",
      features: ["Throughput por interface", "Top talkers", "Detecção de saturação"],
    },
    {
      icon: Network,
      title: "Backbone e Enlaces",
      description: "Monitoramento de enlaces de fibra, rádio e trânsito IP com latência, jitter e perda de pacotes.",
      features: ["Latência e jitter", "Perda de pacotes", "BGP e roteamento"],
    },
    {
      icon: Globe,
      title: "CGNAT e DNS",
      description: "Visibilidade sobre serviços críticos do provedor: CGNAT, DNS recursivo, RADIUS e Mikrotik.",
      features: ["Sessões CGNAT", "Queries DNS", "Autenticação RADIUS"],
    },
    {
      icon: Gauge,
      title: "Qualidade de Experiência",
      description: "Métricas de QoE para acompanhar a experiência real do assinante na rede.",
      features: ["Speedtest agendado", "Smokeping", "SLA por POP"],
    },
    {
      icon: Activity,
      title: "NOC 24/7",
      description: "Equipe dedicada acompanhando alertas, abrindo chamados e atuando proativamente em incidentes.",
      features: ["Atendimento 24x7", "Escalonamento via Telegram", "Runbooks personalizados"],
    },
  ];

  const Block = ({
    title,
    subtitle,
    items,
  }: {
    title: string;
    subtitle: string;
    items: typeof enterprise;
  }) => (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-primary tracking-widest">{">"}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h3>
        <span className="font-mono text-xs uppercase text-muted-foreground tracking-widest hidden md:inline">
          // {subtitle}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s) => (
          <Card
            key={s.title}
            className="h-full border border-primary/20 bg-card/60 backdrop-blur-sm hover:border-primary/60 hover:shadow-cyber transition-all duration-300"
          >
            <CardHeader>
              <div className="w-12 h-12 border border-primary/50 bg-primary/10 rounded flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-mono uppercase tracking-wider">
                {s.title}
              </CardTitle>
              <CardDescription className="text-sm">{s.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center text-xs font-mono text-foreground/85">
                    <span className="text-primary mr-2">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="monitoramento" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Serviços de <span className="text-primary text-glow">Monitoramento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A MKF Solutions oferece monitoramento sob medida para{" "}
            <span className="text-primary font-semibold">empresas</span> e{" "}
            <span className="text-primary font-semibold">provedores de internet</span>,
            com Zabbix, Grafana e NOC 24/7.
          </p>
        </div>

        <Block
          title="Para Empresas"
          subtitle="Infraestrutura corporativa"
          items={enterprise}
        />
        <Block title="Para Provedores de Internet" subtitle="ISP / Telecom" items={isp} />
      </div>
    </section>
  );
};

export default MonitoringServices;
