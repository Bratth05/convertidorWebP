import type { ConversionQueueItem } from "@/modules/webp-converter/domain/entities/conversion-queue-item";
import type { ImageConversionService } from "@/modules/webp-converter/domain/services/image-conversion-service";
import type { ObjectUrlService } from "@/modules/webp-converter/domain/services/object-url-service";

type ConvertQueueItemToWebPDependencies = {
  imageConversionService: ImageConversionService;
  objectUrlService: ObjectUrlService;
};

export async function convertQueueItemToWebP(
  item: ConversionQueueItem,
  quality: number,
  dependencies: ConvertQueueItemToWebPDependencies,
) {
  const outputBlob = await dependencies.imageConversionService.convertToWebP(item.file, quality);
  const outputUrl = dependencies.objectUrlService.create(outputBlob);

  return {
    outputBlob,
    outputUrl,
  };
}
