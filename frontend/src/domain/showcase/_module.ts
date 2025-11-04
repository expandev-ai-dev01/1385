/**
 * @module showcase
 * @summary Showcase domain for displaying hotel facilities, accommodations, and services
 * @domain functional
 * @dependencies React Router, TanStack Query, Axios
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2024-01-15
 */

export * from './components';
export * from './types';

export const moduleMetadata = {
  name: 'showcase',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: [
    'ImageGallery',
    'AccommodationCard',
    'LeisureAreaCard',
    'GastronomyCard',
    'ServiceCard',
  ],
  publicHooks: [],
  publicServices: [],
  publicStores: [],
  dependencies: {
    internal: ['@/core/components', '@/core/utils'],
    external: ['react', 'react-router-dom', 'clsx'],
    domains: [],
  },
  exports: {
    components: [
      'ImageGallery',
      'AccommodationCard',
      'LeisureAreaCard',
      'GastronomyCard',
      'ServiceCard',
    ],
    hooks: [],
    services: [],
    stores: [],
    types: [
      'ImageGalleryItem',
      'Accommodation',
      'LeisureArea',
      'GastronomyEstablishment',
      'HotelService',
    ],
    utils: [],
  },
} as const;
