export function getImageSrc(src: string): string {
  return process.env.NODE_ENV === "production"
    ? `/personal-website${src}`
    : src;
}