import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MonitoringServices from "@/components/MonitoringServices";
import ZabbixPanels from "@/components/ZabbixPanels";
import Stats from "@/components/Stats";
import Firewall from "@/components/Firewall";
import SIEM from "@/components/SIEM";
import Dashboards from "@/components/Dashboards";
import Checklist from "@/components/Checklist";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <MonitoringServices />
      <ZabbixPanels />
      <Firewall />
      <SIEM />
      <Dashboards />
      <Stats />
      <Checklist />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
