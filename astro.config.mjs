import { defineConfig } from 'astro/config';
import rehypeFigure from 'rehype-figure';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ['nofollow, noreferrer'],
          target: '_blank',
        },
      ],
      [
        // The ' ' value is the only way to
        // get rid of the class :/
        rehypeFigure,
        { className: ' ' },
      ],
    ],
  },
  integrations: [
    sitemap(),
    robotsTxt(),
  ],
  prefetch: true,
});
