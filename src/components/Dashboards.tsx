import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import grafanaImage from "@/assets/grafana-dashboard.jpg";
import zabbixImage from "@/assets/zabbix-panel.jpg";

const Dashboards = () => {
  return (
    <section id="dashboards" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dashboards Profissionais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos as melhores ferramentas do mercado para oferecer visualizações 
            claras e insights valiosos sobre sua infraestrutura.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Grafana */}
          <Card className="overflow-hidden border-0 shadow-glow">
            <div className="relative">
              <img 
                src={grafanaImage} 
                alt="Dashboard Grafana" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Grafana</h3>
                <p className="text-sm opacity-90">Visualização Avançada</p>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Dashboards Grafana</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Painéis interativos com gráficos em tempo real, métricas detalhadas 
                e alertas visuais para monitoramento completo da performance.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Gráficos em tempo real
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Múltiplas fontes de dados
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Alertas personalizáveis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Interface responsiva
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Zabbix */}
          <Card className="overflow-hidden border-0 shadow-glow">
            <div className="relative">
              <img 
                src={zabbixImage} 
                alt="Painel Zabbix" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Zabbix</h3>
                <p className="text-sm opacity-90">Monitoramento Empresarial</p>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Painéis Zabbix</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Solução enterprise para monitoramento de infraestrutura com 
                capacidades avançadas de descoberta e automação.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Auto-descoberta de dispositivos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Mapas de rede dinâmicos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Relatórios automatizados
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Escalabilidade empresarial
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://wa.me/5574998042836?text=Olá! Gostaria de conhecer mais sobre os dashboards e soluções de monitoramento da MKF Solutions.', '_blank')}
          >
            Ver Demonstração dos Dashboards
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboards;