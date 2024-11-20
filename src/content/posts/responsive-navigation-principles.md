---
title: 4 Responsive Navigation Principles & Their Implementation
date: '2016-02-08'
description: An introduction to 4 navigation patterns with their respective implementation
author: Louis Chenais
coverImage:
  src: '@/assets/img/blog/responsive-navigation-principles-cover.webp'
  alt: ''
tags: ['design', 'development']
readingTime: '7min'
---

Hi everyone! After finishing Responsive Design: Patterns and Principles written by our dear Ethan Marcotte I wanted to focus on one chapter in particular. The one talking about navigations. To me, there are one of the most important components of a website since they can easily orient our users if we designed them well.

The reason I wrote this article and made these pens is to present several ways of building a responsive navigation. The pens are not exactly the same code put in place on the website I took example of. I added some animations since it's something I'm really fond of and I also modified the DOM if needed.

I'm not presenting with the following pens THE but A way of implementing the navigation systems I present.

Ethan Marcotte also says:

> "A responsive navigation system doesn't need to look or work the same at every breakpoint, but it does need to offer access to the same content across devices."
>
> Ethan Marcotte, [Responsive Design : Patterns & Principles ↗︎](https://ethanmarcotte.com/books/responsive-design-patterns-and-principles/full/chap02/)

Also he asks the following question : How can we design navigation that's as usable as it is responsive?

To answer this question I'll present you 4 navigations systems you can put in place. Of course they all have their pros and cons.

Here is the list of different navigations I'll cover in this paper:

1. The Show/Hide Toggle
2. The Progressive Disclosure
3. The Curtain Menu
4. The List

## Responsive Navigation Principle #1 — The Show/Hide Toggle

### Description

On small viewports, where screen real-estate is at a premium we only show a « Menu » link. When the user taps, clicks or selects with his keyboard that link the navigation appears. Clicking again on that link, clicking outside that menu or hitting the ESC key will close it.

Note : Study shows that [you should use the « MENU » button](https://web.archive.org/web/20170714093902/https://sitesforprofit.com/menu-eats-hamburger) instead of the hamburger icon for a better usability.

Yes the hamburger menu suffers from lots of criticisms however it has its strengths and weaknesses. It is adapted for a certain audience in a certain condition. Like every navigation principles I will describe in this article they all have their pros and cons. They will all fit specific needs for specific users.

![](@/assets/img/blog/hamburger-menu-button.gif)

<iframe height="300" style="width: 100%;" scrolling="no" title="Responsive Navigation Principle #1 - The Show/Hide Toggle" src="https://codepen.io/ChucKN0risK/embed/pgwxrw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ChucKN0risK/pen/pgwxrw">
  Responsive Navigation Principle #1 - The Show/Hide Toggle</a> by Louis Chenais (<a href="https://codepen.io/ChucKN0risK">@ChucKN0risK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Pros

- The button is relatively compact and quite legible which is great on small screens.
- This pattern seems ubiquitous since it's used by many websites (Time, YouTube, L'express …).
- Whatever the number of links your navigation contains, they will all fit in your off-canvas menu since they're displayed vertically.

### Cons

Our menu can easily become filled with an overwhelming number of links. And some tend to swipe the dust under the carpet by doind it. When converting a desktop website to a responsive one, the links in the navigation are all put in the off-canvas menu since it can display a lot of links. That often leads to an overabundance of content. Hence the mobile-first approach since we have to prioritize.

## Responsive Navigation Principle #2 — The Progressive Disclosure

### Description

The idea here is to display as much as we can whatever the screen size. At all time a toggle is available to see the missing links that can't be displayed or simply all the links. As the design gets wider, more links are gradually, progressively revealed.

The BBC website uses a the former toggle. When the page loads, resizes or gets reoriented in a handheld browser, they mesure the width of the browser's viewport and based on it show or hide certain links in the navigation.

![According to the browser's viewport the navigation updates the links it displays.](@/assets/img/blog/progressive-disclosure-navigation.gif)

The Guardian uses the latter toggle. However the viewport size and the space available they decided to display all their links in their navigation. The user can scroll horizontally to see them or click on the « All » toggle to see the links and their respectives subsections. This solution combines the show/hide toggle pattern and also allow all the links to be visible at all times.

![](@/assets/img/blog/progressive-disclosure-navigation-2.gif)

Note : I didn't manage to hide the horizontal scrollbar on Firefox. They did it on The Guardian though but I don't know how. Your help on this is more than welcome :)

<iframe height="300" style="width: 100%;" scrolling="no" title="Responsive Navigation Principle #2 - Progressive Disclosure With Horizontal Scroll" src="https://codepen.io/ChucKN0risK/embed/LGzmmW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ChucKN0risK/pen/LGzmmW">
  Responsive Navigation Principle #2 - Progressive Disclosure With Horizontal Scroll</a> by Louis Chenais (<a href="https://codepen.io/ChucKN0risK">@ChucKN0risK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Pros

This system works well when a lot of links are needed. No surprise the BBC and the Guardian adopted it.

### Cons

- JavaScript-driven solution that can be hard to implement for non-experienced developers.
- The horizontal scroll put in place in the Guardian navigation can be hard to detect. Your UI should help your users noticing it making the « All » toggle like a « safety-net ».

## Responsive Navigation Principle #3— The Curtain Menu

### Description

I recently discovered this navigation system with this article written by Joey Rabbitt. It is also based on the show/hide toggle pattern.

![](@/assets/img/blog/double-curtain-menu.gif)

<iframe height="300" style="width: 100%;" scrolling="no" title="Responsive Navigation Principle #3 - The Curtain Menu" src="https://codepen.io/ChucKN0risK/embed/gPzjed?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ChucKN0risK/pen/gPzjed">
  Responsive Navigation Principle #3 - The Curtain Menu</a> by Louis Chenais (<a href="https://codepen.io/ChucKN0risK">@ChucKN0risK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Pros

- This system allows you to display a large amount of information in a perfectly orchestrated space. To my eyes this system is very smart.

### Cons

- Relies on the understanding of the icons visible in the first curtain menu. If the user needs to see the names of the links he has to hide the second curtain to see them.

On the Playstation website they animate the appearance of both curtains by modifying the `left` property which triggers the layout operation, and that's expensive. That lowers the chances of hitting a silky smooth 60fps. I wanted to avoid that and this is why I decided to animate the curtains with the `transform` property by doing a translation.

Here is the list of CSS properties you should focus when animating things in a webpage :

![](@/assets/img/blog/performant-CSS-animation-properties.webp)

## Responsive Navigation Principle #4 — The List

### Description

We tend to forget it but sometimes our code is responsive by default. In this example I wanted to show the navigation Franck Chimero designed on his personal website. This is indeed a clever design considering the small amount of code required for this navigation. However the real strength of this design is his focused, distilled content.

![](@/assets/img/blog/menu-list.gif)

<iframe height="300" style="width: 100%;" scrolling="no" title="Responsive Navigation Principle #4 - Da List" src="https://codepen.io/ChucKN0risK/embed/OMwZXa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ChucKN0risK/pen/OMwZXa">
  Responsive Navigation Principle #4 - Da List</a> by Louis Chenais (<a href="https://codepen.io/ChucKN0risK">@ChucKN0risK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Pros

- Lightweight navigation which is always visible whatever the viewport size.

### Cons

- May require a more complex navigation system if more links are displayed.

These navigation systems can also be mixed together if needed. For example the Filament Group's responsive navigation displays on small viewport a list of links under their logo but only on their homepage. On the other pages the system adopted is the show/hide toggle in order to conserve a much more needed space. On wider viewports the navigation is located at the top of the screen and is always visible.

![](@/assets/img/blog/filament-group-menu.gif)

To conclude, I would like to say that among these Responsive Navigation Principles some are used to convert a desktop site to a mobile one. This is not a bad thing I think because sometimes you don't have the choice. Nevertheless I'm sure there are some great other designs that exist or that could emerge. Only, we should take in consideration that mobile is changing everything. I think we should take a mobile-first approach as much as possible. The more constraints we have, the more creative we can be.

> "If our audience are becoming predominantly mobile, we should stop trying to make complex, widescreen-designed elements play nice on smaller screens — instead, we should consider the small-screen user's need first."
>
> Ethan Marcotte, [Responsive Design : Patterns & Principles ↗︎](https://ethanmarcotte.com/books/responsive-design-patterns-and-principles/full/chap02/)

These implementations are meant to help you start design a navigation system design. I invite you to grab the code and play with it.

If you see any improvement I could do to my code and specially in JavaScript, I would appreciate you share it :)

Thanks for reading and have a beautiful day.
