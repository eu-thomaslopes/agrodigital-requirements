import { z } from 'astro/zod';
import { requirementLifecycleValues } from '../config/requirement-lifecycle';

export const documentationMetadataSchema = z.object({
  docType: z
    .enum(['landing', 'module', 'entity', 'requirement', 'shared-definition', 'guide'])
    .default('guide'),
  module: z.string().min(1).optional(),
  entity: z.string().min(1).optional(),
  entityPlural: z.string().min(1).optional(),
  icon: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use o slug kebab-case de um ícone Lucide extraído.')
    .optional(),
  lifecycle: z.enum(requirementLifecycleValues).optional(),
}).superRefine((metadata, context) => {
  if (metadata.docType === 'requirement' && !metadata.lifecycle) {
    context.addIssue({
      code: 'custom',
      path: ['lifecycle'],
      message: 'Documentos de requisito precisam declarar o estado do ciclo de vida.',
    });
  }

  if (metadata.docType === 'requirement' && !metadata.entityPlural) {
    context.addIssue({
      code: 'custom',
      path: ['entityPlural'],
      message: 'Documentos de requisito precisam declarar a entidade no plural.',
    });
  }
});
