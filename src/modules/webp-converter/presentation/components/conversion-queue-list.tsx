import NextImage from "next/image";

import type { ConversionQueueItem } from "@/modules/webp-converter/domain/entities/conversion-queue-item";

function getParentPath(relativePath: string) {
  const normalized = relativePath.replace(/\\/g, "/");
  const lastSlashIndex = normalized.lastIndexOf("/");
  return lastSlashIndex === -1 ? "" : normalized.slice(0, lastSlashIndex);
}

type ConversionQueueListProps = {
  items: ConversionQueueItem[];
  onDownload: (item: ConversionQueueItem) => void;
  onRemove: (id: string) => void;
};

function QueueItemStatus({ item }: { item: ConversionQueueItem }) {
  if (item.status === "pending") {
    return <span className="text-stone-600">Lista para convertir</span>;
  }

  if (item.status === "converting") {
    return <span className="text-amber-700">Convirtiendo...</span>;
  }

  if (item.status === "done") {
    return <span className="text-teal-700">WebP generado</span>;
  }

  return <span className="text-rose-700">{item.error}</span>;
}

export function ConversionQueueList({
  items,
  onDownload,
  onRemove,
}: ConversionQueueListProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-stone-200 bg-white/60 p-5 text-sm text-stone-600">
        Aun no hay imagenes cargadas. Cuando agregues archivos, apareceran aqui listas para convertir.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <article
          key={item.id}
          className="flex flex-col gap-4 rounded-[1.5rem] border border-stone-200 bg-white/85 p-4 shadow-[0_10px_30px_rgba(51,65,85,0.08)] sm:flex-row sm:items-center"
        >
          <NextImage
            src={item.previewUrl}
            alt={item.file.name}
            width={80}
            height={80}
            unoptimized
            className="h-20 w-20 rounded-2xl object-cover"
          />

          <div className="min-w-0 flex-1">
            <p className="truncate font-medium text-stone-900">{item.file.name}</p>
            {getParentPath(item.relativePath) ? (
              <p className="mt-1 truncate text-xs text-stone-400">{getParentPath(item.relativePath)}</p>
            ) : null}
            <p className="mt-1 text-sm text-stone-500">{item.sizeLabel}</p>
            <p className="mt-2 text-sm">
              <QueueItemStatus item={item} />
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-500 hover:text-stone-900"
            >
              Quitar
            </button>
            <button
              type="button"
              onClick={() => onDownload(item)}
              disabled={!item.outputUrl}
              className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-400"
            >
              Descargar
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
