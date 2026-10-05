const slugify = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-');

/** Expands analyst-authored Markdown component blocks to an internal MDX call. */
export function componentFencePlugin() {
  return {
    name: 'agrodigital-component-fences',
    enforce: 'pre',
    transform(source, id) {
      // Arquivos sem blocos especiais seguem sem transformação.
      if (!id.includes('.mdx') || !source.includes('```componente')) return null;

      // Cada linha vira um parâmetro; a validação final acontece em RequirementComponent.
      const output = source.replace(/```componente\s*\r?\n([\s\S]*?)\r?\n```/g, (_block, body) => {
        const values = {};
        for (const line of body.split(/\r?\n/).filter((item) => item.trim())) {
          const separator = line.indexOf(':');
          if (separator < 1) throw new Error(`Parâmetro de componente inválido em ${id}: “${line}”. Use “nome: valor”.`);
          const key = slugify(line.slice(0, separator));
          const value = line.slice(separator + 1).trim().replace(/^(["'])(.*)\1$/, '$2');
          values[key] = value;
        }

        const name = slugify(values.componente);
        if (!name) throw new Error(`Bloco de componente inválido em ${id}: declare “componente: id-do-componente”.`);
        delete values.componente;

        return `<RequirementComponent name=${JSON.stringify(name)} parameters={${JSON.stringify(JSON.stringify(values))}} />`;
      });

      return output === source ? null : { code: output, map: null };
    },
  };
}
