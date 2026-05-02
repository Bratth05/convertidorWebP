import type { ConversionQueueItem } from "@/modules/webp-converter/domain/entities/conversion-queue-item";
import type { ObjectUrlService } from "@/modules/webp-converter/domain/services/object-url-service";
import { formatBytes } from "@/shared/lib/formatters/format-bytes";

function isSupportedImage(file: File) {
  return file.type.startsWith("image/");
}

function createItemId(file: File) {
  return `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`;
}

function resolveRelativePath(file: File) {
  return file.webkitRelativePath || file.name;
}

export function createQueueItems(files: readonly File[], objectUrlService: ObjectUrlService) {
  return files
    .filter(isSupportedImage)
    .map<ConversionQueueItem>((file) => ({
      id: createItemId(file),
      file,
      relativePath: resolveRelativePath(file),
      previewUrl: objectUrlService.create(file),
      status: "pending",
      sizeLabel: formatBytes(file.size),
    }));
}
