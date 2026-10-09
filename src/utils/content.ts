import { entityIconBySlug } from '../config/entity-icons.mjs';

export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  return `${base}${path}`;
};

// Estes helpers mantêm em um só lugar os caminhos usados por componentes e páginas.
export const getIconUrl = (icon: string) => withBase(`/icons/lucide/${icon}.svg`);

export const getEntityIconUrl = (entity?: string, fallbackIcon?: string) => {
  // O catálogo semântico da entidade tem prioridade; Lucide serve como fallback.
  if (entity && entityIconBySlug.has(entity)) return withBase(`/icons/entidades/${entity}.svg`);
  return fallbackIcon ? getIconUrl(fallbackIcon) : undefined;
};

export const getModuleIconUrl = (module: string) => withBase(`/icons/modulos/${module}.svg`);

export const getDocHref = (id: string) => {
  const path = id === 'index' ? '' : id.replace(/\/index$/, '');
  return withBase(`/${path}${path ? '/' : ''}`);
};
