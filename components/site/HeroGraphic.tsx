import Image from "next/image";

export function HeroGraphic() {
  return (
    <div className="relative overflow-hidden rounded-[2.4rem] border border-[var(--color-line-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(231,239,248,0.92))] p-4 shadow-[0_28px_90px_rgba(15,23,42,0.14)] sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,74,141,0.16),transparent_34%),radial-gradient(circle_at_85%_22%,rgba(236,107,44,0.14),transparent_20%),linear-gradient(rgba(11,74,141,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(11,74,141,0.05)_1px,transparent_1px)] [background-size:100%_100%,100%_100%,30px_30px,30px_30px]" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-28 rounded-full bg-[radial-gradient(circle,rgba(236,107,44,0.22),transparent_66%)] blur-3xl" />

      <div className="relative grid gap-4 lg:grid-cols-[1.2fr_0.82fr]">
        <div className="relative min-h-[440px] overflow-hidden rounded-[1.9rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,246,251,0.9))]">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            fill="none"
            viewBox="0 0 760 520"
          >
            <defs>
              <linearGradient id="hero-field-blue" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#0B4A8D" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.24" />
              </linearGradient>
              <linearGradient id="hero-field-signal" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#EC6B2C" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#EC6B2C" stopOpacity="0.72" />
              </linearGradient>
            </defs>

            <circle cx="612" cy="106" fill="url(#hero-field-blue)" r="132" />
            <circle cx="164" cy="412" fill="url(#hero-field-blue)" r="176" />

            <path
              d="M-40 286 C 68 222, 140 214, 236 248 S 430 344, 540 278 708 154, 830 208"
              stroke="url(#hero-field-signal)"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <path
              d="M-30 324 C 70 262, 138 254, 232 286 S 438 382, 546 314 712 194, 826 244"
              stroke="#0B4A8D"
              strokeDasharray="8 12"
              strokeLinecap="round"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <path
              d="M100 110 H 664"
              stroke="#0F172A"
              strokeDasharray="6 12"
              strokeOpacity="0.16"
              strokeWidth="1.5"
            />
            <path
              d="M100 168 H 664"
              stroke="#0F172A"
              strokeDasharray="6 12"
              strokeOpacity="0.16"
              strokeWidth="1.5"
            />
            <path
              d="M100 226 H 664"
              stroke="#0F172A"
              strokeDasharray="6 12"
              strokeOpacity="0.16"
              strokeWidth="1.5"
            />
            <path
              d="M140 92 V 414"
              stroke="#0F172A"
              strokeDasharray="6 12"
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
            <path
              d="M278 92 V 414"
              stroke="#0F172A"
              strokeDasharray="6 12"
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
            <path
              d="M416 92 V 414"
              stroke="#0F172A"
              strokeDasharray="6 12"
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
            <path
              d="M554 92 V 414"
              stroke="#0F172A"
              strokeDasharray="6 12"
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
          </svg>

          <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-blue)]">
                  Visualisation technique
                </p>
                <h3 className="mt-3 max-w-sm text-[1.95rem] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                  Traitement d&apos;air, mesure et signal dans une même lecture.
                </h3>
              </div>
              <div className="rounded-full border border-[var(--color-line)] bg-white/84 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-blue)]">
                EXPEL
              </div>
            </div>

            <div className="mx-auto w-full max-w-[15rem]">
              <div className="overflow-hidden rounded-[1.8rem] border border-[var(--color-line-strong)] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.10)]">
                <div className="relative h-[13rem] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(230,239,249,0.6))]">
                  <Image
                    alt="Filtre à air comprimé EXPEL"
                    className="object-contain p-6"
                    fill
                    priority
                    sizes="(min-width: 1024px) 15rem, 60vw"
                    src="/products/expel.jpg"
                  />
                </div>
                <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)] bg-white">
                  {[
                    { label: "Consommable", value: "Sans filtre à changer" },
                    { label: "Corps & tête", value: "Inox 304" },
                    { label: "Débit nominal", value: "850 l/min" },
                  ].map((row) => (
                    <div className="px-4 py-2.5" key={row.label}>
                      <p className="text-[9px] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                        {row.label}
                      </p>
                      <p className="mt-0.5 text-[11px] font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                        {row.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {[
                { label: "Air comprimé", desc: "Purge & filtration" },
                { label: "Mesure", desc: "Pression & niveau" },
                { label: "Signal", desc: "Conversion" },
              ].map(({ label, desc }) => (
                <div key={label} className="glass-card min-w-0 flex-1 rounded-[1rem] p-3">
                  <p className="text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-[var(--color-blue)]">
                    {label}
                  </p>
                  <p className="mt-1.5 text-[10px] leading-snug text-[var(--color-muted)]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="panel rounded-[1.7rem] p-5">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-blue)]">
              Lecture directe
            </p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/74 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                  01
                </p>
                <p className="mt-2 text-base font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                  Identifier une famille de solutions rapidement
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/74 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                  02
                </p>
                <p className="mt-2 text-base font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                  Repérer un produit ou un besoin applicatif
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/74 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                  03
                </p>
                <p className="mt-2 text-base font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                  Aller vite vers le bon contact
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.7rem] border border-[var(--color-line-strong)] bg-[var(--color-ink)] p-5 text-white">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/46">
              Offre phare
            </p>
            <h3 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.05em]">
              EXPEL — filtration sans consommable.
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-[1.1rem] border border-white/10 bg-white/6 p-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Débit</p>
                <p className="mt-1.5 text-base font-semibold tracking-[-0.04em]">850 l/min</p>
              </div>
              <div className="rounded-[1.1rem] border border-white/10 bg-white/6 p-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Pression</p>
                <p className="mt-1.5 text-base font-semibold tracking-[-0.04em]">15 bar(g)</p>
              </div>
              <div className="rounded-[1.1rem] border border-[var(--color-signal)]/30 bg-[var(--color-signal)]/8 p-3 col-span-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-signal)]/80">Filtration</p>
                <p className="mt-1.5 text-base font-semibold tracking-[-0.04em]">99,9999 %</p>
                <p className="mt-0.5 text-[11px] text-white/40">eau, huile, solides ≤ 1 µm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
