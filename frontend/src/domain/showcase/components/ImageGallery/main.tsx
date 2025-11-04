import { useState, useMemo } from 'react';
import { clsx } from 'clsx';
import type { ImageGalleryProps, ImageGalleryFilters as Filters } from './types';
import type { ImageGalleryItem } from '../../types';

/**
 * @component ImageGallery
 * @summary Displays a filterable grid of images with lightbox functionality
 * @domain showcase
 * @type ui-component
 * @category gallery
 */
export const ImageGallery = ({
  images,
  onImageClick,
  filters: initialFilters,
  showFilters = true,
}: ImageGalleryProps) => {
  const [filters, setFilters] = useState<Filters>(initialFilters || {});
  const [selectedImage, setSelectedImage] = useState<ImageGalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      if (filters.categoria && image.categoria_imagem !== filters.categoria) return false;
      if (filters.destaque !== undefined && image.destaque !== filters.destaque) return false;
      return true;
    });
  }, [images, filters]);

  const handleImageClick = (image: ImageGalleryItem, index: number) => {
    setSelectedImage(image);
    setLightboxIndex(index);
    onImageClick?.(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'next'
        ? (lightboxIndex + 1) % filteredImages.length
        : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const categories: Array<ImageGalleryItem['categoria_imagem']> = [
    'quartos',
    'areas_comuns',
    'praia',
    'piscinas',
    'restaurantes',
    'bares',
    'eventos',
  ];

  const categoryLabels: Record<ImageGalleryItem['categoria_imagem'], string> = {
    quartos: 'Quartos',
    areas_comuns: 'Áreas Comuns',
    praia: 'Praia',
    piscinas: 'Piscinas',
    restaurantes: 'Restaurantes',
    bares: 'Bares',
    eventos: 'Eventos',
  };

  return (
    <div className="image-gallery">
      {showFilters && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilters({})}
              className={clsx(
                'px-4 py-2 rounded-lg transition-colors',
                !filters.categoria
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              )}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilters({ categoria: category })}
                className={clsx(
                  'px-4 py-2 rounded-lg transition-colors',
                  filters.categoria === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                )}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => handleImageClick(image, index)}
          >
            <img
              src={image.url_imagem_thumbnail}
              alt={image.titulo_imagem}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">{image.titulo_imagem}</h3>
                {image.descricao_imagem && <p className="text-sm mt-1">{image.descricao_imagem}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={handleCloseLightbox}
        >
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            aria-label="Fechar"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate('prev');
            }}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate('next');
            }}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
            aria-label="Próxima"
          >
            ›
          </button>

          <div
            className="max-w-6xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url_imagem}
              alt={selectedImage.titulo_imagem}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-semibold">{selectedImage.titulo_imagem}</h3>
              {selectedImage.descricao_imagem && (
                <p className="mt-2 text-gray-300">{selectedImage.descricao_imagem}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
