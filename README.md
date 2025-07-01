# My personal website

My personal website on https://lucho.cool

## Installation

```sh
pnpm i
```

## 🚀 Project Structure

```text
/
├── .gitignore
├── README.md
├── astro.config.mjs
├── package.json
├── public
    └── favicon.svg
├── src
    ├── assets
    │   ├── img
    │   │   ├── avatar-louis.jpg
    │   │   └── blog/
    │   ├── styles/
    │   └── vectors/
    ├── components/
    ├── content
    │   ├── config.ts
    │   └── posts/
    ├── env.d.ts
    ├── layouts
    │   ├── BlogPost.astro
    │   └── Layout.astro
    ├── pages
    │   ├── index.md
    │   ├── posts
    │   │   └── [...slug].astro
    │   ├── speaking.md
    │   ├── tags
    │   │   └── [tag].astro
    │   └── writing.astro
    ├── site.config.ts
    └── utils/
├── tsconfig.json
└── yarn.lock
```

## Todo

- [] Fix the way page's title are generated. Titles for astro files in the `posts/` folder work correctly but not for the `index.md` file in `pages/`. the `title` property in the index.md file is not used. Astro looks for it at the root of the astro.Props object whereas it's generated within a content or frontmatter object. Several other projects use an intermediate config file to generate the title:
  - https://github.com/withastro/astro/blob/main/examples/blog/src/layouts/Layout.astro
  - https://github.com/withastro/astro/blob/main/examples/portfolio/src/layouts/BaseLayout.astro
  - https://github.com/chrismwilliams/astro-theme-cactus/blob/main/src/layouts/Base.astro (more complex than the previous two)
- [] Add a 404 page
- [] Add a RSS feed
  - This might help: https://blog.damato.design/posts/astro-rss-mdx/
- [] Add a sitemap
- [] Add animations. See [Netlify article](https://developers.netlify.com/guides/motion-animation-library-with-astro/)
- Add responsive TOC See [Netlify example](https://developers.netlify.com/guides/motion-animation-library-with-astro/)
