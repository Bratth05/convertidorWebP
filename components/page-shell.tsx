import type { ReactNode } from "react";

interface PageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_34%),linear-gradient(135deg,_#f5efe6_0%,_#dbe8d8_45%,_#b8d3dd_100%)] px-5 py-8 text-stone-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/88 shadow-[0_18px_48px_rgba(51,65,85,0.12)]">
          <div className="border-b border-white/60 px-6 py-8 sm:px-8 lg:px-10">
            <span className="inline-flex rounded-full border border-brand-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-sm">
              {eyebrow}
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg">
              {description}
            </p>
          </div>

          <div className="px-6 py-8 sm:px-8 lg:px-10">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
