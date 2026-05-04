import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Atendem empresas de qualquer porte ou apenas provedores?",
    a: "Atendemos empresas de todos os portes e provedores de internet (ISPs). Nossas soluções de monitoramento, firewall e SIEM são adaptáveis tanto para infraestruturas pequenas quanto para grandes ambientes corporativos.",
  },
  {
    q: "Como funciona o monitoramento 24/7 e os alertas?",
    a: "Implantamos Zabbix e Grafana customizados para sua infraestrutura. Alertas críticos chegam em tempo real via Telegram, e-mail ou SMS, garantindo resposta imediata a qualquer incidente — dia ou noite.",
  },
  {
    q: "Quanto tempo leva para implantar uma solução?",
    a: "Depende do escopo, mas a maioria dos projetos de monitoramento entra em produção em 1 a 3 semanas. Firewall e SIEM seguem cronograma definido após o diagnóstico inicial gratuito via WhatsApp.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Perguntas <span className="text-primary text-glow">Frequentes</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas rápidas sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto border border-primary/30 bg-card/60 backdrop-blur-sm p-2 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary px-3">
                  <span className="font-mono text-primary mr-2">{String(idx + 1).padStart(2, "0")}.</span>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base px-3 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
