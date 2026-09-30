---
title: Pessoa jurídica
docType: requirement
module: geral
entity: pessoa-juridica
entityPlural: pessoas jurídicas
lifecycle: ready
---

## 1. Buscar pessoa jurídica

**Dado que** estou na tela inicial para usuários autenticados  
**Quando** acesso o menu **Pessoa Jurídica**  
**Então** o sistema exibe a tela de busca com os campos abaixo.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| CNPJ ou Razão Social | Texto curto | Não | Tamanho máximo = 255 caracteres. | `56.338.814/0001-95` | Vazio |
| Estado | Seleção simples | Não | Refere-se ao endereço de correspondência.<br>Valores = lista de estados brasileiros. | `Minas Gerais` | Vazio |
| Município | Seleção pesquisável | Não | Disponível se **Estado** estiver preenchido.<br>Refere-se ao endereço de correspondência.<br>Valores = municípios do estado selecionado. | `Esmeraldas` | Vazio |
| Situação do Cadastro | Seleção simples | Não | Valores = `Ativo`, `Inativo`. | `Ativo` | Vazio |

O sistema exibe as ações comuns das telas de busca (**AC001**): **Inicial**, **Adicionar Novo** e **Pesquisar**. Antes da primeira pesquisa, deve solicitar o preenchimento de pelo menos um campo.

## 2. Listar pessoas jurídicas

**Dado que** estou na tela de busca  
**E** o campo de busca ou pelo menos um filtro foi preenchido corretamente  
**Quando** realizo a ação **Pesquisar**  
**Então** o sistema retorna os registros compatíveis.

| Campo | Tipo | Ordenável | Descrição | Exemplo |
| --- | --- | :---: | --- | --- |
| CNPJ | Texto | Sim | Exibe o CNPJ. | `56.338.814/0001-95` |
| Razão Social | Texto | Sim | Exibe a razão social. | `Queijaria São José Ltda.` |
| Estado | Texto | Sim | Exibe o estado do endereço de correspondência. | `Minas Gerais` |
| Município | Texto | Sim | Exibe o município do endereço de correspondência. | `Esmeraldas` |
| Situação | Texto | Não | Exibe a situação do cadastro. | `Ativo` |

Para cada resultado, o sistema exibe as ações comuns de listagem (**AC002**): **Visualizar** e **Editar**.

### Cenários alternativos

- Se nenhum campo de busca ou filtro válido for preenchido, o sistema não realiza a busca, informa os problemas encontrados e destaca os campos com erro.
- Se não houver registros compatíveis, o sistema exibe a mensagem **“Nenhum resultado foi encontrado”**.
- Em caso de falha técnica, aplica-se **CA003 — Notificar erro ao usuário devido a falha técnica**.

## 3. Cadastrar pessoa jurídica

**Dado que** estou na tela de cadastro  
**Então** o sistema exibe o formulário descrito a seguir.

Campos indicados com `*` são obrigatórios.

### Informações básicas

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| CNPJ | CNPJ | Sim | Tamanho = 14 dígitos.<br>Formato = `XX.XXX.XXX/XXXX-XX`.<br>Validação de dígito verificador. | `56.338.814/0001-95` | Vazio |
| Razão Social | Texto curto | Sim | Consulta à API de CNPJ.<br>Tamanho máximo = 255 caracteres. | `Botica Comercial Farmacêutica Ltda.` | Valor obtido pela API de CNPJ |
| Nome Fantasia | Texto curto | Não | Consulta à API de CNPJ.<br>Tamanho máximo = 255 caracteres. | `O Boticário` | Valor obtido pela API de CNPJ |

### Representantes legais (um ou mais)

| Campo | Tipo | Obrigatório no item | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Representante Legal | Seleção de entidade: pessoa física | Sim | Valores = pessoas físicas cadastradas (US042).<br>Pesquisa por nome ou CPF. | `Divino de Souza Sobrinho` | Vazio |
| CPF | CPF | Sim | Somente leitura.<br>Disponível se **Representante Legal** estiver preenchido.<br>Corresponde à pessoa selecionada. | `444.009.956-40` | Vazio |
| Documento de Vínculo | Arquivo | Sim | Tipos aceitos = PNG, JPG, PDF.<br>Tamanho máximo = 50 MB. | `contrato_social.pdf` | Vazio |

### Informações de localização

#### Endereço de correspondência

Aplica-se o componente **Localização simples** com o parâmetro `[Zona fixa = “Urbana”]`.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Zona | Seleção simples | Sim | Somente leitura.<br>Valor = `Urbana`. | `Urbana` | `Urbana` |
| CEP | Texto curto | Sim | Tamanho = 8 dígitos.<br>Formato = `XXXXX-XXX`. | `37060-400` | Vazio |
| Estado | Texto curto | Sim | Consulta à API de CEP.<br>Somente leitura.<br>Disponível se **CEP** estiver preenchido. | `Minas Gerais` | Valor obtido pela API de CEP |
| Município | Texto curto | Sim | Consulta à API de CEP.<br>Somente leitura.<br>Disponível se **CEP** estiver preenchido. | `Varginha` | Valor obtido pela API de CEP |
| Bairro | Texto curto | Sim | Consulta à API de CEP. | `Centro` | Valor obtido pela API, quando disponível |
| Endereço | Texto curto | Sim | Consulta à API de CEP. | `Avenida A` | Valor obtido pela API, quando disponível |
| Número | Texto curto | Sim | Tamanho máximo = 20 caracteres. | `10` | Vazio |
| Complemento | Texto curto | Não | Tamanho máximo = 255 caracteres. | `Sala 02` | Vazio |
| Localidade | Seleção pesquisável | Não | Valores = localidades cadastradas no sistema (US005).<br>Pré-filtrado pelo município. | `Pimentas` | Vazio |
| Distrito | Seleção pesquisável | Não | Valores = distritos cadastrados no sistema (US005).<br>Pré-filtrado pelo município. | `Carrancas` | Vazio |

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| O endereço de correspondência é também o endereço da sede? | Seleção simples | Sim | Valores = `Sim`, `Não`. | `Sim` | `Sim` |

#### Endereço da sede

Disponível se **O endereço de correspondência é também o endereço da sede?** = `Não`.

Aplica-se o componente **Localização simples**, sem zona fixa.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Zona | Seleção simples | Sim | Valores = `Rural`, `Urbana`. | `Rural` | `Rural` |
| CEP | Texto curto | Sim | Disponível se **Zona** = `Urbana`.<br>Tamanho = 8 dígitos.<br>Formato = `XXXXX-XXX`. | `37060-400` | Vazio |
| Estado | Texto curto ou seleção simples | Sim | Na zona urbana: consulta à API de CEP e somente leitura.<br>Na zona rural: valores = estados brasileiros. | `Minas Gerais` | Na zona urbana, valor obtido pela API; na rural, vazio |
| Município | Texto curto ou seleção pesquisável | Sim | Na zona urbana: consulta à API de CEP e somente leitura.<br>Na zona rural: valores = municípios do estado selecionado. | `Varginha` | Na zona urbana, valor obtido pela API; na rural, vazio |
| Bairro | Texto curto | Sim | Disponível se **Zona** = `Urbana`.<br>Consulta à API de CEP. | `Centro` | Valor obtido pela API, quando disponível |
| Endereço | Texto curto | Sim | Na zona urbana: consulta à API de CEP.<br>Na zona rural: informar nome da estrada e quilômetro de referência. | `Avenida A` | Na zona urbana, valor obtido pela API, quando disponível; na rural, vazio |
| Número | Texto curto | Sim | Disponível se **Zona** = `Urbana`.<br>Tamanho máximo = 20 caracteres. | `10` | Vazio |
| Complemento | Texto curto | Não | Disponível se **Zona** = `Urbana`.<br>Tamanho máximo = 255 caracteres. | `Galpão 02` | Vazio |
| Localidade | Seleção pesquisável | Não | Valores = localidades cadastradas no sistema (US005).<br>Pré-filtrado pelo município. | `Pimentas` | Vazio |
| Distrito | Seleção pesquisável | Não | Valores = distritos cadastrados no sistema (US005).<br>Pré-filtrado pelo município. | `Carrancas` | Vazio |
| Geolocalização | Geolocalização | Sim | Disponível se **Zona** = `Rural`.<br>Pode ser informada manualmente ou selecionada no mapa.<br>Latitude entre -90 e 90; longitude entre -180 e 180. | `41.40338, 2.17403` | Vazio |
| Observação | Texto curto | Não | Tamanho máximo = 255 caracteres. | `Endereço da unidade rural` | Vazio |

### Informações de contato

Aplica-se o componente **Contatos simples**.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Tipo de Contato | Texto | Sim | Somente leitura. | `E-mail` | `E-mail` |
| E-mail | Texto curto | Sim | Formato = e-mail válido. | `contato@queijaria.com.br` | Vazio |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `E-mail da sede` | Vazio |
| Tipo de Contato | Texto | Sim | Somente leitura. | `Telefone` | `Telefone` |
| Número | Texto numérico | Sim | Tamanho = 11 dígitos.<br>Formato = `(XX) XXXXX-XXXX`. | `(35) 99999-1111` | Vazio |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Telefone da sede` | Vazio |
| Tipo de Contato | Seleção simples | Sim | Valores = `E-mail`, `Telefone`. | `Telefone` | `E-mail` |
| E-mail | Texto curto | Sim | Disponível se **Tipo de Contato** = `E-mail`.<br>Formato = e-mail válido. | `financeiro@queijaria.com.br` | Vazio |
| Número | Texto numérico | Sim | Disponível se **Tipo de Contato** = `Telefone`.<br>Tamanho = 11 dígitos.<br>Formato = `(XX) XXXXX-XXXX`. | `(35) 99999-1111` | Vazio |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Telefone da filial` | Vazio |

### Anexos e observações

Aplica-se o componente **Anexos e observações**.

| Campo | Tipo | Obrigatório no item | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Documento | Arquivo | Sim | Tipos aceitos = PNG, JPG, PDF.<br>Tamanho máximo = 50 MB. | `documento.png` | Vazio |
| Descrição | Texto curto | Não | Disponível se **Documento** estiver preenchido.<br>Tamanho máximo = 255 caracteres. | `Contrato social` | Vazio |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Informações adicionais sobre a organização.` | Vazio |

### Ações e resultado

O cadastro usa as ações comuns **AC003** e **AC006**:

- **Todas as pessoas jurídicas**: volta para a busca.
- **Adicionar**: valida e salva o cadastro.
- **Ver item**: abre o representante legal selecionado.
- **Adicionar/Remover item**: gerencia representantes, outros contatos e anexos.
- **Baixar documento**: baixa o documento de vínculo ou anexo.

Em caso de sucesso, o sistema exibe uma mensagem e as ações **Voltar** e **Visualizar**. Em caso de erro de validação, mantém o formulário e apresenta os erros nos respectivos campos.

## 4. Visualizar pessoa jurídica

**Dado que** estou na tela de visualização  
**Então** o sistema exibe todos os campos do cadastro como somente leitura, com seus valores preenchidos.

| Campo | Tipo | Descrição | Exemplo |
| --- | --- | --- | --- |
| Situação do Cadastro | Texto | Exibe a situação atual conforme **CAC001**. | `Ativo` |

O sistema exibe as ações **Todas as pessoas jurídicas**, **Editar** e **Histórico de Alterações** (**AC004**), além de **Ver item** e **Baixar documento** (**AC006**).

## 5. Editar pessoa jurídica

**Dado que** estou na tela de edição  
**Então** o sistema exibe os campos do cadastro preenchidos e editáveis, exceto os campos da seção **Informações básicas** e os demais campos definidos como somente leitura. A **Situação do Cadastro** também é somente leitura.

O sistema exibe as ações **Salvar**, **Visualizar pessoa jurídica**, **Ativar/Inativar** e **Histórico de Alterações** (**AC005**), além das ações de formulário (**AC006**).

Ao acionar **Salvar**, o sistema abre a confirmação da edição. **Cancelar** retorna à edição; **Salvar** valida os dados, persiste as alterações e retorna à visualização.

## 6. Critérios comuns

- **CA001 — Salvar cadastro de uma entidade**.
- **CA002 — Ativar/Inativar cadastro de uma entidade**.
- **CA003 — Notificar erro ao usuário devido a falha técnica**.

## Regras de negócio específicas

### RNE001 — Unicidade

O cadastro deve ser único no sistema pelo CNPJ.

### RNE002 — Disponibilidade da API de CNPJ

Se a API de CNPJ estiver inacessível, o sistema deve impedir o cadastro da pessoa jurídica.

### RNE003 — Endereços

O endereço de correspondência deve ser urbano. Pode ser informado um endereço da sede diferente, urbano ou rural.

### RNE004 — Itens repetíveis

O cadastro deve conter um ou mais representantes legais e pode conter outros itens repetíveis:

- um ou mais representantes legais, cada qual formado por **Representante Legal**, **CPF** e **Documento de Vínculo**;
- zero ou mais outros contatos, cada qual formado por **Tipo de Contato**, **E-mail** ou **Número** e **Observação**;
- zero ou mais anexos, cada qual formado por **Documento** e **Descrição**.

## Regras comuns relacionadas

- **RN001 — Situação do cadastro de uma entidade**.
- **RN002 — Ativação/desativação de cadastros de uma entidade**.
- **RN003 — Controle de alterações em uma entidade**.
- **RN005 — Comportamento quando o CEP não for validado**.

## Histórico das fontes

| Versão | Data | Alteração |
| --- | --- | --- |
| US044 v2.0 | 10/02/2026 | Torna **Nome Fantasia** não obrigatório. |
| US044 v1.0 | 10/10/2025 | Primeira versão da história de gerenciamento. |
| US045 v2.0 | 10/02/2026 | Substitui **Nome Fantasia** por **Razão Social** na busca e nos resultados. |
| US045 v1.0 | 10/10/2025 | Primeira versão da história de busca. |

## Histórias relacionadas

- **US005 — Cadastro e edição de divisão municipal**.
- **US042 — Gerenciar pessoa física**.
- **US045 — Buscar pessoa jurídica**, consolidada nesta página.
