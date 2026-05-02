import type { ObjectUrlService } from "@/modules/webp-converter/domain/services/object-url-service";

export class BrowserObjectUrlService implements ObjectUrlService {
  create(input: File | Blob) {
    return URL.createObjectURL(input);
  }

  revoke(url: string) {
    URL.revokeObjectURL(url);
  }
}
