import { useState, useEffect, useCallback } from "react";
import { X, Gift } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email().max(255);

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed && !sessionStorage.getItem("maffran_exit_shown")) {
        setShow(true);
        sessionStorage.setItem("maffran_exit_shown", "1");
      }
    },
    [dismissed]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (result.success) {
      setSubmitted(true);
      setTimeout(() => {
        setShow(false);
        setDismissed(true);
      }, 2500);
    }
  };

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-background rounded-2xl border border-border shadow-2xl max-w-sm w-full p-8 text-center">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
          <Gift size={28} className="text-foreground" />
        </div>

        {submitted ? (
          <>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Geschafft! 🎉</h3>
            <p className="font-body text-sm text-muted-foreground">
              Ihr 10%-Rabattcode wurde an Ihre E-Mail gesendet.
            </p>
          </>
        ) : (
          <>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Warten Sie — nicht so schnell!
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Sichern Sie sich <span className="text-foreground font-semibold">10% Rabatt</span> auf Ihre erste Bestellung.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                className="w-full font-body text-sm bg-card border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                maxLength={255}
                required
              />
              <button
                type="submit"
                className="w-full font-display text-sm font-medium py-3.5 rounded-xl bg-foreground text-primary-foreground hover:opacity-90 transition-opacity"
              >
                10% Rabatt sichern
              </button>
            </form>
            <p className="font-body text-[11px] text-muted-foreground mt-3">
              Kein Spam. Jederzeit abbestellbar.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
