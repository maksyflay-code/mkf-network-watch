import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, AlertCircle, Send } from "lucide-react";

interface Item {
  id: string;
  text: string;
  category: string;
}

const items: Item[] = [
  { id: "fw", category: "essenciais", text: "Firewall ativo e atualizado" },
  { id: "mfa", category: "essenciais", text: "MFA e VPN no acesso remoto" },
  { id: "backup", category: "essenciais", text: "Backups testados (3-2-1)" },
  { id: "monitor", category: "essenciais", text: "Monitoramento 24/7" },
  { id: "siem", category: "essenciais", text: "Logs em SIEM com alertas" },
  { id: "ir", category: "essenciais", text: "Plano de resposta a incidentes" },
];

const Checklist = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const score = useMemo(() => {
    const total = items.length;
    const done = Object.values(checked).filter(Boolean).length;
    return { done, total, pct: Math.round((done / total) * 100) };
  }, [checked]);

  const level = useMemo(() => {
    if (score.pct >= 80) return { label: "MADURO", textClass: "text-success", borderClass: "border-success/50", desc: "Excelente postura de segurança. Mantenha melhorias contínuas." };
    if (score.pct >= 50) return { label: "INTERMEDIÁRIO", textClass: "text-warning", borderClass: "border-warning/50", desc: "Boa base, mas há lacunas críticas a serem corrigidas." };
    if (score.pct >= 25) return { label: "BÁSICO", textClass: "text-primary", borderClass: "border-primary/50", desc: "Sua infraestrutura está exposta. Ação imediata recomendada." };
    return { label: "CRÍTICO", textClass: "text-destructive", borderClass: "border-destructive/50", desc: "Risco elevado de incidente. Procure ajuda especializada agora." };
  }, [score.pct]);

  const toggle = (id: string) => setChecked((s) => ({ ...s, [id]: !s[id] }));

  const grouped = items.reduce<Record<string, Item[]>>((acc, it) => {
    (acc[it.category] = acc[it.category] || []).push(it);
    return acc;
  }, {});

  return (
    <section id="checklist" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Diagnóstico rápido de <span className="text-primary text-glow">Maturidade</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Marque os controles que sua empresa já possui. Em 30 segundos você descobre seu nível.
          </p>
        </div>

        <div className="max-w-3xl mx-auto border border-primary/30 bg-card/60 backdrop-blur-sm p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            {items.map((item) => {
              const isChecked = !!checked[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className={`flex items-center gap-3 text-left px-3 py-2.5 border transition-all ${
                    isChecked
                      ? "border-success/60 bg-success/10"
                      : "border-border hover:border-primary/50 hover:bg-card"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-4 h-4 border flex items-center justify-center ${
                      isChecked ? "bg-success border-success" : "border-muted-foreground/40"
                    }`}
                  >
                    {isChecked && <Check className="h-3 w-3 text-background" />}
                  </span>
                  <span className="text-sm md:text-base font-medium leading-tight">
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 pt-4 border-t border-border">
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-primary text-glow">{score.pct}</span>
                <span className="text-lg text-muted-foreground">%</span>
                <span className={`ml-2 font-mono text-xs uppercase tracking-wider font-bold ${level.textClass}`}>
                  {score.pct >= 50 ? <ShieldCheck className="inline h-4 w-4 mr-1" /> : <AlertCircle className="inline h-4 w-4 mr-1" />}
                  {level.label}
                </span>
              </div>
              <div className="w-full h-1.5 bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-primary transition-all duration-500"
                  style={{ width: `${score.pct}%` }}
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground mt-1">{level.desc}</p>
            </div>
            <Button
              variant="telegram"
              onClick={() => {
                const checkedItems = items.filter((it) => checked[it.id]);
                const missingItems = items.filter((it) => !checked[it.id]);
                const checkedSummary = checkedItems.length
                  ? checkedItems.map((it) => `✅ ${it.text}`).join("\n")
                  : "— Nenhum controle marcado —";
                const missingSummary = missingItems.length
                  ? missingItems.map((it) => `❌ ${it.text}`).join("\n")
                  : "— Nenhuma pendência —";
                const message =
                  `🛡️ *Diagnóstico — MKF Solutions*\n\n` +
                  `📊 Pontuação: *${score.pct}%* (${score.done}/${score.total})\n` +
                  `🎯 Nível: *${level.label}*\n\n` +
                  `*Implementados:*\n${checkedSummary}\n\n` +
                  `*Lacunas:*\n${missingSummary}\n\n` +
                  `Quero uma avaliação especializada.`;
                window.open(
                  `https://t.me/+5574991115690?text=${encodeURIComponent(message)}`,
                  "_blank"
                );
              }}
            >
              <Send className="mr-2 h-4 w-4" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
