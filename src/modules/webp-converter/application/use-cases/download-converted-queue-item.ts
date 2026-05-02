import type { ConversionQueueItem } from "@/modules/webp-converter/domain/entities/conversion-queue-item";
import type { FileDownloadService } from "@/modules/webp-converter/domain/services/file-download-service";

export function downloadConvertedQueueItem(
  item: ConversionQueueItem,
  fileDownloadService: FileDownloadService,
) {
  if (!item.outputUrl) {
    return;
  }

  const targetFileName = item.file.name.replace(/\.[^.]+$/, "") + ".webp";
  fileDownloadService.downloadFromUrl(item.outputUrl, targetFileName);
}
