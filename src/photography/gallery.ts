export interface PhotoAsset {
  src: string;
  name: string;
  alt: string;
}

const photoModules = import.meta.glob<{ default: string }>(
  "/public/photography/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const toTitleCase = (value: string) =>
  value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join(" ");

export const galleryPhotos: PhotoAsset[] = Object.entries(photoModules)
  .map(([path, module]) => {
    const src = module.default;
    const fileName = path.split("/").pop() ?? path;
    const baseName = fileName.replace(/\.[^.]+$/, "");
    const alt = toTitleCase(baseName);

    return {
      src,
      name: fileName,
      alt: alt || fileName,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));
