"use client";

import { ConversionQueueList } from "@/modules/webp-converter/presentation/components/conversion-queue-list";
import { FileDropzone } from "@/modules/webp-converter/presentation/components/file-dropzone";
import { QualityToolbar } from "@/modules/webp-converter/presentation/components/quality-toolbar";
import { useWebpConverter } from "@/modules/webp-converter/presentation/hooks/use-webp-converter";

export function WebpConverterPanel() {
  const {
    fileInputRef,
    folderInputRef,
    isDragging,
    isConverting,
    isZipping,
    items,
    quality,
    qualityOptions,
    convertedCount,
    hasItems,
    hasConvertedItems,
    setQuality,
    downloadItem,
    downloadZip,
    removeItem,
    convertAll,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleFileInputChange,
    handleFolderInputChange,
  } = useWebpConverter();

  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_24px_80px_rgba(51,65,85,0.16)] backdrop-blur-xl sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">Convertidor</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Carga, convierte y descarga.</h2>
        </div>
        <div className="rounded-2xl bg-stone-900 px-4 py-3 text-right text-white shadow-lg">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-300">Listas</p>
          <p className="text-2xl font-semibold">{convertedCount}</p>
        </div>
      </div>

      <FileDropzone
        fileInputRef={fileInputRef}
        folderInputRef={folderInputRef}
        isDragging={isDragging}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onFileInputChange={handleFileInputChange}
        onFolderInputChange={handleFolderInputChange}
      />

      <QualityToolbar
        options={qualityOptions}
        quality={quality}
        hasItems={hasItems}
        hasConvertedItems={hasConvertedItems}
        isConverting={isConverting}
        isZipping={isZipping}
        onQualityChange={setQuality}
        onConvert={convertAll}
        onDownloadZip={downloadZip}
      />

      <div className="mt-5">
        <ConversionQueueList items={items} onDownload={downloadItem} onRemove={removeItem} />
      </div>
    </section>
  );
}
