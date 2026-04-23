type ImageLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const basePath =
  process.env.NODE_ENV === "production" ? "/maturat-mesure" : "";

export default function imageLoader({ src }: ImageLoaderParams): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${basePath}${src}`;
}
