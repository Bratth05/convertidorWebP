import type { ConversionQualityOption } from "@/modules/webp-converter/domain/value-objects/conversion-quality-option";

type QualityToolbarProps = {
  options: ConversionQualityOption[];
  quality: number;
  hasItems: boolean;
  hasConvertedItems: boolean;
  isConverting: boolean;
  isZipping: boolean;
  onQualityChange: (quality: number) => void;
  onConvert: () => void;
  onDownloadZip: () => void;
};

export function QualityToolbar({
  options,
  quality,
  hasItems,
  hasConvertedItems,
  isConverting,
  isZipping,
  onQualityChange,
  onConvert,
  onDownloadZip,
}: QualityToolbarProps) {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-[1.5rem] bg-stone-900 p-4 text-white sm:flex-row sm:items-center sm:justify-between">
      <label className="flex items-center gap-3 text-sm">
        <span className="text-stone-300">Calidad</span>
        <select
          value={quality}
          onChange={(event) => onQualityChange(Number(event.target.value))}
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-stone-900">
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onDownloadZip}
          disabled={!hasConvertedItems || isConverting || isZipping}
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:border-white/10 disabled:text-stone-500"
        >
          {isZipping ? "Preparando ZIP..." : "Descargar ZIP"}
        </button>
        <button
          type="button"
          onClick={onConvert}
          disabled={!hasItems || isConverting}
          className="rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-teal-400 disabled:cursor-not-allowed disabled:bg-stone-700 disabled:text-stone-400"
        >
          {isConverting ? "Convirtiendo..." : "Convertir a WebP"}
        </button>
      </div>
    </div>
  );
}
