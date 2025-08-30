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
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Números que Falam por Si
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nossa experiência e dedicação se refletem nos resultados que 
            entregamos para nossos clientes todos os dias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-white/80">
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