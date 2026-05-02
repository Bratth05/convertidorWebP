export interface FileDownloadService {
  downloadFromUrl(url: string, fileName: string): void;
}
