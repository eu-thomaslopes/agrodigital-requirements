# Biblioteca de componentes AgroDigital

O inventário em `catalog.ts` reúne os componentes, ações, critérios de aceitação e tipos de dados nomeados no PDF **Componentes** fornecido. As definições executáveis ficam em `definitions.ts`; cada definição guarda campos, regras, valores de exemplo e parâmetros aceitos. O catálogo de tipos exibidos pelas tabelas fica em `src/config/field-types.ts`.

## Usar um componente em uma história

Em um arquivo MDX, escreva um bloco cercado por três crases com o rótulo `componente`. Use o identificador listado no catálogo e informe apenas os parâmetros necessários:

````md
```componente
componente: Localização simples
zona fixa: Urbana
```
````

O bloco é expandido para a tabela padronizada. Use o nome oficial do componente; o build verifica se ele existe, se os parâmetros obrigatórios foram informados e se os valores são aceitos. Os nomes dos parâmetros podem ser escritos normalmente, com espaços e acentos.

## Definições executáveis nesta primeira etapa

- `localizacao-simples`, com os parâmetros opcionais `zona fixa` (Urbana ou Rural) e `estado fixo`.
- `contatos-simples`, com o parâmetro opcional `email somente leitura se cpf vinculado` (Sim ou Não), usado pela HU de pessoa física.
- `anexos-e-observacoes`, sem parâmetros.
- `selecionar-pessoa-fisica`, com o parâmetro obrigatório `nome do campo`.

O restante do PDF já está inventariado em `catalog.ts`; suas definições executáveis podem ser adicionadas gradualmente seguindo o mesmo formato.
