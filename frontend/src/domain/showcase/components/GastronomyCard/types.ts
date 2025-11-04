import type { GastronomyEstablishment } from '../../types';

export interface GastronomyCardProps {
  establishment: GastronomyEstablishment;
  onSelect?: (establishment: GastronomyEstablishment) => void;
}
