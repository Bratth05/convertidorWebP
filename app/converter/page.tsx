import { WebpConverterPanel } from "@/modules/webp-converter/presentation/views/webp-converter-panel";

export default function ConverterPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_38%),linear-gradient(135deg,_#f5efe6_0%,_#dbe8d8_45%,_#b8d3dd_100%)] px-5 py-8 text-stone-900 sm:px-8 lg:px-12">
      <WebpConverterPanel />
    </main>
  );
}
