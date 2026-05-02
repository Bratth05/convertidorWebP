export interface ImageConversionService {
  convertToWebP(file: File, quality: number): Promise<Blob>;
}
