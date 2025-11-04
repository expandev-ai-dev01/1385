import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * @utility formatDate
 * @summary Formats a date using Brazilian Portuguese locale
 * @domain core
 * @type utility-function
 * @category formatting
 *
 * @param {Date | string} date - The date to format
 * @param {string} pattern - The format pattern (default: 'dd/MM/yyyy')
 * @returns {string} Formatted date string
 */
export const formatDate = (date: Date | string, pattern: string = 'dd/MM/yyyy'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, pattern, { locale: ptBR });
};
