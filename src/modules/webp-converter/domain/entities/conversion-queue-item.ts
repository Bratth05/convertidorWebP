export type ConversionStatus = "pending" | "converting" | "done" | "error";

export type ConversionQueueItem = {
  id: string;
  file: File;
  relativePath: string;
  previewUrl: string;
  outputBlob?: Blob;
  outputUrl?: string;
  status: ConversionStatus;
  error?: string;
  sizeLabel: string;
};
