# Ícones do AgroDigital

Os ícones desta pasta foram extraídos da coleção indicada em
`Guia-de-Marca-IMA.html`: [Lucide 0.468.0](https://lucide.dev/), sob licença ISC.

## Ícones por entidade

Use os 79 arquivos de `entidades/` nos cadastros. O nome de cada arquivo
acompanha o valor `entity` definido no front matter dos requisitos. O catálogo
completo e a associação ao ícone Lucide original ficam em
`src/config/entity-icons.mjs` e em `manifest.json`.

| Entidade | Arquivo | Ícone Lucide de origem |
| --- | --- | --- |
| Pessoa física | `entidades/pessoa-fisica.svg` | `UserRound` |
| Pessoa jurídica | `entidades/pessoa-juridica.svg` | `IdCard` |
| Estabelecimento agropecuário | `entidades/estabelecimento-agropecuario.svg` | `BriefcaseBusiness` |
| Exploração pecuária | `entidades/exploracao-pecuaria.svg` | `Hexagon` |

Exemplo em HTML:

```html
<img src="/icons/entidades/pessoa-fisica.svg" alt="" />
```

Os SVGs usam `currentColor`. Para controlar a cor diretamente por CSS, insira
o conteúdo do SVG no HTML; quando usado em `<img>`, o arquivo mantém a cor
padrão definida pelo contexto do SVG.

## Coleção do guia

`lucide/` contém cada um dos 177 itens da grade do guia como um SVG separado.
`manifest.json` registra os nomes exibidos no guia, os arquivos correspondentes,
os aliases e a versão de origem. A licença original está em
`LICENSE-lucide.txt`.

`modulos/` contém os dez ícones de módulo. Para recriar todos os aliases
semânticos depois de atualizar os catálogos, execute `npm run icons:sync`.
