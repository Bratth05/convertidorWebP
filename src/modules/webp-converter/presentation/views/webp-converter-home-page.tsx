import { HomeHero } from "@/modules/webp-converter/presentation/components/home-hero";
import { WebpConverterPanel } from "@/modules/webp-converter/presentation/views/webp-converter-panel";

export function WebpConverterHomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_38%),linear-gradient(135deg,_#f5efe6_0%,_#dbe8d8_45%,_#b8d3dd_100%)] px-5 py-8 text-stone-900 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <section className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <HomeHero />
          <WebpConverterPanel />
        </section>
      </div>
    </main>
  );
}
