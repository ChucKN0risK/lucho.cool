import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeFigure from 'rehype-figure';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
