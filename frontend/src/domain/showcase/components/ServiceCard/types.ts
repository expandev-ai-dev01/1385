import type { HotelService } from '../../types';

export interface ServiceCardProps {
  service: HotelService;
  onSelect?: (service: HotelService) => void;
}
