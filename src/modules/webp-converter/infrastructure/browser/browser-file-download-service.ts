import type { FileDownloadService } from "@/modules/webp-converter/domain/services/file-download-service";

export class BrowserFileDownloadService implements FileDownloadService {
  downloadFromUrl(url: string, fileName: string) {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
  }
}
