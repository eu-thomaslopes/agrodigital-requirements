---
name: documentar-projeto-agrodigital
description: Ajuda a estudar, explicar e documentar a arquitetura e os fluxos deste repositório Astro de requisitos do AgroDigital.
---

# Documentar e estudar o projeto AgroDigital

Use esta skill quando alguém quiser entender o repositório, percorrer o código
linha a linha, manter comentários técnicos ou ampliar o roteiro em
`docs/roteiro-de-estudo-do-projeto.md`.

## Procedimento

1. Leia `AGENTS.md`, o roteiro e os arquivos de entrada relevantes antes de
   propor documentação ou comentários.
2. Classifique o arquivo: configuração, schema, catálogo canônico, componente
   Astro, lógica de navegador, conteúdo editorial ou recurso gerado.
3. Trace imports, dados de entrada, transformação/validação e saída. Use `rg`
   para encontrar consumidores e não atribua ao site regras da aplicação que só
   aparecem como requisitos.
4. Atualize o roteiro quando a arquitetura, comandos, fluxo ou fonte canônica
   mudar. Registre dúvidas factuais como perguntas; não invente comportamento.
5. Ao comentar o código, use a sintaxe própria da linguagem: `//` em JS/TS,
   comentários HTML/Astro em marcação, `/* */` em CSS e `#` em shell/YAML.
   Não use `#` literalmente em linguagens que não aceitam essa sintaxe.
6. Escreva comentários em português, junto à decisão ou transformação que
   explicam. Prefira explicar motivo, contrato, prioridade ou efeito não óbvio;
   não repita o nome da função nem narre cada linha óbvia.
7. Mantenha listas e regras repetidas nas fontes canônicas compartilhadas
   previstas em `AGENTS.md`. Não documente arquivos gerados como se fossem a
   fonte original.
8. Faça revisão final dos comentários para confirmar que ainda correspondem ao
   comportamento do código. Não rode testes/build a menos que o usuário peça
   verificação; se pedir, registre o comando e o resultado no resumo.

## Formato de explicação de um arquivo

Quando solicitado, explique cada arquivo nesta ordem:

- propósito e posição no fluxo;
- dependências e dados recebidos;
- blocos/funções de cima para baixo;
- efeitos e dados produzidos;
- pontos de atenção e arquivos relacionados.

Para leitura realmente linha a linha, divida arquivos extensos em trechos
sequenciais, mantendo referências de linha para o usuário poder acompanhar.
