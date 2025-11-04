import type { LeisureAreaCardProps } from './types';

/**
 * @component LeisureAreaCard
 * @summary Displays leisure area information in a card format
 * @domain showcase
 * @type ui-component
 * @category leisure
 */
export const LeisureAreaCard = ({ area, onSelect }: LeisureAreaCardProps) => {
  const handleClick = () => {
    onSelect?.(area);
  };

  const areaIcons: Record<string, string> = {
    piscina: '🏊',
    praia: '🏖️',
    spa: '💆',
    academia: '🏋️',
    quadra: '🎾',
    salao_jogos: '🎮',
    kids_club: '🧸',
    outro: '🎯',
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-48">
        <img src={area.imagens[0]} alt={area.nome_area} className="w-full h-full object-cover" />
        {area.destaque && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Destaque
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-3xl mr-3">{areaIcons[area.tipo_area]}</span>
          <h3 className="text-xl font-serif font-bold text-gray-900">{area.nome_area}</h3>
        </div>

        <p className="text-gray-600 mb-4">{area.descricao_curta}</p>

        <div className="mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Horário:</span> {area.horario_funcionamento}
          </p>
        </div>

        {area.restricoes && area.restricoes.length > 0 && (
          <div className="mb-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800 font-semibold mb-1">Restrições:</p>
              <ul className="text-sm text-yellow-700 list-disc list-inside">
                {area.restricoes.map((restricao, index) => (
                  <li key={index}>{restricao}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Ver Mais Detalhes
        </button>
      </div>
    </div>
  );
};
