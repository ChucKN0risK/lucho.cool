import { defineConfig } from 'astro/config';
import rehypeFigure from 'rehype-figure';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        // The ' ' value is the only way to
        // get rid of the class :/
        rehypeFigure, { className: ' ' }
      ]
    ],
  },
});
