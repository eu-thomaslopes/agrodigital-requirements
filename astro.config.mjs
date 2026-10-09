import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import { systemModules } from './src/config/system-modules.mjs';
import { componentCatalog } from './src/component-library/catalog.ts';
import { componentFencePlugin } from './src/component-library/component-fence-plugin.mjs';

// O Astro conecta a configuração do Starlight aos catálogos compartilhados do projeto.
const base = '/agrodigital-requirements';
export default defineConfig({
  site: 'https://eu-thomaslopes.github.io',
  base,
  redirects: {
    '/geral': `${base}/geral/pessoa-fisica/`,
    '/animal': `${base}/animal/exploracao-pecuaria/`,
  },
  integrations: [
    starlight({
      title: 'IMA AgroDigital · Documentação',
      description: 'Referência funcional e técnica viva do sistema AgroDigital do IMA.',
      favicon: '/favicon.svg',
      locales: {
        root: {
          label: 'Português do Brasil',
          lang: 'pt-BR',
        },
      },
      customCss: ['./src/styles/tokens.css'],
      components: {
        SiteTitle: './src/components/BrandTitle.astro',
        Search: './src/components/Search.astro',
        PageTitle: './src/components/EntityPageTitle.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
        Sidebar: './src/components/DynamicSidebar.astro',
      },
      sidebar: [
        // Módulos e componentes da navegação são derivados de suas fontes canônicas.
        { label: 'Início', link: '/' },
        {
          label: 'Sistema',
          collapsed: true,
          items: systemModules.map((module) => ({
            label: module.label,
            collapsed: true,
            items: [{ autogenerate: { directory: module.slug } }],
          })),
        },
        {
          label: 'Componentes',
          collapsed: true,
          items: componentCatalog.map((component) => ({
            label: component.name,
            link: `/sobre/componentes/#${component.id}`,
          })),
        },
        {
          label: 'Sobre a documentação',
          collapsed: true,
          items: [{ slug: 'sobre/modelo-de-conteudo' }],
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      credits: false,
      routeMiddleware: './src/route-middleware.ts',
    }),
    mdx(),
  ],
  vite: {
    plugins: [componentFencePlugin()],
  },
});
