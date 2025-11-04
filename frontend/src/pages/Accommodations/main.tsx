import { useState } from 'react';
import { AccommodationCard } from '@/domain/showcase/components';
import type { Accommodation } from '@/domain/showcase/types';
import { useNavigate } from 'react-router-dom';

/**
 * @page AccommodationsPage
 * @summary Accommodations listing page displaying all room types
 * @domain showcase
 * @type list-page
 * @category public
 *
 * @routing
 * - Path: /quartos
 * - Params: none
 * - Query: { tipo?: string }
 * - Guards: none (public page)
 */
export const AccommodationsPage = () => {
  const navigate = useNavigate();

  // Mock data - will be replaced with API call
  const [accommodations] = useState<Accommodation[]>([
    {
      id: '1',
      tipo_acomodacao: 'suite_presidencial',
      nome_acomodacao: 'Suíte Presidencial',
      descricao_curta: 'Luxo e conforto com vista panorâmica do mar',
      descricao_completa:
        'Nossa suíte mais luxuosa oferece uma experiência incomparável com vista panorâmica do oceano, sala de estar privativa, banheira de hidromassagem e serviço de mordomo 24h.',
      metragem: 85,
      capacidade_maxima: 4,
      capacidade_adultos: 2,
      capacidade_criancas: 2,
      tipo_cama: ['King Size'],
      comodidades: [
        'Wi-Fi',
        'TV 65"',
        'Ar-condicionado',
        'Minibar',
        'Cofre',
        'Varanda',
        'Vista Mar',
        'Banheira',
      ],
      tarifa_base: 1200,
      imagens: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'],
      destaque: true,
      ordem_exibicao: 1,
    },
    {
      id: '2',
      tipo_acomodacao: 'luxo',
      nome_acomodacao: 'Quarto Luxo',
      descricao_curta: 'Elegância e sofisticação em cada detalhe',
      descricao_completa:
        'Quarto espaçoso com decoração elegante, cama king size, varanda privativa e todas as comodidades para uma estadia perfeita.',
      metragem: 45,
      capacidade_maxima: 3,
      capacidade_adultos: 2,
      capacidade_criancas: 1,
      tipo_cama: ['King Size'],
      comodidades: ['Wi-Fi', 'TV 50"', 'Ar-condicionado', 'Minibar', 'Cofre', 'Varanda'],
      tarifa_base: 650,
      imagens: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800'],
      destaque: false,
      ordem_exibicao: 2,
    },
  ]);

  const handleSelectAccommodation = (accommodation: Accommodation) => {
    navigate(`/quartos/${accommodation.id}`);
  };

  return (
    <div className="accommodations-page">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nossas Acomodações</h1>
          <p className="text-xl">Conforto e elegância em cada detalhe</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accommodation={accommodation}
                onSelect={handleSelectAccommodation}
                showDetails={true}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationsPage;
