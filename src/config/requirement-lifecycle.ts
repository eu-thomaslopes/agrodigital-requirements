export const requirementLifecycleValues = ['draft', 'ready', 'published'] as const;

export type RequirementLifecycle = (typeof requirementLifecycleValues)[number];

export const requirementLifecycleMetadata: Record<
  RequirementLifecycle,
  { label: string }
> = {
  draft: {
    label: 'Rascunho',
  },
  ready: {
    label: 'Pronto',
  },
  published: {
    label: 'Publicado',
  },
};
