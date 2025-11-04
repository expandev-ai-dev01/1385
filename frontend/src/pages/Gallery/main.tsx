import { useState } from 'react';
import { ImageGallery } from '@/domain/showcase/components';
import type { ImageGalleryItem } from '@/domain/showcase/types';

/**
 * @page GalleryPage
 * @summary Gallery page displaying all hotel images organized by category
 * @domain showcase
 * @type gallery-page
 * @category public
 *
 * @routing
 * - Path: /galeria
 * - Params: none
 * - Query: { categoria?: string }
 * - Guards: none (public page)
 */
export const GalleryPage = () => {
  // Mock data - will be replaced with API call
  const [images] = useState<ImageGalleryItem[]>([
    {
      id: '1',
      categoria_imagem: 'quartos',
      titulo_imagem: 'Suíte Presidencial',
      descricao_imagem: 'Vista panorâmica do mar',
      url_imagem: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920',
      url_imagem_thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400',
      destaque: true,
      ordem_exibicao: 1,
      tags: ['luxo', 'vista-mar'],
      data_atualizacao: new Date().toISOString(),
    },
    {
      id: '2',
      categoria_imagem: 'piscinas',
      titulo_imagem: 'Piscina Infinity',
      descricao_imagem: 'Piscina com borda infinita e vista para o oceano',
      url_imagem: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920',
      url_imagem_thumbnail: 'https://images.unsplash.com/photo-1575429198097-0414ec8e8cd?w=400',
      destaque: true,
      ordem_exibicao: 2,
      tags: ['piscina', 'lazer'],
      data_atualizacao: new Date().toISOString(),
    },
    {
      id: '3',
      categoria_imagem: 'restaurantes',
      titulo_imagem: 'Restaurante Gourmet',
      descricao_imagem: 'Ambiente sofisticado com culinária internacional',
      url_imagem: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920',
      url_imagem_thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
      destaque: false,
      ordem_exibicao: 3,
      tags: ['gastronomia', 'jantar'],
      data_atualizacao: new Date().toISOString(),
    },
  ]);

  return (
    <div className="gallery-page">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Galeria de Imagens</h1>
          <p className="text-xl">Conheça visualmente todas as comodidades do Ale Hotéis</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <ImageGallery images={images} showFilters={true} />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
