# Diretrizes de manutenção

## Princípio arquitetural

- Componentização e fonte única de verdade são requisitos de qualquer mudança.
- Antes de adicionar listas, rótulos, links, ícones ou regras repetidas, procure um
  componente, metadado ou configuração compartilhada que possa produzi-los.
- Não mantenha manualmente em MDX uma lista que possa ser derivada da coleção de
  conteúdo.

## Conteúdo e navegação

- Existe um único `index.mdx`, na raiz de `src/content/docs/`.
- Cada módulo do sistema ocupa uma pasta em `src/content/docs/<modulo>/` e essa
  pasta contém somente documentos de requisitos, nunca outro `index.mdx`.
- Cada épico navegável possui um arquivo Markdown próprio na pasta do módulo.
- `title`, `module` e `entity` no front matter são a fonte dos títulos, cards e
  links.
- A ordem dos módulos é definida somente em `src/config/system-modules.mjs`.
  Dentro de cada módulo, os requisitos são ordenados alfabeticamente por
  `entity`; não declare `sidebar.order` nos documentos.
- Todo documento `requirement` declara `lifecycle` como `draft`, `ready` ou
  `published`; a tag visual correspondente é gerada pelo componente de título.
- O ícone é resolvido por `entity` usando `src/config/entity-icons.mjs`. Use o
  campo opcional `icon` somente como fallback para uma entidade ainda não
  catalogada.
- A página inicial usa `SystemModuleCards.astro` para representar os módulos;
  não escreva listas de módulos ou requisitos manualmente em MDX.
- A lista estável de módulos do sistema fica somente em
  `src/config/system-modules.mjs`.
- Depois de alterar os catálogos de ícones, execute `npm run icons:sync`.

## Nomenclatura

- Preserve os termos oficiais do AgroDigital nas páginas, nos títulos e nas entidades.
- Use slugs em kebab-case, sem acentos, para módulos, entidades e ícones.
- Uma alteração de termo deve ser feita na fonte canônica e refletida pelos
  componentes; não corrija cópias isoladamente.
