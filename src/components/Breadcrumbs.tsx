import { Home, ChevronRight } from "lucide-react";

const items = [
  { id: "", label: "Início", icon: Home },
  { id: "services", label: "Serviços" },
  { id: "firewall", label: "Firewall" },
  { id: "siem", label: "SIEM" },
  { id: "dashboards", label: "Dashboards" },
  { id: "checklist", label: "Maturidade" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contato" },
];

const Breadcrumbs = () => {
  const handleClick = (e: React.MouseEvent, id: string) => {
    if (!id) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="hidden md:block border-b border-primary/20 bg-background/70 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center flex-wrap gap-1 py-2 font-mono text-xs uppercase tracking-wider">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            const Icon = item.icon;
            return (
              <li key={item.id || "home"} className="flex items-center gap-1">
                <a
                  href={item.id ? `#${item.id}` : "/"}
                  onClick={(e) => handleClick(e, item.id)}
                  aria-current={isLast ? "page" : undefined}
                  className={`flex items-center gap-1 px-1 transition-colors ${
                    isLast
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {Icon && <Icon className="w-3 h-3" />}
                  <span>{item.label}</span>
                </a>
                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-muted-foreground/60" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
