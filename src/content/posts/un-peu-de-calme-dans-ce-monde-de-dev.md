---
title: Un peu de calme dans ce monde de dev
date: "2025-09-02"
description: Submergé de nouvelles annoncant la fin du développement frontend et du design? Perdu au milieu de tous ces nouveaux outils ? Prenons du recul et voyons ensemble la posture à adopter pour rester calme dans ce monde du frontend bousculé par l'IA.
author: Louis Chenais
coverImage:
  src: "@/assets/img/blog/smart-meme.jpg"
  alt: ""
tags: ["ia", "development"]
readingTime: "7min"
---

Il est 9h15 et Hubert arrive au bureau. Après un bonjour à ses collègues, il s'assoit à son poste, une tasse de café dans la main et la souris dans l'autre. Comme à son habitude, il commence sa journée par scroller les news et faire un peu de veille.

- "Everybody is now a programmer" d'après le PDG de Nvidia
- "Comment j'ai créé mon SaaS en 3h avec v0 et Supabase"
- "Ce vibe-coder a vu son business disparaître du jour au lendemain après qu'un LLM ait supprimé sa BDD de prod dans Replit"

Tandis qu'il navigue dans son flux, il reçoit une notification de son manager dans le channel Slack de son équipe : "Bonjour à tous ! J'espère que vous allez bien. Pour rappel, aujourd'hui c'est l'arrivée de Claude dans l'équipe. Je compte sur vous pour l'acceuillir à bras ouverts. Belle journée ☀️"

L'arrivée de Claude dans l'équipe ne faisait pas l'unanimité. Il avait la réputation d'un collègue aux pratiques paradoxales. Certains le trouvaient diablement efficace. Tandis que d'autres, totalement incompétent.

Hubert, lui, était plus mesuré. Il était prêt à travailler avec lui tout en gardant ses distances.

Vous l'aurez bien compris, Claude est une représentation à peine masquée des outils de génération de code. Il rassemble autant qu'il divise. Quant à Hubert, il représente une position mesurée au milieu de ce boucan provoqué d'un côté par les ayatollahs de l'IA, et de l'autre par ses réfractaires chevronnés.

Durant ces prochains paragraphes, nous verrons comment rester serein face à l'invasion massive des outils de génération de code et comment travailler avec eux de manière intelligente.

Andiamo tutti 👊

## On crie au loup trop rapidement

En 1997 sorti sur le marché un outil appelé Dreamweaver qui permettait de créer de sites web via une interface en WYSIWYG. Déjà à l'époque, la communauté sous-entendait que l'apprentissage du HTML et du CSS n'était plus utile.

Dans les années 2000, un petit CMS open-source appelé Wordpress a pointé le bout de son nez. Il permettait notamment de créer des sites à partir de thèmes sans avoir besoin d'écrire du HTML et du CSS. Aujourd'hui encore, [plus de 40% des sites dans le monde sont basés sur Wordpress](https://www.blogdumoderateur.com/chiffres-wordpress/).

Également, dans les années 2010 et le contexte de la pénurie de développeurs sur le marché, la notion de "no-code" apparue. Il était maintenant possible de créer des applications, des automatisations ou des bases de données via des outils comme Webflow, Zapier ou Airtable.

Enfin, depuis 2023, les LLMs ne cessent de s'améliorer et d'exécuter des tâches de plus en plus complexes. Néanmoins, leur nature non-déterministe nous oblige à repasser derrière eux quelque soit la compléxité de la tâche réalisée. L'IA n'est qu'un outil que nous devons apprendre à piloter intelligemment, si disruptif soit-il.

![Rare photo de Ripley accompagnée de son LLM favori en train de combattre des pratiques de développement plus que douteuses.](@/assets/img/blog/ripley-vs-alien.png)

## Développer ne se résume pas à écrire du code

Un développeur, tout comme un designer, est avant tout quelqu'un qui doit répondre à un problème en apportant une solution en faisant des choix techniques. Une fois qu'on a fait ces choix, alors on peut commencer à écrire du code. Le code n'est que la partie émergée de l'iceberg et coder n'est qu'un moyen comme un autre de demander à un ordinateur de faire des choses pour nous. Les CMS ou le no-code en sont une autre.

Écrire du code est une chose, le déployer, le déboguer, l'optimiser, l'adapter selon la stratégie d'une entreprise en est une autre. Je me lève le matin avec l'ambition d'apprendre au quotidien, de grandir avec mes collègues et d'accompagner les clients de Frontguys. Pas uniquement pour "p\*sser du code". Et si je dois rajouter un LLM à la liste de mes outils alors je le ferai. Comme tout outil, un LLM peut être aussi efficace que dangereux. Il ne tient qu'à nous d'en faire bon usage. Nous devons être à l'aise avec l'idée d'évoluer et d'adapter nos pratiques de développement.

En passant par un LLM on peut effectivement écrire du code et jouir d'un certain rush de dopamine. Néanmoins, le temps gagné en écriture sera peut-être perdu en relecture, en compréhension et en réorganisation. Tout dépend du contexte mis à disposition, de la complexité de la tâche et de notre capacité à juger la qualité du code généré.

## Ne pas être aveuglé par l'efficacité apparente des LLMs

### Rester en contrôle de notre travail et de notre capacité à réfléchir

Comme je le disais précédemment, un LLM c'est un outil. À la fois diablement efficace pour nous apporter satisfaction lorsque correctement utilisé. À la fois dangereux puisqu'il peut être ce larbin parfait sur lequel nous externalisons notre réflexion. Il peut nous rendre autant productif qu'il peut nous asservir de manière insidieuse.

Par exemple, lors d'une dernière mission, j'ai créé une variante du [composant Combobox d'Ariakit](https://ariakit.org/components/combobox) avec des fonctionnalités supplémentaires. Claude m'a fait gagner un temps précieux et j'avoue avoir été impressionné par le résultat. Mais lorsqu'il fallait déboguer ce composant, je me sentais comme un Hercule démuni face à cette Hydre que j'avais moi-même mise au monde. Conduire un projet avec Claude est un plaisir dans certaines conditions. Lui laisser le volant en frappant ma touche Tab frénétiquement serait par contre le meilleur moyen de me perdre en chemin.

Notre expertise de développeur nous aide à piloter un LLM et à reprendre la main sur le volant si nécessaire. Sans cette expertise, les LLM sont un véhicule pouvant mener tout droit vers une incompétence absolue.

Pour l'anecdote, j'interviens chaque année dans une école du web auprès d'étudiants en développement web. Cette année, j'ai eu la mauvaise surprise de voir des élèves utiliser Chat GPT et me montrer fièrement le résultat de leur travail. Aucun problème me direz-vous et vous auriez raison. Sauf qu'ils étaient pour la plupart incapables d'expliquer le code généré ni de voir où était le problème puisque "ça marche".

![Un aperçu de ce que j'aurais bien volontiers voulu faire faire à ces étudiants si un tableau était à ma disposition](@/assets/img/blog/bart-simpson-grounded.png)

### Le mythe de la mise à l'échelle de l'efficacité

Comme [Gergely Orosz nous le rappelle](https://bsky.app/profile/gergely.pragmaticengineer.com/post/3luqbs3gjp22z), avoir une équipe de 10 développeurs au même prix qu'un n'a jamais rendu le développement 10 fois plus rapide (cf. [Loi de Brooks](https://fr.wikipedia.org/wiki/Loi_de_Brooks)).

C'est d'ailleurs la même idée avec les transports : augmenter le nombre de ligne d'autoroute ne fluidifie pas le traffic (cf. [Trafic induit](https://fr.wikipedia.org/wiki/Trafic_induit)).

Donc avoir un outil d'IA qui produit 10 fois plus de code ne nous rend pas 10 fois plus efficace.

### Les capacités de l'IA sont sur-évaluées

Malgré le climat économique actuel, l'IA a clairement le vent en poupe auprès des investisseurs. La compétition féroce qui règne sur le marché pousse certaines entreprises à ~~sur-évaluer~~ fausser les capacités de leurs services comme [Devin](https://futurism.com/first-ai-software-engineer-devin-bungling-tasks) (l'article date de janvier 2025 soit une éternité dans le monde de l'IA mais vous comprenez mon idée) ou encore le concept d'[IAG](https://www.wikiwand.com/fr/articles/Intelligence_artificielle_g%C3%A9n%C3%A9rale).

> It is our job to create computing technology such that nobody has to program. And that the programming language is human. Everybody in the world is now a programmer.
>
> Jensen Huang, Nvidia CEO (World Government Summit 2024)

Jensen Huang n'est bien évidemment pas neutre dans son discours puisqu'il vend du matériel à destination des créateurs de models. Alors oui, générer du code est maintenant aussi accessible que d'utiliser Google. Mais savoir utiliser ce code et en faire quelque chose par la suite est un autre problème.

## Et maintenant ?

Maintenant que la génération de code évolue à vitesse grand V, notre relation vis-à-vis de notre manière de développer le doit elle aussi. Puisqu'écrire du code rapidement n'est plus aussi important qu'avant, alors notre capacité à résoudre des problèmes complexes et à grandir au quotidien avec nos collègues le deviennent encore plus.

> Rather than replacing developers, AI is elevating their position from code implementers to system architects and strategic problem solvers.
>
> Daniel Bentes, Zero Human Code: What I Learned from Forcing AI to Build (and Fix) Its Own Code for 27 Straight Days

Pour faire simple :

- Soyez curieux tout en restant sceptique face aux nouveautés permanentes liées à notre métier
- Restez maître de vos projets tout en collaborant avec vos collègues et LLMs favoris
- Continuez d'apprendre au quotidien et de partager vos connaissances au plus grand nombre

Bon débogage à vous et à très vite ✌️

## Sources

- Korny Sietsma - [Clowns to the left of me …](https://blog.korny.info/2025/07/19/clowns-to-the-left-of-me)
- Birgitta Böckeler - [The role of developer skills in agentic coding](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html)
- David Gerard - [Cursor tries setting less money on fire — AI vibe coders outraged](https://pivot-to-ai.com/2025/07/09/cursor-tries-setting-less-money-on-fire-ai-vibe-coders-outraged/)
- Pete Hodgson - [Leading your engineers towards an AI-assisted future](https://blog.thepete.net/blog/2025/06/26/leading-your-engineers-towards-an-ai-assisted-future/)
- Daniel Bentes - [Zero Human Code: What I Learned from Forcing AI to Build (and Fix) Its Own Code for 27 Straight Days](https://towardsdatascience.com/zero-human-code-what-i-learned-from-forcing-ai-to-build-and-fix-its-own-code-for-27-straight-days/)
- Grafikart - [Non ! l'IA ne remplacera pas les développeurs !](https://www.youtube.com/watch?v=9tnclmIoLHA)
