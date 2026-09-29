import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { documentationMetadataSchema } from './schemas/documentation';

// Requirement pages use a compact, validated metadata model.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: documentationMetadataSchema,
    }),
  }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema(),
  }),
};
