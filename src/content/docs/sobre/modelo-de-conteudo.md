---
title: Modelo de conteúdo
docType: guide
---

A documentação separa conteúdo editorial, metadados e definições reutilizáveis. O objetivo é manter as especificações fáceis de editar sem acoplá-las ao código visual.

## Hierarquia

```text
Sistema → Módulo → Entidade → Funcionalidade → Especificações relacionadas
```

Os identificadores originais, como `US042`, permanecem no conteúdo quando são
necessários para explicar a origem de uma regra e não determinam a navegação.

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
