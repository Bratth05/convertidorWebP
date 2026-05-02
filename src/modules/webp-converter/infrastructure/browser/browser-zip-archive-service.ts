import JSZip from "jszip";

import type { ArchiveEntry, ArchiveService } from "@/modules/webp-converter/domain/services/archive-service";

export class BrowserZipArchiveService implements ArchiveService {
  async create(entries: ArchiveEntry[]) {
    const zip = new JSZip();

    entries.forEach((entry) => {
      zip.file(entry.path, entry.blob);
    });

    return zip.generateAsync({ type: "blob" });
  }
}
