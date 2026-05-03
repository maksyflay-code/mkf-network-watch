import { Users, Building2, Clock, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Building2,
      number: "150+",
      label: "Empresas Atendidas",
      description: "Clientes confiam em nossos serviços"
    },
    {
      icon: Users,
      number: "500+",
      label: "Equipamentos Monitorados",
      description: "Servidores, switches e roteadores"
    },
    {
      icon: Clock,
      number: "99.9%",
      label: "Uptime Garantido",
      description: "Disponibilidade dos nossos sistemas"
    },
    {
      icon: Award,
      number: "5+",
      label: "Anos de Experiência",
      description: "Especialistas em monitoramento"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden border-y border-primary/30">
      <div className="absolute inset-0 bg-gradient-cyber" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-[0.4em] mb-4">
            // [ stats ] // by_the_numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Números que <span className="text-primary text-glow">Falam por Si</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa experiência e dedicação se refletem nos resultados que
            entregamos para nossos clientes todos os dias.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border border-primary/30 bg-card/60 backdrop-blur-sm p-6 corner-brackets">
              <div className="w-14 h-14 border border-primary/50 bg-primary/10 rounded flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary text-glow">
                {stat.number}
              </div>
              <div className="text-base font-semibold mb-2 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;