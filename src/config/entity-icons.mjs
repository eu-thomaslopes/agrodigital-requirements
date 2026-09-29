/**
 * Catálogo semântico dos épicos exibidos na Área de Trabalho do SIDAGRO.
 * `icon` referencia um SVG da coleção técnica em `public/icons/lucide/`.
 * O script `npm run icons:sync` materializa aliases estáveis em
 * `public/icons/entidades/<slug>.svg`.
 */
export const entityIcons = [
  // Geral
  { module: 'geral', slug: 'acougue', label: 'Açougue', icon: 'ham' },
  { module: 'geral', slug: 'classificacao-sanitaria-por-estado', label: 'Classificação Sanitária por Estado', icon: 'shield-check' },
  { module: 'geral', slug: 'divisao-municipal', label: 'Divisão Municipal', icon: 'map' },
  { module: 'geral', slug: 'estabelecimento-agropecuario', label: 'Estabelecimento Agropecuário', icon: 'briefcase-business' },
  { module: 'geral', slug: 'estabelecimento-generico', label: 'Estabelecimento Genérico', icon: 'building2' },
  { module: 'geral', slug: 'instituicao-de-ensino-e-pesquisa', label: 'Instituição de Ensino e Pesquisa', icon: 'landmark' },
  { module: 'geral', slug: 'local-de-pesagem', label: 'Local de Pesagem', icon: 'weight' },
  { module: 'geral', slug: 'pessoa-fisica', label: 'Pessoa Física', icon: 'user-round' },
  { module: 'geral', slug: 'pessoa-juridica', label: 'Pessoa Jurídica', icon: 'id-card' },
  { module: 'geral', slug: 'produto', label: 'Produto', icon: 'shopping-cart' },
  { module: 'geral', slug: 'profissional-de-servico-oficial', label: 'Profissional de Serviço Oficial', icon: 'network' },
  { module: 'geral', slug: 'revendedora-de-produtos-agropecuarios', label: 'Revendedora de Produtos Agropecuários', icon: 'store' },
  { module: 'geral', slug: 'unidade-administrativa', label: 'Unidade Administrativa', icon: 'warehouse' },
  { module: 'geral', slug: 'unidade-de-medida', label: 'Unidade de Medida', icon: 'ruler' },
  { module: 'geral', slug: 'unidade-de-vigilancia-agropecuaria', label: 'Unidade de Vigilância Agropecuária', icon: 'tower-control' },
  { module: 'geral', slug: 'venda-de-propriedade', label: 'Venda de Propriedade', icon: 'truck' },

  // Animal
  { module: 'animal', slug: 'certificadora-sisbov', label: 'Certificadora SISBOV', icon: 'badge-check' },
  { module: 'animal', slug: 'doenca', label: 'Doença', icon: 'bug' },
  { module: 'animal', slug: 'especie', label: 'Espécie', icon: 'dna' },
  { module: 'animal', slug: 'estabelecimento-agroindustrial-poa-outras-inspecoes', label: 'Estabelecimento Agroindustrial POA - Outras Inspeções', icon: 'factory' },
  { module: 'animal', slug: 'estabelecimento-agroindustrial-poa-sie-mg', label: 'Estabelecimento Agroindustrial POA - SIE/MG', icon: 'factory' },
  { module: 'animal', slug: 'estabelecimento-recinto-de-eventos-pecuarios', label: 'Estabelecimento/Recinto de Eventos Pecuários', icon: 'calendar-days' },
  { module: 'animal', slug: 'evento-pecuario', label: 'Evento Pecuário', icon: 'calendar-check' },
  { module: 'animal', slug: 'exploracao-pecuaria', label: 'Exploração Pecuária', icon: 'hexagon' },
  { module: 'animal', slug: 'laboratorio', label: 'Laboratório', icon: 'flask-conical' },
  { module: 'animal', slug: 'nucleo-de-producao', label: 'Núcleo de Produção', icon: 'barcode' },
  { module: 'animal', slug: 'organizacao-agropecuaria', label: 'Organização Agropecuária', icon: 'users-round' },
  { module: 'animal', slug: 'passaporte-equestre', label: 'Passaporte Equestre', icon: 'id-card' },
  { module: 'animal', slug: 'profissional-da-area-animal', label: 'Profissional da Área Animal', icon: 'stethoscope' },
  { module: 'animal', slug: 'promotora-de-eventos-pecuarios', label: 'Promotora de Eventos Pecuários', icon: 'calendar-arrow-up-icon' },
  { module: 'animal', slug: 'revendedora-de-animais-vivos', label: 'Revendedora de Animais Vivos', icon: 'store' },
  { module: 'animal', slug: 'status-animal', label: 'Status Animal', icon: 'history' },

  // Vegetal
  { module: 'vegetal', slug: 'cultura', label: 'Cultura', icon: 'leaf' },
  { module: 'vegetal', slug: 'estabelecimento-agroindustrial-pov', label: 'Estabelecimento Agroindustrial POV', icon: 'factory' },
  { module: 'vegetal', slug: 'exploracao-agricola', label: 'Exploração Agrícola', icon: 'tractor' },
  { module: 'vegetal', slug: 'praga', label: 'Praga', icon: 'bug' },
  { module: 'vegetal', slug: 'profissional-vegetal', label: 'Profissional Vegetal', icon: 'sprout' },
  { module: 'vegetal', slug: 'unidade-de-consolidacao', label: 'Unidade de Consolidação', icon: 'warehouse' },

  // Vacinação
  { module: 'vacinacao', slug: 'ajuste-de-doses-de-vacina', label: 'Ajuste de Doses de Vacina', icon: 'clipboard-pen-line' },
  { module: 'vacinacao', slug: 'declaracao-de-vacinacao', label: 'Declaração de Vacinação', icon: 'file-check2' },
  { module: 'vacinacao', slug: 'doacao-partilha-de-vacina', label: 'Doação/Partilha de Vacina', icon: 'handshake' },
  { module: 'vacinacao', slug: 'etapa-de-vacinacao', label: 'Etapa de Vacinação', icon: 'list-tree' },
  { module: 'vacinacao', slug: 'tipo-de-vacina', label: 'Tipo de Vacina', icon: 'syringe' },
  { module: 'vacinacao', slug: 'vacinador-contra-brucelose', label: 'Vacinador Contra Brucelose', icon: 'user-round-check' },
  { module: 'vacinacao', slug: 'venda-com-entrada-de-vacina', label: 'Venda com Entrada de Vacina', icon: 'package-plus' },
  { module: 'vacinacao', slug: 'venda-com-saida-de-vacina', label: 'Venda com Saída de Vacina', icon: 'package-minus' },

  // Exame
  { module: 'exame', slug: 'ajuste-de-doses-de-insumo', label: 'Ajuste de Doses de Insumo', icon: 'clipboard-pen-line' },
  { module: 'exame', slug: 'atestado-de-exame', label: 'Atestado de Exame', icon: 'clipboard-plus' },
  { module: 'exame', slug: 'local-de-realizacao-de-exame', label: 'Local de Realização de Exame', icon: 'map-pin' },
  { module: 'exame', slug: 'tipo-de-atestado', label: 'Tipo de Atestado', icon: 'clipboard-type' },
  { module: 'exame', slug: 'tipo-de-insumo', label: 'Tipo de Insumo', icon: 'pill-bottle' },
  { module: 'exame', slug: 'venda-com-entrada-de-insumo', label: 'Venda com Entrada de Insumo', icon: 'package-plus' },
  { module: 'exame', slug: 'venda-com-saida-de-insumo', label: 'Venda com Saída de Insumo', icon: 'package-minus' },

  // Rebanho
  { module: 'rebanho', slug: 'ajuste-de-rebanho', label: 'Ajuste de Rebanho', icon: 'sliders-horizontal' },
  { module: 'rebanho', slug: 'atualizacao-cadastral-de-rebanho', label: 'Atualização Cadastral de Rebanho', icon: 'refresh-cw' },
  { module: 'rebanho', slug: 'etapa-de-atualizacao-cadastral', label: 'Etapa de Atualização Cadastral', icon: 'clipboard-check' },
  { module: 'rebanho', slug: 'lancamento-de-rebanho', label: 'Lançamento de Rebanho', icon: 'move-up-right' },

  // Arrecadação
  { module: 'arrecadacao', slug: 'boletos', label: 'Boletos', icon: 'credit-card' },
  { module: 'arrecadacao', slug: 'dae', label: 'DAE', icon: 'scan-barcode' },
  { module: 'arrecadacao', slug: 'fundo-de-arrecadacao', label: 'Fundo de Arrecadação', icon: 'wallet' },
  { module: 'arrecadacao', slug: 'indice', label: 'Índice', icon: 'line-chart' },
  { module: 'arrecadacao', slug: 'isencao-de-taxa-de-documento-sanitario', label: 'Isenção de Taxa de Documento Sanitário', icon: 'ban' },
  { module: 'arrecadacao', slug: 'lote-de-pagamento', label: 'Lote de Pagamento', icon: 'layers3' },
  { module: 'arrecadacao', slug: 'notificacoes-dos-estabelecimentos', label: 'Notificações dos Estabelecimentos', icon: 'bell' },
  { module: 'arrecadacao', slug: 'receita', label: 'Receita', icon: 'receipt-text' },
  { module: 'arrecadacao', slug: 'taxa-de-emissao-de-documento-sanitario', label: 'Taxa de Emissão de Documento Sanitário', icon: 'dollar-sign' },

  // GTA
  { module: 'gta', slug: 'distribuicao-de-formularios-de-gta', label: 'Distribuição de Formulários de GTA', icon: 'clipboard-copy' },
  { module: 'gta', slug: 'emissao-de-ata', label: 'Emissão de ATA', icon: 'file-text' },
  { module: 'gta', slug: 'emissao-de-gta', label: 'Emissão de GTA', icon: 'file-input' },
  { module: 'gta', slug: 'finalidade-de-transito', label: 'Finalidade de Trânsito', icon: 'route' },
  { module: 'gta', slug: 'registro-de-venda-de-gta-digital', label: 'Registro de Venda de GTA Digital', icon: 'file-pen-line' },
  { module: 'gta', slug: 'registro-de-venda-de-gta-fisica', label: 'Registro de Venda de GTA Física', icon: 'file-check2' },

  // Fiscalização
  { module: 'fiscalizacao', slug: 'infracao', label: 'Infração', icon: 'file-warning' },
  { module: 'fiscalizacao', slug: 'lista-de-verificacao', label: 'Lista de Verificação', icon: 'clipboard-check' },
  { module: 'fiscalizacao', slug: 'modelo-de-lista-de-verificacao', label: 'Modelo de Lista de Verificação', icon: 'clipboard-list' },

  // Controle
  { module: 'controle', slug: 'formularios-de-solicitacao-de-servico', label: 'Formulários de Solicitação de Serviço', icon: 'file-text' },
  { module: 'controle', slug: 'papeis', label: 'Papéis', icon: 'key-round' },
  { module: 'controle', slug: 'parametros-do-sistema', label: 'Parâmetros do Sistema', icon: 'sliders-horizontal' },
  { module: 'controle', slug: 'usuarios', label: 'Usuários', icon: 'users' },
];

export const entityIconBySlug = new Map(entityIcons.map((entity) => [entity.slug, entity]));
