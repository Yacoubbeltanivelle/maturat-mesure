"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SUBJECTS = [
  { value: "", label: "Sélectionnez un objet…" },
  { value: "devis", label: "Demande de devis" },
  { value: "expel", label: "Renseignement EXPEL" },
  { value: "instrumentation", label: "Instrumentation / pression / niveau" },
  { value: "controle", label: "Contrôle & automatisme" },
  { value: "energie", label: "Énergie électrique" },
  { value: "analyse", label: "Analyse liquide" },
  { value: "autre", label: "Autre renseignement" },
];

interface Field {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  component?: "textarea" | "select";
}

const FIELDS: Field[] = [
  { id: "firstname", label: "Prénom", placeholder: "Jean", required: true },
  { id: "lastname", label: "Nom", placeholder: "Dupont", required: true },
  { id: "company", label: "Société", placeholder: "Votre entreprise" },
  { id: "email", label: "Email", type: "email", placeholder: "jean.dupont@entreprise.fr", required: true },
  { id: "phone", label: "Téléphone", type: "tel", placeholder: "04 XX XX XX XX" },
  { id: "subject", label: "Objet", component: "select", required: true },
  { id: "message", label: "Message", component: "textarea", placeholder: "Décrivez votre besoin, votre application, les conditions d'utilisation…", required: true },
];

const inputClass = cn(
  "w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-ink",
  "placeholder:text-muted/50 outline-none transition-all duration-200",
  "focus:border-blue focus:ring-3 focus:ring-blue/10"
);

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle size={28} className="text-green-500" />
        </div>
        <h3 className="font-bold text-ink text-lg">Message envoyé !</h3>
        <p className="text-sm text-muted max-w-xs">
          Nous vous répondrons sous 48h ouvrées. Merci de votre confiance.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-medium text-orange hover:text-orange-dark transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {FIELDS.slice(0, 2).map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-xs font-semibold text-ink/70 mb-1.5">
              {f.label} {f.required && <span className="text-orange">*</span>}
            </label>
            <input id={f.id} name={f.id} type={f.type || "text"} placeholder={f.placeholder} required={f.required} className={inputClass} />
          </div>
        ))}
      </div>

      {FIELDS.slice(2, 4).map((f) => (
        <div key={f.id} className="mb-5">
          <label htmlFor={f.id} className="block text-xs font-semibold text-ink/70 mb-1.5">
            {f.label} {f.required && <span className="text-orange">*</span>}
          </label>
          {f.component === "select" ? (
            <select id={f.id} name={f.id} required={f.required} className={inputClass}>
              {SUBJECTS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          ) : (
            <input id={f.id} name={f.id} type={f.type || "text"} placeholder={f.placeholder} required={f.required} className={inputClass} />
          )}
        </div>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {FIELDS.slice(4, 6).map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-xs font-semibold text-ink/70 mb-1.5">
              {f.label} {f.required && <span className="text-orange">*</span>}
            </label>
            {f.component === "select" ? (
              <select id={f.id} name={f.id} required={f.required} className={inputClass}>
                {SUBJECTS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ) : (
              <input id={f.id} name={f.id} type={f.type || "text"} placeholder={f.placeholder} required={f.required} className={inputClass} />
            )}
          </div>
        ))}
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block text-xs font-semibold text-ink/70 mb-1.5">
          Message <span className="text-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre besoin, votre application, les conditions d'utilisation…"
          className={cn(inputClass, "resize-y min-h-[120px]")}
        />
      </div>

      <div className="flex items-start gap-3 mb-7">
        <input type="checkbox" id="consent" name="consent" required className="mt-0.5 accent-orange" />
        <label htmlFor="consent" className="text-xs text-muted leading-relaxed">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande conformément à notre{" "}
          <a href="/mentions-legales#confidentialite" className="text-orange hover:underline">politique de confidentialité</a>.
        </label>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Envoi en cours…" : (
          <>Envoyer le message <Send size={17} /></>
        )}
      </Button>
    </form>
  );
}
