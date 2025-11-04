import { useState } from 'react';
import { ServiceCard } from '@/domain/showcase/components';
import type { HotelService } from '@/domain/showcase/types';
import { clsx } from 'clsx';

/**
 * @page ServicesPage
 * @summary Services listing page displaying all hotel services
 * @domain showcase
 * @type list-page
 * @category public
 *
 * @routing
 * - Path: /servicos
 * - Params: none
 * - Query: { categoria?: string }
 * - Guards: none (public page)
 */
export const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Mock data - will be replaced with API call
  const [services] = useState<HotelService[]>([
    {
      id: '1',
      nome_servico: 'Wi-Fi Gratuito',
      categoria_servico: 'tecnologia',
      descricao: 'Internet de alta velocidade em todas as áreas do hotel',
      incluso_diaria: true,
      disponibilidade: '24 horas',
      como_solicitar: 'Senha disponível na recepção',
      icone: '📶',
      destaque: false,
      ordem_exibicao: 1,
    },
    {
      id: '2',
      nome_servico: 'Serviço de Concierge',
      categoria_servico: 'concierge',
      descricao: 'Assistência completa para reservas, passeios e informações turísticas',
      incluso_diaria: true,
      disponibilidade: '24 horas',
      como_solicitar: 'Ligue para o ramal 0 ou dirija-se à recepção',
      icone: '🛎️',
      destaque: true,
      ordem_exibicao: 2,
    },
    {
      id: '3',
      nome_servico: 'Transfer Aeroporto',
      categoria_servico: 'transporte',
      descricao: 'Transporte confortável do aeroporto até o hotel',
      incluso_diaria: false,
      valor: 'A partir de R$ 150',
      disponibilidade: 'Sob agendamento',
      como_solicitar: 'Reserve com 24h de antecedência na recepção',
      icone: '🚗',
      destaque: false,
      ordem_exibicao: 3,
    },
  ]);

  const categories = [
    { value: 'transporte', label: 'Transporte' },
    { value: 'concierge', label: 'Concierge' },
    { value: 'limpeza', label: 'Limpeza' },
    { value: 'tecnologia', label: 'Tecnologia' },
    { value: 'bem_estar', label: 'Bem-estar' },
  ];

  const filteredServices = selectedCategory
    ? services.filter((service) => service.categoria_servico === selectedCategory)
    : services;

  return (
    <div className="services-page">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl">Tudo para tornar sua estadia perfeita</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={clsx(
                  'px-4 py-2 rounded-lg transition-colors',
                  !selectedCategory
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                )}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={clsx(
                    'px-4 py-2 rounded-lg transition-colors',
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
