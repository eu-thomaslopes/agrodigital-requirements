---
title: Modelo de conteúdo
docType: guide
---

A documentação separa conteúdo editorial, metadados e definições reutilizáveis. O objetivo é manter as especificações fáceis de editar sem acoplá-las ao código visual.

## Hierarquia

```text
Sistema → Módulo → Entidade → Funcionalidade → Especificações relacionadas
```

Os códigos originais, como `US042`, identificam histórias pelo metadado `usID`.
Nas referências do texto e das tabelas, códigos cadastrados aparecem como links
com o título atual da página correspondente. Códigos ainda não cadastrados
permanecem como texto. Exemplos de código e identificadores no histórico de
versões preservam sua escrita original.

Na seção **Histórias e referências relacionadas**, links identificados por
códigos US são direcionados ao próprio site e recebem o título da página.
Quando a história ainda não foi cadastrada, a referência fica como texto até
que exista uma página com esse código. Referências sem código US, como normas
e documentação técnica, conservam seus links externos.

Uma página pode representar mais de uma história. Declare todos os seus códigos
em uma lista no cabeçalho Markdown, mesmo quando houver somente um:

```yaml
usID:
  - US054
  - US055
```

Todos os códigos da lista levam à mesma página. Cada código deve ser único em
toda a documentação; códigos duplicados impedem a construção do site. O título
e o endereço dos links são derivados da coleção, sem manter um catálogo manual.

## Metadados disponíveis

As páginas de requisito declaram:

- tipo documental, módulo e entidade;
- estado do ciclo de vida (`draft`, `ready` ou `published`);
- ícone somente quando a entidade ainda não está no catálogo compartilhado.

Esses dados são validados durante a construção do site. Os módulos seguem a
ordem do catálogo compartilhado; dentro de cada módulo, os requisitos são
ordenados alfabeticamente pelo slug da entidade.

O estado aparece em destaque ao lado do título como **Rascunho**, **Pronto** ou
**Publicado**.

## Política de migração

1. Preservar a origem de cada afirmação.
2. Registrar inconsistências como pendências editoriais.
3. Não inventar definições para regras ou requisitos ainda não fornecidos.
4. Extrair um bloco compartilhado apenas quando sua semântica estiver confirmada.
