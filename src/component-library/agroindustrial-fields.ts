import type { ComponentField } from './definitions';

// Contratos detalhados da US065, reutilizados nas histórias que invocam esses componentes.
const locationFields: ComponentField[] = [
  {
    "campo": "Estabelecimento Agroindustrial Localizado em um Estabelecimento Agropecuário Cadastrado no IMA?",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Valores pré-definidos: “Sim”, “Não”"
    ],
    "exemplo": "“Não”",
    "valorPadrao": "“Não”"
  },
  {
    "campo": "Estabelecimento Agropecuário  (“Nome do Estabelecimento Agropecuário”)",
    "tipo": "searchable-select",
    "obrigatorio": true,
    "validacoes": [
      "Disponível se o campo ”Estabelecimento Agroindustrial Localizado em um Estabelecimento Agropecuário Cadastrado no IMA?” for definido como “Sim”",
      "Valores pré-definidos: estabelecimentos agropecuários cadastrados no sistema (ver US050) Deve ser possível buscar por “Nome” e “Código” do estabelecimento agropecuário e ”Nome”/”Razão Social”, “Município” e ”CPF”/“CNPJ” dos proprietários do estabelecimento agropecuário"
    ],
    "exemplo": "“Fazenda Rio Preto”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Código do Estabelecimento Agropecuário",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Disponível se o campo ”Estabelecimento Agroindustrial Localizado em um Estabelecimento Agropecuário Cadastrado no IMA?” for definido como “Sim”",
      "Somente leitura Disponível quando o campo “Estabelecimento Agropecuário” for preenchido Deve corresponder ao cadastro informado no campo “Estabelecimento Agropecuário”"
    ],
    "exemplo": "“34523423567”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Zona",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Endereço (Somente leitura se o campo “Estabelecimento Agroindustrial Localizado em um Estabelecimento Agropecuário Cadastrado no IMA?” for definido como “Sim”. Nesse caso, deve corresponder ao endereço do Estabelecimento Agropecuário informado",
      "Valores pré-definidos: “Rural”, “Urbana”"
    ],
    "exemplo": "“Rural”",
    "valorPadrao": "“Rural”"
  },
  {
    "campo": "Estado",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Rural”",
      "Somente leitura Valores pré-definidos: lista de todos os estados brasileiros",
      "Valor fixo conforme o parâmetro Estado fixo."
    ],
    "exemplo": "“Minas Gerais”",
    "valorPadrao": "“Minas Gerais”"
  },
  {
    "campo": "Município",
    "tipo": "searchable-select",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Rural”",
      "Valores pré-definidos: lista de todos os municípios brasileiros correspondentes ao estado selecionado"
    ],
    "exemplo": "“Lavras”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Endereço — Nome da estrada e o quilômetro de referência.",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Rural”",
      "Alfanumérico, máximo 255 caracteres"
    ],
    "exemplo": "“Estrada de chão no Km 12”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Localidade",
    "tipo": "searchable-select",
    "obrigatorio": false,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Rural”",
      "Valores pré-definidos: localidades cadastradas no sistema (ver US005) Deve ser pré-filtrado de acordo com o valor informado em “Município”"
    ],
    "exemplo": "“Vila dos Técnicos”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Distrito",
    "tipo": "searchable-select",
    "obrigatorio": false,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Rural”",
      "Valores pré-definidos: distritos cadastrados no sistema (ver US005) Deve ser pré-filtrado de acordo com o valor informado em “Município”"
    ],
    "exemplo": "“Cachoeira do Vale”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "CEP",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Urbana”",
      "Numérico, 8 dígitos, máscara XXXXX-XXX"
    ],
    "exemplo": "“37060-400”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Estado",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Urbana”",
      "Consulta API de CEP Somente leitura Disponível quando o campo “CEP” for preenchido"
    ],
    "exemplo": "“Minas Gerais”",
    "valorPadrao": "Valor obtido pela API de CEP"
  },
  {
    "campo": "Município",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Urbana”",
      "Consulta API de CEP Somente leitura Disponível quando o campo “CEP” for preenchido"
    ],
    "exemplo": "“Timóteo”",
    "valorPadrao": "Valor obtido pela API de CEP"
  },
  {
    "campo": "Bairro",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Urbana”",
      "Consulta API de CEP Alfanumérico, máximo 255 caracteres"
    ],
    "exemplo": "“Centro”",
    "valorPadrao": "Valor obtido pela API de CEP, quando disponível"
  },
  {
    "campo": "Endereço",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Urbana”",
      "Consulta API de CEP Alfanumérico, máximo 255 caracteres"
    ],
    "exemplo": "“Avenida JK”",
    "valorPadrao": "Valor obtido pela API de CEP, quando disponível"
  },
  {
    "campo": "Número",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Urbana”",
      "Alfanumérico, máximo 10 caracteres"
    ],
    "exemplo": "10",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Complemento",
    "tipo": "text",
    "obrigatorio": false,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Urbana”",
      "Alfanumérico, máximo 255 caracteres"
    ],
    "exemplo": "“Apto 02”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Distrito",
    "tipo": "searchable-select",
    "obrigatorio": false,
    "validacoes": [
      "Somente leitura se o estabelecimento agroindustrial estiver localizado em um estabelecimento agropecuário cadastrado no IMA; nesse caso, corresponde ao endereço do estabelecimento agropecuário selecionado.",
      "Disponível se campo “Zona” for definido como “Urbana”",
      "Valores pré-definidos: distritos cadastrados no sistema (ver US005) Deve ser pré -filtrado de acordo com o valor informado em “Município”"
    ],
    "exemplo": "“Cachoeira do Vale”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Possui a Mesma Geolocalização do Estabelecimento Agropecuário?",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Disponível se o campo “Estabelecimento Agroindustrial Localizado em um Estabelecimento Agropecuário Cadastrado no IMA?” for definido como “Sim”",
      "Valores pré-definidos: “Sim”, “Não”"
    ],
    "exemplo": "“Sim”",
    "valorPadrao": "“Não”"
  },
  {
    "campo": "Formato",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o campo “Possui a Mesma Geolocalização do Estabelecimento Agropecuário?” for definido como “Sim”. Nesse caso, deve corresponder a geolocalização do Estabelecimento Agropecuário informado",
      "Valores pré definidos:  “DMS (graus, minutos, segundos), DD (decimal)”"
    ],
    "exemplo": "“DMS (graus, minutos, segundos)”",
    "valorPadrao": "“DMS (graus, minutos, segundos)”"
  },
  {
    "campo": "Latitude",
    "tipo": "decimal",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o campo “Possui a Mesma Geolocalização do Estabelecimento Agropecuário?” for definido como “Sim”. Nesse caso, deve corresponder a geolocalização do Estabelecimento Agropecuário informado",
      "Pode ser informada manualmente ou selecionada em um mapa, com consulta à API do Google Maps Deve possuir uma máscara de acordo com o formato informado (ver regra de negócio comum RN010)  Deve ser pré estimada de acordo com as informações de endereço informadas"
    ],
    "exemplo": "DMS: 19°09'56.979800000000\"S DD: -19.165827719338893",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Longitude",
    "tipo": "decimal",
    "obrigatorio": true,
    "validacoes": [
      "Somente leitura se o campo “Possui a Mesma Geolocalização do Estabelecimento Agropecuário?” for definido como “Sim”. Nesse caso, deve corresponder a geolocalização do Estabelecimento Agropecuário informado",
      "Pode ser informada manualmente ou selecionada em um mapa, com consulta à API do Google Maps Deve possuir uma máscara de acordo com o formato informado (ver regra de negócio comum RN010)  Deve ser pré estimada de acordo com as informações de endereço informadas"
    ],
    "exemplo": "DMS: 44°21'46.336500000000\"W DD: -44.362871253967285",
    "valorPadrao": "Vazio"
  }
];

const contactFields: ComponentField[] = [
  {
    "campo": "Utilizar Contato de Proprietários?",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Valores pré-definidos: “Sim”, “Não”"
    ],
    "exemplo": "“Sim”",
    "valorPadrao": "Sim"
  },
  {
    "campo": "(Aplicar?)",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Proprietários (Disponível para cada proprietário informado no cadastro) (Um ou mais",
      "Valores pré-definidos: “Verdadeiro”, “Falso”",
      "Exibido para cada proprietário do cadastro. Os contatos dos proprietários selecionados são exibidos quando Utilizar Contato de Proprietários? = Sim."
    ],
    "exemplo": "“Verdadeiro”",
    "valorPadrao": "Falso"
  },
  {
    "campo": "Tipo de Contato",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Contatos Obrigatórios  (Disponível se o campo “Utilizar Contato de Proprietários?” for definido como “Não”) (Disponível se nenhum contato de proprietário for escolhido como opção de contato do cadastro",
      "Somente Leitura"
    ],
    "exemplo": "“E-mail”",
    "valorPadrao": "“E-mail”"
  },
  {
    "campo": "Email",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Contatos Obrigatórios  (Disponível se o campo “Utilizar Contato de Proprietários?” for definido como “Não”) (Disponível se nenhum contato de proprietário for escolhido como opção de contato do cadastro",
      "Alfanumérico, máximo 255 caracteres"
    ],
    "exemplo": "“joaquim@email.com”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Observação",
    "tipo": "text",
    "obrigatorio": false,
    "validacoes": [
      "Contatos Obrigatórios  (Disponível se o campo “Utilizar Contato de Proprietários?” for definido como “Não”) (Disponível se nenhum contato de proprietário for escolhido como opção de contato do cadastro",
      "Alfanumérico, máximo 1500 caracteres"
    ],
    "exemplo": "“Meu email padrão”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Tipo de Contato",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Contatos Obrigatórios  (Disponível se o campo “Utilizar Contato de Proprietários?” for definido como “Não”) (Disponível se nenhum contato de proprietário for escolhido como opção de contato do cadastro",
      "Somente Leitura"
    ],
    "exemplo": "“Telefone”",
    "valorPadrao": "“Telefone”"
  },
  {
    "campo": "Número",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Contatos Obrigatórios  (Disponível se o campo “Utilizar Contato de Proprietários?” for definido como “Não”) (Disponível se nenhum contato de proprietário for escolhido como opção de contato do cadastro",
      "Somente Leitura Numérico, 11 dígitos, máscara (XX) XXXXX-XXXX"
    ],
    "exemplo": "“(35) 99999-1111”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Observação",
    "tipo": "text",
    "obrigatorio": false,
    "validacoes": [
      "Contatos Obrigatórios  (Disponível se o campo “Utilizar Contato de Proprietários?” for definido como “Não”) (Disponível se nenhum contato de proprietário for escolhido como opção de contato do cadastro",
      "Alfanumérico, máximo 1500 caracteres"
    ],
    "exemplo": "“Meu telefone”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Tipo de Contato",
    "tipo": "single-select",
    "obrigatorio": true,
    "validacoes": [
      "Outros contatos: zero ou mais itens.",
      "Valores pré-definidos: “Email”, “Telefone”"
    ],
    "exemplo": "“Telefone”",
    "valorPadrao": "“E-mail”"
  },
  {
    "campo": "Email",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Outros contatos: zero ou mais itens.",
      "Disponível se “Tipo de Contato” for definido como “Email” Alfanumérico, máximo 255 caracteres"
    ],
    "exemplo": "“joaquim@email.com”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Número",
    "tipo": "text",
    "obrigatorio": true,
    "validacoes": [
      "Outros contatos: zero ou mais itens.",
      "Disponível se “Tipo de Contato” for definido como “Telefone” Numérico, 11 dígitos, máscara (XX) XXXXX-XXXX"
    ],
    "exemplo": "“(35) 99999-1111”",
    "valorPadrao": "Vazio"
  },
  {
    "campo": "Observação",
    "tipo": "text",
    "obrigatorio": false,
    "validacoes": [
      "Outros contatos: zero ou mais itens.",
      "Alfanumérico, máximo 1500 caracteres"
    ],
    "exemplo": "“Telefone do filho”",
    "valorPadrao": "Vazio"
  }
];

const poaAreas = ['Carne', 'Leite', 'Apícola', 'Ovos', 'Pescado'];

const poaClassifications: Record<string, string[]> = {
  Carne: ['Abatedouro Frigorífico', 'Unidade de beneficiamento de carne e produtos cárneos'],
  Leite: ['Entreposto de laticínios', 'Granja leiteira', 'Posto de refrigeração', 'Queijaria', 'Unidade de beneficiamento de leite e derivados'],
  Pescado: ['Abatedouro frigorífico', 'Unidade de beneficiamento de pescado e produtos de pescado'],
};

export const agroindustrialComponentDefinitions = {
  'area-de-atuacao-poa': {
    id: 'area-de-atuacao-poa', name: 'Área de atuação POA', sourcePages: 'US022, US070 e US071', parameters: {},
    buildFields: (): ComponentField[] => [{ campo: 'Área de Atuação', tipo: 'multi-select', obrigatorio: true, validacoes: [`Valores = ${poaAreas.join(', ')}.`], exemplo: 'Carne', valorPadrao: 'Vazio' }],
  },
  'classificacao-poa': {
    id: 'classificacao-poa', name: 'Classificação POA', sourcePages: 'US070 e US071',
    parameters: { 'area-de-atuacao': { label: 'Área de atuação', required: false, values: Object.keys(poaClassifications) }, 'somente-sem-eapp': { label: 'Somente sem EAPP', required: false, values: ['Sim', 'Não'] }, exemplo: { label: 'Exemplo da fonte', required: false } },
    buildFields: (parameters: Record<string, string>): ComponentField[] => {
      const area = parameters['area-de-atuacao'];
      const validacoes = area ? [`Valores = ${poaClassifications[area].join(', ')}.`] : Object.entries(poaClassifications).map(([name, values]) => `Disponível se Área de Atuação = ${name}. Valores = ${values.join(', ')}.`);
      if (parameters['somente-sem-eapp'] === 'Sim') validacoes.unshift('Disponível se É EAPP? = Não.');
      return [{ campo: 'Classificação', tipo: 'multi-select', obrigatorio: true, validacoes, exemplo: parameters.exemplo ?? 'Abatedouro Frigorífico', valorPadrao: 'Vazio' }];
    },
  },
  'localizacao-com-estabelecimento': {
    ...{"id":"localizacao-com-estabelecimento","name":"Localização com estabelecimento","sourcePages":"US065; componente nas páginas 8–10","parameters":{"estado-fixo":{"label":"Estado fixo","required":false}}},
    buildFields: (parameters: Record<string, string>): ComponentField[] => {
      const state = parameters['estado-fixo'];
      return locationFields.map((field) => {
        if (field.campo === 'Estado' && field.tipo === 'single-select') {
          return { ...field, exemplo: state ?? 'Minas Gerais', valorPadrao: state ?? 'Minas Gerais', validacoes: [...field.validacoes.filter((rule) => !rule.startsWith('Valor fixo')), `Somente leitura. Valor = ${state ?? 'Minas Gerais'}.`] };
        }
        if (state && ['CEP', 'Estado', 'Estabelecimento Agropecuário  (“Nome do Estabelecimento Agropecuário”)'].includes(field.campo)) {
          return { ...field, validacoes: [...field.validacoes, `Restrito ao estado de ${state}.`] };
        }
        return { ...field, validacoes: [...field.validacoes] };
      });
    },
  },
  'contatos-com-proprietarios': {
    ...{"id":"contatos-com-proprietarios","name":"Contatos com proprietários","sourcePages":"US065; componente nas páginas 11–12","parameters":{}},
    buildFields: (): ComponentField[] => contactFields.map((field) => ({ ...field, validacoes: [...field.validacoes] })),
  },
};
