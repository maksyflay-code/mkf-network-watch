import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar o monitoramento da sua infraestrutura? 
            Nossa equipe está aqui para ajudar você a encontrar a solução ideal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale com Nossos Especialistas</h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe técnica está pronta para entender suas necessidades e 
                propor a melhor solução de monitoramento para seu negócio.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-muted-foreground">+55 (74) 99804-2836</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-muted-foreground">Atendimento rápido e direto</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">contato@mkfsolutions.com.br</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="whatsapp" 
              size="lg"
              className="w-full md:w-auto"
              onClick={() => window.open('https://wa.me/5574998042836?text=Olá! Gostaria de solicitar um orçamento para serviços de monitoramento da MKF Solutions.', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Conversar no WhatsApp
            </Button>
          </div>
          
          {/* Contact Card */}
          <Card className="border-0 shadow-glow bg-gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Solicite seu Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-white/90">
                  Receba uma proposta personalizada para suas necessidades de monitoramento
                </p>
                
                <div className="bg-white/20 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Avaliação gratuita</span>
                    <span className="text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Setup personalizado</span>
                    <span className="text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Suporte 24/7</span>
                    <span className="text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sem compromisso</span>
                    <span className="text-green-300">✓</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://wa.me/5574998042836?text=Olá! Gostaria de solicitar uma avaliação gratuita para implementação de monitoramento na minha empresa.', '_blank')}
                >
                  Solicitar Avaliação Gratuita
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;