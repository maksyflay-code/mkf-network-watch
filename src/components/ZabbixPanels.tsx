import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import zabbixNetwork from "@/assets/zabbix-network.jpg";
import zabbixServers from "@/assets/zabbix-servers.jpg";
import zabbixTopology from "@/assets/zabbix-topology.jpg";
import zabbixAlerts from "@/assets/zabbix-alerts.jpg";

type Panel = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  indicators: string[];
};

const panels: Panel[] = [
  {
    src: zabbixNetwork,
    title: "Tráfego de Rede",
    subtitle: "Throughput, latência e perda",
    description:
      "Monitoramento em tempo real do tráfego por interface, com gráficos históricos de throughput, latência, jitter e perda de pacotes.",
    indicators: ["Throughput Mbps/Gbps", "Latência (ms)", "Packet loss (%)", "Jitter"],
  },
  {
    src: zabbixServers,
    title: "Servidores e Hosts",
    subtitle: "CPU, memória e disco",
    description:
      "Painéis com gauges e séries temporais para CPU, memória, disco I/O e saúde geral dos servidores corporativos.",
    indicators: ["Uso de CPU", "Memória RAM", "Disk I/O", "Saúde do host"],
  },
  {
    src: zabbixTopology,
    title: "Mapa de Rede",
    subtitle: "Topologia e enlaces",
    description:
      "Mapas dinâmicos da topologia de rede com status de enlaces, roteadores e POPs, mostrando utilização e falhas em tempo real.",
    indicators: ["Status de enlaces", "Utilização de link", "POPs e backbone", "Falhas geolocalizadas"],
  },
  {
    src: zabbixAlerts,
    title: "Alertas e Triggers",
    subtitle: "Severidade e timeline",
    description:
      "Lista de problemas ativos com severidade (Disaster, High, Warning), timeline de eventos e contagem de notificações enviadas.",
    indicators: ["Problemas ativos", "Severidade", "Timeline de eventos", "Notificações"],
  },
];

const ZabbixPanels = () => {
  const [open, setOpen] = useState<Panel | null>(null);

  return (
    <section id="zabbix" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Painéis <span className="text-primary text-glow">Zabbix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os principais indicadores monitorados pela MKF Solutions, em painéis
            claros e em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {panels.map((p) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setOpen(p)}
              className="group relative text-left border border-primary/30 bg-card/70 backdrop-blur-sm overflow-hidden hover:border-primary/70 hover:shadow-cyber transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Ampliar painel ${p.title}`}
            >
              <div className="relative">
                <img
                  src={p.src}
                  alt={`Painel Zabbix - ${p.title}`}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="w-full h-56 md:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-3 left-3 font-mono text-[10px] text-primary uppercase tracking-widest border border-primary/50 bg-background/80 px-2 py-1 animate-pulse-glow">
                  ● LIVE
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[10px] text-foreground uppercase tracking-widest border border-primary/40 bg-background/80 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-3 w-3" /> Ampliar
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-1">{p.title}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                  {p.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.indicators.map((i) => (
                    <li
                      key={i}
                      className="font-mono text-[10px] uppercase tracking-wider border border-primary/30 bg-background/60 px-2 py-1 text-foreground/85"
                    >
                      ▸ {i}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl w-[95vw] border-primary/40 bg-card/95 backdrop-blur-md p-0 overflow-hidden">
          {open && (
            <>
              <img
                src={open.src}
                alt={`Painel Zabbix - ${open.title}`}
                className="w-full h-auto max-h-[70vh] object-contain bg-background"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">{open.title}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {open.subtitle}
                </p>
                <p className="text-sm md:text-base text-foreground/90">{open.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ZabbixPanels;
