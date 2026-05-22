// lib/images.ts
import ForestVillaImage from '@/public/images/villas/the-forest.jpg';
import SanctuaryVillaImage from '@/public/images/villas/the-sanctuary.jpg';
import TerraceImage from '@/public/images/villas/the-terrace.jpg';
import PavilionImage from '@/public/images/villas/the-pavilion.jpg';
import CanopyHouseImage from '@/public/images/villas/the-canopy-house.jpg';
import type { StaticImageData } from 'next/image';

export const VILLA_IMAGES: Record<string, StaticImageData> = {
  'the-forest': ForestVillaImage,
  'the-sanctuary': SanctuaryVillaImage,
  'the-terrace': TerraceImage,
  'the-pavilion': PavilionImage,
  'the-canopy-house': CanopyHouseImage,
};
