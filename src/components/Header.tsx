import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import mkfLogoText from "@/assets/mkf-logo-text.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'services', label: 'Serviços' },
    { id: 'firewall', label: 'Firewall' },
    { id: 'siem', label: 'SIEM' },
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'checklist', label: 'Maturidade' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src={mkfLogoText}
              alt="MKF Solutions"
              className="h-12 md:h-14 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground hover:text-primary transition-colors font-mono uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="premium"
              size="sm"
              onClick={() => window.open('https://wa.me/5574998042836?text=Olá! Gostaria de saber mais sobre os serviços da MKF Solutions.', '_blank')}
            >
              Orçamento
            </Button>
          </nav>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors font-mono uppercase text-sm tracking-wider"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="premium"
                className="w-full"
                onClick={() => window.open('https://wa.me/5574998042836?text=Olá! Gostaria de saber mais sobre os serviços da MKF Solutions.', '_blank')}
              >
                Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
