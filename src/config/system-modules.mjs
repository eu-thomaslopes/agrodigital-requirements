/**
 * Catálogo estável dos módulos funcionais exibidos na Área de Trabalho do SIDAGRO.
 * Os épicos não pertencem a este arquivo: eles são descobertos a partir dos
 * documentos existentes em `src/content/docs/<modulo>/`.
 */
export const systemModules = [
  { slug: 'geral', label: 'Geral', icon: 'globe', order: 10 },
  { slug: 'animal', label: 'Animal', icon: 'beef', order: 20 },
  { slug: 'vegetal', label: 'Vegetal', icon: 'sprout', order: 30 },
  { slug: 'vacinacao', label: 'Vacinação', icon: 'syringe', order: 40 },
  { slug: 'exame', label: 'Exame', icon: 'briefcase-medical', order: 50 },
  { slug: 'rebanho', label: 'Rebanho', icon: 'refresh-cw', order: 60 },
  { slug: 'arrecadacao', label: 'Arrecadação', icon: 'circle-dollar-sign', order: 70 },
  { slug: 'gta', label: 'GTA', icon: 'truck', order: 80 },
  { slug: 'fiscalizacao', label: 'Fiscalização', icon: 'clipboard-check', order: 90 },
  { slug: 'controle', label: 'Controle', icon: 'settings', order: 100 },
];
