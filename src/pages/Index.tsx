import { useEffect } from "react";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MonitoringServices from "@/components/MonitoringServices";
import ZabbixPanels from "@/components/ZabbixPanels";
import Stats from "@/components/Stats";
import Firewall from "@/components/Firewall";
import SIEM from "@/components/SIEM";
import Dashboards from "@/components/Dashboards";
import Checklist from "@/components/Checklist";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    // Reveal-on-scroll: target headings and card grids inside each section
    const selectors = [
      "section .text-center",
      "section .grid",
      "section h2",
      "section h3",
    ];
    const targets = new Set<Element>();
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => targets.add(el));
    });

    targets.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <MonitoringServices />
        <ZabbixPanels />
        <Firewall />
        <SIEM />
        <Dashboards />
        <Stats />
        <Checklist />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
