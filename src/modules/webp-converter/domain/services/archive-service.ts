export type ArchiveEntry = {
  path: string;
  blob: Blob;
};

export interface ArchiveService {
  create(entries: ArchiveEntry[]): Promise<Blob>;
}
