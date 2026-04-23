export function HeroGraphic() {
  return (
    <div className="tech-frame relative overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-panel)] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
      <div className="tech-beam pointer-events-none absolute inset-x-8 top-0 h-32 rounded-full blur-3xl" />
      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="relative min-h-[380px] overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,244,250,0.9))]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,74,141,0.16),transparent_48%),linear-gradient(rgba(12,58,101,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(12,58,101,0.08)_1px,transparent_1px)] [background-size:100%_100%,34px_34px,34px_34px]" />
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            fill="none"
            viewBox="0 0 640 420"
          >
            <defs>
              <linearGradient id="field-blue" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#0C4A6E" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.22" />
              </linearGradient>
              <linearGradient id="field-signal" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            <circle cx="510" cy="90" fill="url(#field-blue)" r="116" />
            <circle cx="150" cy="340" fill="url(#field-blue)" r="156" />
            <path
              d="M-40 255 C 70 190, 135 196, 210 224 S 365 286, 432 224 S 548 132, 700 176"
              stroke="url(#field-signal)"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <path
              d="M-40 286 C 72 222, 133 228, 210 254 S 365 316, 432 258 S 550 167, 700 211"
              stroke="#94A3B8"
              strokeDasharray="10 10"
              strokeLinecap="round"
              strokeOpacity="0.65"
              strokeWidth="2"
            />
            <path
              d="M78 112 H 574"
              stroke="#0F172A"
              strokeDasharray="6 10"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
            <path
              d="M78 154 H 574"
              stroke="#0F172A"
              strokeDasharray="6 10"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
            <path
              d="M78 196 H 574"
              stroke="#0F172A"
              strokeDasharray="6 10"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
            <path
              d="M110 78 V 338"
              stroke="#0F172A"
              strokeDasharray="6 10"
              strokeOpacity="0.14"
              strokeWidth="1.5"
            />
            <path
              d="M238 78 V 338"
              stroke="#0F172A"
              strokeDasharray="6 10"
              strokeOpacity="0.14"
              strokeWidth="1.5"
            />
            <path
              d="M366 78 V 338"
              stroke="#0F172A"
              strokeDasharray="6 10"
              strokeOpacity="0.14"
              strokeWidth="1.5"
            />
            <path
              d="M494 78 V 338"
              stroke="#0F172A"
              strokeDasharray="6 10"
              strokeOpacity="0.14"
              strokeWidth="1.5"
            />
          </svg>

          <div className="relative flex h-full flex-col justify-between p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue)]">
                  Champ technique
                </p>
                <h3 className="mt-3 max-w-sm text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  Air, mesure, signal.
                </h3>
              </div>
              <div className="panel-soft min-w-[132px] rounded-2xl px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
                  Focus
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">
                  EXPEL en vitrine
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-card rounded-[1.25rem] p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
                  Air comprimé
                </p>
                <div className="mt-3 h-16 rounded-2xl bg-[linear-gradient(135deg,rgba(236,107,44,0.12),rgba(255,255,255,0.92))] p-3">
                  <div className="flex h-full items-end gap-2">
                    <span className="w-3 rounded-full bg-[var(--color-signal)]/45" style={{ height: "38%" }} />
                    <span className="w-3 rounded-full bg-[var(--color-signal)]/55" style={{ height: "62%" }} />
                    <span className="w-3 rounded-full bg-[var(--color-signal)]/85" style={{ height: "88%" }} />
                    <span className="w-3 rounded-full bg-[var(--color-signal)]/65" style={{ height: "54%" }} />
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-[1.25rem] p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
                  Mesure
                </p>
                <div className="mt-3 flex h-16 items-center justify-center rounded-2xl bg-white/80">
                  <div className="relative h-12 w-12 rounded-full border border-[var(--color-line-strong)]">
                    <span className="absolute left-1/2 top-2 h-3.5 w-px -translate-x-1/2 bg-[var(--color-blue)]" />
                    <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 bg-[var(--color-line-strong)]" />
                    <span className="absolute left-[52%] top-[38%] h-4 w-px -rotate-45 bg-[var(--color-signal)]" />
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-[1.25rem] p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
                  Signal
                </p>
                <div className="mt-3 flex h-16 items-center rounded-2xl bg-white/80 px-3">
                  <div className="h-px w-full bg-[linear-gradient(90deg,rgba(15,23,42,0.18),rgba(15,23,42,0.18))]">
                    <svg className="-mt-5 h-10 w-full" fill="none" viewBox="0 0 160 40">
                      <path
                        d="M0 24 C 16 24, 18 10, 32 10 S 48 30, 64 30 80 14, 96 14 112 30, 128 30 146 18, 160 18"
                        stroke="#0B4A8D"
                        strokeWidth="2.4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="panel rounded-[1.5rem] p-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-blue)]">
              Repères
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                Mesure industrielle, air comprimé et signal dans une même lecture.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                Huit familles pour orienter rapidement le besoin.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                EXPEL mis en avant comme solution de traitement d’air comprimé.
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-[var(--color-line-strong)] bg-[var(--color-ink)] p-5 text-white">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
              Orientation contact
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  01
                </p>
                <p className="mt-2 text-lg font-medium tracking-[-0.04em]">
                  Identifier la bonne famille
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  02
                </p>
                <p className="mt-2 text-lg font-medium tracking-[-0.04em]">
                  Demander un échange technique
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  03
                </p>
                <p className="mt-2 text-lg font-medium tracking-[-0.04em]">
                  Accéder vite au bon interlocuteur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
