import type { GastronomyCardProps } from './types';

/**
 * @component GastronomyCard
 * @summary Displays gastronomy establishment information in a card format
 * @domain showcase
 * @type ui-component
 * @category gastronomy
 */
export const GastronomyCard = ({ establishment, onSelect }: GastronomyCardProps) => {
  const handleClick = () => {
    onSelect?.(establishment);
  };

  const typeIcons: Record<string, string> = {
    restaurante: '🍽️',
    bar: '🍹',
    cafeteria: '☕',
    outro: '🍴',
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-56">
        <img
          src={establishment.imagens[0]}
          alt={establishment.nome_estabelecimento}
          className="w-full h-full object-cover"
        />
        {establishment.destaque && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Destaque
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-3xl mr-3">{typeIcons[establishment.tipo_estabelecimento]}</span>
          <div>
            <h3 className="text-xl font-serif font-bold text-gray-900">
              {establishment.nome_estabelecimento}
            </h3>
            <p className="text-sm text-gray-600">{establishment.especialidade}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{establishment.descricao_curta}</p>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Horário:</span> {establishment.horario_funcionamento}
          </p>
          {establishment.preco_medio && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Preço médio:</span> {establishment.preco_medio}
            </p>
          )}
        </div>

        {establishment.reserva_necessaria && (
          <div className="mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center">
              <span className="text-blue-600 mr-2">ℹ️</span>
              <p className="text-sm text-blue-800 font-semibold">Reserva necessária</p>
            </div>
          </div>
        )}

        <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Ver Cardápio
        </button>
      </div>
    </div>
  );
};
