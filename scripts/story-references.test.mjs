import assert from 'node:assert/strict';
import test from 'node:test';
import { createStoryReferenceIndex, findStoryReferences } from '../src/utils/story-references.ts';

test('todos os códigos da página usam seu título e endereço canônicos', () => {
  const index = createStoryReferenceIndex([
    { id: 'animal/certificadora', title: 'Certificadora SISBOV', href: '/animal/certificadora/', usID: ['US054', 'US055'] },
  ]);
  assert.deepEqual(index.US054, index.US055);
  assert.equal(index.US055.title, 'Certificadora SISBOV');
});

test('códigos duplicados rejeitam o índice em vez de escolher uma página', () => {
  assert.throws(() => createStoryReferenceIndex([
    { id: 'a', title: 'A', href: '/a/', usID: ['US042'] },
    { id: 'b', title: 'B', href: '/b/', usID: ['US042'] },
  ]), /Código US042 duplicado: a e b/);
});

test('reconhece referências completas, preservando desconhecidas e palavras maiores', () => {
  const index = { US042: { title: 'Pessoa física', href: '/geral/pessoa-fisica/' } };
  const text = '(US042), US999; XUS042 US0420 US042_extra áUS042. US042.';
  assert.deepEqual(findStoryReferences(text, index).map(({ start }) => start), [1, text.lastIndexOf('US042')]);
});

test('alterar o título canônico atualiza todas as referências dos códigos da página', () => {
  const index = createStoryReferenceIndex([
    { id: 'a', title: 'Novo título', href: '/a/', usID: ['US001', 'US002'] },
    { id: 'b', title: 'Sem código', href: '/b/' },
  ]);
  assert.deepEqual(findStoryReferences('US001 e US002', index).map(({ title }) => title), ['Novo título', 'Novo título']);
});
