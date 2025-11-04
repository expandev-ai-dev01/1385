import type { Accommodation } from '../../types';

export interface AccommodationCardProps {
  accommodation: Accommodation;
  onSelect?: (accommodation: Accommodation) => void;
  showDetails?: boolean;
}
