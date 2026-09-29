---
title: Exploração pecuária
docType: requirement
module: animal
entity: exploracao-pecuaria
entityPlural: explorações pecuárias
lifecycle: draft
---

## 1. Buscar exploração pecuária

**Dado que** estou na tela inicial para usuários autenticados  
**Quando** acesso o menu **Exploração Pecuária**, observadas as permissões de acesso  
**Então** o sistema exibe a tela de busca.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Código da Exploração Pecuária | Texto numérico | Não | Tamanho = 15 dígitos. | `314230402480001` | Vazio |
| Estabelecimento Agropecuário | Seleção de entidade: estabelecimento agropecuário | Não | Valores = estabelecimentos cadastrados no sistema. | `Fazenda Rio Preto` | Vazio |
| Produtor | Seleção de entidade: produtor | Não | Valores = pessoas físicas ou jurídicas produtoras de explorações pecuárias cadastradas. | `José Aarão Neto` | Vazio |
| Responsável Técnico | Seleção de entidade: profissional da área animal | Não | Valores = profissionais da área animal. | `José Teixeira Sabino` | Vazio |
| Habilitado para emissão de GTA | Seleção de entidade: profissional da área animal | Não | Valores = profissionais da área animal habilitados para emissão de GTA. | `José Teixeira Sabino` | Vazio |
| Município | Seleção pesquisável | Não | Valores = municípios de Minas Gerais. | `Lavras` | Vazio |
| Espécie | Seleção de entidade: espécie | Sim | Valores = espécies cadastradas no sistema. | `Bovino` | Vazio |
| Vencendo em | Seleção simples | Não | Valores = `30 dias`, `7 dias`, `Hoje`, `Período`. | `30 dias` | Vazio |
| Período de Vencimento — De | Data | Não | Disponível se **Vencendo em** = `Período`. | `01/01/2027` | Vazio |
| Período de Vencimento — Até | Data | Não | Disponível se **Vencendo em** = `Período`.<br>Deve ser posterior ou igual à data inicial. | `31/12/2027` | Vazio |
| Situação do Cadastro | Seleção simples | Não | Valores = `Ativo`, `Inativo`, `Suspenso`. | `Ativo` | Vazio |

O sistema exibe as ações comuns de busca **Inicial**, **Adicionar Novo** e **Pesquisar** (**AC001**).

## 2. Listar explorações pecuárias

**Dado que** estou na tela de busca  
**E** pelo menos um campo foi preenchido corretamente  
**Quando** realizo a ação **Pesquisar**  
**E** existem registros compatíveis  
**Então** o sistema exibe:

| Campo | Tipo | Descrição | Exemplo |
| --- | --- | --- | --- |
| Código | Texto | Código da exploração pecuária. | `310020300390001` |
| Estabelecimento Agropecuário | Texto | Código e nome do estabelecimento vinculado. | `10234567891 - Fazenda do Rio` |
| Produtores | Texto | CPF/CNPJ e nome/razão social dos produtores. | `555.009.956-40 - José Aarão Neto, 444.009.956-40 - Divino de Souza Sobrinho…` |
| Responsáveis Técnicos | Texto | CPF e nome dos responsáveis técnicos. | `444.009.956-40 - Divino de Souza Sobrinho` |
| Habilitados para emissão de GTA | Texto | CPF e nome dos habilitados para emissão de GTA. | `555.009.956-40 - José Aarão Neto…` |
| Município — UF | Texto | Município e UF do estabelecimento vinculado. | `Abadia dos Dourados - MG` |
| Grupo — Espécie | Texto | Grupo e espécie vinculados à exploração. | `Bovídeos - Bovinos` |
| Data de Vencimento | Data | Data de vencimento do contrato da exploração. | `12/02/2030` |
| Situação | Texto | Situação do cadastro. | `Ativo` |

Para cada resultado, o sistema exibe **Visualizar** e **Editar** (**AC002**).

## 3. Cadastrar exploração pecuária

**Dado que** estou na tela de cadastro  
**Então** o sistema exibe o formulário descrito a seguir.

### Estabelecimento agropecuário

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Estabelecimento Agropecuário | Seleção de entidade: estabelecimento agropecuário | Sim | Valores = estabelecimentos cadastrados no sistema (US050). | `Fazenda Rio Preto` | Vazio |

### Informações de área

Disponível se **Estabelecimento Agropecuário** estiver preenchido.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Unidade de Medida da Área | Seleção simples | Sim | Valores = `Metros Quadrados`, `Hectares`. | `Hectares` | `Hectares` |
| Área Produtiva do Estabelecimento Agropecuário | Numérico decimal | Sim | Somente leitura.<br>Corresponde ao estabelecimento selecionado.<br>Exibida na unidade escolhida. | `1000,00` | Vazio |
| Área Útil da Exploração | Numérico decimal | Sim | Tamanho = 12 dígitos.<br>Casas decimais = 2.<br>Pode superar a área produtiva; nesse caso, exibe o alerta definido na RNE003. | `20,00` | Vazio |

:::note[Área compartilhada]
Explorações diferentes podem compartilhar uma mesma área. O valor informado deve ser comparado à área produtiva disponível e às demais explorações, sem bloquear o cadastro quando houver sobreposição.
:::

### Produtores

Disponível se **Estabelecimento Agropecuário** estiver preenchido. Aplica-se o componente **Produtores**.

#### Produtor titular

Produtor principal responsável pela exploração pecuária.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Tipo de Produtor | Seleção simples | Sim | Valores = `Inquilino`, `Arrendatário`, `Assentado`, `Comodatário`, `Beneficiário de doação com reserva de usufruto`, `Meeiro`, `Parceiro Rural`, `Posseiro`, `Possuidor`, `Proprietário`, `Sócio`, `Usufrutuário`. | `Meeiro` | Vazio |
| Produtor | Seleção de entidade: pessoa | Sim | Valores = pessoas físicas ou jurídicas cadastradas (US042 e US044).<br>Pesquisa por nome/razão social ou CPF/CNPJ. | `José Aarão Neto` | Vazio |

#### Outros produtores (zero ou mais)

Cada item contém os mesmos campos da seção **Produtor titular**.

### Contrato de vínculo

Disponível se pelo menos um produtor tiver um tipo diferente de `Proprietário`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Contrato de Vínculo | Arquivo | Sim | Obrigatório quando houver produtor que não seja proprietário.<br>Tipos aceitos = PNG, JPG, PDF.<br>Tamanho máximo = 50 MB. | `contrato_de_vinculo.pdf` | Vazio |
| Possui Data de Vencimento no Contrato de Vínculo? | Seleção simples | Sim | Disponível se **Contrato de Vínculo** estiver preenchido.<br>Valores = `Sim`, `Não`. | `Sim` | `Não` |
| Data de Vencimento | Data | Sim | Se a resposta for `Não`, somente leitura e calculada conforme RNE004.<br>Se for `Sim`, livre digitação.<br>Deve ser posterior ou igual à data atual. | `05/08/2027` | Se não houver vencimento contratual, data atual + 5 anos |

### Informações da espécie explorada

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Espécie | Seleção de entidade: espécie | Sim | Valores = espécies cadastradas no sistema. | `Peixe Redondo` | Vazio |
| Variedade/Raça | Seleção de entidade: variedade/raça | Condicional | Disponível se a espécie possuir variedades ou raças cadastradas.<br>Obrigatório, com um ou mais itens, para peixes e abelhas.<br>Zero ou mais itens para as demais espécies.<br>Valores = variedades/raças da espécie selecionada. | `Tambacu` | Vazio |

### Informações complementares por espécie

Disponível se **Espécie** estiver preenchida.

#### Bovinos ou bubalinos

Disponível se **Espécie** = `Bovinos` ou `Bubalinos`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Área de Atuação | Seleção múltipla | Sim | Valores = `Pecuária de Leite`, `Pecuária de Corte`. | `Pecuária de Leite`, `Pecuária de Corte` | Vazio |
| Sistema de Criação | Seleção simples | Sim | Valores = `Intensivo`, `Semi-intensivo`, `Extensivo`.<br>Intensivo: animais em confinamento, com concentração em áreas menores e alta tecnologia.<br>Semi-intensivo: parte do tempo em confinamento e parte a pasto, ou pastagem com suplementação.<br>Extensivo: animais criados exclusivamente a pasto. | `Semi-intensivo` | Vazio |
| Instalações | Seleção múltipla | Sim | Se **Área de Atuação** contiver `Pecuária de Leite`: `Curral`, `Tronco de Contenção`, `Estação de Monta`, `Embarcadouro`, `Balança`, `Ordenha Mecânica`.<br>Caso contrário, os mesmos valores sem `Ordenha Mecânica`. | `Curral`, `Tronco de Contenção` | Vazio |

#### Caprinos ou ovinos

Disponível se **Espécie** = `Caprinos` ou `Ovinos`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Área de Atuação | Seleção múltipla | Sim | Valores = `Pecuária de Leite`, `Pecuária de Corte`, `Pecuária de Lã`, `Pecuária de Couro`. | `Pecuária de Leite`, `Pecuária de Corte` | Vazio |
| Instalações | Seleção múltipla | Sim | Valores = `Estação de Monta`. | `Estação de Monta` | Vazio |

#### Equídeos

Disponível se o **Grupo da Espécie** = `Equídeos`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Área de Atuação | Seleção simples | Sim | Valores = `Sem fins comerciais`, `Comercial`, `Reprodução`. | `Comercial` | Vazio |
| Sistema de Criação | Seleção simples | Sim | Valores = `Intensiva`, `Semi-intensiva`, `Extensiva`.<br>Intensiva: animais em confinamento, com concentração em áreas menores e alta tecnologia.<br>Semi-intensiva: parte do tempo em confinamento e parte a pasto, ou pastagem com suplementação.<br>Extensiva: animais criados exclusivamente a pasto. | `Semi-intensiva` | Vazio |
| Tipo de Exploração | Seleção múltipla | Sim | Valores = `Propriedade de Espera de Abate de Equídeos (PEAE)`, `Haras`, `Alojamento`, `Unidade Militar`, `Hospital Veterinário`, `Centro de Ensino e Pesquisa`, `Propriedades Fornecedoras de Equídeos (PFE)`, `Central de Reprodução`, `Esporte`, `Lazer`, `Equoterapia`, `Propriedade Rural Comum (Animais de Trabalho)`. | `Haras` | Vazio |
| Instalações | Seleção múltipla | Sim | Valores = `Curral de Manejo`, `Redondel`, `Tronco de Contenção`, `Estação de Monta`, `Embarcadouro`, `Piquetes`, `Baias`. | `Curral de Manejo`, `Tronco de Contenção` | Vazio |

#### Peixes

Disponível se o **Grupo da Espécie** = `Peixes`.

##### Captação de água

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Aptidão | Texto | Sim | Somente leitura.<br>Para peixes redondos = `Corte`.<br>Para peixes ornamentais = `Ornamental`. | `Corte` | Vazio |
| Bacia Hidrográfica | Seleção simples | Sim | Valores = `Rio São Francisco`, `Rio Grande`, `Rio Paranaíba`, `Rio Doce`, `Rio Jequitinhonha`, `Rio Pardo`, `Rio Paraíba do Sul`. | `Rio São Francisco` | Vazio |
| Origem da Captação de Água | Seleção múltipla | Sim | Valores = `Dentro do Estabelecimento`, `Fora do Estabelecimento`. | `Fora do Estabelecimento` | Vazio |
| Fonte da Captação de Água | Seleção múltipla | Sim | Valores = `Rede de abastecimento público`, `Água de chuva`, `Córrego`, `Rio`, `Lago`, `Reservatório`, `Açude`, `Nascente`, `Mina`, `Poço`. | `Rio` | Vazio |
| Nome do Rio | Texto curto | Sim | Disponível se **Fonte da Captação de Água** contiver `Rio`.<br>Tamanho máximo = 255 caracteres. | `Vale Bonito` | Vazio |
| Nome do Reservatório | Texto curto | Sim | Disponível se **Fonte da Captação de Água** contiver `Reservatório`.<br>Tamanho máximo = 255 caracteres. | `Reservatório Vale Bonito` | Vazio |

##### Caracterização do sistema produtivo

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Tipo de Piscicultura Ornamental | Seleção simples | Sim | Disponível se **Espécie** = `Peixe Ornamental`.<br>Valores = `Unidade de Distribuição`, `Unidade de Produção`, `Unidade de Produção de Pequeno Porte`. | `Unidade de Produção` | Vazio |
| Finalidade de Produção | Seleção simples | Sim | Para ornamentais, disponível se o tipo de piscicultura for `Unidade de Produção` ou `Unidade de Produção de Pequeno Porte`; valores = `Ciclo Completo`, `Cria/Recria`.<br>Para os demais: `Ciclo Completo`, `Reprodução/Larvicultura`, `Cria/Recria`, `Engorda`, `Recreação`, `Quarentena`, `Subsistência`. | `Engorda` | Vazio |
| Origem das Matrizes e Reprodutores | Seleção múltipla | Sim | Valores = `Nacional`, `Importação`, `Selvagem`, `Própria`. | `Nacional` | Vazio |
| Sistema de Produção | Seleção simples | Sim | Para ornamentais: `Semifechado`, `Fechado`.<br>Para os demais: `Semiaberto`, `Semifechado`, `Fechado`. | `Semifechado` | Vazio |
| Sistema de Produção Semifechado | Seleção múltipla | Sim | Disponível se **Sistema de Produção** = `Semifechado`.<br>Para ornamentais: `Tanque Escavado`, `Tanque Suspenso`, `Raceway`.<br>Para os demais, acrescenta `Em estufa`. | `Em estufa` | Vazio |
| Sistema de Produção Fechado | Seleção múltipla | Sim | Disponível se **Sistema de Produção** = `Fechado`.<br>Para ornamentais: `Em estufa`, `Tanque Suspenso`, `Aquário`.<br>Para os demais: `Em estufa`, `Tanque Suspenso`. | `Em estufa` | Vazio |
| Abastecimento | Seleção múltipla | Sim | Disponível se **Sistema de Produção** = `Semifechado` ou `Fechado`.<br>Valores = `Tubulação`, `Canal Permeável`, `Canal Impermeável`, `Independente para cada Tanque`, `Passa de um Tanque para Outro`, `Não se aplica`. | `Tubulação` | Vazio |
| Local de Descarte de Água | Seleção múltipla | Sim | Disponível se **Sistema de Produção** = `Semifechado` ou `Fechado`.<br>Valores = `Mesmo Corpo de Captação`, `Outro Corpo d’água`, `Rede de Esgoto`, `Outra Unidade de Criação`. | `Mesmo Corpo de Captação` | Vazio |
| Realiza depuração de peixes? | Seleção simples | Sim | Valores = `Sim`, `Não`. | `Sim` | Vazio |

##### Destino dos animais

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Tipo de Destino | Seleção múltipla | Sim | Para peixes ornamentais: `Unidade de Produção`, `Revendedora`, `Distribuidor`, `Consumidor Final`.<br>Para os demais: `Estabelecimento com inspeção SIF`, `Estabelecimento com inspeção SIE`, `Estabelecimento com inspeção SIM`, `Consumidor Final`, `Peixaria`, `Outros Estabelecimentos de Aquicultura`, `Outro`. | `Estabelecimento com inspeção SIF` | Vazio |
| Destino | Texto curto | Sim | Disponível se **Tipo de Destino** contiver `Outro`.<br>Tamanho máximo = 255 caracteres. | `Padaria` | Vazio |
| Escala de Comércio | Seleção múltipla | Sim | Valores = `Intramunicipal`, `Intraestadual`, `Interestadual`, `Exportação`. | `Intramunicipal` | Vazio |

##### Tratamentos

Disponível se **Espécie** = `Peixe Ornamental`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Possui Tratamento de Afluente? | Seleção simples | Sim | Valores = `Sim`, `Não`. | `Sim` | Vazio |
| Tratamento de Afluente | Seleção múltipla | Sim | Disponível se **Possui Tratamento de Afluente?** = `Sim`.<br>Valores = `UV`, `Cloração`, `Filtro de Areia`, `Filtro de Calcário`, `Filtro de Carvão Ativado`, `Correção de pH`, `Tanque de Decantação`, `Biológico`, `Outro`. | `UV` | Vazio |
| Outro Tratamento de Afluente | Texto curto | Sim | Disponível se **Tratamento de Afluente** contiver `Outro`.<br>Tamanho máximo = 255 caracteres. | `Ácido X` | Vazio |
| Possui Tratamento de Efluente? | Seleção simples | Sim | Valores = `Sim`, `Não`. | `Sim` | Vazio |
| Tratamento de Efluente | Seleção múltipla | Sim | Disponível se **Possui Tratamento de Efluente?** = `Sim`.<br>Valores = `UV`, `Cloração`, `Filtro de Areia`, `Filtro de Calcário`, `Filtro de Carvão Ativado`, `Correção de pH`, `Tanque de Decantação`, `Biológico`, `Outro`. | `UV` | Vazio |
| Outro Tratamento de Efluente | Texto curto | Sim | Disponível se **Tratamento de Efluente** contiver `Outro`.<br>Tamanho máximo = 255 caracteres. | `Ácido X` | Vazio |

### Subexploração pecuária

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| É um Subarrendamento/Subcomodato? | Seleção simples | Sim | Para casos em que a exploração é uma subalocação dentro de outra exploração pecuária.<br>Valores = `Sim`, `Não`. | `Sim` | `Não` |
| Exploração Pecuária Vinculada | Seleção de entidade: exploração pecuária | Sim | Disponível se **É um Subarrendamento/Subcomodato?** = `Sim`.<br>Valores = explorações do mesmo estabelecimento e da mesma espécie. | `345234235670001` | Vazio |

### Anexos e observações

Aplica-se o componente **Anexos e observações**.

| Grupo | Campo | Tipo | Obrigatório no item | Validações | Exemplo | Valor padrão |
| --- | --- | --- | :---: | --- | --- | --- |
| Anexos (zero ou mais) | Documento | Arquivo | Sim | Tipos aceitos = PNG, JPG, PDF.<br>Tamanho máximo = 50 MB. | `anexo.png` | Vazio |
| Anexos (zero ou mais) | Descrição | Texto curto | Não | Disponível se **Documento** estiver preenchido.<br>Tamanho máximo = 255 caracteres. | `Contrato complementar` | Vazio |
| Observações | Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Informações adicionais da exploração.` | Vazio |

### Ações e resultado

O cadastro exibe **Todas as explorações pecuárias** e **Adicionar** (**AC003**), além de **Ver item**, **Adicionar/Remover item** e **Baixar documento** quando aplicáveis (**AC006**).

Em caso de sucesso, o sistema exibe uma mensagem e as ações **Voltar** e **Visualizar**. Em caso de erro de validação, mantém o formulário e apresenta os erros nos respectivos campos.

## 4. Visualizar exploração pecuária

**Dado que** estou na tela de visualização  
**Então** o sistema exibe todos os campos do cadastro como somente leitura e acrescenta:

| Seção | Campo | Tipo | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| Informações Básicas | Código da Exploração Pecuária | Texto | Exibe o código único gerado após o cadastro (RNE002). | `315234235670001` |
| Situação do Cadastro | Situação do Cadastro | Texto | Exibe a situação atual conforme **CAC001**. | `Ativo` |

O sistema exibe **Todas as explorações pecuárias**, **Editar** e **Histórico de Alterações** (**AC004**), além das ações de formulário aplicáveis (**AC006**).

### Ações específicas

| Ação | Disponibilidade e comportamento |
| --- | --- |
| Certificados | Disponível se o grupo da espécie for `Aves` ou `Suídeos`.<br>Abre a tela de certificados. |
| Biosseguridade | Disponível se o grupo da espécie for `Suídeos` ou `Peixes`.<br>Abre a biosseguridade da exploração (US075). |
| Acesso ao Mercado | Abre a tela de acesso ao mercado. |
| Rebanho | Abre a tela de rebanho. |
| Registro da Granja | Disponível se o grupo da espécie for `Aves`.<br>Abre a tela de registro da granja. |

Se houver sobreposição de áreas, a visualização deve apresentar o alerta previsto na RNE003.

## 5. Editar exploração pecuária

**Dado que** estou na tela de edição  
**Então** o sistema exibe os campos do cadastro preenchidos e editáveis, exceto toda a seção **Estabelecimento Agropecuário**. O **Código da Exploração Pecuária**, a **Situação do Cadastro** e os demais campos definidos como somente leitura permanecem bloqueados.

O sistema exibe **Salvar**, **Visualizar exploração pecuária**, **Gerenciar Situação** e **Histórico de Alterações** (**AC005**), além das ações de formulário aplicáveis (**AC006**).

Ao acionar **Salvar**, o sistema abre a confirmação da edição. **Cancelar** retorna à edição; **Salvar** valida os dados, persiste as alterações e retorna à visualização.

## 6. Listar vinculações

**Dado que** estou na tela de visualização das vinculações  
**Então** o sistema exibe:

| Vinculação | Descrição |
| --- | --- |
| Núcleos | Obtidos a partir dos núcleos cadastrados com a exploração pecuária em questão. |
| Estabelecimentos Agroindustriais POA — SIE/MG | Obtidos a partir dos estabelecimentos agroindustriais POA — SIE/MG que possuem a exploração como fornecedora de leite, mel ou ovos. |

Para cada vinculação, o sistema exibe **Visualizar** e **Editar**, além de **Todas as explorações pecuárias** (**AC007**).

## Regras de negócio específicas

### RNE001 — Unicidade

O cadastro deve ser único no sistema pela combinação de produtor titular, estabelecimento e espécie. Um produtor somente pode ser titular de uma exploração pecuária por espécie em cada estabelecimento, conforme a Portaria IMA nº 2.324, de 23 de agosto de 2024.

Exemplo: José Antônio Silva não pode ser titular de mais de uma exploração de bovinos na Fazenda Santa Maria.

### RNE002 — Geração do código

Após o cadastro, o sistema deve gerar um código único de 15 dígitos: os 11 dígitos do código do estabelecimento seguidos de um sequencial inteiro de 4 dígitos. Exemplo: a primeira exploração do estabelecimento `34523423567` recebe o código `345234235670001`.

### RNE003 — Área útil e sobreposição

A soma das áreas úteis das explorações vinculadas ao mesmo estabelecimento deve ser comparada à área produtiva do estabelecimento. Essa soma pode ser menor, igual ou superior à área produtiva quando houver justificativa técnica, pois explorações distintas podem compartilhar área.

Quando a soma ultrapassar a área produtiva, o sistema deve exibir um alerta de sobreposição no cadastro e na visualização, sem bloquear o cadastro.

### RNE004 — Data de vencimento

Se todos os produtores forem proprietários do estabelecimento, a exploração não possui data de vencimento.

Se pelo menos um produtor não for proprietário, o contrato de vínculo e a data de vencimento são obrigatórios:

- se o contrato possuir vencimento, o usuário informa a data;
- se o contrato não possuir vencimento, o sistema calcula a data atual acrescida de 5 anos;
- todos os produtores devem ser notificados por e-mail e pelo sistema de notificações (US019) com 30, 7 e 1 dia de antecedência, ou até a atualização da data;
- a notificação deve informar código da exploração, nome do estabelecimento, espécie e vencimento;
- ao expirar o prazo, o sistema muda o cadastro para `Suspenso` e gera um alerta, mantendo-o assim até a regularização.

### RNE005 — Exploração vinculada

Uma subexploração pecuária deve respeitar os limites máximos de vencimento e área da exploração vinculada.

### RNE006 — Papel de produtor

Após o cadastro, as pessoas físicas produtoras e as pessoas físicas representantes das pessoas jurídicas produtoras devem receber o papel `Produtor`.

## Histórico da fonte

| Versão | Data | Alteração |
| --- | --- | --- |
| v4.0 | XX/07/2026 | Adição de campos complementares. |
| v3.1 | 27/02/2026 | Correção de campos no cadastro e nos filtros. |
| v3.0 | 27/02/2026 | Migração para o novo formato e adição de abas. |
| v2.0 | 05/12/2026 | Refatoração do cadastro — primeira versão. |
| v1.0 | 31/03/2025 | Primeira versão da história. |

:::caution[Inconsistência de versionamento]
A fonte informa v2.0 em `05/12/2026`, data posterior às versões v3.0 e v3.1. O valor foi mantido para rastreabilidade e precisa ser confirmado.
:::

## Histórias e referências relacionadas

- **US014 — Cadastro e edição de exploração pecuária**, substituída por esta história.
- **US015 — Busca de exploração pecuária**, substituída por esta história.
- **US019 — Notificações**.
- **US042 — Gerenciar pessoa física**.
- **US044 — Gerenciar pessoa jurídica**.
- **US050 — Gerenciar estabelecimento agropecuário**.
- **US073 — Gerenciar núcleo de produção**.
- **US075 — Biosseguridade da exploração pecuária**.
- Documento **Vinculações de cadastros**.
- Portaria IMA nº 2.324, de 23 de agosto de 2024.

## Validação

- Validada em reunião on-line entre 02/02/2026 e 04/02/2026.
- Validada em reunião presencial entre 03/11/2025 e 05/11/2025, na Cidade Administrativa, em Belo Horizonte/MG.
