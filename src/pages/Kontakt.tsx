import { useState } from "react";
import { Mail, Send, CheckCircle, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = "Bitte füllen Sie dieses Feld korrekt aus.";
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full font-body text-sm bg-card border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 lg:py-20 max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
              <MessageSquare size={28} className="text-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight-display text-foreground mb-3">
              Kontakt
            </h1>
            <p className="font-body text-sm text-muted-foreground">
              Haben Sie Fragen? Schreiben Sie uns — wir antworten innerhalb von 24 Stunden.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-8 p-4 rounded-xl bg-muted">
            <Mail size={16} className="text-foreground" />
            <span className="font-body text-sm text-foreground font-medium">support@maffran.com</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {submitted ? (
            <div className="p-8 rounded-2xl border border-border bg-card text-center">
              <CheckCircle size={32} className="text-success mx-auto mb-4" />
              <h2 className="font-display text-lg font-semibold text-foreground mb-2">Nachricht gesendet!</h2>
              <p className="font-body text-sm text-muted-foreground">
                Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ihr vollständiger Name"
                  className={inputClass("name")}
                  maxLength={100}
                />
                {errors.name && <p className="font-body text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1.5 block">E-Mail</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ihre@email.de"
                  className={inputClass("email")}
                  maxLength={255}
                />
                {errors.email && <p className="font-body text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1.5 block">Nachricht</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Wie können wir Ihnen helfen?"
                  rows={5}
                  className={inputClass("message")}
                  maxLength={2000}
                />
                {errors.message && <p className="font-body text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-display text-sm font-medium py-4 rounded-xl bg-foreground text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
                Nachricht senden
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Kontakt;
