/**
 * @utility formatCurrency
 * @summary Formats a number as Brazilian Real currency
 * @domain core
 * @type utility-function
 * @category formatting
 *
 * @param {number} value - The numeric value to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
