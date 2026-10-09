import type { ComponentField } from './definitions';

// Campos comuns de US085 e US086; as condições de exibição acompanham cada campo.
const herdEntityTypes = [
  "Estabelecimento Agropecuário",
  "Evento Pecuário",
  "Estabelecimento Agroindustrial POA",
  "Revendedora de Animais Vivos",
  "Unidade de Vigilância Agropecuária",
  "Instituição de Ensino e Pesquisa",
  "Local de Pesagem",
  "Local de Realização de Exame",
  "Estabelecimento Genérico"
];

const entityTypeValues = `Valores = ${herdEntityTypes.join(', ')}.`;

export const herdComponentDefinitions = {
  'filtros-de-entidade-do-rebanho': {
    id: "filtros-de-entidade-do-rebanho",
    name: "Filtros de entidade do rebanho",
    sourcePages: "US085 e US086",
    parameters: {},
    buildFields: (): ComponentField[] => [
      {"campo":"Tipo de Entidade","tipo":"single-select","obrigatorio":false,"validacoes":[entityTypeValues],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"CPF/CNPJ do Produtor","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Tamanho = 11 ou 14 caracteres Formato = CPF: XXX.XXX.XXX-XX  CNPJ: XX.XXX.XXX/XXXX-XX"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Nome do Produtor","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código do Estabelecimento Agropecuário","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Tamanho = 11 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Estabelecimento Agropecuário de Destino","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código da Exploração Pecuária","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Tamanho = 15 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código do Núcleo de Produção","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Tamanho = 17 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Núcleo de Produção","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código do Estabelecimento Agroindustrial POA","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agroindustrial POA”. Tamanho = 10 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Número de Inspeção do Estabelecimento Agroindustrial POA","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agroindustrial POA”. Tamanho = 15 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"CNPJ do Estabelecimento Agroindustrial POA","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agroindustrial POA”. Tamanho = 14 caracteres Formato = XX.XXX.XXX/XXXX-XX"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Nome do Estabelecimento Agroindustrial POA","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agroindustrial POA”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código do Evento Pecuário","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” for definido como “Evento Pecuário”. Tamanho = 10 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Evento Pecuário","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” for definido como “Evento Pecuário”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código da Revendedora de Animais Vivos","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Revendedora de Animais Vivos”. Tamanho = 10 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Revendedora de Animais Vivos","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Revendedora de Animais Vivos”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código da Instituição de Ensino e Pesquisa","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Instituição de Ensino e Pesquisa”. Tamanho = 10 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Instituição de Ensino e Pesquisa","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Instituição de Ensino e Pesquisa”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código da Unidade de Vigilância Agropecuária","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Unidade de Vigilância Agropecuária”. Tamanho = 10 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Unidade de Vigilância Agropecuária","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Unidade de Vigilância Agropecuária”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código do Local de Pesagem","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Local de Pesagem”. Tamanho = 10 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Local de Pesagem","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Local de Pesagem”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código do Local de Realização de Exame","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Local de Realização de Exame”. Tamanho = 10 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Local de Realização de Exame","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Local de Realização de Exame”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Código do Estabelecimento Genérico","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Genérico”. Tamanho = 10 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Estabelecimento Genérico","tipo":"text","obrigatorio":false,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Genérico”. Tamanho = 255 caracteres"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
    ],
  },
  'identificacao-da-entidade-do-rebanho': {
    id: "identificacao-da-entidade-do-rebanho",
    name: "Identificação da entidade do rebanho",
    sourcePages: "US085 e US086",
    parameters: {},
    buildFields: (): ComponentField[] => [
      {"campo":"Tipo de Entidade","tipo":"single-select","obrigatorio":true,"validacoes":['Somente leitura.', entityTypeValues],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Produtor","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Somente leitura. Valores = produtores cadastrados no sistema"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Estabelecimento Agropecuário","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Somente leitura. Disponível quando o “Produtor” for selecionado Valores = estabelecimentos agropecuários em que o “Produtor” está relacionado como produtor de pelo menos uma de suas explorações pecuárias"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Exploração Pecuária","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Somente leitura. Disponível quando o “Estabelecimento Agropecuário” for selecionado Valores = explorações pecuárias do “Estabelecimento Agropecuário” selecionado em que o “Produtor” está relacionado como produtor"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Núcleo de Produção","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agropecuário”. Somente leitura. Disponível quando a “Exploração Pecuária” for selecionada Disponível se a “Espécie” possuir controle de rebanho por núcleo   Valores = núcleos de produção da exploração pecuária selecionada"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Estabelecimento Agroindustrial POA","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Agroindustrial POA”. Somente leitura. Valores = estabelecimentos agroindustriais POA"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Evento Pecuário","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Evento Pecuário”. Somente leitura. Valores = eventos pecuários cadastrados"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Revendedora de Animais Vivos","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Revendedora de Animais Vivos”. Somente leitura. Valores = revendedoras de animais vivos"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Instituição de Ensino e Pesquisa","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Instituição de Ensino e Pesquisa”. Somente leitura. Valores = instituições de ensino e pesquisa cadastradas no sistema"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Unidade de Vigilância Agropecuária","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Unidade de Vigilância Agropecuária”. Somente leitura. Valores = unidades de vigilância agropecuária cadastradas no sistema"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Local de Pesagem","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Local de Pesagem”. Somente leitura. Valores = locais de pesagem cadastrados no sistema"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Local de Realização de Exame","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Local de Realização de Exame”. Somente leitura. Valores = locais de realização de exame cadastrados no sistema"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
      {"campo":"Estabelecimento Genérico","tipo":"entity-select","obrigatorio":true,"validacoes":["Disponível se “Tipo de Entidade” = “Estabelecimento Genérico”. Somente leitura. Valores = estabelecimentos genéricos cadastrados no sistema"],"exemplo":"Não informado na fonte","valorPadrao":"Não informado na fonte"},
    ],
  },
};
