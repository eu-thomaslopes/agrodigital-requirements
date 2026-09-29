# AgroDigital · Documentação

Documentação funcional e técnica viva do sistema AgroDigital.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run check
npm run build
```

O conteúdo navegável fica em `src/content/docs/`. Metadados adicionais são validados pelo schema em `src/schemas/documentation.ts`.

## Adicionando um épico

Existe apenas um `index.mdx`, em `src/content/docs/`. Cada pasta de módulo
contém somente seus requisitos Markdown.

Crie um arquivo Markdown na pasta correspondente e informe no front matter:

```yaml
title: Nome oficial do épico
docType: requirement
module: geral
entity: nome-do-epico
lifecycle: draft
```

O estado do módulo na página inicial, o item da sidebar, o ícone e a ordenação
alfabética por entidade são gerados automaticamente. Não é necessário editar o
`index.mdx` nem o `astro.config.mjs`. O campo `lifecycle` aceita `draft`,
`ready` ou `published` e aparece como uma tag junto ao título do requisito.

Os módulos reconhecidos estão em `src/config/system-modules.mjs`. Os 79 épicos
identificados na Área de Trabalho do SIDAGRO e seus ícones ficam catalogados em
`src/config/entity-icons.mjs`; o campo `entity` seleciona automaticamente o SVG
semântico em `public/icons/entidades/`.

Ao alterar os catálogos, sincronize os arquivos derivados:

```bash
npm run icons:sync
```

O campo opcional `icon` pode indicar um nome de `public/icons/lucide/` apenas
como fallback para uma entidade ainda não catalogada.
