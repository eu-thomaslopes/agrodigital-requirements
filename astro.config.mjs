import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { systemModules } from './src/config/system-modules.mjs';

export default defineConfig({
  redirects: {
    '/geral': '/geral/pessoa-fisica/',
    '/animal': '/animal/exploracao-pecuaria/',
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
        { label: 'Início', link: '/' },
        {
          label: 'Sistema',
          items: systemModules.map((module) => ({
            label: module.label,
            collapsed: module.slug !== 'geral',
            items: [{ autogenerate: { directory: module.slug } }],
          })),
        },
        {
          label: 'Sobre a documentação',
          items: [{ slug: 'sobre/modelo-de-conteudo' }],
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      credits: false,
    }),
  ],
});
