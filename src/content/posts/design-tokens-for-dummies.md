---
title: Design Tokens for Dummies
date: '2018-01-17'
description: A general introduction about design tokens and how they are useful when maintaining user interfaces.
author: Louis Chenais
coverImage:
  src: '@/assets/img/blog/design-tokens-for-dummies-cover.webp'
  alt: ''
tags: ['design', 'development']
readingTime: '6min'
---

As you may have noticed, design systems is a hot topic in the industry right now. According to our dear Brad Frost:

> "A design system is basically the story of how an organization builds a digital product."
>
> Brad Frost, [Brad Frost on Let's Work Together! at SmashingConf Barcelona 2017](https://vimeo.com/241093342)

Within a company, a design system improves the collaboration between product teams. A common issue design and engineering teams are facing is sharing brand guidelines and interface information. What is designed should be respected during development but we all know it's not that simple. Product teams need guidelines to ensure brand consistency. This is where styleguides and pattern libraries come into play.

Let's take "Nachos": the old Trello's design system before it was acquired by Atlassian . In most of the styleguide we encounter, including this one, we often find a section where "core styles" are defined. By "core styles" I mean indivisible pieces of an interface like colors, font-sizes, spaces, animations, shadows, z-indexes, breakpoints and so on… These central and tiny pieces of UI information will be used across several platform during the conception of a digital product. They're called: design tokens.

ℹ️ This concept was created by Salesforce and its name comes from Jina Anne.

Design tokens allow product teams to better collaborate and ensure brand consistency across any platform 👨🏻‍🏫🎉

![Preview of Nachos color section](@/assets/img/blog/trello-nachos-color-section.webp)

As you can imagine, these colors are meant to be used across all of the Trello's interfaces whatever the platform they live in. All of them have their own requirements and data formats:

- On the web I could use RGB values formatted in a .css file
- On iOS I could use RGBA values formatted as .json format
- Android might like 8 Digit Hex (AARRGGBB) values formatted as .xml.

Also, these platforms are surely going to change and evolve over time. This is why maintaining all of them individually is a costly and time consuming process for companies.

## 🤕 The current situation

As a front-end developer, I assume designers are responsible for taking design decisions. Updating a color, a font-size or any "core style" and seeing the result in whatever platform should be effortless for them. Unfortunately, this is not currently the case.

Let's say a color needs to be updated. The current workflow would look like this:

1. The designer updates the color in the design tool.
2. This design update is shared to the developer.
3. The developer updates the value in the code.
4. The designer can see the result in a development environment

This workflow suffers from several pitfalls:

- The designer depends on the developer to see the result of a core style update. This slows down the design process and makes the designer sad 😢
- Updating a color value in the codebase is not very time consuming when you only have to update a single style variable. However the time taken to do this change is less time for a developer to work on something valuable for the company. The developer is also sad 😢
- Since we often track project tasks with a task manager, this change would imply another ticket to deal with 😕
- From a general point of view, this time lost by the company also delays the go to market of its products 😪

This workflow can be optimized! 💪

## 🚑 Design tokens to the rescue

Close your eyes and imagine a world where a design tokens generator would be integrated in design tools. The ideal workflow would look like this:

1. The designer would update the color in the design tool.
2. The design tool updates design tokens files according to targeted platform.
3. Developers only have to retrieve or "pull" updated files and use it in their project.

![](@/assets/img/blog/design-tokens-workflow-2018.avif)

This would save a lot of time for developers and ensure consistency in design making designers and product-owners happy 😃

As I said, this is an ideal workflow I imagined. To exist, design tools and development tools should be able to communicate. Currently, the only way I know to generate design tokens is by using Theo, a design token generator made by Salesforce. What Theo does is simple: it takes as input a tech agnostic file format like JSON or YAML and outputs tech specific files for each platforms.

⏰ Update 25/01: Thanks to Mattia Astorino, I can also tell you that, out of the box, Theo can just convert colors and units. Theo can't convert value containing functions by default. For example, if we wanted to store in a token a custom animation easing value we would have to generate for each platform a specific easing function.

According to each platform, the easing value would be specified by:

- Web (CSS): `cubic-bezier(x1,x2,y1,y2)`
- Android (Java): `PathInterpolatorCompat.create(x1,x2,y1,y2)`
- iOS (Swift): `init(controlPoints: x1, x2, y1, y2)`

The only solution I think about is creating an object which will be used by Theo:

```json
{
  "CUSTOM_EASING": {
    "x1": {
      "value": "0.156"
    },
    "x2": {
      "value": "0"
    },
    "y1": {
      "value": "0.756"
    },
    "y2": {
      "value": "0.5"
    }
  }
}
```

The thing is that Theo can't natively generate easing functions for each platform since it doesn't know what our CUSTOM_EASING is.

If Theo could in some way be used by design tools like Sketch via a plugin or natively this workflow would be possible. Especially since Sketch data can be exported in the same input format required by Theo: JSON 🤙

To go even further, this link between our design and developments tools would allow design teams to update core styles in their design tool and see the result automatically synchronized in the design system.

In this example, the design token was a color, but it could have been something else, like a font-size, a shadow or a space.

### 🎁 Bonus for dev folks:

- The 24ways's styleguide is based on the styleguide generator [Fractal](https://github.com/frctl/fractal). Its maintainer, [Paul Robert Lloyd](https://paulrobertlloyd.com/) uses design tokens in the project's build process. The tokens contained in JSON files are inserted inside the CSS via the [postcss-map](https://github.com/pascalduez/postcss-map) plugin.
- EightShape built [a static site generator optimized for building and documenting design systems](https://github.com/EightShapes/esds-build). Via a gulp task, tokens in `.json` and `.yaml` are compiled into a `tokens.scss` file.
- There's also [Dragoman](https://github.com/NateBaldwinDesign/dragoman), which is a Gulp plugin to translate core design tokens across mobile and web platforms. However the project hasn't been updated for a year. I didn't use it yet.

## 📝 Let's sum things up

**Design tokens are central and tiny pieces of UI information** to store design related information such as colors, fonts, spaces, animations, etc... Their benefits is that they can be transformed and formatted to **meet the needs of any platform** (Android, iOS, Web, etc…).

⏰ Update 18/01: Jina Anne also precised me they could also be used for branding/theming for customers, and configurable settings-based theming like "dark/night mode" or "comfortable/compact" spacing changes.

They ease collaboration between product teams and ensure brand consistency throughout any targeted platform 😃

However, as far as I know, design tokens generator such as [Theo](https://github.com/salesforce-ux/theo) can only be used at the moment by developers since design tools can't communicate natively with design tokens generators. Currently only Sketch could do that as it exports its data in JSON.
