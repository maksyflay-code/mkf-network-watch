import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, AlertCircle, Send } from "lucide-react";

interface Item {
  id: string;
  text: string;
  category: string;
}

const items: Item[] = [
  { id: "fw", category: "Perímetro", text: "Possuo firewall corporativo com políticas ativas e revisadas" },
  { id: "ips", category: "Perímetro", text: "Tenho IPS/IDS com assinaturas atualizadas" },
  { id: "vpn", category: "Acesso", text: "Acesso remoto é feito apenas via VPN com MFA" },
  { id: "mfa", category: "Acesso", text: "Autenticação multifator (MFA) habilitada para usuários críticos" },
  { id: "backup", category: "Resiliência", text: "Backups automatizados, testados e isolados (3-2-1)" },
  { id: "patch", category: "Vulnerabilidades", text: "Política de patch management aplicada a servidores e endpoints" },
  { id: "siem", category: "Detecção", text: "Logs centralizados em SIEM com correlação de eventos" },
  { id: "monitor", category: "Detecção", text: "Monitoramento 24/7 da infraestrutura (Zabbix/Grafana)" },
  { id: "alerts", category: "Resposta", text: "Alertas críticos chegam em tempo real (Telegram/Email/SMS)" },
  { id: "ir", category: "Resposta", text: "Plano de resposta a incidentes documentado e testado" },
  { id: "awareness", category: "Pessoas", text: "Treinamento periódico de conscientização em segurança" },
  { id: "audit", category: "Compliance", text: "Auditorias regulares e gestão de conformidade (LGPD/ISO)" },
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Checklist de <span className="text-primary text-glow">Maturidade</span> em Cibersegurança
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Marque os controles que sua empresa ou provedor já possui e descubra
            seu nível de maturidade em segurança da informação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checklist */}
          <div className="lg:col-span-2 space-y-6">
            {Object.entries(grouped).map(([cat, list]) => (
              <div key={cat} className="border border-primary/20 bg-card/60 backdrop-blur-sm p-6">
                <h3 className="font-mono text-sm md:text-base font-bold uppercase tracking-widest text-primary mb-4">
                  // {cat}
                </h3>
                <div className="space-y-3">
                  {list.map((item) => {
                    const isChecked = !!checked[item.id];
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className={`w-full flex items-start gap-3 text-left p-3 border transition-all ${
                          isChecked
                            ? "border-success/60 bg-success/10"
                            : "border-border hover:border-primary/50 hover:bg-card"
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 w-5 h-5 mt-0.5 border flex items-center justify-center ${
                            isChecked
                              ? "bg-success border-success"
                              : "border-muted-foreground/40"
                          }`}
                        >
                          {isChecked && <Check className="h-3.5 w-3.5 text-background" />}
                        </span>
                        <span className={`text-base md:text-lg font-semibold leading-snug ${isChecked ? "text-foreground" : "text-foreground/90"}`}>
                          {item.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Score panel */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="border border-primary/40 bg-gradient-cyber p-6 corner-brackets">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                [ resultado ]
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-bold text-primary text-glow">{score.pct}</span>
                <span className="text-2xl text-muted-foreground">%</span>
              </div>

              <div className="w-full h-2 bg-muted mb-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-primary transition-all duration-500"
                  style={{ width: `${score.pct}%` }}
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-6">
                {score.done} / {score.total} controles implementados
              </p>

              <div className={`p-4 border ${level.borderClass} mb-4`}>
                <div className="flex items-center gap-2 mb-2">
                  {score.pct >= 50 ? (
                    <ShieldCheck className={`h-5 w-5 ${level.textClass}`} />
                  ) : (
                    <AlertCircle className={`h-5 w-5 ${level.textClass}`} />
                  )}
                  <span className={`font-mono uppercase tracking-wider font-bold ${level.textClass}`}>
                    Nível: {level.label}
                  </span>
                </div>
                <p className="text-sm text-foreground/80">{level.desc}</p>
              </div>

              <Button
                variant="telegram"
                className="w-full"
                onClick={() => {
                  const checkedItems = items.filter((it) => checked[it.id]);
                  const missingItems = items.filter((it) => !checked[it.id]);

                  const checkedSummary = checkedItems.length
                    ? checkedItems.map((it) => `✅ ${it.text}`).join("\n")
                    : "— Nenhum controle marcado —";

                  const missingSummary = missingItems.length
                    ? missingItems.slice(0, 6).map((it) => `❌ ${it.text}`).join("\n") +
                      (missingItems.length > 6 ? `\n…e mais ${missingItems.length - 6} pendentes` : "")
                    : "— Nenhuma pendência —";

                  const message =
                    `🛡️ *Diagnóstico de Maturidade — MKF Solutions*\n\n` +
                    `📊 Pontuação: *${score.pct}%* (${score.done}/${score.total} controles)\n` +
                    `🎯 Nível: *${level.label}*\n\n` +
                    `*Controles implementados:*\n${checkedSummary}\n\n` +
                    `*Lacunas identificadas:*\n${missingSummary}\n\n` +
                    `Gostaria de uma avaliação especializada para evoluir minha postura de segurança.`;

                  window.open(
                    `https://t.me/+5574991115690?text=${encodeURIComponent(message)}`,
                    "_blank"
                  );
                }}
              >
                <Send className="mr-2 h-4 w-4" />
                Falar com Especialista no Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
