import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { entityIcons } from '../src/config/entity-icons.mjs';
import { systemModules } from '../src/config/system-modules.mjs';

const publicIcons = new URL('../public/icons/', import.meta.url);
const lucideDirectory = new URL('lucide/', publicIcons);
const entityDirectory = new URL('entidades/', publicIcons);
const moduleDirectory = new URL('modulos/', publicIcons);

await Promise.all([
  mkdir(entityDirectory, { recursive: true }),
  mkdir(moduleDirectory, { recursive: true }),
]);

const copyIcon = async (sourceIcon, targetDirectory, targetSlug) => {
  const source = new URL(`${sourceIcon}.svg`, lucideDirectory);
  const target = new URL(`${targetSlug}.svg`, targetDirectory);
  await copyFile(source, target);
};

await Promise.all([
  ...entityIcons.map((entity) => copyIcon(entity.icon, entityDirectory, entity.slug)),
  ...systemModules.map((module) => copyIcon(module.icon, moduleDirectory, module.slug)),
]);

const manifestUrl = new URL('manifest.json', publicIcons);
const manifest = JSON.parse(await readFile(manifestUrl, 'utf8'));
manifest.entities = Object.fromEntries(
  entityIcons.map(({ module, slug, label, icon }) => [
    slug,
    { file: `entidades/${slug}.svg`, module, label, icon },
  ]),
);
manifest.modules = Object.fromEntries(
  systemModules.map(({ slug, label, icon, order }) => [
    slug,
    { file: `modulos/${slug}.svg`, label, icon, order },
  ]),
);
await writeFile(manifestUrl, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  `Sincronizados ${entityIcons.length} ícones de entidades e ${systemModules.length} ícones de módulos.`,
);
