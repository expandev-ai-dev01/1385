import type { LeisureArea } from '../../types';

export interface LeisureAreaCardProps {
  area: LeisureArea;
  onSelect?: (area: LeisureArea) => void;
}
