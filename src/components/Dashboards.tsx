import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity, AlertTriangle, Cpu, HardDrive } from "lucide-react";
import grafanaImage from "@/assets/grafana-dashboard.jpg";
import zabbixImage from "@/assets/zabbix-panel.jpg";

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
            Visualizações claras com Grafana e Zabbix — métricas em tempo real
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
            <div className="relative">
              <img src={grafanaImage} alt="Dashboard Grafana" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-xs text-primary uppercase tracking-widest border border-primary/50 bg-background/80 px-2 py-1">
                ● LIVE
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-foreground">Grafana</h3>
                <p className="text-sm text-muted-foreground">Visualização Avançada</p>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="font-mono uppercase tracking-wider text-primary">// dashboards grafana</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Painéis interativos com gráficos em tempo real, métricas detalhadas
                e alertas visuais para monitoramento completo.
              </p>
              <ul className="space-y-2 text-sm">
                {["Gráficos em tempo real", "Múltiplas fontes de dados", "Alertas personalizáveis", "Interface responsiva"].map((f) => (
                  <li key={f} className="flex items-center font-mono text-xs">
                    <span className="text-primary mr-2">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Zabbix */}
          <Card className="overflow-hidden border border-primary/30 bg-card/80 backdrop-blur-sm shadow-cyber">
            <div className="relative">
              <img src={zabbixImage} alt="Painel Zabbix" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-xs text-primary uppercase tracking-widest border border-primary/50 bg-background/80 px-2 py-1">
                ● LIVE
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-foreground">Zabbix</h3>
                <p className="text-sm text-muted-foreground">Monitoramento Empresarial</p>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="font-mono uppercase tracking-wider text-primary">// painéis zabbix</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Solução enterprise para monitoramento de infraestrutura com capacidades
                avançadas de descoberta e automação.
              </p>
              <ul className="space-y-2 text-sm">
                {["Auto-descoberta de dispositivos", "Mapas de rede dinâmicos", "Relatórios automatizados", "Escalabilidade empresarial"].map((f) => (
                  <li key={f} className="flex items-center font-mono text-xs">
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
            onClick={() => window.open('https://wa.me/5574998042836?text=Olá! Gostaria de ver uma demonstração dos dashboards da MKF Solutions.', '_blank')}
          >
            Ver Demonstração dos Dashboards
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
