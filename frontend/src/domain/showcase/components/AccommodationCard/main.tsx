import { formatCurrency } from '@/core/utils';
import type { AccommodationCardProps } from './types';

/**
 * @component AccommodationCard
 * @summary Displays accommodation information in a card format
 * @domain showcase
 * @type ui-component
 * @category accommodation
 */
export const AccommodationCard = ({
  accommodation,
  onSelect,
  showDetails = false,
}: AccommodationCardProps) => {
  const handleClick = () => {
    onSelect?.(accommodation);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-64">
        <img
          src={accommodation.imagens[0]}
          alt={accommodation.nome_acomodacao}
          className="w-full h-full object-cover"
        />
        {accommodation.destaque && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Destaque
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
          {accommodation.nome_acomodacao}
        </h3>
        <p className="text-gray-600 mb-4">{accommodation.descricao_curta}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>📐 {accommodation.metragem}m²</span>
            <span>👥 Até {accommodation.capacidade_maxima} pessoas</span>
          </div>
        </div>

        {showDetails && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Comodidades:</h4>
            <div className="flex flex-wrap gap-2">
              {accommodation.comodidades.slice(0, 5).map((comodidade, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {comodidade}
                </span>
              ))}
              {accommodation.comodidades.length > 5 && (
                <span className="text-gray-600 text-sm">
                  +{accommodation.comodidades.length - 5}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">A partir de</p>
            <p className="text-2xl font-bold text-primary-600">
              {formatCurrency(accommodation.tarifa_base)}
            </p>
            <p className="text-xs text-gray-500">por noite</p>
          </div>
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};
