export type StoryReference = { title: string; href: string };
export type StoryReferenceIndex = Record<string, StoryReference>;

export function createStoryReferenceIndex(
  stories: Iterable<{ id: string; title: string; href: string; usID?: string[] }>,
): StoryReferenceIndex {
  const index: StoryReferenceIndex = {};
  const owners = new Map<string, string>();
  for (const story of stories) {
    for (const code of story.usID ?? []) {
      const owner = owners.get(code);
      if (owner !== undefined) {
        throw new Error(`Código ${code} duplicado: ${owner} e ${story.id}. Cada código deve identificar uma única página.`);
      }
      owners.set(code, story.id);
      index[code] = { title: story.title, href: story.href };
    }
  }
  return index;
}

export function findStoryReferences(text: string, index: StoryReferenceIndex) {
  return Array.from(text.matchAll(/(?<![\p{L}\p{N}_])US\d+(?![\p{L}\p{N}_])/gu))
    .filter((match) => Object.hasOwn(index, match[0]))
    .map((match) => ({ code: match[0], start: match.index, ...index[match[0]] }));
}
