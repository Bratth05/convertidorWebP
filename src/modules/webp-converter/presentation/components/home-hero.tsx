export function HomeHero() {
  return (
    <div className="flex flex-col justify-center">
      <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-medium text-stone-700 shadow-[0_8px_24px_rgba(62,39,35,0.08)]">
        Listo para sitios web mas ligeros
      </span>
      <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
        Convierte tus imagenes a <span className="text-teal-800">WebP</span> sin complicarte.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg">
        Sube archivos JPG, PNG, BMP, GIF o cualquier imagen compatible con el navegador.
        La conversion ocurre en tu dispositivo para que el flujo se sienta inmediato, claro y seguro.
      </p>

      <div className="mt-8 grid gap-3 text-sm text-stone-700 sm:grid-cols-3">
        <div className="rounded-3xl border border-white/70 bg-white/82 p-4 shadow-[0_10px_24px_rgba(62,39,35,0.08)]">
          <p className="font-semibold text-stone-900">1. Sube</p>
          <p className="mt-1">Arrastra o elige tus imagenes.</p>
        </div>
        <div className="rounded-3xl border border-white/70 bg-white/82 p-4 shadow-[0_10px_24px_rgba(62,39,35,0.08)]">
          <p className="font-semibold text-stone-900">2. Convierte</p>
          <p className="mt-1">Transforma todo a WebP con un clic.</p>
        </div>
        <div className="rounded-3xl border border-white/70 bg-white/82 p-4 shadow-[0_10px_24px_rgba(62,39,35,0.08)]">
          <p className="font-semibold text-stone-900">3. Descarga</p>
          <p className="mt-1">Guarda cada archivo optimizado al instante.</p>
        </div>
      </div>
    </div>
  );
}
