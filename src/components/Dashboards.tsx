import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TrendingUp, TrendingDown, Activity, AlertTriangle, Cpu, HardDrive, ZoomIn } from "lucide-react";
import grafanaImage from "@/assets/grafana-dashboard.jpg";
import zabbixImage from "@/assets/zabbix-panel.jpg";

type Panel = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
};

const Dashboards = () => {
  const [openPanel, setOpenPanel] = useState<Panel | null>(null);
  const kpis = [
    { icon: Activity, label: "UPTIME", value: "99.98%", trend: "+0.04%", up: true, color: "text-success" },
    { icon: AlertTriangle, label: "ALERTAS / 24H", value: "1.247", trend: "-12%", up: true, color: "text-warning" },
    { icon: Cpu, label: "CPU MÉDIA", value: "42%", trend: "+3%", up: false, color: "text-primary" },
    { icon: HardDrive, label: "TRÁFEGO", value: "8.4 Gb/s", trend: "+18%", up: true, color: "text-success" },
  ];

  return (
    <section id="dashboards" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dashboards <span className="text-primary text-glow">Profissionais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualizações claras com painéis em tempo real — métricas detalhadas
            para decisões rápidas e precisas.
          </p>
        </div>

        {/* KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="border border-primary/30 bg-card/70 backdrop-blur-sm p-5 corner-brackets"
            >
              <div className="flex items-center justify-between mb-3">
                <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
                  LIVE
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider mb-1">
                {kpi.label}
              </p>
              <p className="text-3xl font-bold text-foreground mb-1">{kpi.value}</p>
              <div className="flex items-center gap-1 text-xs">
                {kpi.up ? (
                  <TrendingUp className="h-3 w-3 text-success" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-warning" />
                )}
                <span className={kpi.up ? "text-success" : "text-warning"}>{kpi.trend}</span>
                <span className="text-muted-foreground">vs ontem</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-y border-primary/20 py-8">
          {[
            { num: "+2.5M", label: "Métricas/dia coletadas" },
            { num: "+50K", label: "Eventos correlacionados" },
            { num: "<30s", label: "Tempo médio de detecção" },
            { num: "24/7", label: "NOC monitorando" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary text-glow mb-1">{s.num}</div>
              <div className="font-mono text-xs uppercase text-muted-foreground tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Grafana */}
          <Card className="overflow-hidden border border-primary/30 bg-card/80 backdrop-blur-sm shadow-cyber">
            <button
              type="button"
              onClick={() =>
                setOpenPanel({
                  src: grafanaImage,
                  alt: "Dashboard Grafana com métricas em tempo real",
                  title: "Grafana",
                  subtitle: "Visualização Avançada",
                  description:
                    "Painéis interativos com gráficos em tempo real, múltiplas fontes de dados e alertas visuais para monitoramento completo da infraestrutura — uptime, latência, throughput, CPU e memória.",
                  metrics: [
                    { label: "UPTIME", value: "99.98%" },
                    { label: "LATÊNCIA", value: "12ms" },
                    { label: "PAINÉIS", value: "+40" },
                  ],
                })
              }
              className="relative block w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Ampliar dashboard Grafana"
            >
              <img
                src={grafanaImage}
                alt="Dashboard Grafana com métricas em tempo real, gráficos de throughput, CPU, latência e uptime"
                loading="lazy"
                width={1280}
                height={832}
                className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-3 left-3 font-mono text-[10px] text-primary uppercase tracking-widest border border-primary/50 bg-background/80 px-2 py-1 animate-pulse-glow">
                ● LIVE
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[10px] text-foreground uppercase tracking-widest border border-primary/40 bg-background/80 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="h-3 w-3" /> Ampliar
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-2xl font-bold text-foreground">Grafana</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Visualização Avançada
                </p>
              </div>
            </button>
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tight text-primary">
                Grafana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/85 mb-4 text-sm">
                Painéis interativos com gráficos em tempo real, múltiplas fontes
                de dados e alertas visuais para monitoramento completo da infraestrutura.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { l: "UPTIME", v: "99.98%" },
                  { l: "LATÊNCIA", v: "12ms" },
                  { l: "PAINÉIS", v: "+40" },
                ].map((m) => (
                  <div key={m.l} className="border border-primary/20 bg-background/60 p-2 text-center">
                    <div className="text-lg font-bold text-primary text-glow leading-tight">{m.v}</div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      {m.l}
                    </div>
                  </div>
                ))}
              </div>
              <ul className="space-y-1.5 text-sm">
                {["Gráficos em tempo real", "Múltiplas fontes de dados", "Alertas personalizáveis", "Interface responsiva"].map((f) => (
                  <li key={f} className="flex items-center font-mono text-xs text-foreground/85">
                    <span className="text-primary mr-2">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Zabbix */}
          <Card className="overflow-hidden border border-primary/30 bg-card/80 backdrop-blur-sm shadow-cyber">
            <button
              type="button"
              onClick={() =>
                setOpenPanel({
                  src: zabbixImage,
                  alt: "Painel Zabbix",
                  title: "Zabbix",
                  subtitle: "Monitoramento Empresarial",
                  description:
                    "Solução enterprise para monitoramento de infraestrutura com auto-descoberta, mapas de rede dinâmicos, correlação de eventos, severidade de problemas e disponibilidade detalhada por host.",
                  metrics: [
                    { label: "HOSTS", value: "+500" },
                    { label: "TRIGGERS", value: "+2K" },
                    { label: "SLA", value: "99.9%" },
                  ],
                })
              }
              className="relative block w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Ampliar painel Zabbix"
            >
              <img
                src={zabbixImage}
                alt="Painel Zabbix mostrando hosts, mapas de rede, severidade de problemas e disponibilidade de infraestrutura"
                loading="lazy"
                width={1280}
                height={832}
                className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-3 left-3 font-mono text-[10px] text-primary uppercase tracking-widest border border-primary/50 bg-background/80 px-2 py-1 animate-pulse-glow">
                ● LIVE
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[10px] text-foreground uppercase tracking-widest border border-primary/40 bg-background/80 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="h-3 w-3" /> Ampliar
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-2xl font-bold text-foreground">Zabbix</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Monitoramento Empresarial
                </p>
              </div>
            </button>
            <CardHeader>
              <CardTitle className="font-mono uppercase tracking-wider text-primary text-base">
                // painéis_zabbix
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/85 mb-4 text-sm">
                Solução enterprise para monitoramento de infraestrutura com
                auto-descoberta, mapas de rede dinâmicos e capacidades avançadas
                de correlação e automação.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { l: "HOSTS", v: "+500" },
                  { l: "TRIGGERS", v: "+2K" },
                  { l: "SLA", v: "99.9%" },
                ].map((m) => (
                  <div key={m.l} className="border border-primary/20 bg-background/60 p-2 text-center">
                    <div className="text-lg font-bold text-primary text-glow leading-tight">{m.v}</div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      {m.l}
                    </div>
                  </div>
                ))}
              </div>
              <ul className="space-y-1.5 text-sm">
                {["Auto-descoberta de dispositivos", "Mapas de rede dinâmicos", "Relatórios automatizados", "Escalabilidade empresarial"].map((f) => (
                  <li key={f} className="flex items-center font-mono text-xs text-foreground/85">
                    <span className="text-primary mr-2">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            variant="premium"
            size="lg"
            onClick={() => window.open('https://t.me/+5574991115690?text=' + encodeURIComponent('Olá! Gostaria de ver uma demonstração dos dashboards da MKF Solutions.'), '_blank')}
          >
            Ver Demonstração dos Dashboards
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
