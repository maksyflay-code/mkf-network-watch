import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Dashboards from "@/components/Dashboards";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Dashboards />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
