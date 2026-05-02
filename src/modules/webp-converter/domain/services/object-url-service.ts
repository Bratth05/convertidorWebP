export interface ObjectUrlService {
  create(input: File | Blob): string;
  revoke(url: string): void;
}
