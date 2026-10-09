import { defineMiddleware } from 'astro:middleware';
import { withBase } from './utils/content';

export const onRequest = defineMiddleware((context, next) => {
  // Ações declaradas no front matter também respeitam a raiz da publicação.
  const actions = context.locals.starlightRoute.entry.data.hero?.actions;
  for (const action of actions ?? []) action.link = withBase(action.link);
  return next();
});
