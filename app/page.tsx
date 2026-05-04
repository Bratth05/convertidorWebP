import Link from "next/link";
import { WebpConverterHomePage } from "@/modules/webp-converter/presentation/views/webp-converter-home-page";

export default function Home() {
  return (
    <main>
      <WebpConverterHomePage />

      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/70 bg-white/88 px-6 py-8 text-center shadow-[0_18px_48px_rgba(51,65,85,0.12)] sm:px-10">
            <span className="inline-flex rounded-full border border-brand-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-sm">
              Explora mas
            </span>
            <h2 className="mt-5 text-3xl font-semibold text-stone-950 sm:text-4xl">
              Lleva el flujo mas alla del primer archivo.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg">
              Aprende mejores practicas, entiende el proceso y usa la app con una experiencia mas clara de principio a fin.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/how-to-use"
                className="rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-brand-800"
              >
                Como usar
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-brand-200 bg-white px-6 py-3 font-semibold text-brand-700 transition-colors duration-300 hover:bg-brand-50"
              >
                Sobre nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
