import type { ImageGalleryItem, ImageGalleryFilters } from '../../types';

export interface ImageGalleryProps {
  images: ImageGalleryItem[];
  onImageClick?: (image: ImageGalleryItem) => void;
  filters?: ImageGalleryFilters;
  showFilters?: boolean;
}

export interface ImageGalleryGridProps {
  images: ImageGalleryItem[];
  onImageClick: (image: ImageGalleryItem) => void;
}

export interface ImageGalleryFiltersProps {
  filters: ImageGalleryFilters;
  onFilterChange: (filters: ImageGalleryFilters) => void;
}

export interface ImageLightboxProps {
  images: ImageGalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export type { ImageGalleryFilters };
