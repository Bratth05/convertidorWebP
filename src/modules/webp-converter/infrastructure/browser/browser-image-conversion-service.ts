import type { ImageConversionService } from "@/modules/webp-converter/domain/services/image-conversion-service";

async function loadImageFromUrl(url: string) {
  return await new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("No se pudo cargar la imagen seleccionada."));
    image.src = url;
  });
}

async function drawImageToWebPBlob(file: File, quality: number) {
  const inputUrl = URL.createObjectURL(file);

  try {
    const image = await loadImageFromUrl(inputUrl);
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Tu navegador no pudo iniciar el convertidor.");
    }

    context.drawImage(image, 0, 0, image.width, image.height);

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, "image/webp", quality);
    });

    if (!blob) {
      throw new Error("No fue posible generar el archivo WebP.");
    }

    return blob;
  } finally {
    URL.revokeObjectURL(inputUrl);
  }
}

export class BrowserImageConversionService implements ImageConversionService {
  convertToWebP(file: File, quality: number) {
    return drawImageToWebPBlob(file, quality);
  }
}
