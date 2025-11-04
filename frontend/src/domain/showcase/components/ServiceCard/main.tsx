import type { ServiceCardProps } from './types';

/**
 * @component ServiceCard
 * @summary Displays hotel service information in a card format
 * @domain showcase
 * @type ui-component
 * @category services
 */
export const ServiceCard = ({ service, onSelect }: ServiceCardProps) => {
  const handleClick = () => {
    onSelect?.(service);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 flex-shrink-0 mr-4">
          <img src={service.icone} alt={service.nome_servico} className="w-full h-full" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.nome_servico}</h3>
          {service.incluso_diaria && (
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
              Incluso
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-600 mb-4">{service.descricao}</p>

      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Disponibilidade:</span> {service.disponibilidade}
        </p>
        {service.valor && (
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Valor:</span> {service.valor}
          </p>
        )}
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Como solicitar:</span> {service.como_solicitar}
        </p>
      </div>

      {service.destaque && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
            ⭐ Serviço Diferencial
          </span>
        </div>
      )}
    </div>
  );
};
