import type { ImageMetadata } from 'astro';

const flashImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/flash/*.{jpg,jpeg,png}',
  { eager: true }
);

export interface FlashPiece {
  id: string;
  imagem: ImageMetadata;
  disponivel: boolean;
}

export const flashPieces: FlashPiece[] = Object.entries(flashImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod], index) => ({
    id: `flash-${String(index + 1).padStart(2, '0')}`,
    imagem: mod.default,
    disponivel: true,
  }));
