import { PageShell } from "@/components/page-shell";

const steps = [
  {
    title: "Sube tus imagenes",
    description:
      "Arrastra tus archivos a la zona de carga o seleccionalos manualmente. El flujo acepta varios formatos comunes del navegador.",
  },
  {
    title: "Define la calidad",
    description:
      "Elige el nivel de compresion segun el equilibrio que quieras entre peso final y nitidez visual.",
  },
  {
    title: "Convierte en local",
    description:
      "La app procesa los archivos en tu propio navegador para mantener la experiencia rapida y privada.",
  },
  {
    title: "Descarga individual o en lote",
    description:
      "Guarda cada resultado por separado o genera un ZIP si quieres salir con todo organizado en un solo paso.",
  },
];

const features = [
  { title: "Rapido", description: "La conversion se siente inmediata y evita tiempos de espera innecesarios." },
  { title: "Privado", description: "Las imagenes no salen del navegador durante el proceso de conversion." },
  { title: "Flexible", description: "Puedes trabajar un archivo o una cola completa sin cambiar de pantalla." },
  { title: "Simple", description: "Toda la interfaz esta pensada para que cada accion se entienda al primer vistazo." },
];

const tips = [
  "WebP reduce el peso de archivo frente a formatos tradicionales sin sacrificar demasiado detalle.",
  "Usa calidad alta para imagenes destacadas y calidad media para galerias o contenido editorial.",
  "Aprovecha la carga multiple para convertir lotes completos sin repetir pasos.",
  "Descargar como ZIP ayuda cuando quieres mantener carpetas o entregables mejor ordenados.",
];

export default function HowToUsePage() {
  return (
    <PageShell
      eyebrow="Guia de uso"
      title="Cuatro pasos para convertir con un flujo claro."
      description="La idea es que la pantalla te guie sola. Aqui tienes el recorrido completo para que cada accion tenga sentido desde el primer click."
    >
      <section className="grid gap-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="grid gap-4 rounded-[1.75rem] border border-white/75 bg-white/80 p-5 shadow-[0_18px_50px_rgba(51,65,85,0.1)] sm:grid-cols-[auto_1fr] sm:items-start sm:p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-lg font-semibold text-white">
              {index + 1}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-stone-950">{step.title}</h2>
              <p className="mt-2 text-base leading-7 text-stone-700">{step.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[1.75rem] border border-white/75 bg-white/80 p-6 shadow-[0_18px_50px_rgba(51,65,85,0.1)]">
        <h2 className="text-2xl font-semibold text-stone-950">Lo que hace que el flujo se sienta ligero</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.5rem] border border-stone-200/80 bg-stone-50/85 p-5"
            >
              <h3 className="text-lg font-semibold text-stone-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[1.75rem] border border-brand-100 bg-brand-50/85 p-6 shadow-[0_18px_50px_rgba(51,65,85,0.08)]">
        <h2 className="text-2xl font-semibold text-stone-950">Consejos utiles</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-stone-700 sm:text-base">
          {tips.map((tip) => (
            <li key={tip} className="rounded-2xl border border-brand-100/80 bg-white/75 px-4 py-3">
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
