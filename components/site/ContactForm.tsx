"use client";

import { Button } from "@/components/ui/Button";
import { COMPANY, CONTACT_REASONS, SOLUTION_FAMILIES } from "@/lib/data";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({
    solution: SOLUTION_FAMILIES[0]?.name ?? "",
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const mailtoHref = (() => {
    const lines = [
      `Société : ${form.company || "-"}`,
      `Nom : ${form.name || "-"}`,
      `Email : ${form.email || "-"}`,
      `Téléphone : ${form.phone || "-"}`,
      `Famille de solutions : ${form.solution || "-"}`,
      "",
      "Besoin :",
      form.message || "-",
    ];

    const subject = form.company
      ? `Demande de contact - ${form.company}`
      : "Demande de contact - Maturat Mesure";

    return `mailto:${COMPANY.primaryEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  })();

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <form
        className="panel rounded-[2rem] p-6 sm:p-8"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = mailtoHref;
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field">
            <span>Famille de solutions</span>
            <select
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  solution: event.target.value,
                }))
              }
              value={form.solution}
            >
              {SOLUTION_FAMILIES.map((family) => (
                <option key={family.slug} value={family.name}>
                  {family.name}
                </option>
              ))}
              <option value="EXPEL">EXPEL</option>
            </select>
          </label>

          <label className="field">
            <span>Société</span>
            <input
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  company: event.target.value,
                }))
              }
              placeholder="Nom de votre société"
              value={form.company}
            />
          </label>

          <label className="field">
            <span>Nom</span>
            <input
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              placeholder="Votre nom"
              value={form.name}
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              placeholder="vous@entreprise.fr"
              type="email"
              value={form.email}
            />
          </label>

          <label className="field sm:col-span-2">
            <span>Téléphone</span>
            <input
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
              placeholder="Numéro direct ou standard"
              value={form.phone}
            />
          </label>

          <label className="field sm:col-span-2">
            <span>Votre besoin</span>
            <textarea
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
              placeholder="Contexte, application, contraintes, délai, documentation souhaitée..."
              rows={7}
              value={form.message}
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-[var(--color-muted)]">
            L’envoi ouvre votre messagerie avec un message pré-rempli pour
            accélérer le premier échange.
          </p>
          <Button size="lg" type="submit">
            Préparer l’e-mail
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>

      <aside className="space-y-4">
        <div className="panel rounded-[2rem] p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-blue)]">
            Motifs fréquents
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
            {CONTACT_REASONS.map((reason) => (
              <li className="flex items-start gap-3" key={reason}>
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel rounded-[2rem] p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-blue)]">
            Coordonnées directes
          </p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
            <p>
              <strong className="font-medium text-[var(--color-ink)]">
                Téléphone
              </strong>
              <br />
              <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
            </p>
            <p>
              <strong className="font-medium text-[var(--color-ink)]">
                E-mail
              </strong>
              <br />
              <a href={`mailto:${COMPANY.primaryEmail}`}>{COMPANY.primaryEmail}</a>
              <br />
              <a href={`mailto:${COMPANY.secondaryEmail}`}>
                {COMPANY.secondaryEmail}
              </a>
            </p>
            <p>
              <strong className="font-medium text-[var(--color-ink)]">
                Adresse
              </strong>
              <br />
              {COMPANY.addressLine2}
              <br />
              {COMPANY.addressLine1}
              <br />
              {COMPANY.postalCode} {COMPANY.city}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
