---
title: Estabelecimento agropecuário
docType: requirement
module: geral
entity: estabelecimento-agropecuario
entityPlural: estabelecimentos agropecuários
lifecycle: ready
---

## 1. Cadastrar estabelecimento agropecuário

**Dado que** estou na tela de cadastro  
**Então** o sistema exibe o formulário descrito a seguir.

Campos indicados com `*` são obrigatórios.

### Informações básicas

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Tipo de Estabelecimento Agropecuário | Seleção simples | Sim | Valores = `Apartamento`, `Assentamento`, `Casa`, `Centro de Treinamento`, `Chácara`, `Clínica Veterinária`, `Condomínio`, `Distribuidora`, `Estância`, `Fazenda`, `Galpão`, `Gleba`, `Haras`, `Hípica`, `Hospital Veterinário`, `Instituição de Ensino`, `Lote`, `Parque de Exposições`, `Rancho`, `Residência`, `Sítio`, `Terreno`. | `Fazenda` | Vazio |
| Nome do Estabelecimento Agropecuário | Texto curto | Sim | Disponível se **Tipo de Estabelecimento Agropecuário** estiver preenchido.<br>O tipo deve permanecer fixado no início do nome e não pode ser apagado pelo usuário.<br>Tamanho máximo = 255 caracteres. | `Fazenda Rio Verde` | Vazio |
| Cadastro Provisório? | Seleção simples | Sim | Valores = `Sim`, `Não`. | `Não` | `Não` |

### Proprietários (um ou mais)

Aplica-se o componente **Proprietários**.

| Campo | Tipo | Obrigatório no item | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Tipo de Pessoa | Seleção simples | Sim | Valores = `Pessoa física`, `Pessoa jurídica`. | `Pessoa física` | `Pessoa física` |
| Proprietário | Seleção de entidade | Sim | Valores = pessoas físicas ou jurídicas cadastradas (US042 e US044).<br>Pré-filtrado por **Tipo de Pessoa**.<br>Pesquisa por nome/razão social ou CPF/CNPJ. | `José Aarão Neto` | Vazio |
| CPF/CNPJ | CPF/CNPJ | Sim | Somente leitura.<br>Disponível se **Proprietário** estiver preenchido.<br>Corresponde à pessoa selecionada. | `555.009.956-40` | Vazio |

### Informações de localização

Aplica-se o componente **Localização simples** com o parâmetro `[Estado fixo = “Minas Gerais”]`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Zona | Seleção simples | Sim | Valores = `Rural`, `Urbana`. | `Rural` | `Rural` |

#### Zona rural

Disponível se **Zona** = `Rural`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Estado | Seleção simples | Sim | Somente leitura.<br>Valor = `Minas Gerais`. | `Minas Gerais` | `Minas Gerais` |
| Município | Seleção pesquisável | Sim | Valores = municípios de Minas Gerais. | `Lavras` | Vazio |
| Endereço | Texto curto | Sim | Informar nome da estrada e quilômetro de referência.<br>Tamanho máximo = 255 caracteres. | `Estrada de chão no Km 12` | Vazio |
| Localidade | Seleção pesquisável | Não | Valores = localidades cadastradas (US005).<br>Pré-filtrado pelo município. | `Vila dos Técnicos` | Vazio |
| Distrito | Seleção pesquisável | Não | Valores = distritos cadastrados (US005).<br>Pré-filtrado pelo município. | `Cachoeira do Vale` | Vazio |

#### Zona urbana

Disponível se **Zona** = `Urbana`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| CEP | Texto curto | Sim | Tamanho = 8 dígitos.<br>Formato = `XXXXX-XXX`.<br>Deve pertencer a Minas Gerais. | `37060-400` | Vazio |
| Estado | Texto curto | Sim | Consulta à API de CEP.<br>Somente leitura.<br>Disponível se **CEP** estiver preenchido. | `Minas Gerais` | Valor obtido pela API de CEP |
| Município | Texto curto | Sim | Consulta à API de CEP.<br>Somente leitura.<br>Disponível se **CEP** estiver preenchido. | `Timóteo` | Valor obtido pela API de CEP |
| Bairro | Texto curto | Sim | Consulta à API de CEP. | `Centro` | Valor obtido pela API, quando disponível |
| Endereço | Texto curto | Sim | Consulta à API de CEP. | `Avenida JK` | Valor obtido pela API, quando disponível |
| Número | Texto curto | Sim | Tamanho máximo = 20 caracteres. | `10` | Vazio |
| Complemento | Texto curto | Não | Tamanho máximo = 255 caracteres. | `Apto 02` | Vazio |
| Distrito | Seleção pesquisável | Não | Valores = distritos cadastrados (US005).<br>Pré-filtrado pelo município. | `Cachoeira do Vale` | Vazio |

#### Geolocalização

Aplica-se o componente **Geolocalização**, tanto para zona rural quanto urbana.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Formato | Seleção simples | Sim | Valores = `DMS (graus, minutos, segundos)`, `DD (decimal)`. | `DMS (graus, minutos, segundos)` | `DMS (graus, minutos, segundos)` |
| Latitude | Numérico | Sim | Pode ser informada manualmente ou selecionada no mapa, com consulta à API do Google Maps.<br>Pré-estimada pelos dados de endereço.<br>Máscara conforme o formato (RN010). | DMS: `19°09'56.979800000000"S`<br>DD: `-19.165827719338893` | Vazio |
| Longitude | Numérico | Sim | Pode ser informada manualmente ou selecionada no mapa, com consulta à API do Google Maps.<br>Pré-estimada pelos dados de endereço.<br>Máscara conforme o formato (RN010). | DMS: `44°21'46.336500000000"W`<br>DD: `-44.362871253967285` | Vazio |

### Informações complementares

#### Áreas

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Unidade de Medida das Áreas | Seleção simples | Sim | Valores = `Metros Quadrados`, `Hectares`. | `Hectares` | `Hectares` |
| Área Total | Numérico decimal | Sim | Tamanho = 12 dígitos.<br>Casas decimais = 2.<br>Deve ser maior que zero. | `1000,00` | Vazio |
| Área Produtiva | Numérico decimal | Sim | Tamanho = 12 dígitos.<br>Casas decimais = 2.<br>Deve ser menor ou igual à **Área Total**. | `1000,00` | Vazio |

#### Outras informações

Disponível se **Zona** = `Rural`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Número do CAR | Texto curto | Não | Tamanho = 41 caracteres.<br>Tipo = alfanumérico. | `4050270008331` | Vazio |
| Confrontantes | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Maria Oliveira, proprietária da Fazenda São João, com 450 hectares.` | Vazio |
| Vias de Acesso | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Estrada Municipal da Fazenda São João, Caminho do Rio Verde.` | Vazio |

### Anexos e observações

Aplica-se o componente **Anexos e observações**.

| Campo | Tipo | Obrigatório no item | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Documento | Arquivo | Sim | Tipos aceitos = PNG, JPG, PDF.<br>Tamanho máximo = 50 MB. | `documento.png` | Vazio |
| Descrição | Texto curto | Não | Disponível se **Documento** estiver preenchido.<br>Tamanho máximo = 255 caracteres. | `Documento de identidade com foto` | Vazio |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Este estabelecimento agropecuário será usado para…` | Vazio |

### Ações e resultado

O cadastro exibe as ações comuns **AC003** e **AC006**:

- **Todos os estabelecimentos agropecuários**: volta para a busca (US051).
- **Adicionar**: valida e salva o cadastro.
- **Ver item**: abre o cadastro relacionado selecionado.
- **Adicionar/Remover item**: gerencia proprietários e anexos.
- **Baixar documento**: baixa o anexo.

Também exibe **Ver Mapa/Satélite**, que alterna o modo de visualização do mapa.

Em caso de sucesso, o sistema exibe uma mensagem e as ações **Voltar** e **Visualizar**. Em caso de erro de validação, mantém o formulário e apresenta os erros nos respectivos campos.

## 2. Visualizar estabelecimento agropecuário

**Dado que** estou na tela de visualização  
**Então** o sistema exibe os campos do cadastro como somente leitura e acrescenta:

| Seção | Campo | Tipo | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| Informações Básicas | Código do Estabelecimento Agropecuário | Texto | Exibe o código gerado após o cadastro. | `31001040005` |
| Situação do Cadastro | Situação do Cadastro | Texto | Exibe a situação atual conforme **CAC001**. | `Ativo` |

O sistema exibe as ações **Todos os estabelecimentos agropecuários**, **Editar** e **Histórico de Alterações** (**AC004**), as ações de formulário aplicáveis (**AC006**) e a ação específica **Vinculações**, que abre a aba definida na US062.

## 3. Editar estabelecimento agropecuário

**Dado que** estou na tela de edição  
**Então** o sistema exibe os campos do cadastro preenchidos e editáveis, exceto toda a seção **Informações de Localização**, e acrescenta como somente leitura:

| Seção | Campo | Tipo | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| Informações Básicas | Código do Estabelecimento Agropecuário | Texto | Exibe o código do estabelecimento. | `31001040005` |
| Situação do Cadastro | Situação do Cadastro | Texto | Exibe a situação atual. | `Ativo` |

O sistema exibe as ações comuns de edição (**AC005**) e de formulário (**AC006**): **Salvar**, **Visualizar estabelecimento agropecuário**, **Gerenciar Situação**, **Histórico de Alterações**, **Ver item**, **Adicionar/Remover item** e **Baixar documento**.

**Gerenciar Situação** permite ativar, inativar ou suspender o cadastro, conforme **RN009**.

Ao acionar **Salvar**, o sistema abre a confirmação da edição. **Cancelar** retorna à edição; **Salvar** valida os dados, persiste as alterações e retorna à visualização.

## 4. Critérios comuns

- **CA001 — Salvar cadastro de uma entidade**.
- **CA003 — Notificar erro ao usuário devido a falha técnica**.

## Regras de negócio específicas

### RNE001 — Unicidade pendente de definição

O cadastro deve ser único no sistema. Entretanto, ainda não foi definido pelo cliente como identificar estabelecimentos duplicados.

:::caution[Pendência funcional]
Até que o critério de duplicidade seja definido, a implementação não deve presumir uma chave de unicidade além do código gerado após o cadastro.
:::

### RNE002 — Geração do código

Após o cadastro, o sistema deve gerar um código único de 11 dígitos: os 7 dígitos do código IBGE do município seguidos de um sequencial de 4 dígitos por ordem de cadastro, conforme a Portaria IMA nº 2.324, de 23 de agosto de 2024.

### RNE003 — Itens repetíveis

O cadastro pode possuir:

- um ou mais proprietários, cada qual formado por **Tipo de Pessoa**, **Proprietário** e **CPF/CNPJ**;
- zero ou mais anexos, cada qual formado por **Documento** e **Descrição**.

### RNE004 — Formação do nome

O nome do estabelecimento deve começar pelo valor de **Tipo de Estabelecimento Agropecuário**. Se o tipo for alterado, o prefixo do nome deve ser atualizado automaticamente.

No cadastro, se o usuário mantiver apenas o tipo no nome, sem informar um nome específico, o sistema deve concatenar automaticamente o tipo e o endereço no momento de salvar. Exemplo: `Fazenda` torna-se `Fazenda <endereço>`.

A mesma atualização do prefixo deve ocorrer durante a edição.

### RNE005 — Alteração da área produtiva

Durante a edição, se a nova área produtiva ficar menor que a soma das áreas de explorações pecuárias, explorações agrícolas ou unidades de produção vinculadas, o sistema deve permitir a alteração e exibir um alerta sobre a sobreposição.

## Regras comuns relacionadas

- **RN003 — Controle de alterações em uma entidade**.
- **RN007 — Permissões de acesso**.
- **RN009 — Situação do cadastro com opção de suspensão**.
- **RN010 — Coordenadas geográficas no componente de endereços**.

## Histórico da fonte

| Versão | Data | Alteração |
| --- | --- | --- |
| v1.2 | 17/03/2026 | Define que a área total deve ser maior que zero. |
| v1.1 | 14/01/2026 | Adiciona a ação de vinculações e organiza as ações em grupos. |
| v1.0 | 10/11/2025 | Primeira versão da história. |

## Histórias e referências relacionadas

- **US001 — Cadastro e edição de estabelecimento agropecuário**, substituída por esta história.
- **US005 — Cadastro e edição de divisão municipal**.
- **US042 — Gerenciar pessoa física**.
- **US044 — Gerenciar pessoa jurídica**.
- **US051 — Buscar estabelecimento agropecuário**.
- **US062 — Gerenciar aba de vinculações de estabelecimento agropecuário**.
- Portaria IMA nº 2.324, de 23 de agosto de 2024.
- Documentação técnica da API de Municípios do IBGE.
- Documentação técnica da API de CEP.

## Validação

Validada em reunião presencial entre 03/11/2025 e 05/11/2025, na Cidade Administrativa, em Belo Horizonte/MG.
