import type { ArchiveService } from "@/modules/webp-converter/domain/services/archive-service";
import type { FileDownloadService } from "@/modules/webp-converter/domain/services/file-download-service";
import type { ImageConversionService } from "@/modules/webp-converter/domain/services/image-conversion-service";
import type { ObjectUrlService } from "@/modules/webp-converter/domain/services/object-url-service";
import { BrowserFileDownloadService } from "@/modules/webp-converter/infrastructure/browser/browser-file-download-service";
import { BrowserImageConversionService } from "@/modules/webp-converter/infrastructure/browser/browser-image-conversion-service";
import { BrowserObjectUrlService } from "@/modules/webp-converter/infrastructure/browser/browser-object-url-service";
import { BrowserZipArchiveService } from "@/modules/webp-converter/infrastructure/browser/browser-zip-archive-service";

type WebpConverterDependencies = {
  archiveService: ArchiveService;
  fileDownloadService: FileDownloadService;
  imageConversionService: ImageConversionService;
  objectUrlService: ObjectUrlService;
};

export const webpConverterDependencies: WebpConverterDependencies = {
  archiveService: new BrowserZipArchiveService(),
  fileDownloadService: new BrowserFileDownloadService(),
  imageConversionService: new BrowserImageConversionService(),
  objectUrlService: new BrowserObjectUrlService(),
};
