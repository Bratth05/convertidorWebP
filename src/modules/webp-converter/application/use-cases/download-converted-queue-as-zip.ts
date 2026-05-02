import { buildWebpOutputRelativePath } from "@/modules/webp-converter/application/use-cases/build-webp-output-relative-path";
import type { ConversionQueueItem } from "@/modules/webp-converter/domain/entities/conversion-queue-item";
import type { ArchiveService } from "@/modules/webp-converter/domain/services/archive-service";
import type { FileDownloadService } from "@/modules/webp-converter/domain/services/file-download-service";
import type { ObjectUrlService } from "@/modules/webp-converter/domain/services/object-url-service";

type DownloadConvertedQueueAsZipDependencies = {
  archiveService: ArchiveService;
  fileDownloadService: FileDownloadService;
  objectUrlService: ObjectUrlService;
};

function resolveZipFileName(items: ConversionQueueItem[]) {
  const firstPath = items[0]?.relativePath;
  if (!firstPath) {
    return "imagenes-webp.zip";
  }

  const rootFolder = firstPath.split("/")[0];
  const everyFileSharesRoot = items.every((item) => item.relativePath.startsWith(`${rootFolder}/`));

  return everyFileSharesRoot ? `${rootFolder}-webp.zip` : "imagenes-webp.zip";
}

export async function downloadConvertedQueueAsZip(
  items: ConversionQueueItem[],
  dependencies: DownloadConvertedQueueAsZipDependencies,
) {
  const convertedItems = items.filter(
    (item): item is ConversionQueueItem & { outputBlob: Blob } => Boolean(item.outputBlob),
  );

  if (convertedItems.length === 0) {
    return;
  }

  const archiveBlob = await dependencies.archiveService.create(
    convertedItems.map((item) => ({
      path: buildWebpOutputRelativePath(item.relativePath),
      blob: item.outputBlob,
    })),
  );

  const downloadUrl = dependencies.objectUrlService.create(archiveBlob);
  dependencies.fileDownloadService.downloadFromUrl(downloadUrl, resolveZipFileName(convertedItems));

  window.setTimeout(() => {
    dependencies.objectUrlService.revoke(downloadUrl);
  }, 1000);
}
