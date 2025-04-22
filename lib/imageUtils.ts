export function getImageSrc(src: string): string {
  return process.env.NODE_ENV === "production"
    ? `/shreyapatill.github.io${src}`
    : src;
}