/** Catálogo inicial dos tipos usados pela tabela de campos de cadastro. */
export const fieldTypes = {
  cpf: 'CPF',
  cnpj: 'CNPJ',
  'short-text': 'Texto curto',
  'long-text': 'Texto longo',
  text: 'Texto',
  'numeric-text': 'Texto numérico',
  integer: 'Inteiro',
  decimal: 'Decimal',
  date: 'Data',
  'single-select': 'Seleção simples',
  'multi-select': 'Seleção múltipla',
  'searchable-select': 'Seleção pesquisável',
  'entity-select': 'Seleção de entidade',
  'multi-entity-select': 'Seleção múltipla de entidade',
  file: 'Arquivo',
  geolocation: 'Geolocalização',
} as const;

export type FieldType = keyof typeof fieldTypes;
