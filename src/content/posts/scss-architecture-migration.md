---
title: Migrating your SCSS architecture to the "@use" rule
date: '2024-12-05'
description: Let's migrate an old SCSS architecture from the "@import" rule to the new "@use" rule
author: Louis Chenais
coverImage:
  src: '@/assets/img/blog/migrating-scss-architecture-cover.jpg'
  alt: ''
tags: ['design-tokens', 'development']
readingTime: '6min'
---

I've been using [the ITCSS methodology](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) for several years now to organize my styles in all my project. It has proven its effectivenessin all my projects and it's no suprise it's been the one I've used for [Specify](https://www.specifyapp.com) since day one.

## What's ITCSS in the first place?

ITCSS stands for "Inverted Triangle CSS". Created by [Harry Roberts](https://www.csswizardry.com), it's a methodology to organize your CSS codebase into several sections (called layers), which can be represented as sections of an inverted triangle. The original methodology has 7 layers but I've adapted it to suit my need.

ITCSS basically help you structure your CSS so that you can use the cascade as much as possible and control the specificity of your CSS rules at a large scale.

Here's my simpler version:

![](@/assets/img/blog/itcss-dark.jpg)

In practice, my SCSS architecture looks like this:

![](@/assets/img/blog/my-scss-architecture-inspired-by-itcss.jpg)

I only have 3 layers :

1. Utils : contains all my design tokens created as CSS native variables and mixins, all my general style variables and utility classes
2. Base : the base of my CSS. In short, my base styles targeting HTML tags and my CSS reset (here `sanitize.scss`)
3. Fonts : my font imports that I could also directly put in the "Utils" layer

You'll notice my "Components" layer is "empty" and doesn't import any SCSS file. And it's on purpose. All my components respect the following structure and have their own SCSS file:

```
📁 MyComponent
  ├── MyComponent.vue
  ├── MyComponent.scss
  └── MyComponent.story.ts
```

## Mu current architecture

My SCSS architecture is rather simple: SCSS files from the same layer are in the same folder. Sometimes, files are organized by folder.

Here's an example with my files mixins created in a `mixins/` folder, all imported from the same `_mixins.scss` file:

```
📁 01-utils
  └── 📁 variables
  |   ├── _mixins.scss
  |   └── _text-styles.scss
  └── _mixins.scss <-- 🛢️ barrel file
```

This `_variables.scss` file imports all the files containing my design tokens:

```scss
// ----------------------
// == Mixins
// ----------------------

@import 'mixins/mixins';
@import 'mixins/text-styles';
```

This file is then imported in my `style.scss` file:

![](@/assets/img/blog/mixins-imported-in-scss-architecture.jpg)

Also, I sometimes need to use mixins in my SCSS files of my components. As the world is well-designed, Vite allows me to [automate the import of SCSS code](https://vite.dev/config/shared-options#css-preprocessoroptions-extension-additionaldata) by adding some "additional code":

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/assets/styles/01-utils/mixins';
        `,
      },
    },
  },
});
```

Until now, everything was fine until I hit this error in my terminal recently:

```
Deprecation Warning: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.
```

It was time to import my SCSS files in a more recent and cleaner way.

## Migrating my "@import" imports to the new "@use" rule

[Sass provides a command-line tool](https://sass-lang.com/documentation/breaking-changes/import/#automatic-migration) to help us migrate our imports to the new `@use` rule.

It does the job but not entirely since renaming all our `@import` to `@use` wasn't enough in my case.

Chaining the `@use` as I did for the `@import` rule only works if your files don't contain any Sass members (variables, mixins, functions).

However, in my case I have some mixins to import both in my `style.scss` file and in all my component respective SCSS file.

By snooping a bit I found the `@forward` rule which as its name suggests allows you to transfer functions, variables and mixins to a parent file.

Here's the new content of our `_mixins.scss` barrel file:

```scss
// ----------------------
// == Mixins
// ----------------------

@forward 'mixins/mixins';
@forward 'mixins/text-styles';
```

And the content of our `style.scss` file:

```scss
// 01 - Utils
// ---------------------
@use '01-utils/variables';
@use '01-utils/lint';
@use '01-utils/mixins' as *;
@use '01-utils/site-settings';
@use '01-utils/utility-classes';

// 02 - Base
// ---------------------
@use '02-base/sanitize';
@use '02-base/base';

// 03 - Fonts
// ---------------------
@use '03-fonts/fonts';

// 04 - Components
// ---------------------
```

The `as *` allows me to not define a namespace for my `_mixins.scss` barrel file. I can then continue to use my mixins by their name without having to prefix them with the default namespace created by the `@use` rule.

```scss
// Without 'as *' (@use '01-utils/mixins';)
@include mixin.my-mixin;

// With 'as *' (@use '01-utils/mixins' as *;)
@include my-mixin;
```

Obviously, we also have to think about modifying the import of our `mixins.scss` file in our Vite configuration:

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use './src/assets/styles/01-utils/mixins' as *;
        `,
      },
    },
  },
});
```

## In summary

If you need to migrate an SCSS architecture from the `@import` rule to the new `@use` rule, you should respect the following rule: if I have intermediate SCSS files that rely on child files containing only CSS, you can chain the `@use` rule. Otherwise, you should use the `@forward` rule on your barrel files.
