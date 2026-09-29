import { entityIconBySlug } from '../config/entity-icons.mjs';

export const getIconUrl = (icon: string) => `/icons/lucide/${icon}.svg`;

export const getEntityIconUrl = (entity?: string, fallbackIcon?: string) => {
  if (entity && entityIconBySlug.has(entity)) return `/icons/entidades/${entity}.svg`;
  return fallbackIcon ? getIconUrl(fallbackIcon) : undefined;
};

export const getModuleIconUrl = (module: string) => `/icons/modulos/${module}.svg`;

export const getDocHref = (id: string) => {
  const path = id === 'index' ? '' : id.replace(/\/index$/, '');
  return `/${path}${path ? '/' : ''}`;
};
