import angular from "../assets/skills/angular.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import github from "../assets/skills/github.svg";
import java from "../assets/skills/java.svg";
import mongodb from "../assets/skills/mongodb.svg";
import node from "../assets/skills/nodejs.svg";
import php from "../assets/skills/php.svg";
import prestashop from "../assets/skills/prestashop.svg";
import python from "../assets/skills/python.svg";
import sass from "../assets/skills/sass.svg";
import wordpress from "../assets/skills/wordpress.svg";
import react from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwindcss.svg";
import docker from "../assets/skills/docker.svg";
import kubernetes from "../assets/skills/kubernetes.svg";
import gitlab from "../assets/skills/gitlab.svg";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import typescript from "../assets/skills/typescript.svg";
import prolog from "../assets/skills/prolog.svg";
import kotlin from "../assets/skills/kotlin.svg";
import csharp from "../assets/skills/csharp.svg";
import spring from "../assets/skills/spring.svg";
import figma from "../assets/skills/figma.svg";
import sql from "../assets/skills/sql.svg";
import skill from "../assets/skills/skills.svg";
import { projects } from './projects';

export interface SkillExample {
  title: string;
  description: string;
  link?: string;
}

export interface Skill {
  name: string;
  logo: string;
  experience: number;
  description?: string;
  officialDescription?: string;
  officialWebsite?: string;
  examples?: SkillExample[];
  relatedProjects?: string[];
}

export const skills: Skill[] = [
  {
    name: `HTML`,
    logo: html,
    experience: 5,
    description: `Mon expérience avec HTML a débuté avec le projet Haddock, où j'ai mis en place des 
    formulaires complexes et des intégrations multimédias. J'ai ensuite créé mon premier 
    portfolio en 2021, en développant une structure sémantique claire et accessible. \n

    J'ai continué à approfondir mes connaissances avec mon portfolio 2025, en utilisant 
    les dernières fonctionnalités HTML5 pour créer une expérience utilisateur moderne et 
    interactive.`,
    officialDescription: `HTML (HyperText Markup Language) est le langage de balisage standard pour 
    créer des pages web. Il décrit la structure du contenu web et permet d'organiser le contenu en 
    sections, paragraphes, listes, liens, images et autres éléments.`,
    officialWebsite: `https://developer.mozilla.org/fr/docs/Web/HTML`
  },
  {
    name: `CSS`,
    logo: css,
    experience: 5,
    description: `Mon parcours avec CSS a commencé avec le projet Haddock, où j'ai créé des animations 
    fluides et des transitions pour améliorer l'expérience utilisateur. J'ai également mis en 
    place un design responsive pour assurer une expérience optimale sur tous les appareils. \n

    J'ai ensuite évolué vers des approches plus modernes avec mon portfolio 2025, en utilisant 
    Tailwind CSS pour créer des interfaces élégantes et performantes. Cette expérience m'a 
    permis de maîtriser les concepts de design system et d'optimisation des performances CSS.`,
    officialDescription: `CSS (Cascading Style Sheets) est un langage de feuille de style utilisé 
    pour décrire la présentation d'un document HTML. Il permet de contrôler la mise en page, les 
    couleurs, les polices, les animations et d'autres aspects visuels.`,
    officialWebsite: `https://developer.mozilla.org/fr/docs/Web/CSS`
  },
  {
    name: `JavaScript`,
    logo: javascript,
    experience: 5,
    description: `Mon parcours avec JavaScript a commencé avec mon premier portfolio en 2021, où j'ai utilisé 
    JavaScript natif pour créer des interactions utilisateur et des animations. Cette expérience 
    m'a permis d'acquérir une solide base en manipulation du DOM et en gestion des événements. \n

    J'ai ensuite évolué vers des frameworks modernes comme React, notamment dans mon portfolio 
    2025, où j'ai mis en place une architecture basée sur les composants et les hooks. Cette 
    expérience m'a permis de maîtriser les concepts de gestion d'état et d'optimisation des 
    performances.`,
    officialDescription: `JavaScript est un langage de programmation dynamique qui permet d'ajouter 
    des fonctionnalités interactives aux pages web. Il est l'un des trois langages fondamentaux du 
    web, aux côtés de HTML et CSS.`,
    officialWebsite: `https://developer.mozilla.org/fr/docs/Web/JavaScript`
  },  
  {
    name: `TypeScript`,
    logo: typescript,
    experience: 3,
    description: `Mon expérience avec TypeScript a été particulièrement enrichissante lors du développement 
    de mon portfolio 2025, où j'ai utilisé le typage strict pour assurer la qualité du code et 
    faciliter la maintenance. J'ai également mis en place des interfaces réutilisables et des 
    types génériques pour optimiser la réutilisation du code. \n

    J'ai également travaillé sur des projets plus complexes, comme une application de 
    visualisation de données en temps réel, où j'ai utilisé TypeScript pour créer une 
    architecture robuste et maintenable. Cette expérience m'a permis de maîtriser les concepts 
    avancés comme les types conditionnels et les mapped types.`,
    officialDescription: `TypeScript est un sur-ensemble typé de JavaScript qui se compile en 
    JavaScript. Il ajoute des types statiques optionnels, des classes, des modules et d'autres 
    fonctionnalités à JavaScript.`,
    officialWebsite: `https://www.typescriptlang.org/fr/`
  },
  {
    name: `Angular`,
    logo: angular,
    experience: 2,
    description: `Mon expérience avec Angular a été particulièrement enrichissante lors du développement 
    d'une application de gestion de médiathèque. J'ai mis en place une architecture modulaire 
    avec des services partagés pour la gestion des données et l'authentification. J'ai également 
    implémenté des fonctionnalités avancées comme le lazy loading des modules et la gestion 
    des formulaires réactifs. \n

    J'ai également travaillé sur l'optimisation des performances en utilisant le change 
    detection strategy et en implémentant des techniques de memoization.`,
    officialDescription: `Angular est une plateforme et un framework pour créer des applications 
    web à page unique (SPA) en utilisant HTML et TypeScript.`,
    officialWebsite: `https://angular.io/`,
    examples: [
      {
        title: `Application de Gestion`,
        description: `Création d'une application de gestion de médiathèque avec Angular`
      }
    ]
  },
  {
    name: `React`,
    logo: react,
    experience: 3,
    description: `Mon expérience avec React a débuté avec mon portfolio 2025, où j'ai créé une interface 
    moderne et responsive en utilisant Tailwind CSS. Cette expérience m'a permis de maîtriser 
    les concepts de composants réutilisables et de gestion d'état. \n

    J'ai également travaillé sur des projets plus complexes, comme une application de 
    visualisation de données en temps réel qui utilisait React avec Redux pour la gestion 
    d'état. Cette expérience m'a permis de comprendre l'importance de l'architecture des 
    applications React et de l'optimisation des performances. \n

    J'ai également une expérience en développement mobile avec React Native, notamment dans la 
    création d'applications cross-platform. J'ai développé des applications mobiles avec des 
    fonctionnalités comme la géolocalisation, les notifications push, et l'intégration de 
    caméra.`,
    officialDescription: `React est une bibliothèque JavaScript pour créer des interfaces 
    utilisateur. Elle permet de créer des applications web complexes en composants réutilisables et 
    gère efficacement le rendu et les mises à jour de l'interface.`,
    officialWebsite: `https://fr.reactjs.org/`
  },
  {
    name: `Tailwind`,
    logo: tailwind,
    experience: 1,
    description: `Mon expérience avec Tailwind CSS a débuté avec mon portfolio 2025, où j'ai créé une 
    interface moderne et responsive. Cette expérience m'a permis de maîtriser l'approche 
    utility-first et de comprendre l'importance de la conception d'interfaces utilisateur 
    performantes.`,
    officialDescription: `Tailwind CSS est un framework CSS utility-first qui permet de construire 
    rapidement des designs personnalisés sans quitter votre HTML.`,
    officialWebsite: `https://tailwindcss.com/`
  },
  {
    name: `Bootstrap`,
    logo: bootstrap,
    experience: 5,
    description: `Mon parcours avec Bootstrap a commencé avec le projet Haddock, où j'ai créé une interface 
    utilisateur responsive et intuitive. Cette expérience m'a permis de maîtriser les composants 
    Bootstrap et les techniques de personnalisation. \n

    J'ai également utilisé Bootstrap dans d'autres projets, comme une application de gestion de 
    tâches, où j'ai mis en place une interface utilisateur moderne et accessible.`,
    officialDescription: `Bootstrap est un framework CSS open-source qui facilite le développement 
    de sites web responsifs et mobiles-first.`,
    officialWebsite: `https://getbootstrap.com/`
  },
  {
    name: `Docker`,
    logo: docker,
    experience: 3,
    description: `Mon expérience avec Docker a été particulièrement enrichissante dans la mise en place 
    d'environnements de développement cohérents et dans le déploiement d'applications. J'ai 
    travaillé sur la conteneurisation de plusieurs applications, ce qui a permis d'améliorer 
    la portabilité et la scalabilité des solutions.`,
    officialDescription: `Docker est une plateforme de conteneurisation qui permet d'empaqueter une 
    application et ses dépendances dans un conteneur isolé.`,
    officialWebsite: `https://www.docker.com/`,
    examples: [
      {
        title: `Microservices`,
        description: `Mise en place d'une architecture microservices avec Docker`
      }
    ]
  },
  {
    name: `Kubernetes`,
    logo: kubernetes,
    experience: 1,
    description: `Mon expérience avec Kubernetes a débuté avec la mise en place d'un cluster de 
    production pour le déploiement d'applications conteneurisées. J'ai travaillé sur 
    l'orchestration des conteneurs et la gestion des ressources, ce qui a permis d'améliorer 
    la fiabilité et la scalabilité des applications.`,
    officialDescription: `Kubernetes est un système d'orchestration de conteneurs open-source qui 
    automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées.`,
    officialWebsite: `https://kubernetes.io/fr/`,
    examples: [
      {
        title: `Cluster de Production`,
        description: `Configuration d'un cluster Kubernetes pour le déploiement d'applications`
      }
    ]
  },
  {
    name: `GitHub`,
    logo: github,
    experience: 5,
    description: `Mon expérience avec GitHub a été essentielle dans la gestion de mes projets 
    personnels et professionnels. J'ai mis en place des workflows de développement collaboratif, 
    des pipelines CI/CD, et des processus de code review qui ont permis d'améliorer la qualité 
    du code et la collaboration au sein des équipes.`,
    officialDescription: `GitHub est une plateforme de développement qui permet de collaborer sur 
    des projets de code source en utilisant Git.`,
    officialWebsite: `https://github.com/`
  },
  {
    name: `GitLab`,
    logo: gitlab,
    experience: 5,
    description: `Mon expérience avec GitLab a été particulièrement enrichissante dans la mise en 
    place de pipelines CI/CD et la gestion de projets complexes. J'ai travaillé sur 
    l'automatisation des processus de build, test et déploiement, ce qui a permis d'améliorer 
    l'efficacité du développement et la qualité des livrables.`,
    officialDescription: `GitLab est une plateforme DevOps complète qui fournit des outils de 
    gestion de code source, CI/CD, et collaboration.`,
    officialWebsite: `https://about.gitlab.com/`,
    examples: [
      {
        title: `Pipeline CI/CD`,
        description: `Mise en place de pipelines CI/CD avec GitLab`
      }
    ]
  },
  {
    name: `Figma`,
    logo: figma,
    experience: 3,
    description: `Mon expérience avec Figma a été particulièrement enrichissante lors du développement 
    de mon portfolio 2025, où j'ai créé un design system complet avec des composants réutilisables 
    et des styles partagés. J'ai également mis en place des prototypes interactifs pour tester 
    l'expérience utilisateur et valider les interactions. \n

    J'ai également utilisé Figma pour la conception d'interfaces d'applications web et 
    mobiles, en créant des maquettes détaillées et des prototypes fonctionnels. Cette 
    expérience m'a permis de maîtriser les concepts de design system et d'optimisation des 
    workflows de design.`,
    officialDescription: `Figma est un outil de design collaboratif basé sur le web qui permet de 
    créer des interfaces utilisateur et des prototypes.`,
    officialWebsite: `https://www.figma.com/`
  },
  {
    name: `Java`,
    logo: java,
    experience: 4,
    description: `Mon expérience avec Java a été particulièrement enrichissante lors du développement 
    d'applications backend robustes et évolutives. J'ai mis en place des architectures basées sur 
    Spring Boot, avec une gestion efficace des dépendances et une configuration optimisée. \n

    J'ai également travaillé sur l'implémentation de fonctionnalités avancées comme la 
    gestion des transactions, la sécurité avec Spring Security, et l'intégration de bases de 
    données. Cette expérience m'a permis de maîtriser les bonnes pratiques de développement 
    Java et l'optimisation des performances.`,
    officialDescription: `Java est un langage de programmation orienté objet qui permet de créer 
    des applications multiplateformes.`,
    officialWebsite: `https://www.oracle.com/java/`,
    examples: [
      {
        title: `Application Backend`,
        description: `Développement d'une application backend avec Java et Spring Boot`
      }
    ]
  },
  {
    name: `Kotlin`,
    logo: kotlin,
    experience: 1,
    description: `Mon expérience avec Kotlin a débuté avec le développement d'applications Android 
    modernes. J'ai travaillé sur la création d'interfaces utilisateur fluides et l'implémentation 
    de fonctionnalités natives, ce qui m'a permis de découvrir les avantages de ce langage 
    moderne par rapport à Java.`,
    officialDescription: `Kotlin est un langage de programmation moderne qui s'exécute sur la JVM 
    et peut être compilé en JavaScript ou en code natif.`,
    officialWebsite: `https://kotlinlang.org/`,
    examples: [
      {
        title: `Application Android`,
        description: `Développement d'une application Android avec Kotlin`
      }
    ]
  },
  {
    name: `Prolog`,
    logo: prolog,
    experience: 3,
    description: `Mon expérience avec Prolog a été particulièrement enrichissante dans le développement de 
    projets d'intelligence artificielle et de planification sous contraintes. J'ai développé des 
    solutions pour la résolution de problèmes complexes et l'optimisation de processus. \n

    J'ai également contribué au développement d'un logiciel SIRH, notamment en optimisant des 
    scripts PL/SQL, en développant l'export analytique avec une interface et une base Oracle, 
    et en implémentant des fonctionnalités comme l'ajout d'aptitude et la gestion de la 
    rémunération associée.`,
    officialDescription: `Prolog est un langage de programmation logique utilisé principalement 
    pour l'intelligence artificielle et la résolution de problèmes complexes.`,
    officialWebsite: `https://www.swi-prolog.org/`
  },
  {
    name: `C#`,
    logo: csharp,
    experience: 1,
    description: `Mon expérience avec C# a débuté avec le développement d'applications Windows Forms 
    et d'applications web avec ASP.NET. J'ai travaillé sur la création d'interfaces utilisateur 
    et l'implémentation de fonctionnalités backend, ce qui m'a permis de découvrir les 
    capacités de ce langage moderne.`,
    officialDescription: `C# est un langage de programmation moderne, orienté objet et typé, conçu 
    pour le développement d'applications sur la plateforme .NET.`,
    officialWebsite: `https://learn.microsoft.com/fr-fr/dotnet/csharp/`,
    examples: [
      {
        title: `Application Windows`,
        description: `Développement d'une application Windows Forms avec C#`
      }
    ]
  },
  {
    name: `MongoDB`,
    logo: mongodb,
    experience: 3,
    description: `Mon expérience avec MongoDB a été particulièrement enrichissante dans le 
    développement d'applications nécessitant une grande flexibilité dans la structure des 
    données. J'ai travaillé sur l'optimisation des requêtes et la mise en place de schémas 
    efficaces pour des applications à haute performance.`,
    officialDescription: `MongoDB est une base de données NoSQL qui stocke les données sous forme 
    de documents JSON.`,
    officialWebsite: `https://www.mongodb.com/`,
    examples: [
      {
        title: `API REST`,
        description: `Création d'une API REST avec Node.js et MongoDB`
      }
    ]
  },
  {
    name: `Node.js`,
    logo: node,
    experience: 4,
    description: `Mon expérience avec Node.js a été particulièrement enrichissante lors du développement de 
    mon portfolio 2025, où j'ai créé une API REST complète avec authentification JWT et gestion 
    des fichiers. J'ai également mis en place des tests automatisés et un pipeline CI/CD pour 
    assurer la qualité du code.`,
    officialDescription: `Node.js est un environnement d'exécution JavaScript qui permet de créer 
    des applications réseau évolutives.`,
    officialWebsite: `https://nodejs.org/`,
    examples: [
      {
        title: `API REST`,
        description: `Développement d'une API REST complète avec authentification JWT et gestion 
        des fichiers`
      }
    ]
  },
  {
    name: `Spring`,
    logo: spring,
    experience: 2,
    description: `Mon expérience avec Spring a été particulièrement enrichissante dans le 
    développement d'applications d'entreprise robustes. J'ai travaillé sur la mise en place 
    d'architectures modulaires et l'implémentation de fonctionnalités avancées comme la 
    gestion des transactions et la sécurité.`,
    officialDescription: `Spring est un framework Java populaire pour le développement 
    d'applications d'entreprise.`,
    officialWebsite: `https://spring.io/`,
    examples: [
      {
        title: `Application Web`,
        description: `Création d'une application web avec Spring Boot`
      }
    ]
  },
  {
    name: `PHP`,
    logo: php,
    experience: 4,
    description: `Mon expérience avec PHP a été particulièrement enrichissante lors du développement du 
    projet Haddock, où j'ai créé un backend robuste pour gérer les requêtes de la base de 
    données et implémenter un système d'authentification pour la modération du contenu. J'ai 
    également mis en place des fonctionnalités de recherche avancée et de filtrage des données. \n

    J'ai également travaillé sur l'optimisation des performances et la sécurité des 
    applications PHP, en implémentant des bonnes pratiques comme la validation des entrées, 
    la protection contre les injections SQL, et la gestion des sessions.`,
    officialDescription: `PHP est un langage de script généraliste particulièrement adapté au 
    développement web.`,
    officialWebsite: `https://www.php.net/`
  },
  {
    name: `PrestaShop`,
    logo: prestashop,
    experience: 2,
    description: `Mon expérience avec PrestaShop a été particulièrement enrichissante dans le 
    développement de boutiques en ligne personnalisées. J'ai travaillé sur la création de 
    thèmes sur mesure et l'implémentation de fonctionnalités spécifiques pour répondre aux 
    besoins des clients.`,
    officialDescription: `PrestaShop est une plateforme e-commerce open-source permettant de créer 
    des boutiques en ligne.`,
    officialWebsite: `https://www.prestashop.com/`,
    examples: [
      {
        title: `Boutique en Ligne`,
        description: `Création d'une boutique en ligne avec PrestaShop`
      }
    ]
  },
  {
    name: `Python`,
    logo: python,
    experience: 3,
    description: `Mon expérience avec Python a été particulièrement enrichissante dans le développement de 
    scripts d'automatisation pour optimiser des processus métier. J'ai également travaillé sur 
    des projets d'analyse de données en utilisant des bibliothèques comme Pandas et NumPy pour 
    le traitement et la visualisation des données. \n

    Cette expérience m'a permis de maîtriser les bonnes pratiques de développement Python et 
    l'optimisation des performances, notamment dans le traitement de grands volumes de données 
    et l'automatisation de tâches complexes.`,
    officialDescription: `Python est un langage de programmation polyvalent, facile à apprendre et 
    puissant.`,
    officialWebsite: `https://www.python.org/`,
    examples: [
      {
        title: `Script d'Automatisation`,
        description: `Développement d'un script d'automatisation avec Python`
      }
    ]
  },
  {
    name: `Sass`,
    logo: sass,
    experience: 2,
    description: `Mon expérience avec Sass a été particulièrement enrichissante dans la création de 
    styles CSS plus maintenables et modulaires. J'ai travaillé sur l'implémentation de 
    variables, de mixins et de fonctions pour optimiser la réutilisation du code et améliorer 
    la maintenabilité des styles.`,
    officialDescription: `Sass est un préprocesseur CSS qui ajoute des fonctionnalités puissantes 
    comme les variables, les imbrications et les mixins.`,
    officialWebsite: `https://sass-lang.com/`
  },
  {
    name: `WordPress`,
    logo: wordpress,
    experience: 2,
    description: `Mon expérience avec WordPress a été particulièrement enrichissante dans le 
    développement de sites web personnalisés. J'ai travaillé sur la création de thèmes sur 
    mesure et l'implémentation de fonctionnalités spécifiques pour répondre aux besoins des 
    clients.`,
    officialDescription: `WordPress est un système de gestion de contenu (CMS) open-source utilisé 
    pour créer des sites web.`,
    officialWebsite: `https://wordpress.org/`,
    examples: [
      {
        title: `Site e-commerce`,
        description: `Création d'un site e-commerce avec WordPress`
      }
    ]
  },
  {
    name: `SQL`,
    logo: sql,
    experience: 5,
    description: `Mon parcours avec SQL a été marqué par le projet Haddock, où j'ai développé une base de 
    données MySQL pour stocker les jurons du Capitaine Haddock et leurs contextes. Cette 
    expérience m'a permis de maîtriser la conception de schémas de base de données et la 
    gestion des requêtes complexes. \n

    J'ai également travaillé sur l'optimisation de bases de données PostgreSQL pour des 
    applications à haute charge, ce qui m'a permis d'approfondir mes connaissances en 
    performance et en scalabilité. \n

    Mon expérience chez Cegedim a été particulièrement enrichissante, où j'ai travaillé sur 
    l'optimisation de bases de données Oracle pour des applications critiques. J'ai mis en 
    place des procédures stockées et des triggers pour automatiser des processus métier, et 
    j'ai optimisé des requêtes complexes pour améliorer les performances des applications.`,
    officialDescription: `SQL (Structured Query Language) est un langage de programmation 
    standardisé pour gérer les bases de données relationnelles. Il permet de créer, modifier, 
    interroger et gérer les données stockées dans une base de données.`,
    officialWebsite: `https://www.iso.org/standard/63555.html`,
    examples: [
      {
        title: `Bases de données relationnelles`,
        description: `Conception et optimisation de bases de données avec différentes variantes de 
        SQL`
      }
    ]
  },
  {
    name: `Adaptabilité`,
    logo: skill,
    experience: 5,
    description: `Mon expérience professionnelle m'a permis de développer une grande adaptabilité, notamment lors 
    de mes transitions entre différents langages de programmation et frameworks. J'ai su m'adapter 
    aux méthodologies agiles et aux différents environnements de développement. \n

    Cette capacité d'adaptation m'a été particulièrement utile lors de mes différents projets, où j'ai dû 
    rapidement assimiler les besoins spécifiques et m'adapter aux environnements techniques variés.`,
    officialDescription: `L'adaptabilité est la capacité à s'ajuster efficacement aux changements et 
    aux nouvelles situations dans un environnement professionnel en constante évolution.`
  },
  {
    name: `Esprit d'équipe`,
    logo: skill,
    experience: 5,
    description: `Mon expérience en développement m'a permis de travailler dans diverses équipes, allant des petits 
    groupes de développeurs aux équipes pluridisciplinaires. J'ai participé à des projets collaboratifs 
    où j'ai appris à coordonner mes efforts avec d'autres développeurs, designers et chefs de projet. \n

    J'ai également contribué à la création d'une culture de partage des connaissances au sein des équipes, 
    en organisant des sessions de code review et en documentant les bonnes pratiques. Cette approche 
    collaborative a permis d'améliorer la qualité du code et l'efficacité de l'équipe.`,
    officialDescription: `L'esprit d'équipe est la capacité à travailler harmonieusement avec d'autres 
    personnes, à contribuer activement aux objectifs communs et à maintenir un environnement de travail 
    positif et productif.`
  },
  {
    name: `Organisation`,
    logo: skill,
    experience: 5,
    description: `Mon expérience en développement m'a permis de développer une approche méthodique dans la 
    gestion des projets. J'utilise des outils comme Jira et Trello pour suivre l'avancement des 
    tâches et maintenir une vue d'ensemble claire des projets. \n

    J'ai également mis en place des processus de documentation et de versioning rigoureux, 
    permettant une meilleure traçabilité et une maintenance facilitée des projets. Cette 
    organisation méthodique contribue à la qualité et à la pérennité des solutions développées.`,
    officialDescription: `L'organisation est la capacité à structurer son travail, à gérer efficacement 
    son temps et ses ressources pour atteindre les objectifs fixés dans les délais impartis.`
  },
  {
    name: `Curiosité`,
    logo: skill,
    experience: 5,
    description: `Cette curiosité m'a permis de rester à jour avec les dernières avancées technologiques et 
    d'expérimenter avec de nouveaux outils et frameworks. Je participe régulièrement à des 
    conférences et des meetups pour élargir mes connaissances et échanger avec d'autres 
    professionnels. \n

    Cette soif d'apprentissage se reflète dans mes projets personnels, où j'explore 
    régulièrement de nouvelles approches et technologies pour améliorer mes compétences et 
    enrichir mon expérience.`,
    officialDescription: `La curiosité est le désir constant d'apprendre, de découvrir et de comprendre 
    de nouvelles choses, essentiel pour rester compétitif dans un domaine en perpétuelle évolution.`
  },
  {
    name: `Autonomie`,
    logo: skill,
    experience: 5,
    description: `Mon expérience en développement m'a permis de développer une forte autonomie dans la 
    résolution de problèmes techniques. Je sais identifier les ressources nécessaires, 
    rechercher des solutions et implémenter des réponses adaptées aux défis rencontrés. \n

    Cette autonomie se manifeste également dans ma capacité à gérer mes projets de bout en 
    bout, de l'analyse des besoins à la mise en production, tout en maintenant une 
    communication transparente avec les parties prenantes. \n

    L'auto-apprentissage est un aspect essentiel de mon autonomie. Je m'investis 
    régulièrement dans l'apprentissage de nouvelles technologies et méthodologies, en 
    utilisant diverses ressources comme la documentation officielle, les tutoriels en ligne, 
    et les projets pratiques. Cette capacité d'apprentissage autonome me permet de rester à 
    jour et de m'adapter rapidement aux nouvelles exigences techniques.`,
    officialDescription: `L'autonomie est la capacité à travailler de manière indépendante, à prendre des 
    initiatives et à assumer la responsabilité de ses actions tout en maintenant une collaboration 
    efficace avec l'équipe.`
  }
]; 

// Function to link skills to projects based on technologies
export const linkSkillsToProjects = () => {
  // Create a deep copy of skills to avoid direct mutation
  const linkedSkills = [...skills];

  // For each skill
  linkedSkills.forEach(skill => {
    // Find all projects that use this technology
    const relatedProjects = projects
      .filter(project => project.technologies.some(tech => 
        tech.toLowerCase() === skill.name.toLowerCase()))
      .map(project => project.id);

    // Add related projects to the skill
    skill.relatedProjects = relatedProjects;
  });

  return linkedSkills;
};

// Export the linked skills
export const linkedSkills = linkSkillsToProjects(); 