---
title: Pessoa física
docType: requirement
module: geral
entity: pessoa-fisica
entityPlural: pessoas físicas
lifecycle: ready
---

## 1. Buscar pessoa física

**Dado que** estou na tela inicial para usuários autenticados  
**Quando** acesso o menu **Pessoa Física**  
**Então** o sistema exibe a tela de busca com os campos abaixo.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| CPF ou Nome da Pessoa Física | Texto curto | Não | Tamanho máximo = 255 caracteres | `444.009.956-40` | Vazio |
| Estado | Seleção simples | Não | Refere-se ao endereço de correspondência.<br>Valores = lista de estados brasileiros. | `Minas Gerais` | Vazio |
| Município | Seleção pesquisável | Não | Disponível se **Estado** estiver preenchido.<br>Refere-se ao endereço de correspondência.<br>Valores = municípios do estado selecionado. | `Esmeraldas` | Vazio |
| Situação do Cadastro | Seleção simples | Não | Valores = `Ativo`, `Inativo`. | `Ativo` | Vazio |

O sistema exibe as ações comuns das telas de busca (**AC001**): **Inicial**, **Adicionar Novo** e **Pesquisar**. Antes da primeira pesquisa, deve solicitar o preenchimento de pelo menos um campo.

## 2. Listar pessoas físicas

**Dado que** estou na tela de busca  
**E** o campo de busca ou pelo menos um filtro foi preenchido corretamente  
**Quando** realizo a ação **Pesquisar**  
**Então** o sistema retorna os registros compatíveis.

| Campo | Tipo | Ordenável | Descrição | Exemplo |
| --- | --- | :---: | --- | --- |
| CPF | Texto | Não | Exibe o CPF. | `444.009.956-40` |
| Nome | Texto | Sim | Exibe o nome. | `Joaquim da Silva` |
| Estado | Texto | Sim | Exibe o estado do endereço de correspondência. | `Minas Gerais` |
| Município | Texto | Sim | Exibe o município do endereço de correspondência. | `Esmeraldas` |
| Situação | Texto | Sim | Exibe a situação do cadastro. | `Ativo` |

Para cada resultado, o sistema exibe as ações comuns de listagem (**AC002**): **Visualizar** e **Editar**.

### Cenários alternativos

- Se nenhum campo de busca ou filtro válido for preenchido, o sistema não realiza a busca, informa os problemas encontrados e destaca os campos com erro.
- Se não houver registros compatíveis, o sistema exibe a mensagem **“Nenhum resultado foi encontrado”**.
- Em caso de falha técnica, aplica-se **CA003 — Notificar erro ao usuário devido a falha técnica**.

## 3. Cadastrar pessoa física

**Dado que** estou na tela de cadastro  
**Então** o sistema exibe o formulário descrito a seguir.

Campos indicados com `*` são obrigatórios.

### Informações básicas

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| CPF | CPF | Sim | Tamanho = 11 dígitos.<br>Formato = `XXX.XXX.XXX-XX`.<br>Validação de dígito verificador. | `444.009.956-40` | Vazio |
| Nome | Texto curto | Sim | Consulta à API de CPF.<br>Somente leitura.<br>Disponível se **CPF** estiver preenchido.<br>Tamanho máximo = 255 caracteres. | `Joaquim da Silva` | Valor obtido pela API de CPF |
| Apelido | Texto curto | Não | Tamanho máximo = 100 caracteres.<br>Tipo = alfanumérico. | `Joca` | Vazio |
| Data de Nascimento | Data | Sim | Consulta à API de CPF.<br>Somente leitura.<br>Formato = `DD/MM/AAAA`.<br>Não pode ser futura. | `12/05/1952` | Valor obtido pela API de CPF |
| Sexo | Seleção simples | Sim | Consulta à API de CPF.<br>Somente leitura.<br>Valores = `Não informado`, `Masculino`, `Feminino`, `Outro`. | `Masculino` | Valor obtido pela API de CPF |
| Estado Civil | Seleção simples | Sim | Consulta à API de CPF.<br>Somente leitura.<br>Valores = `Casado(a)`, `Divorciado(a)`, `Solteiro(a)`, `Viúvo(a)`. | `Casado(a)` | Valor obtido pela API de CPF |

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
| Complemento | Texto curto | Não | Tamanho máximo = 255 caracteres. | `Apto 02` | Vazio |
| Localidade | Seleção pesquisável | Não | Valores = localidades cadastradas no sistema (US005).<br>Pré-filtrado pelo município. | `Pimentas` | Vazio |
| Distrito | Seleção pesquisável | Não | Valores = distritos cadastrados no sistema (US005).<br>Pré-filtrado pelo município. | `Carrancas` | Vazio |

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| O endereço de correspondência é também o endereço de residência? | Seleção simples | Sim | Valores = `Sim`, `Não`. | `Sim` | `Sim` |

#### Endereço de residência

Disponível se **O endereço de correspondência é também o endereço de residência?** = `Não`.

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
| Complemento | Texto curto | Não | Disponível se **Zona** = `Urbana`.<br>Tamanho máximo = 255 caracteres. | `Apto 02` | Vazio |
| Localidade | Seleção pesquisável | Não | Valores = localidades cadastradas no sistema (US005).<br>Pré-filtrado pelo município. | `Pimentas` | Vazio |
| Distrito | Seleção pesquisável | Não | Valores = distritos cadastrados no sistema (US005).<br>Pré-filtrado pelo município. | `Carrancas` | Vazio |
| Geolocalização | Geolocalização | Sim | Disponível se **Zona** = `Rural`.<br>Pode ser informada manualmente ou selecionada no mapa.<br>Latitude entre -90 e 90; longitude entre -180 e 180. | `41.40338, 2.17403` | Vazio |
| Observação | Texto curto | Não | Tamanho máximo = 255 caracteres. | `Endereço da fazenda` | Vazio |

### Representantes legais (zero ou mais)

| Campo | Tipo | Obrigatório no item | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Representante Legal | Seleção de entidade: pessoa física | Sim | Valores = pessoas físicas cadastradas.<br>Pesquisa por nome ou CPF. | `Gustavo de Souza Sobrinho` | Vazio |
| CPF | CPF | Sim | Somente leitura.<br>Disponível se **Representante Legal** estiver preenchido.<br>Corresponde à pessoa selecionada. | `555.009.956-40` | Vazio |
| Documento de Vínculo | Arquivo | Sim | Tipos aceitos = PNG, JPG, PDF.<br>Tamanho máximo = 50 MB. | `procuracao.pdf` | Vazio |

### Informações de contato

Aplica-se o componente **Contatos simples**.

| Campo | Tipo | Obrigatório | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Tipo de Contato | Texto | Sim | Somente leitura. | `E-mail` | `E-mail` |
| E-mail | Texto curto | Sim | Formato = e-mail válido.<br>Somente leitura se o CPF já estiver vinculado a um usuário. | `joaquim@email.com` | E-mail do usuário, quando houver |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Meu e-mail padrão` | Vazio |
| Tipo de Contato | Texto | Sim | Somente leitura. | `Telefone` | `Telefone` |
| Número | Texto numérico | Sim | Tamanho = 11 dígitos.<br>Formato = `(XX) XXXXX-XXXX`. | `(35) 99999-1111` | Vazio |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Meu telefone` | Vazio |
| Tipo de Contato | Seleção simples | Sim | Valores = `E-mail`, `Telefone`. | `Telefone` | `E-mail` |
| E-mail | Texto curto | Sim | Disponível se **Tipo de Contato** = `E-mail`.<br>Formato = e-mail válido. | `joaquim@email.com` | Vazio |
| Número | Texto numérico | Sim | Disponível se **Tipo de Contato** = `Telefone`.<br>Tamanho = 11 dígitos.<br>Formato = `(XX) XXXXX-XXXX`. | `(35) 99999-1111` | Vazio |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Telefone do filho` | Vazio |

### Anexos e observações

Aplica-se o componente **Anexos e observações**.

| Campo | Tipo | Obrigatório no item | Validações | Exemplo | Valor padrão |
| --- | --- | :---: | --- | --- | --- |
| Documento | Arquivo | Sim | Tipos aceitos = PNG, JPG, PDF.<br>Tamanho máximo = 50 MB. | `documento.png` | Vazio |
| Descrição | Texto curto | Não | Disponível se **Documento** estiver preenchido.<br>Tamanho máximo = 255 caracteres. | `Documento de identidade com foto` | Vazio |
| Observação | Texto longo | Não | Tamanho máximo = 1.500 caracteres. | `Informações adicionais sobre a pessoa.` | Vazio |

### Ações e resultado

O cadastro usa as ações comuns **AC003** e **AC006**:

- **Todas as pessoas físicas**: volta para a busca.
- **Adicionar**: valida e salva o cadastro.
- **Ver item**: abre o cadastro relacionado selecionado.
- **Adicionar/Remover item**: gerencia representantes, outros contatos e anexos.
- **Baixar documento**: baixa o documento de vínculo ou anexo.

Em caso de sucesso, o sistema exibe uma mensagem e as ações **Voltar** e **Visualizar**. Em caso de erro de validação, mantém o formulário e apresenta os erros nos respectivos campos.

## 4. Visualizar pessoa física

**Dado que** estou na tela de visualização  
**Então** o sistema exibe todos os campos do cadastro como somente leitura, com seus valores preenchidos.

Além deles, exibe:

| Campo | Tipo | Descrição | Exemplo |
| --- | --- | --- | --- |
| Situação do Indivíduo | Texto | Informa, pela integração com a API de CPF, se a pessoa está `Viva` ou `Falecida`. | `Viva` |
| Situação do Cadastro | Texto | Exibe a situação atual conforme **CAC001**. | `Ativo` |

O sistema exibe as ações **Todas as pessoas físicas**, **Editar** e **Histórico de Alterações** (**AC004**), além de **Ver item** e **Baixar documento** (**AC006**).

## 5. Editar pessoa física

**Dado que** estou na tela de edição  
**Então** o sistema exibe os campos do cadastro preenchidos e editáveis, exceto os campos alimentados pela API de CPF e os demais campos definidos como somente leitura. A **Situação do Indivíduo** e a **Situação do Cadastro** também são somente leitura.

O sistema exibe as ações **Salvar**, **Visualizar pessoa física**, **Ativar/Inativar** e **Histórico de Alterações** (**AC005**), além das ações de formulário (**AC006**).

Ao acionar **Salvar**, o sistema abre a confirmação da edição. **Cancelar** retorna à edição; **Salvar** valida os dados, persiste as alterações e retorna à visualização.

## 6. Critérios comuns

- **CA001 — Salvar cadastro de uma entidade**.
- **CA002 — Ativar/Inativar cadastro de uma entidade**.
- **CA003 — Notificar erro ao usuário devido a falha técnica**.

## Regras de negócio específicas

### RNE001 — Unicidade

O cadastro deve ser único no sistema pelo CPF.

### RNE002 — Disponibilidade da API de CPF

Se a API de CPF estiver inacessível, o sistema deve impedir o cadastro da pessoa física.

### RNE003 — Vínculo com usuário

Se já existir um usuário com o CPF informado, a pessoa física deve ser vinculada a esse usuário e o e-mail obrigatório deve receber o e-mail do usuário.

### RNE004 — Endereços

O endereço de correspondência deve ser urbano. Pode ser informado um endereço de residência diferente, urbano ou rural.

### RNE005 — Itens repetíveis

O cadastro pode conter:

- zero ou mais representantes legais, cada qual formado por **Representante Legal**, **CPF** e **Documento de Vínculo**;
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
| US042 v1.0 | 10/10/2025 | Primeira versão finalizada da história de gerenciamento. |
| US043 v1.0 | 10/10/2025 | Primeira versão da história de busca. |

## Histórias relacionadas

- **US005 — Cadastro e edição de divisão municipal**.
- **US043 — Buscar pessoa física**, consolidada nesta página.
