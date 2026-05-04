import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const pillars = [
  {
    title: "Mision",
    description:
      "Construir una herramienta simple, rapida y privada para convertir imagenes sin depender de subidas a servidores ni de flujos pesados.",
  },
  {
    title: "Objetivo",
    description:
      "Dar una experiencia clara a desarrolladores, equipos de contenido y personas que solo quieren optimizar imagenes sin friccion.",
  },
];

const technologies = [
  { name: "React 19", description: "Interfaz fluida para una experiencia de conversion inmediata." },
  { name: "Next.js 15", description: "Base moderna para crecer rutas, rendimiento y mantenimiento." },
  { name: "Tailwind CSS", description: "Sistema visual flexible para sostener una UI consistente." },
  { name: "TypeScript", description: "Capas mas seguras para evolucionar la aplicacion con confianza." },
  { name: "Arquitectura limpia", description: "Separacion de dominio, infraestructura y presentacion." },
  { name: "Procesamiento local", description: "La conversion ocurre en el navegador del usuario." },
];

const team = [
  {
    name: "Tu nombre",
    role: "Desarrollo principal",
    description: "Responsable de la experiencia, la arquitectura y la evolucion del convertidor.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Sobre el proyecto"
      title="Una herramienta pensada para convertir sin ruido."
      description="Esta app busca que el proceso de optimizar imagenes se sienta ligero, confiable y visualmente ordenado en cada pantalla."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-[1.75rem] border border-white/75 bg-white/80 p-6 shadow-[0_18px_50px_rgba(51,65,85,0.1)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{pillar.title}</p>
            <p className="mt-3 text-base leading-7 text-stone-700">{pillar.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-[1.75rem] border border-white/75 bg-white/80 p-6 shadow-[0_18px_50px_rgba(51,65,85,0.1)]">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-stone-950">Tecnologia que sostiene la experiencia</h2>
          <p className="mt-3 text-base leading-7 text-stone-700">
            La base tecnica esta organizada para que la interfaz se vea limpia hoy y siga siendo mantenible a medida que crezca.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <article
              key={technology.name}
              className="rounded-[1.5rem] border border-stone-200/80 bg-stone-50/85 p-5"
            >
              <h3 className="text-lg font-semibold text-stone-900">{technology.name}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">{technology.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] border border-white/75 bg-white/80 p-6 shadow-[0_18px_50px_rgba(51,65,85,0.1)]">
          <h2 className="text-2xl font-semibold text-stone-950">Equipo</h2>
          <p className="mt-3 text-base leading-7 text-stone-700">
            El proyecto puede crecer en equipo, pero hoy mantiene un tono cercano y una ejecucion enfocada en claridad.
          </p>
          <div className="mt-6 space-y-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-[1.5rem] border border-stone-200/80 bg-stone-50/85 p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-lg font-semibold text-white">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900">{member.name}</h3>
                    <p className="text-sm font-medium text-brand-700">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-stone-700">{member.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-brand-700 p-6 text-white shadow-[0_22px_55px_rgba(30,108,90,0.28)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Siguiente paso</p>
          <h2 className="mt-3 text-3xl font-semibold">Listo para optimizar tus imagenes?</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-brand-50">
            La app ya esta preparada para que cargues, conviertas y descargues sin interrupciones ni pasos extra.
          </p>
          <Link
            href="/converter"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition-colors duration-300 hover:bg-brand-50"
          >
            Ir al convertidor
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
