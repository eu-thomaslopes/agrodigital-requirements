import { componentCatalog } from './catalog';
import { herdComponentDefinitions } from './herd-fields';
import { agroindustrialComponentDefinitions } from './agroindustrial-fields';
import type { FieldType } from '../config/field-types';

export type ComponentField = {
  campo: string;
  tipo: FieldType;
  obrigatorio: boolean | null;
  validacoes: string[];
  exemplo: string;
  valorPadrao: string;
};

type ParameterDefinition = {
  label: string;
  required: boolean;
  values?: string[];
};

type ComponentDefinition = {
  id: string;
  name: string;
  sourcePages: string;
  parameters: Record<string, ParameterDefinition>;
  buildFields: (parameters: Record<string, string>) => ComponentField[];
};

// Só componentes com definição executável entram aqui; catalog.ts também inventaria os demais.
const usedComponents: Record<string, ComponentDefinition> = {
  ...herdComponentDefinitions,
  ...agroindustrialComponentDefinitions,
  'informar-cpf': {
    id: 'informar-cpf', name: 'Informar CPF', sourcePages: 'US009 e US011',
    parameters: { exemplo: { label: 'Exemplo', required: false } },
    buildFields: (parameters) => [
      { campo: 'CPF', tipo: 'cpf', obrigatorio: true, validacoes: ['Tamanho = 11 dígitos.', 'Formato = XXX.XXX.XXX-XX.', 'Validação dos dígitos verificadores.'], exemplo: parameters.exemplo ?? '444.009.956-40', valorPadrao: 'Vazio' },
    ],
  },
  'localizacao-simples': {
    id: 'localizacao-simples',
    name: 'Localização simples',
    sourcePages: '6–8',
    parameters: {
      'zona-fixa': { label: 'Zona fixa', required: false, values: ['Urbana', 'Rural'] },
      'estado-fixo': { label: 'Estado fixo', required: false },
    },
    buildFields: (parameters) => {
      const zone = parameters['zona-fixa'];
      const fixedState = parameters['estado-fixo'];
      const fields: ComponentField[] = [
        {
          campo: 'Zona', tipo: 'single-select', obrigatorio: true,
          validacoes: zone ? ['Somente leitura.', `Valor = ${zone}.`] : ['Valores = Rural, Urbana.'],
          exemplo: zone ?? 'Rural', valorPadrao: zone ?? 'Rural',
        },
        {
          campo: 'Estado (zona rural)', tipo: 'single-select', obrigatorio: true,
          validacoes: [
            'Disponível se Zona = Rural.',
            'Valores = lista de todos os estados brasileiros.',
            ...(fixedState ? ['Somente leitura.', `Valor = ${fixedState}.`] : []),
          ],
          exemplo: fixedState ?? 'Minas Gerais', valorPadrao: fixedState ?? 'Vazio',
        },
        {
          campo: 'Município (zona rural)', tipo: 'searchable-select', obrigatorio: true,
          validacoes: ['Disponível se Zona = Rural e Estado estiver preenchido.', 'Valores = municípios brasileiros correspondentes ao estado selecionado.'],
          exemplo: 'Lavras', valorPadrao: 'Vazio',
        },
        {
          campo: 'Nome da estrada e quilômetro de referência', tipo: 'short-text', obrigatorio: true,
          validacoes: ['Disponível se Zona = Rural.'], exemplo: 'Estrada de chão no Km 12', valorPadrao: 'Vazio',
        },
        {
          campo: 'Localidade', tipo: 'searchable-select', obrigatorio: false,
          validacoes: ['Disponível se Zona = Rural.', 'Valores = localidades cadastradas no sistema (US005).', 'Pré-filtrado pelo município.'],
          exemplo: 'Vila dos Técnicos', valorPadrao: 'Vazio',
        },
        {
          campo: 'Distrito (zona rural)', tipo: 'searchable-select', obrigatorio: false,
          validacoes: ['Disponível se Zona = Rural.', 'Valores = distritos cadastrados no sistema (US005).', 'Pré-filtrado pelo município.'],
          exemplo: 'Cachoeira do Vale', valorPadrao: 'Vazio',
        },
        {
          campo: 'CEP', tipo: 'short-text', obrigatorio: true,
          validacoes: ['Disponível se Zona = Urbana.', 'Tamanho = 8 dígitos.', 'Formato = XXXXX-XXX.', ...(fixedState ? [`Aceita apenas CEPs localizados em ${fixedState}.`] : [])],
          exemplo: '37060-400', valorPadrao: 'Vazio',
        },
        {
          campo: 'Estado (via CEP)', tipo: 'short-text', obrigatorio: true,
          validacoes: ['Disponível se Zona = Urbana e CEP estiver preenchido.', 'Consulta à API de CEP.', 'Somente leitura.'],
          exemplo: 'Minas Gerais', valorPadrao: 'Valor obtido pela API de CEP',
        },
        {
          campo: 'Município (via CEP)', tipo: 'short-text', obrigatorio: true,
          validacoes: ['Disponível se Zona = Urbana e CEP estiver preenchido.', 'Consulta à API de CEP.', 'Somente leitura.'],
          exemplo: 'Timóteo', valorPadrao: 'Valor obtido pela API de CEP',
        },
        {
          campo: 'Bairro', tipo: 'short-text', obrigatorio: true,
          validacoes: ['Disponível se Zona = Urbana.', 'Consulta à API de CEP.'],
          exemplo: 'Centro', valorPadrao: 'Valor obtido pela API de CEP, quando disponível',
        },
        {
          campo: 'Endereço', tipo: 'short-text', obrigatorio: true,
          validacoes: ['Disponível se Zona = Urbana.', 'Consulta à API de CEP.'],
          exemplo: 'Avenida JK', valorPadrao: 'Valor obtido pela API de CEP, quando disponível',
        },
        {
          campo: 'Número', tipo: 'short-text', obrigatorio: true,
          validacoes: ['Disponível se Zona = Urbana.', 'Tamanho máximo = 20 caracteres.'], exemplo: '10', valorPadrao: 'Vazio',
        },
        {
          campo: 'Complemento', tipo: 'short-text', obrigatorio: false,
          validacoes: ['Disponível se Zona = Urbana.', 'Tamanho máximo = 255 caracteres.'], exemplo: 'Apto 02', valorPadrao: 'Vazio',
        },
        {
          campo: 'Distrito (zona urbana)', tipo: 'searchable-select', obrigatorio: false,
          validacoes: ['Disponível se Zona = Urbana.', 'Valores = distritos cadastrados no sistema (US005).', 'Pré-filtrado pelo município.'],
          exemplo: 'Cachoeira do Vale', valorPadrao: 'Vazio',
        },
        {
          campo: 'Formato da Geolocalização', tipo: 'single-select', obrigatorio: true,
          validacoes: ['Valores = DMS (graus, minutos, segundos), DD (decimal).'],
          exemplo: 'DMS (graus, minutos, segundos)', valorPadrao: 'DMS (graus, minutos, segundos)',
        },
        {
          campo: 'Latitude', tipo: 'decimal', obrigatorio: true,
          validacoes: ['Disponível para zonas rural e urbana.', 'Pode ser informada manualmente ou selecionada no mapa, com consulta à API do Google Maps.', 'Pré-estimada pelos dados de endereço.', 'Máscara definida pelo formato de geolocalização (RN010).'],
          exemplo: '-19.165827719338893', valorPadrao: 'Vazio',
        },
        {
          campo: 'Longitude', tipo: 'decimal', obrigatorio: true,
          validacoes: ['Disponível para zonas rural e urbana.', 'Pode ser informada manualmente ou selecionada no mapa, com consulta à API do Google Maps.', 'Pré-estimada pelos dados de endereço.', 'Máscara definida pelo formato de geolocalização (RN010).'],
          exemplo: '-44.362871253967285', valorPadrao: 'Vazio',
        },
      ];
      if (zone === 'Urbana') {
        return fields.filter((field) => ![
          'Estado (zona rural)', 'Município (zona rural)', 'Nome da estrada e quilômetro de referência',
          'Distrito (zona rural)',
        ].includes(field.campo));
      }
      if (zone === 'Rural') {
        return fields.filter((field) => ![
          'CEP', 'Estado (via CEP)', 'Município (via CEP)', 'Bairro', 'Endereço', 'Número',
          'Complemento', 'Distrito (zona urbana)',
        ].includes(field.campo));
      }
      return fields;
    },
  },
  proprietarios: {
    id: 'proprietarios', name: 'Proprietários', sourcePages: '12–13', parameters: {},
    buildFields: () => [
      { campo: 'Tipo de Pessoa', tipo: 'single-select', obrigatorio: true, validacoes: ['Valores = Pessoa física, Pessoa jurídica.'], exemplo: 'Pessoa física', valorPadrao: 'Pessoa física' },
      { campo: 'Proprietário', tipo: 'entity-select', obrigatorio: true, validacoes: ['Valores = pessoas físicas ou jurídicas cadastradas (US042 e US044).', 'Pré-filtrado por Tipo de Pessoa.', 'Pesquisa por nome/razão social ou CPF/CNPJ.'], exemplo: 'José Aarão Neto', valorPadrao: 'Vazio' },
      { campo: 'CPF/CNPJ', tipo: 'text', obrigatorio: true, validacoes: ['Somente leitura.', 'Disponível se Proprietário estiver preenchido.', 'Corresponde à pessoa selecionada.'], exemplo: '555.009.956-40', valorPadrao: 'Vazio' },
    ],
  },
  produtores: {
    id: 'produtores', name: 'Produtores', sourcePages: '13', parameters: {},
    buildFields: () => [
      { campo: 'Tipo de Produtor', tipo: 'single-select', obrigatorio: true, validacoes: ['Valores = Inquilino, Arrendatário, Assentado, Comodatário, Beneficiário de doação com reserva de usufruto, Meeiro, Parceiro Rural, Posseiro, Possuidor, Proprietário, Sócio, Usufrutuário.'], exemplo: 'Meeiro', valorPadrao: 'Vazio' },
      { campo: 'Produtor', tipo: 'entity-select', obrigatorio: true, validacoes: ['Valores = pessoas físicas ou jurídicas cadastradas (US042 e US044).', 'Pesquisa por nome/razão social ou CPF/CNPJ.'], exemplo: 'José Aarão Neto', valorPadrao: 'Vazio' },
    ],
  },
  'contatos-simples': {
    id: 'contatos-simples', name: 'Contatos simples', sourcePages: '10–11',
    parameters: {
      'email-somente-leitura-se-cpf-vinculado': { label: 'E-mail somente leitura se CPF vinculado', required: false, values: ['Sim', 'Não'] },
    },
    buildFields: (parameters) => [
      { campo: 'Tipo de Contato (E-mail)', tipo: 'text', obrigatorio: true, validacoes: ['Somente leitura.'], exemplo: 'E-mail', valorPadrao: 'E-mail' },
      { campo: 'E-mail', tipo: 'short-text', obrigatorio: true, validacoes: ['Formato = e-mail válido.', ...(parameters['email-somente-leitura-se-cpf-vinculado'] === 'Sim' ? ['Somente leitura se o CPF já estiver vinculado a um usuário.'] : [])], exemplo: 'joaquim@email.com', valorPadrao: 'Vazio' },
      { campo: 'Observação do e-mail', tipo: 'long-text', obrigatorio: false, validacoes: ['Tamanho máximo = 1.500 caracteres.'], exemplo: 'Meu e-mail', valorPadrao: 'Vazio' },
      { campo: 'Tipo de Contato (Telefone)', tipo: 'text', obrigatorio: true, validacoes: ['Somente leitura.'], exemplo: 'Telefone', valorPadrao: 'Telefone' },
      { campo: 'Número', tipo: 'numeric-text', obrigatorio: true, validacoes: ['Tamanho = 11 dígitos.', 'Formato = (XX) XXXXX-XXXX.'], exemplo: '(35) 99999-1111', valorPadrao: 'Vazio' },
      { campo: 'Observação do telefone', tipo: 'long-text', obrigatorio: false, validacoes: ['Tamanho máximo = 1.500 caracteres.'], exemplo: 'Meu telefone', valorPadrao: 'Vazio' },
      { campo: 'Tipo de Contato (outros)', tipo: 'single-select', obrigatorio: true, validacoes: ['Valores = E-mail, Telefone.'], exemplo: 'Telefone', valorPadrao: 'E-mail' },
      { campo: 'E-mail (outros)', tipo: 'short-text', obrigatorio: true, validacoes: ['Disponível se Tipo de Contato = E-mail.', 'Formato = e-mail válido.'], exemplo: 'joaquim_junior@email.com', valorPadrao: 'Vazio' },
      { campo: 'Número (outros)', tipo: 'numeric-text', obrigatorio: true, validacoes: ['Disponível se Tipo de Contato = Telefone.', 'Tamanho = 11 dígitos.', 'Formato = (XX) XXXXX-XXXX.'], exemplo: '(35) 99999-1111', valorPadrao: 'Vazio' },
      { campo: 'Observação (outros)', tipo: 'long-text', obrigatorio: false, validacoes: ['Tamanho máximo = 1.500 caracteres.'], exemplo: 'Contato do meu filho', valorPadrao: 'Vazio' },
    ],
  },
  'anexos-e-observacoes': {
    id: 'anexos-e-observacoes', name: 'Anexos e observações', sourcePages: '12', parameters: {},
    buildFields: () => [
      { campo: 'Documento', tipo: 'file', obrigatorio: true, validacoes: ['Tipos aceitos = PNG, JPG, PDF.', 'Tamanho máximo = 50 MB.'], exemplo: 'documento.png', valorPadrao: 'Vazio' },
      { campo: 'Descrição', tipo: 'short-text', obrigatorio: false, validacoes: ['Disponível quando Documento for informado.', 'Tamanho máximo = 255 caracteres.'], exemplo: 'Documento de identidade com foto', valorPadrao: 'Vazio' },
      { campo: 'Observação', tipo: 'long-text', obrigatorio: false, validacoes: ['Tamanho máximo = 1.500 caracteres.'], exemplo: 'Informações adicionais sobre a pessoa.', valorPadrao: 'Vazio' },
    ],
  },
  'selecionar-pessoa-fisica': {
    id: 'selecionar-pessoa-fisica', name: 'Selecionar pessoa física', sourcePages: '16',
    parameters: { 'nome-do-campo': { label: 'Nome do campo', required: true } },
    buildFields: (parameters) => [
      {
        campo: parameters['nome-do-campo'], tipo: 'entity-select', obrigatorio: true,
        validacoes: ['Valores = pessoas físicas cadastradas no sistema (US042).', 'Pesquisa por nome ou CPF.'],
        exemplo: 'José Aarão Neto', valorPadrao: 'Vazio',
      },
      {
        campo: 'CPF', tipo: 'cpf', obrigatorio: true,
        validacoes: [`Disponível quando ${parameters['nome-do-campo']} estiver preenchido.`, 'Somente leitura.', `Corresponde à pessoa selecionada em ${parameters['nome-do-campo']}.`],
        exemplo: '555.009.956-40', valorPadrao: 'Vazio',
      },
      {
        campo: 'Documento de Vínculo', tipo: 'file', obrigatorio: true,
        validacoes: ['Tipos aceitos = PNG, JPG, PDF.', 'Tamanho máximo = 50 MB.'],
        exemplo: 'procuracao.pdf', valorPadrao: 'Vazio',
      },
    ],
  },
};

export const componentDefinitions = usedComponents;
export const importedComponentCatalog = componentCatalog.filter((component) => component.id in usedComponents);
