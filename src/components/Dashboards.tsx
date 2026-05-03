import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity, AlertTriangle, Cpu, HardDrive, Database, BarChart3 } from "lucide-react";

const Dashboards = () => {
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
          <p className="font-mono text-xs text-primary uppercase tracking-[0.4em] mb-4">
            // [ visualization ] // real_time_metrics
          </p>
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
          {/* DB Panel — Network Throughput */}
          <Card className="overflow-hidden border border-primary/30 bg-card/80 backdrop-blur-sm shadow-cyber">
            <div className="relative bg-gradient-cyber p-6 h-64 overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">// db_metrics_01</span>
                </div>
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest border border-primary/50 bg-background/80 px-2 py-1 animate-pulse-glow">
                  ● LIVE
                </div>
              </div>
              <svg viewBox="0 0 400 140" className="relative z-10 w-full h-36" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="dbGrad1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[20, 40, 60, 80, 100, 120].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="hsl(var(--primary))" strokeOpacity="0.08" />
                ))}
                <path
                  d="M0,90 L30,70 L60,80 L90,55 L120,65 L150,40 L180,50 L210,30 L240,45 L270,25 L300,38 L330,20 L360,35 L400,18 L400,140 L0,140 Z"
                  fill="url(#dbGrad1)"
                />
                <path
                  d="M0,90 L30,70 L60,80 L90,55 L120,65 L150,40 L180,50 L210,30 L240,45 L270,25 L300,38 L330,20 L360,35 L400,18"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <CardHeader>
              <CardTitle className="font-mono uppercase tracking-wider text-primary">// throughput_db</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Painéis interativos com gráficos em tempo real, métricas detalhadas
                e alertas visuais para monitoramento completo da infraestrutura.
              </p>
              <ul className="space-y-2 text-sm">
                {["Gráficos em tempo real", "Múltiplas fontes de dados", "Alertas personalizáveis", "Interface responsiva"].map((f) => (
                  <li key={f} className="flex items-center font-mono text-xs text-foreground/85">
                    <span className="text-primary mr-2">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* DB Panel — Events / Alerts */}
          <Card className="overflow-hidden border border-primary/30 bg-card/80 backdrop-blur-sm shadow-cyber">
            <div className="relative bg-gradient-cyber p-6 h-64 overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">// db_events_02</span>
                </div>
                <div className="font-mono text-[10px] text-success uppercase tracking-widest border border-success/50 bg-background/80 px-2 py-1">
                  ● OK
                </div>
              </div>
              <svg viewBox="0 0 400 140" className="relative z-10 w-full h-36" preserveAspectRatio="none">
                {[20, 40, 60, 80, 100, 120].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="hsl(var(--primary))" strokeOpacity="0.08" />
                ))}
                {[60, 90, 45, 110, 75, 95, 50, 80, 35, 100, 65, 85, 40, 120, 55, 70].map((h, i) => (
                  <rect
                    key={i}
                    x={i * 25 + 4}
                    y={140 - h}
                    width="18"
                    height={h}
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3 + (h / 140) * 0.6}
                  />
                ))}
              </svg>
            </div>
            <CardHeader>
              <CardTitle className="font-mono uppercase tracking-wider text-primary">// eventos_correlacionados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Solução enterprise para monitoramento de infraestrutura com capacidades
                avançadas de descoberta, correlação e automação.
              </p>
              <ul className="space-y-2 text-sm">
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
