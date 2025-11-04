/**
 * @constants ROUTES
 * @summary Application route paths
 * @domain core
 * @type constants
 * @category navigation
 */
export const ROUTES = {
  HOME: '/',
  ROOMS: '/quartos',
  SERVICES: '/servicos',
  GALLERY: '/galeria',
  CONTACT: '/contato',
  NOT_FOUND: '*',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
