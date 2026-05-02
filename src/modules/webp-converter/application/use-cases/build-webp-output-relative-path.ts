export function buildWebpOutputRelativePath(relativePath: string) {
  const normalizedPath = relativePath.replace(/\\/g, "/");
  return normalizedPath.replace(/\.[^.\/]+$/, "") + ".webp";
}
