---
title: Introduction to DesignOps
date: '2022-09-20'
description: Learn more about Design Operations aka "DesignOps". What is it? Where is it? Who does it involve? How can I get started? 
author: Louis Chenais
coverImage:
  src: '@/assets/img/blog/design-ops-menu.avif'
  alt: ''
tags: ['design']
---
# Introduction to DesignOps

After reading this post, you'll have a clear idea of what DesignOps is and how it can help your team deliver design improvements in the hands of your users as quickly and with as little friction as possible.

Ready? Let's dive in 🤿

In this post, we use the terms "design" and "designer." However, DesignOps embraces anyone using user-centered and design-thinking processes to solve problems.


## Origins of DesignOps
### In the beginning, there was DevOps…

For many decades, software has been eating the world[^1]. Engineering teams were divided into two types of developers: the ones writing code and the ones maintaining the infrastructure. This gap between them slowly narrowed, as "agile" emerged and continuous deployment became the norm. Multi-disciplined individuals, able to deploy code faster and more efficiently, eventually appeared.

In other words, DevOps was born.


### …and then DesignOps

Historically, developers were always more involved in strategic decisions than designers. Luckily, this started to change once organizations took design more seriously, doubling the average number of designers in their teams over the past decade[^2]. Designers eventually won the fight to be "at the table" and became part of strategic decisions. Agile made organizations close the gap between design and engineering teams.

This recognition had its drawbacks, though. Designers had an additional workload alongside their "day jobs" of researching and designing. To top it all, decision-making was even more challenging as designers were usually spread across different teams and products. In short, designers stopped working on their own and faced the same set of pressures developers faced years ago. DesignOps was born.

DesignOps and DevOps have something in common: "Ops," which means "Operations". Behind this term lies all the processes, methods, and tools that help teams work better together.


## What is DesignOps?
> "What we've learned over time is that when our [designers] are spending more than 50% of their time doing operational work, that's a problem."
> 
> [Adrienne Allnutt](https://www.linkedin.com/in/adriennekallnutt/), Design Operations Leader, LinkedIn


DesignOps is a mentality that helps you innovate how you build your products. To quote Alex Schleifer, former VP of Design at Airbnb: "you can't innovate on products without first innovating the way you build them."[^3]


### Where is DesignOps?

[Andy Budd](https://twitter.com/andybudd), co-founder of Clearleft, states that "DesignOps is the practice of reducing operational inefficiencies in the design workflow."[^4]

And what is the design workflow? Glad you asked. The design workflow is what happens between the time you make the decision to design something and the time it's available for your users.

DesignOps is all about the interface between designers, developers, and product owners to design and deliver a great user experience.
DesignOps is all about the interface between designers, developers, and product owners to design and deliver a great user experience.

![DesignOps is all about the interface between designers, developers, and product owners to design and deliver a great user experience.](@/assets/img/blog/where-design-ops-is.webp)

As you can see, DesignOps isn't just for designers. DesignOps aims to optimize the execution of projects as a whole, with the least possible friction at each stage.


> "Design Operations focuses on the how so that design can focus on the what. It's the design discipline that owns the intentional operationalizing, optimizing and scaling of design."
> 
> [Rachel Posman](https://www.linkedin.com/in/rachelposman/), Senior Director of Design Operations, Salesforce


### Who does DesignOps?

DesignOps is both a role and a practice. DesignOps as a role may be a single person or an entire team. DesignOps as a practice can and should be embraced by everyone on the team.

There's a good chance you've already set DesignOps practices and processes without knowing it. For instance, you may have defined a naming convention for your design tokens and components, created a component library, or even set up a Design API like Specify for your design system. These efforts are low-hanging fruits, and you'd be right to focus on these first.

We've been talking about design systems several times already in this post. However, keep in mind that design systems are one of the tools you can use to reduce inefficiencies. You can do DesignOps without having a design system.


## DesignOps in practice

All organizations differ from each other. Hence, DesignOps is and should be different from your team to another one.

However, even if organizations pick what they need from the DesignOps menu[^5], their respective recipe will differ.

DesignOps menu is all about:
1. People: "How we work together"
2. Work: "How we get our work done"
3. Impact: "How our work creates impact"

![The DesignOps menu shows how DesignOps tackles how we work together, how we get our work done and how our work creates impact.](@/assets/img/blog/design-ops-menu.avif)


> "DesignOps is all about increasing the impact of design at scale."
> 
> [Sean Rice](https://twitter.com/SeanRice), Senior Product Designer, GoDaddy


You may be eager to start but also wondering where you should start from and you'd be right. What I can tell you is you only need to start somewhere and the rest will follow.

To help you get started, here are some real-world examples from teams at Dropbox, Pinterest, Fitbit, and Pitch.


### How Dropbox improves feedback loops

Dropbox improves creative reviews by creating "blue boxes" at the top of each document. Those checkboxes state what feedback designers are looking for, from whom, and what types of feedback aren't helpful.


> "This approach is a great reminder at each review of roles and responsibilities; while we want everyone to be heard, we also want to clarify who is the ultimate decision maker for different aspects of the creative output."
> 
> [Collin Whitehead](https://twitter.com/CollinWhitehead), Head of Brand, Dropbox


### How Pinterest keeps its design org up-to-date

Every Monday morning, Pinterest's design org sends out a visual status document that lists what everyone is working on and shows design comps from each team.


> "This keeps our design org of 60 people up to date on what other designers are working on, and also serves as a guide for our cross-functional teams to understand what everyone is working on."
> 
> Meredith Black, Head of Design Operations, Pinterest


### How Fitbit aligns design and business goals

The Fitbit design org meets quarterly to reflect on the previous three to six months, discuss any urgent priorities, and set goals for the coming months.


> "DesignOps can facilitate conversations at the design leadership level to ensure success is being defined based on the company's goals."
> 
> Kate Battles, Manager of Design Operations, Fitbit


### How Pitch automatically syncs icons from design to code

The product team at Pitch uses a library of 680 icons across 6 products and apps. The team automates its design workflows for continuous integration and delivery (CI/CD) to cut down on manual tasks.


> "When we add icons to our library in Figma, Specify automatically triggers a Pull Request in GitHub that adds, removes, or changes icons in our defined output folders, using some custom parsers and settings we've defined."
> 
> [Roy van Rooijen](https://twitter.com/RvRoo), Senior Product Designer, Pitch


## Wrapping up

DesignOps is the practice of reducing operational inefficiencies in the design workflow. It involves anyone using user-centered and design-thinking processes to solve problems: designers, developers, and product owners.

DesignOps is about:
- How product teams work together
- How they get work done
- How their work creates impact to optimize the execution of projects as a whole

Design has never been more essential in organizations than it is now and its impact is stronger than ever. With DesignOps, we're just scratching the surface of design, and the future of design work.

I hope you're as excited as I am.


[^1]: Marc Andreessen shared an insightful article where he tackles how more industries are [disrupted by software](https://a16z.com/2011/08/20/why-software-is-eating-the-world/) — from movies to agriculture to national defense.
[^2]: Dylan Field, CEO of Figma, shared in 2017 where he explains why [organizations are prioritizing design](https://techcrunch.com/2017/05/31/here-are-some-reasons-behind-techs-design-shortage/)
[^3]: [Alex Schleifer, The Way We Build - How rethinking the Airbnb app changed the way we approach design](https://airbnb.design/the-way-we-build/)
[^4]: [Andy Budd, Design Ops — A New Discipline](https://clearleft.com/posts/design-ops-a-new-discipline)
[^5]: The Design Ops Menu was originally shared by the Nielsen Norman Group in their article [DesignOps 101](https://www.nngroup.com/articles/design-operations-101/)