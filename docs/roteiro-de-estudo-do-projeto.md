# Roteiro para dominar o projeto

Este roteiro acompanha o código que existe neste repositório. Ele é um site de
documentação funcional e técnica do AgroDigital feito com Astro e Starlight;
**não contém o código-fonte da aplicação AgroDigital**. Os requisitos descrevem
comportamentos esperados, mas não implementam telas, APIs ou regras de negócio.

## Mapa mental

```text
package.json + astro.config.mjs
        │ configura Astro, Starlight, MDX e navegação
        ├── src/content.config.ts ── schema ── valida metadados
        ├── src/config/ ──────────── catálogos canônicos
        ├── src/content/docs/ ───── requisitos e guias em Markdown/MDX
        ├── src/components/ ─────── integra conteúdo, busca e navegação
        │        ├── SystemModuleCards.astro ─ cartões da página inicial
        │        ├── RequirementComponent.astro ─ tabelas de componentes
        │        └── RequirementUserStory.astro ─ resumo derivado dos critérios
        └── public/icons/ ───────── SVGs servidos pelo site
                    ▲
scripts/sync-icon-catalog.mjs ─ gera SVGs e manifest.json dos catálogos
```

## Ordem de estudo

### 1. Entenda o produto deste repositório

Leia `README.md`, `src/content/docs/sobre/modelo-de-conteudo.md` e a home em
`src/content/docs/index.mdx`. Anote quais páginas são requisitos, quais são
guias e de onde vêm os dados exibidos na navegação.

### 2. Entenda como o site inicia

Leia `package.json`, `tsconfig.json` e `astro.config.mjs`. Siga as importações
dos catálogos até a configuração do Starlight. Identifique os componentes
substituídos (`SiteTitle`, `Search`, `PageTitle`, `MarkdownContent` e `Sidebar`),
os redirects e o plugin do Vite. Confira `src/styles/tokens.css` depois de
entender a estrutura visual.

### 3. Entenda o contrato dos documentos

Leia `src/content.config.ts`, `src/schemas/documentation.ts`,
`src/config/requirement-lifecycle.ts` e `src/config/field-types.ts`. Depois
compare o front matter de `src/content/docs/geral/pessoa-fisica.mdx` e
`pessoa-juridica.mdx`. Verifique como metadados inválidos são rejeitados e como
o tipo de requisito determina quais campos são obrigatórios.

### 4. Siga a fonte única de cada catálogo

- Módulos: `src/config/system-modules.mjs` → sidebar e cartões da home.
- Entidades e ícones: `src/config/entity-icons.mjs` → `src/utils/content.ts` →
  título/sidebar; os SVGs correspondentes são materializados em `public/icons/`.
- Ciclo de vida: `src/config/requirement-lifecycle.ts` → schema e título.
- Tipos de campo: `src/config/field-types.ts` → tabelas e componentes.
- Componentes: `src/component-library/catalog.ts` documenta o inventário;
  `definitions.ts` contém os componentes atualmente executáveis.

Para cada catálogo, procure usos com `rg` e responda: qual arquivo é canônico,
quais arquivos são derivados, e qual comando mantém os derivados sincronizados?

### 5. Trace a renderização de um requisito

Use `pessoa-fisica.mdx` como exemplo. Acompanhe front matter → schema → título
customizado (`EntityPageTitle.astro`) → resumo de história
(`RequirementUserStory.astro`) → conteúdo Markdown → aprimoramento das tabelas
(`MarkdownContent.astro`). Compare com `pessoa-juridica.mdx` e
`animal/exploracao-pecuaria.mdx` para ver diferenças de conteúdo.

Em `MarkdownContent.astro`, estude em blocos: reconhecimento das tabelas,
estrutura dos cabeçalhos, agrupamento/colapso das seções, tabelas de componentes
e acessibilidade. É o arquivo mais longo e concentra transformação no navegador;
não tente decorá-lo antes de conseguir explicar esses blocos.

### 6. Trace um bloco de componente ponta a ponta

Escolha um bloco cercado por ```` ```componente ```` em um requisito. Siga
`component-fence-plugin.mjs` (texto MDX → chamada) →
`RequirementComponent.astro` (parâmetros e validação) →
`component-library/definitions.ts` (campos construídos) → `FieldTable.astro`
(apresentação), usando `field-types.ts` para os rótulos. Leia também
`src/component-library/README.md` e `src/content/docs/sobre/componentes.mdx`.

### 7. Trace navegação, busca e ícones

Leia `SystemModuleCards.astro`, `DynamicSidebar.astro`, `Search.astro` e
`SearchDropdown.astro`. Separe o que é calculado durante a geração do site do que
roda no navegador. Na busca, acompanhe criação do índice, normalização sem
acentos, ordenação, limite dos resultados e atalhos de teclado.

Leia `scripts/sync-icon-catalog.mjs` e `public/icons/README.md`. O comando
`npm run icons:sync` copia SVGs Lucide para os catálogos de módulos/entidades e
atualiza o manifesto; entenda a diferença entre arquivo-fonte e arquivo gerado.

### 8. Faça uma leitura linha a linha com perguntas

Para cada arquivo, percorra de cima para baixo e escreva respostas curtas:

1. Quem importa este arquivo e quem o consome?
2. Quais dados entram e qual formato têm?
3. O que é calculado, validado ou alterado?
4. O que sai: HTML, CSS, metadados, arquivo gerado ou efeito no navegador?
5. Qual regra de fonte única ou convenção do `AGENTS.md` ele precisa respeitar?

Use `rg "nomeDaFuncao|nome-do-arquivo" src` para encontrar as ligações. Leia
primeiro funções/computações; depois marcação e estilos. Quando uma resposta não
estiver no código, marque como pergunta em vez de inferir regra de negócio.

## Sessões sugeridas

| Sessão | Foco | Resultado esperado |
| --- | --- | --- |
| 1 | README, home, modelo de conteúdo e estrutura | Explicar o escopo e as pastas |
| 2 | Astro, schema e catálogos | Explicar a configuração e validação |
| 3 | Renderização de requisitos | Traçar metadados até título/conteúdo |
| 4 | Componentes reutilizáveis | Traçar bloco até tabela validada |
| 5 | Busca, sidebar, cartões, ícones e estilos | Distinguir geração do site e navegador |
| 6 | Leitura linha a linha e revisão | Explicar os arquivos sem depender do roteiro |

## Comandos úteis

```bash
npm run dev                 # visualizar o site localmente
npm run check               # checar conteúdo, Astro e tipos
npm run build               # validar e gerar a versão de produção
npm run icons:sync          # regenerar ícones e manifesto
rg "getCollection|componentFencePlugin|entityIconBySlug" src astro.config.mjs
```

`src/content/docs/` contém atualmente poucos documentos de exemplo; as demais
pastas de módulos ainda podem estar vazias. `public/icons/` contém muitos SVGs
e deve ser entendido como catálogo de recursos, não como centenas de arquivos de
lógica. Comece pelos pontos de entrada e retorne aos documentos conforme cada
fluxo exigir.

## Segunda passada: inventário dos arquivos de código

Depois dos fluxos acima, complete a leitura incluindo cada arquivo de código,
mesmo os mais simples:

- Raiz: `astro.config.mjs`, `tsconfig.json` e os scripts de `package.json`.
- Configuração e validação: `src/content.config.ts`,
  `src/schemas/documentation.ts`, todos os arquivos de `src/config/` e
  `src/utils/content.ts`.
- Componentes Astro: `BrandTitle`, `ComponentCatalog`, `DynamicSidebar`,
  `EntityPageTitle`, `FieldTable`, `MarkdownContent`, `RequirementComponent`,
  `RequirementUserStory`, `Search`, `SearchDropdown` e `SystemModuleCards` em
  `src/components/`. Para cada arquivo, cubra frontmatter, HTML/Astro, scripts e
  estilos.
- Biblioteca de componentes: `catalog.ts`, `definitions.ts` e
  `component-fence-plugin.mjs` em `src/component-library/`.
- Geração e tipos: `scripts/sync-icon-catalog.mjs`, `src/env.d.ts` e
  `src/content/i18n/pt-BR.json`.
- Estilos: `src/styles/tokens.css`; acompanhe cada variável onde é consumida
  com `rg -- "--ima-|--requirement-" src`.

Não é necessário estudar cada SVG como código: entenda o padrão de nomes e a
relação entre catálogo, arquivos derivados e manifesto. Para dominar os detalhes
visuais, abra apenas os SVGs que um fluxo específico referenciar.
