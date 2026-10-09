# AgroDigital · Documentação

Documentação funcional e técnica viva do sistema AgroDigital.

## Estudar este repositório

O [roteiro de estudo](docs/roteiro-de-estudo-do-projeto.md) apresenta a
arquitetura e a ordem sugerida para percorrer o código. A instrução reutilizável
para documentar fluxos e comentar código está em
[`docs/skills/documentar-projeto/SKILL.md`](docs/skills/documentar-projeto/SKILL.md).

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

## GitHub Pages

O site é publicado em `https://eu-thomaslopes.github.io/agrodigital-requirements/`.
O endereço e o prefixo ficam no `astro.config.mjs`; os caminhos personalizados
são gerados pelos helpers de `src/utils/content.ts`.

No repositório, selecione **Settings → Pages → Source → GitHub Actions**.
O workflow `.github/workflows/deploy.yml` publica o resultado do build (`dist`)
quando as alterações chegam à branch `main`. Também pode ser executado
manualmente pela aba Actions. Não é necessário versionar a pasta `dist`.

Com `npm run dev`, abra `http://localhost:4321/agrodigital-requirements/`.
Para conferir o site gerado, execute `npm run build` e `npm run preview` e
abra o mesmo prefixo na porta indicada pelo servidor.

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
identificados na Área de Trabalho do AgroDigital e seus ícones ficam catalogados em
`src/config/entity-icons.mjs`; o campo `entity` seleciona automaticamente o SVG
semântico em `public/icons/entidades/`.

Ao alterar os catálogos, sincronize os arquivos derivados:

```bash
npm run icons:sync
```

O campo opcional `icon` pode indicar um nome de `public/icons/lucide/` apenas
como fallback para uma entidade ainda não catalogada.
