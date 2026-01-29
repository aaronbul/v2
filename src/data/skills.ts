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
  category: 'technical' | 'soft';
  description?: string;
  officialDescription?: string;
  officialWebsite?: string;
  examples?: SkillExample[];
  relatedProjects?: string[];
  relatedExperiences?: string[]; // IDs des expériences
  selfCriticism?: string; // Autocritique
  evolutionAxes?: string; // Axes d'évolution
}

export const skills: Skill[] = [
  {
    name: `HTML`,
    logo: html,
    experience: 5,
    category: 'technical',
    description: `Mon expérience avec HTML a débuté avec le projet <strong>Haddock</strong>, où j'ai mis en place des 
    <strong>formulaires complexes</strong> et des <strong>intégrations multimédias</strong>. J'ai ensuite créé mon premier 
    portfolio en 2021, en développant une <strong>structure sémantique</strong> claire et <strong>accessible</strong>. \n

    J'ai continué à approfondir mes connaissances avec mon portfolio 2025, en utilisant 
    les <strong>dernières fonctionnalités HTML5</strong> pour créer une expérience utilisateur <strong>moderne</strong> et 
    <strong>interactive</strong>.`,
    officialDescription: `HTML (HyperText Markup Language) est le langage de balisage standard pour
    créer des pages web. Il décrit la <strong>structure</strong> du contenu web et permet d'organiser le contenu en
    <strong>sections</strong>, <strong>paragraphes</strong>, <strong>listes</strong>, <strong>liens</strong>, <strong>images</strong> et autres éléments.`,
    officialWebsite: `https://developer.mozilla.org/fr/docs/Web/HTML`,
    relatedExperiences: ["2", "3", "5"],
    selfCriticism: `Bien que maîtrisant les fondamentaux et la <strong>sémantique HTML5</strong>, je dois encore
    approfondir mes connaissances sur l'<strong>accessibilité avancée (ARIA)</strong> et les <strong>microformats</strong>
    pour améliorer le référencement et l'interopérabilité.`,
    evolutionAxes: `Approfondir les <strong>attributs ARIA</strong> pour une meilleure accessibilité, maîtriser les
    <strong>données structurées</strong> (Schema.org) pour le SEO, et explorer les <strong>nouvelles balises HTML</strong>
    comme dialog et details/summary.`
  },
  {
    name: `CSS`,
    logo: css,
    experience: 5,
    category: 'technical',
    description: `Mon parcours avec CSS a commencé avec le projet <strong>Haddock</strong>, où j'ai créé des <strong>animations 
    fluides</strong> et des <strong>transitions</strong> pour améliorer l'expérience utilisateur. J'ai également mis en 
    place un <strong>design responsive</strong> pour assurer une expérience optimale sur tous les appareils. \n

    J'ai ensuite évolué vers des approches plus modernes avec mon portfolio 2025, en utilisant 
    <strong>Tailwind CSS</strong> pour créer des interfaces <strong>élégantes</strong> et <strong>performantes</strong>. Cette expérience m'a 
    permis de maîtriser les concepts de <strong>design system</strong> et d'<strong>optimisation des performances</strong> CSS.`,
    officialDescription: `CSS (Cascading Style Sheets) est un langage de feuille de style utilisé
    pour décrire la <strong>présentation</strong> d'un document HTML. Il permet de contrôler la <strong>mise en page</strong>, les
    <strong>couleurs</strong>, les <strong>polices</strong>, les <strong>animations</strong> et d'autres aspects visuels.`,
    officialWebsite: `https://developer.mozilla.org/fr/docs/Web/CSS`,
    selfCriticism: `Ma maîtrise de CSS est solide, mais je dois encore perfectionner l'utilisation des
    <strong>CSS Grid</strong> dans des layouts complexes et approfondir les <strong>animations performantes</strong>
    avec les propriétés composites.`,
    evolutionAxes: `Explorer les <strong>Container Queries</strong> et les <strong>CSS Layers (@layer)</strong> pour
    une meilleure organisation du code, et maîtriser les <strong>animations basées sur le scroll</strong>
    (Scroll-driven Animations).`
  },
  {
    name: `JavaScript`,
    logo: javascript,
    experience: 5,
    category: 'technical',
    description: `Mon parcours avec JavaScript a commencé avec mon premier portfolio en 2021, où j'ai utilisé 
    <strong>JavaScript natif</strong> pour créer des <strong>interactions utilisateur</strong> et des <strong>animations</strong>. Cette expérience 
    m'a permis d'acquérir une solide base en <strong>manipulation du DOM</strong> et en <strong>gestion des événements</strong>. \n

    J'ai ensuite évolué vers des frameworks modernes comme <strong>React</strong>, notamment dans mon portfolio 
    2025, où j'ai mis en place une <strong>architecture basée sur les composants</strong> et les <strong>hooks</strong>. Cette 
    expérience m'a permis de maîtriser les concepts de <strong>gestion d'état</strong> et d'<strong>optimisation des 
    performances</strong>.`,
    officialDescription: `JavaScript est un langage de programmation <strong>dynamique</strong> qui permet d'ajouter
    des fonctionnalités <strong>interactives</strong> aux pages web. Il est l'un des trois <strong>langages fondamentaux</strong> du
    web, aux côtés de HTML et CSS.`,
    officialWebsite: `https://developer.mozilla.org/fr/docs/Web/JavaScript`,
    selfCriticism: `Je maîtrise bien les concepts fondamentaux et modernes de JavaScript, mais je dois
    approfondir ma compréhension des <strong>design patterns avancés</strong> et de l'<strong>optimisation mémoire</strong>
    pour les applications à grande échelle.`,
    evolutionAxes: `Approfondir les <strong>Web Workers</strong> et le <strong>multithreading</strong> en JavaScript,
    maîtriser les <strong>patterns fonctionnels</strong> avancés, et explorer les nouvelles APIs comme
    les <strong>Signals</strong> et l'<strong>API Temporal</strong>.`
  },  
  {
    name: `TypeScript`,
    logo: typescript,
    experience: 3,
    category: 'technical',
    description: `Mon expérience avec TypeScript a été particulièrement enrichissante lors du développement 
    de mon portfolio 2025, où j'ai utilisé le <strong>typage strict</strong> pour assurer la <strong>qualité du code</strong> et 
    faciliter la <strong>maintenance</strong>. J'ai également mis en place des <strong>interfaces réutilisables</strong> et des 
    <strong>types génériques</strong> pour optimiser la réutilisation du code. \n

    J'ai également travaillé sur des projets plus complexes, comme une application de 
    <strong>visualisation de données en temps réel</strong>, où j'ai utilisé TypeScript pour créer une 
    <strong>architecture robuste</strong> et <strong>maintenable</strong>. Cette expérience m'a permis de maîtriser les concepts 
    avancés comme les <strong>types conditionnels</strong> et les <strong>mapped types</strong>.`,
    officialDescription: `TypeScript est un <strong>sur-ensemble typé</strong> de JavaScript qui se compile en
    JavaScript. Il ajoute des <strong>types statiques</strong> optionnels, des <strong>classes</strong>, des <strong>modules</strong> et d'autres
    fonctionnalités à JavaScript.`,
    officialWebsite: `https://www.typescriptlang.org/fr/`,
    selfCriticism: `Je maîtrise le typage et les interfaces, mais je dois encore approfondir les
    <strong>types utilitaires avancés</strong> et les <strong>patterns de type-safety</strong> pour des architectures
    plus complexes.`,
    evolutionAxes: `Maîtriser les <strong>template literal types</strong> et les <strong>types récursifs</strong>,
    approfondir l'utilisation des <strong>decorators</strong> (stage 3), et explorer les techniques de
    <strong>type narrowing</strong> avancé.`
  },
  {
    name: `Angular`,
    logo: angular,
    experience: 2,
    category: 'technical',
    description: `Mon expérience avec Angular a été particulièrement enrichissante lors du développement 
    d'une <strong>application de gestion de médiathèque</strong>. J'ai mis en place une <strong>architecture modulaire</strong> 
    avec des <strong>services partagés</strong> pour la <strong>gestion des données</strong> et l'<strong>authentification</strong>. J'ai également 
    implémenté des fonctionnalités avancées comme le <strong>lazy loading</strong> des modules et la <strong>gestion 
    des formulaires réactifs</strong>. \n

    J'ai également travaillé sur l'<strong>optimisation des performances</strong> en utilisant le <strong>change 
    detection strategy</strong> et en implémentant des techniques de <strong>memoization</strong>.`,
    officialDescription: `Angular est une <strong>plateforme</strong> et un <strong>framework</strong> pour créer des <strong>applications 
    web à page unique (SPA)</strong> en utilisant HTML et TypeScript.`,
    officialWebsite: `https://angular.io/`,
    examples: [
      {
        title: `Application de Gestion`,
        description: `Création d'une application de gestion de médiathèque avec Angular`
      }
    ],
    selfCriticism: `Mon expérience avec Angular reste limitée à quelques projets. Je dois approfondir
    ma compréhension de l'<strong>écosystème RxJS</strong> et des <strong>patterns réactifs</strong> propres au framework.`,
    evolutionAxes: `Maîtriser les <strong>Signals Angular</strong> et le nouveau modèle de réactivité,
    approfondir les <strong>standalone components</strong>, et explorer les techniques d'<strong>optimisation SSR</strong>
    avec Angular Universal.`
  },
  {
    name: `React`,
    logo: react,
    experience: 3,
    category: 'technical',
    description: `Mon expérience avec React a débuté avec mon portfolio 2025, où j'ai créé une <strong>interface 
    moderne</strong> et <strong>responsive</strong> en utilisant <strong>Tailwind CSS</strong>. Cette expérience m'a permis de maîtriser 
    les concepts de <strong>composants réutilisables</strong> et de <strong>gestion d'état</strong>. \n

    J'ai également travaillé sur des projets plus complexes, comme une application de 
    <strong>visualisation de données en temps réel</strong> qui utilisait React avec <strong>Redux</strong> pour la gestion 
    d'état. Cette expérience m'a permis de comprendre l'importance de l'<strong>architecture</strong> des 
    applications React et de l'<strong>optimisation des performances</strong>. \n

    J'ai également une expérience en développement mobile avec <strong>React Native</strong>, notamment dans la 
    création d'<strong>applications cross-platform</strong>. J'ai développé des applications mobiles avec des 
    fonctionnalités comme la <strong>géolocalisation</strong>, les <strong>notifications push</strong>, et l'<strong>intégration de 
    caméra</strong>.`,
    officialDescription: `React est une <strong>bibliothèque JavaScript</strong> pour créer des <strong>interfaces
    utilisateur</strong>. Elle permet de créer des applications web complexes en <strong>composants réutilisables</strong> et
    gère efficacement le <strong>rendu</strong> et les <strong>mises à jour</strong> de l'interface.`,
    officialWebsite: `https://fr.reactjs.org/`,
    relatedExperiences: ["5", "7"],
    selfCriticism: `Je maîtrise bien les hooks et les composants, mais je dois encore approfondir
    les <strong>patterns d'optimisation</strong> (memo, useMemo, useCallback) et la gestion d'état à grande échelle.`,
    evolutionAxes: `Explorer les <strong>React Server Components</strong> et le rendu hybride, approfondir
    les <strong>patterns de composition avancés</strong>, et maîtriser les nouvelles APIs comme
    <strong>useOptimistic</strong> et <strong>useFormStatus</strong>.`
  },
  {
    name: `Tailwind`,
    logo: tailwind,
    experience: 1,
    category: 'technical',
    description: `Mon expérience avec Tailwind CSS a débuté avec mon portfolio 2025, où j'ai créé une 
    <strong>interface moderne</strong> et <strong>responsive</strong>. Cette expérience m'a permis de maîtriser l'<strong>approche 
    utility-first</strong> et de comprendre l'importance de la <strong>conception d'interfaces utilisateur 
    performantes</strong>.`,
    officialDescription: `Tailwind CSS est un <strong>framework CSS utility-first</strong> qui permet de construire
    rapidement des <strong>designs personnalisés</strong> sans quitter votre HTML.`,
    officialWebsite: `https://tailwindcss.com/`,
    selfCriticism: `Mon expérience avec Tailwind est encore récente. Je dois mieux maîtriser la
    <strong>personnalisation du thème</strong> et l'organisation des classes pour des projets de grande envergure.`,
    evolutionAxes: `Approfondir la <strong>configuration avancée</strong> et la création de <strong>plugins custom</strong>,
    maîtriser les <strong>variants personnalisés</strong>, et optimiser la <strong>purge CSS</strong> pour des bundles minimaux.`
  },
  {
    name: `Bootstrap`,
    logo: bootstrap,
    experience: 5,
    category: 'technical',
    description: `Mon parcours avec Bootstrap a commencé avec le projet <strong>Haddock</strong>, où j'ai créé une <strong>interface 
    utilisateur responsive</strong> et <strong>intuitive</strong>. Cette expérience m'a permis de maîtriser les <strong>composants 
    Bootstrap</strong> et les <strong>techniques de personnalisation</strong>. \n

    J'ai également utilisé Bootstrap dans d'autres projets, comme une <strong>application de gestion de 
    tâches</strong>, où j'ai mis en place une interface utilisateur <strong>moderne</strong> et <strong>accessible</strong>.`,
    officialDescription: `Bootstrap est un <strong>framework CSS open-source</strong> qui facilite le développement
    de sites web <strong>responsifs</strong> et <strong>mobiles-first</strong>.`,
    officialWebsite: `https://getbootstrap.com/`,
    selfCriticism: `Je maîtrise bien les composants Bootstrap, mais j'ai tendance à privilégier des
    approches plus modernes comme Tailwind. Ma connaissance de la <strong>personnalisation Sass</strong>
    de Bootstrap pourrait être approfondie.`,
    evolutionAxes: `Approfondir la <strong>personnalisation via les variables Sass</strong>, explorer les
    <strong>nouveautés de Bootstrap 5</strong> comme les utilities API, et maîtriser l'intégration avec
    les frameworks JavaScript modernes.`
  },
  {
    name: `Docker`,
    logo: docker,
    experience: 3,
    category: 'technical',
    description: `Mon expérience avec Docker a été particulièrement enrichissante dans la mise en place 
    d'<strong>environnements de développement cohérents</strong> et dans le <strong>déploiement d'applications</strong>. J'ai 
    travaillé sur la <strong>conteneurisation</strong> de plusieurs applications, ce qui a permis d'améliorer 
    la <strong>portabilité</strong> et la <strong>scalabilité</strong> des solutions.`,
    officialDescription: `Docker est une <strong>plateforme de conteneurisation</strong> qui permet d'empaqueter une 
    application et ses <strong>dépendances</strong> dans un <strong>conteneur isolé</strong>.`,
    officialWebsite: `https://www.docker.com/`,
    examples: [
      {
        title: `Microservices`,
        description: `Mise en place d'une architecture microservices avec Docker`
      }
    ],
    selfCriticism: `Je maîtrise la conteneurisation de base, mais je dois approfondir les
    <strong>optimisations d'images</strong> (multi-stage builds) et la <strong>sécurité des conteneurs</strong>.`,
    evolutionAxes: `Maîtriser les <strong>Docker multi-stage builds</strong> pour des images optimisées,
    approfondir <strong>Docker Compose</strong> pour les environnements complexes, et explorer les
    <strong>bonnes pratiques de sécurité</strong> des conteneurs.`
  },
  {
    name: `Kubernetes`,
    logo: kubernetes,
    experience: 1,
    category: 'technical',
    description: `Mon expérience avec Kubernetes a débuté avec la mise en place d'un <strong>cluster de 
    production</strong> pour le <strong>déploiement d'applications conteneurisées</strong>. J'ai travaillé sur 
    l'<strong>orchestration des conteneurs</strong> et la <strong>gestion des ressources</strong>, ce qui a permis d'améliorer 
    la <strong>fiabilité</strong> et la <strong>scalabilité</strong> des applications.`,
    officialDescription: `Kubernetes est un <strong>système d'orchestration de conteneurs</strong> open-source qui 
    automatise le <strong>déploiement</strong>, la <strong>mise à l'échelle</strong> et la <strong>gestion</strong> des applications conteneurisées.`,
    officialWebsite: `https://kubernetes.io/fr/`,
    examples: [
      {
        title: `Cluster de Production`,
        description: `Configuration d'un cluster Kubernetes pour le déploiement d'applications`
      }
    ],
    selfCriticism: `Mon expérience avec Kubernetes reste basique. Je dois approfondir la
    <strong>gestion des ressources</strong>, le <strong>monitoring</strong> et les <strong>stratégies de déploiement</strong> avancées.`,
    evolutionAxes: `Maîtriser les <strong>Helm charts</strong> pour la gestion des déploiements, approfondir
    les <strong>stratégies de scaling</strong> (HPA, VPA), et explorer les outils de <strong>monitoring</strong>
    comme Prometheus et Grafana.`
  },
  {
    name: `GitHub`,
    logo: github,
    experience: 5,
    category: 'technical',
    description: `Mon expérience avec GitHub a été essentielle dans la <strong>gestion de mes projets 
    personnels et professionnels</strong>. J'ai mis en place des <strong>workflows de développement collaboratif</strong>, 
    des <strong>pipelines CI/CD</strong>, et des <strong>processus de code review</strong> qui ont permis d'améliorer la <strong>qualité 
    du code</strong> et la <strong>collaboration</strong> au sein des équipes.`,
    officialDescription: `GitHub est une <strong>plateforme de développement</strong> qui permet de collaborer sur
    des projets de <strong>code source</strong> en utilisant Git.`,
    officialWebsite: `https://github.com/`,
    selfCriticism: `Je maîtrise bien les fonctionnalités de base et les workflows Git, mais je dois
    approfondir les <strong>GitHub Actions</strong> complexes et les <strong>intégrations avancées</strong>.`,
    evolutionAxes: `Maîtriser les <strong>GitHub Actions</strong> avancées avec des workflows réutilisables,
    explorer les <strong>GitHub Packages</strong> pour la gestion des artefacts, et approfondir les
    <strong>GitHub Apps</strong> pour l'automatisation.`
  },
  {
    name: `GitLab`,
    logo: gitlab,
    experience: 5,
    category: 'technical',
    description: `Mon expérience avec GitLab a été particulièrement enrichissante dans la mise en 
    place de <strong>pipelines CI/CD</strong> et la <strong>gestion de projets complexes</strong>. J'ai travaillé sur 
    l'<strong>automatisation</strong> des processus de <strong>build</strong>, <strong>test</strong> et <strong>déploiement</strong>, ce qui a permis d'améliorer 
    l'<strong>efficacité du développement</strong> et la <strong>qualité des livrables</strong>.`,
    officialDescription: `GitLab est une <strong>plateforme DevOps complète</strong> qui fournit des outils de 
    <strong>gestion de code source</strong>, <strong>CI/CD</strong>, et <strong>collaboration</strong>.`,
    officialWebsite: `https://about.gitlab.com/`,
    examples: [
      {
        title: `Pipeline CI/CD`,
        description: `Mise en place de pipelines CI/CD avec GitLab`
      }
    ],
    selfCriticism: `Je maîtrise bien les pipelines CI/CD de base, mais je dois approfondir les
    <strong>pipelines multi-projets</strong> et les <strong>stratégies de déploiement</strong> avancées.`,
    evolutionAxes: `Explorer les <strong>GitLab Auto DevOps</strong> pour l'automatisation complète,
    maîtriser les <strong>environnements dynamiques</strong> et les <strong>review apps</strong>, et approfondir
    l'intégration avec <strong>Kubernetes</strong>.`
  },
  {
    name: `Figma`,
    logo: figma,
    experience: 3,
    category: 'technical',
    description: `Mon expérience avec Figma a été particulièrement enrichissante lors du développement 
    de mon portfolio 2025, où j'ai créé un <strong>design system complet</strong> avec des <strong>composants réutilisables</strong> 
    et des <strong>styles partagés</strong>. J'ai également mis en place des <strong>prototypes interactifs</strong> pour tester 
    l'<strong>expérience utilisateur</strong> et valider les <strong>interactions</strong>. \n

    J'ai également utilisé Figma pour la conception d'<strong>interfaces d'applications web</strong> et 
    <strong>mobiles</strong>, en créant des <strong>maquettes détaillées</strong> et des <strong>prototypes fonctionnels</strong>. Cette 
    expérience m'a permis de maîtriser les concepts de <strong>design system</strong> et d'<strong>optimisation des 
    workflows de design</strong>.`,
    officialDescription: `Figma est un <strong>outil de design collaboratif</strong> basé sur le web qui permet de
    créer des <strong>interfaces utilisateur</strong> et des <strong>prototypes</strong>.`,
    officialWebsite: `https://www.figma.com/`,
    selfCriticism: `Je maîtrise la création de maquettes et prototypes, mais je dois approfondir
    l'<strong>organisation des design systems</strong> et les <strong>plugins Figma</strong> pour optimiser mon workflow.`,
    evolutionAxes: `Maîtriser les <strong>variables Figma</strong> et les <strong>modes</strong> pour les design systems,
    explorer le <strong>Dev Mode</strong> pour améliorer la collaboration avec les développeurs, et
    apprendre à créer des <strong>plugins personnalisés</strong>.`
  },
  {
    name: `Java`,
    logo: java,
    experience: 4,
    category: 'technical',
    description: `Mon expérience avec Java a été particulièrement enrichissante lors du développement 
    d'<strong>applications backend robustes</strong> et <strong>évolutives</strong>. J'ai mis en place des architectures basées sur 
    <strong>Spring Boot</strong>, avec une <strong>gestion efficace des dépendances</strong> et une <strong>configuration optimisée</strong>. \n

    J'ai également travaillé sur l'implémentation de fonctionnalités avancées comme la 
    <strong>gestion des transactions</strong>, la <strong>sécurité avec Spring Security</strong>, et l'<strong>intégration de bases de 
    données</strong>. Cette expérience m'a permis de maîtriser les <strong>bonnes pratiques de développement 
    Java</strong> et l'<strong>optimisation des performances</strong>.`,
    officialDescription: `Java est un langage de programmation <strong>orienté objet</strong> qui permet de créer 
    des applications <strong>multiplateformes</strong>.`,
    officialWebsite: `https://www.oracle.com/java/`,
    examples: [
      {
        title: `Application Backend`,
        description: `Développement d'une application backend avec Java et Spring Boot`
      }
    ],
    selfCriticism: `Je maîtrise bien les fondamentaux Java et Spring Boot, mais je dois approfondir
    les <strong>nouvelles fonctionnalités des versions récentes</strong> (records, sealed classes, pattern matching).`,
    evolutionAxes: `Explorer les <strong>virtual threads</strong> (Project Loom) pour la concurrence,
    approfondir la <strong>programmation réactive</strong> avec Spring WebFlux, et maîtriser les
    <strong>optimisations JVM</strong> et le profiling.`
  },
  {
    name: `Kotlin`,
    logo: kotlin,
    experience: 1,
    category: 'technical',
    description: `Mon expérience avec Kotlin a débuté avec le développement d'<strong>applications Android 
    modernes</strong>. J'ai travaillé sur la création d'<strong>interfaces utilisateur fluides</strong> et l'<strong>implémentation 
    de fonctionnalités natives</strong>, ce qui m'a permis de découvrir les avantages de ce langage 
    moderne par rapport à Java.`,
    officialDescription: `Kotlin est un langage de programmation <strong>moderne</strong> qui s'exécute sur la <strong>JVM</strong> 
    et peut être compilé en <strong>JavaScript</strong> ou en <strong>code natif</strong>.`,
    officialWebsite: `https://kotlinlang.org/`,
    examples: [
      {
        title: `Application Android`,
        description: `Développement d'une application Android avec Kotlin`
      }
    ],
    selfCriticism: `Mon expérience avec Kotlin reste limitée au développement Android basique. Je dois
    approfondir les <strong>coroutines</strong> et les <strong>patterns Kotlin idiomatiques</strong>.`,
    evolutionAxes: `Maîtriser les <strong>coroutines</strong> et <strong>Flow</strong> pour la programmation asynchrone,
    explorer <strong>Jetpack Compose</strong> pour les interfaces modernes, et découvrir
    <strong>Kotlin Multiplatform</strong> pour le développement cross-platform.`
  },
  {
    name: `Prolog`,
    logo: prolog,
    experience: 2,
    category: 'technical',
    description: `Mon expérience avec Prolog a été particulièrement enrichissante lors de mon alternance chez 
    <strong>Cegedim</strong>, où j'ai développé des fonctionnalités critiques pour un progiciel SIRH. J'ai travaillé 
    sur la <strong>gestion des aptitudes</strong>, les <strong>exports analytiques</strong> et la <strong>fermeture de collaborateurs</strong>. \n

    Cette expérience m'a permis de maîtriser la <strong>programmation logique</strong> et de comprendre l'importance 
    de la <strong>validation des contraintes métier</strong> dans les applications critiques.`,
    officialDescription: `Prolog est un langage de <strong>programmation logique</strong> basé sur la
    <strong>logique du premier ordre</strong>. Il est particulièrement adapté pour la <strong>résolution de problèmes</strong>
    et la <strong>programmation par contraintes</strong>.`,
    officialWebsite: `https://www.swi-prolog.org/`,
    relatedExperiences: ["6"],
    selfCriticism: `Mon expérience avec Prolog est spécifique au contexte métier de Cegedim. Je dois
    approfondir les <strong>concepts théoriques</strong> et les <strong>optimisations de requêtes</strong> logiques.`,
    evolutionAxes: `Explorer les <strong>applications modernes</strong> de Prolog comme l'IA symbolique,
    approfondir les <strong>techniques d'optimisation</strong> des prédicats, et découvrir les
    <strong>intégrations</strong> avec d'autres langages.`
  },
  {
    name: `C#`,
    logo: csharp,
    experience: 1,
    category: 'technical',
    description: `Mon expérience avec C# a débuté avec le développement d'<strong>applications Windows Forms</strong> 
    et d'<strong>applications web avec ASP.NET</strong>. J'ai travaillé sur la création d'<strong>interfaces utilisateur</strong> 
    et l'<strong>implémentation de fonctionnalités backend</strong>, ce qui m'a permis de découvrir les 
    capacités de ce langage moderne.`,
    officialDescription: `C# est un langage de programmation <strong>moderne</strong>, <strong>orienté objet</strong> et <strong>typé</strong>, conçu 
    pour le développement d'applications sur la <strong>plateforme .NET</strong>.`,
    officialWebsite: `https://learn.microsoft.com/fr-fr/dotnet/csharp/`,
    examples: [
      {
        title: `Application Windows`,
        description: `Développement d'une application Windows Forms avec C#`
      }
    ],
    selfCriticism: `Mon expérience avec C# reste basique et date de projets académiques. Je dois
    actualiser mes connaissances sur les <strong>versions récentes du langage</strong> et l'écosystème .NET moderne.`,
    evolutionAxes: `Explorer <strong>.NET Core</strong> et les <strong>Minimal APIs</strong> pour le développement web,
    découvrir <strong>Blazor</strong> pour les applications web interactives, et approfondir
    les <strong>patterns asynchrones</strong> avec async/await.`
  },
  {
    name: `MongoDB`,
    logo: mongodb,
    experience: 3,
    category: 'technical',
    description: `Mon expérience avec MongoDB a été particulièrement enrichissante dans le 
    développement d'<strong>applications nécessitant une grande flexibilité</strong> dans la structure des 
    données. J'ai travaillé sur l'<strong>optimisation des requêtes</strong> et la mise en place de <strong>schémas 
    efficaces</strong> pour des applications à <strong>haute performance</strong>.`,
    officialDescription: `MongoDB est une <strong>base de données NoSQL</strong> qui stocke les données sous forme 
    de <strong>documents JSON</strong>.`,
    officialWebsite: `https://www.mongodb.com/`,
    examples: [
      {
        title: `API REST`,
        description: `Création d'une API REST avec Node.js et MongoDB`
      }
    ],
    selfCriticism: `Je maîtrise les opérations CRUD et l'indexation de base, mais je dois approfondir
    les <strong>pipelines d'agrégation</strong> complexes et les <strong>stratégies de sharding</strong>.`,
    evolutionAxes: `Maîtriser les <strong>agrégations avancées</strong> et les <strong>transactions multi-documents</strong>,
    explorer <strong>MongoDB Atlas</strong> et ses fonctionnalités cloud, et approfondir les
    <strong>patterns de modélisation</strong> pour les données relationnelles.`
  },
  {
    name: `Node.js`,
    logo: node,
    experience: 4,
    category: 'technical',
    description: `Mon expérience avec Node.js a été particulièrement enrichissante lors du développement de 
    mon portfolio 2025, où j'ai créé une <strong>API REST complète</strong> avec <strong>authentification JWT</strong> et 
    <strong>gestion des fichiers</strong>. J'ai également mis en place des <strong>tests automatisés</strong> et un 
    <strong>pipeline CI/CD</strong> pour assurer la <strong>qualité du code</strong>.`,
    officialDescription: `Node.js est un <strong>environnement d'exécution JavaScript</strong> qui permet de créer 
    des <strong>applications réseau évolutives</strong>.`,
    officialWebsite: `https://nodejs.org/`,
    examples: [
      {
        title: `API REST`,
        description: `Développement d'une API REST complète avec authentification JWT et gestion
        des fichiers`
      }
    ],
    selfCriticism: `Je maîtrise bien Express et les APIs REST, mais je dois approfondir les
    <strong>architectures microservices</strong> et les <strong>patterns de scalabilité</strong> en Node.js.`,
    evolutionAxes: `Explorer les <strong>frameworks modernes</strong> comme Fastify et NestJS, approfondir
    les <strong>WebSockets</strong> et le temps réel, et maîtriser les <strong>tests de charge</strong> et
    l'<strong>optimisation des performances</strong>.`
  },
  {
    name: `Spring`,
    logo: spring,
    experience: 2,
    category: 'technical',
    description: `Mon expérience avec Spring a été particulièrement enrichissante dans le 
    développement d'<strong>applications d'entreprise robustes</strong>. J'ai travaillé sur la mise en place 
    d'<strong>architectures modulaires</strong> et l'implémentation de fonctionnalités avancées comme la 
    <strong>gestion des transactions</strong> et la <strong>sécurité</strong>.`,
    officialDescription: `Spring est un <strong>framework Java</strong> populaire pour le développement 
    d'<strong>applications d'entreprise</strong>.`,
    officialWebsite: `https://spring.io/`,
    examples: [
      {
        title: `Application Web`,
        description: `Création d'une application web avec Spring Boot`
      }
    ],
    selfCriticism: `Mon expérience avec Spring reste concentrée sur les applications classiques. Je dois
    approfondir <strong>Spring Security</strong> et les <strong>architectures réactives</strong> avec WebFlux.`,
    evolutionAxes: `Maîtriser <strong>Spring Security</strong> et les mécanismes d'authentification avancés,
    explorer <strong>Spring Cloud</strong> pour les microservices, et approfondir les <strong>tests
    d'intégration</strong> avec Spring Boot Test.`
  },
  {
    name: `PHP`,
    logo: php,
    experience: 4,
    category: 'technical',
    description: `Mon expérience avec PHP a été particulièrement enrichissante lors du développement du 
    projet Haddock, où j'ai créé un <strong>backend robuste</strong> pour gérer les <strong>requêtes de la base de 
    données</strong> et implémenter un <strong>système d'authentification</strong> pour la modération du contenu. J'ai 
    également mis en place des <strong>fonctionnalités de recherche avancée</strong> et de <strong>filtrage des données</strong>. \n

    J'ai également travaillé sur l'<strong>optimisation des performances</strong> et la <strong>sécurité</strong> des 
    applications PHP, en implémentant des bonnes pratiques comme la <strong>validation des entrées</strong>, 
    la <strong>protection contre les injections SQL</strong>, et la <strong>gestion des sessions</strong>.`,
    officialDescription: `PHP est un <strong>langage de script généraliste</strong> particulièrement adapté au
    <strong>développement web</strong>.`,
    officialWebsite: `https://www.php.net/`,
    selfCriticism: `Ma pratique de PHP date principalement de projets plus anciens. Je dois actualiser
    mes connaissances sur <strong>PHP 8+</strong> et les <strong>frameworks modernes</strong> comme Laravel ou Symfony.`,
    evolutionAxes: `Explorer les <strong>nouvelles fonctionnalités PHP 8</strong> (attributes, named arguments,
    match), approfondir <strong>Laravel</strong> ou <strong>Symfony</strong> pour les projets modernes, et maîtriser
    les <strong>bonnes pratiques PSR</strong>.`
  },
  {
    name: `PrestaShop`,
    logo: prestashop,
    experience: 2,
    category: 'technical',
    description: `Mon expérience avec PrestaShop a été particulièrement enrichissante dans le 
    développement de <strong>boutiques en ligne personnalisées</strong>. J'ai travaillé sur la création de 
    <strong>thèmes sur mesure</strong> et l'<strong>implémentation de fonctionnalités spécifiques</strong> pour répondre aux 
    besoins des clients.`,
    officialDescription: `PrestaShop est une <strong>plateforme e-commerce open-source</strong> permettant de créer 
    des <strong>boutiques en ligne</strong>.`,
    officialWebsite: `https://www.prestashop.com/`,
    examples: [
      {
        title: `Boutique en Ligne`,
        description: `Création d'une boutique en ligne avec PrestaShop`
      }
    ],
    selfCriticism: `Mon expérience avec PrestaShop est limitée à la création de thèmes et modules basiques.
    Je dois approfondir l'<strong>architecture interne</strong> et les <strong>hooks avancés</strong>.`,
    evolutionAxes: `Maîtriser le développement de <strong>modules complexes</strong> et les <strong>overrides</strong>,
    approfondir l'<strong>API webservices</strong> de PrestaShop, et explorer les <strong>bonnes pratiques
    de performance</strong> pour les boutiques à fort trafic.`
  },
  {
    name: `Python`,
    logo: python,
    experience: 3,
    category: 'technical',
    description: `Mon expérience avec Python a été particulièrement enrichissante dans le développement de 
    <strong>scripts d'automatisation</strong> pour optimiser des processus métier. J'ai également travaillé sur 
    des projets d'<strong>analyse de données</strong> en utilisant des bibliothèques comme <strong>Pandas</strong> et 
    <strong>NumPy</strong> pour le <strong>traitement</strong> et la <strong>visualisation des données</strong>. \n

    Cette expérience m'a permis de maîtriser les <strong>bonnes pratiques de développement Python</strong> et 
    l'<strong>optimisation des performances</strong>, notamment dans le <strong>traitement de grands volumes de données</strong> 
    et l'<strong>automatisation de tâches complexes</strong>.`,
    officialDescription: `Python est un langage de programmation <strong>polyvalent</strong>, <strong>facile à apprendre</strong> et 
    <strong>puissant</strong>.`,
    officialWebsite: `https://www.python.org/`,
    examples: [
      {
        title: `Script d'Automatisation`,
        description: `Développement d'un script d'automatisation avec Python`
      }
    ],
    selfCriticism: `Je maîtrise bien les scripts et l'analyse de données, mais je dois approfondir
    les <strong>frameworks web</strong> Python et les <strong>bonnes pratiques de packaging</strong>.`,
    evolutionAxes: `Explorer <strong>FastAPI</strong> pour les APIs modernes, approfondir les <strong>bibliothèques
    de machine learning</strong> (scikit-learn, TensorFlow), et maîtriser les <strong>outils de qualité
    de code</strong> (mypy, black, ruff).`
  },
  {
    name: `Sass`,
    logo: sass,
    experience: 2,
    category: 'technical',
    description: `Mon expérience avec Sass a été particulièrement enrichissante dans la création de 
    <strong>styles CSS plus maintenables</strong> et <strong>modulaires</strong>. J'ai travaillé sur l'implémentation de 
    <strong>variables</strong>, de <strong>mixins</strong> et de <strong>fonctions</strong> pour optimiser la <strong>réutilisation du code</strong> et 
    améliorer la <strong>maintenabilité des styles</strong>.`,
    officialDescription: `Sass est un <strong>préprocesseur CSS</strong> qui ajoute des fonctionnalités puissantes
    comme les <strong>variables</strong>, les <strong>imbrications</strong> et les <strong>mixins</strong>.`,
    officialWebsite: `https://sass-lang.com/`,
    selfCriticism: `Je maîtrise les bases de Sass, mais je sous-utilise les fonctionnalités avancées
    comme les <strong>fonctions personnalisées</strong> et les <strong>maps</strong> pour des architectures CSS complexes.`,
    evolutionAxes: `Approfondir les <strong>@use et @forward</strong> pour une meilleure modularité,
    maîtriser les <strong>fonctions Sass</strong> pour les calculs dynamiques, et explorer les
    <strong>patterns d'architecture</strong> comme ITCSS ou 7-1.`
  },
  {
    name: `WordPress`,
    logo: wordpress,
    experience: 2,
    category: 'technical',
    description: `Mon expérience avec WordPress a été particulièrement enrichissante dans le 
    développement de <strong>sites web personnalisés</strong>. J'ai travaillé sur la création de 
    <strong>thèmes sur mesure</strong> et l'<strong>implémentation de fonctionnalités spécifiques</strong> pour répondre aux 
    besoins des clients.`,
    officialDescription: `WordPress est un <strong>système de gestion de contenu (CMS)</strong> open-source utilisé 
    pour créer des <strong>sites web</strong>.`,
    officialWebsite: `https://wordpress.org/`,
    examples: [
      {
        title: `Site e-commerce`,
        description: `Création d'un site e-commerce avec WordPress`
      }
    ],
    selfCriticism: `Mon expérience WordPress est principalement orientée thèmes et personnalisation.
    Je dois approfondir le développement de <strong>plugins</strong> et l'utilisation de <strong>Gutenberg</strong>.`,
    evolutionAxes: `Maîtriser le développement de <strong>blocs Gutenberg</strong> personnalisés,
    explorer l'<strong>API REST WordPress</strong> pour des architectures headless, et approfondir
    les <strong>bonnes pratiques de sécurité</strong> WordPress.`
  },
  {
    name: `SQL`,
    logo: sql,
    experience: 5,
    category: 'technical',
    description: `Mon parcours avec SQL a été marqué par le projet Haddock, où j'ai développé une 
    <strong>base de données MySQL</strong> pour stocker les jurons du Capitaine Haddock et leurs contextes. Cette 
    expérience m'a permis de maîtriser la <strong>conception de schémas de base de données</strong> et la 
    <strong>gestion des requêtes complexes</strong>. \n

    J'ai également travaillé sur l'<strong>optimisation de bases de données PostgreSQL</strong> pour des 
    applications à <strong>haute charge</strong>, ce qui m'a permis d'approfondir mes connaissances en 
    <strong>performance</strong> et en <strong>scalabilité</strong>. \n

    Mon expérience chez Cegedim a été particulièrement enrichissante, où j'ai travaillé sur 
    l'<strong>optimisation de bases de données Oracle</strong> pour des applications critiques. J'ai mis en 
    place des <strong>procédures stockées</strong> et des <strong>triggers</strong> pour automatiser des processus métier, et 
    j'ai <strong>optimisé des requêtes complexes</strong> pour améliorer les performances des applications.`,
    officialDescription: `SQL (Structured Query Language) est un <strong>langage de programmation 
    standardisé</strong> pour gérer les <strong>bases de données relationnelles</strong>. Il permet de <strong>créer</strong>, 
    <strong>modifier</strong>, <strong>interroger</strong> et <strong>gérer</strong> les données stockées dans une base de données.`,
    officialWebsite: `https://www.iso.org/standard/63555.html`,
    examples: [
      {
        title: `Bases de données relationnelles`,
        description: `Conception et optimisation de bases de données avec différentes variantes de
        SQL`
      }
    ],
    selfCriticism: `Je maîtrise bien les requêtes et la conception de schémas, mais je dois approfondir
    l'<strong>optimisation des requêtes complexes</strong> et les <strong>techniques d'indexation avancées</strong>.`,
    evolutionAxes: `Maîtriser les <strong>plans d'exécution</strong> et l'optimisation des requêtes,
    approfondir les <strong>window functions</strong> et les <strong>CTE récursives</strong>, et explorer les
    <strong>extensions</strong> spécifiques (PostGIS, JSON, full-text search).`
  },
  {
    name: `Adaptabilité`,
    logo: skill,
    experience: 5,
    category: 'soft',
    description: `Mon expérience professionnelle m'a permis de développer une grande adaptabilité, notamment lors 
    de mes <strong>transitions entre différents langages de programmation</strong> et <strong>frameworks</strong>. J'ai su m'adapter 
    aux <strong>méthodologies agiles</strong> et aux différents <strong>environnements de développement</strong>. \n

    Cette capacité d'adaptation m'a été particulièrement utile lors de mes différents projets, où j'ai dû 
    rapidement <strong>assimiler les besoins spécifiques</strong> et m'adapter aux <strong>environnements techniques variés</strong>.`,
    officialDescription: `L'adaptabilité est la capacité à <strong>s'ajuster efficacement</strong> aux changements et
    aux nouvelles situations dans un environnement professionnel en <strong>constante évolution</strong>.`,
    selfCriticism: `Mon adaptabilité est un atout, mais je dois parfois prendre plus de temps pour
    <strong>consolider mes acquis</strong> avant de passer à de nouvelles technologies, afin d'éviter
    une connaissance trop superficielle.`,
    evolutionAxes: `Développer une approche plus <strong>structurée de l'apprentissage</strong> avec des
    objectifs clairs, et améliorer ma capacité à <strong>prioriser</strong> les technologies à approfondir
    en fonction des besoins du marché.`
  },
  {
    name: `Esprit d'équipe`,
    logo: skill,
    experience: 5,
    category: 'soft',
    description: `Mon expérience en développement m'a permis de travailler dans <strong>diverses équipes</strong>, allant des petits 
    groupes de développeurs aux <strong>équipes pluridisciplinaires</strong>. J'ai participé à des <strong>projets collaboratifs</strong> 
    où j'ai appris à coordonner mes efforts avec d'autres développeurs, designers et chefs de projet. \n

    J'ai également contribué à la création d'une <strong>culture de partage des connaissances</strong> au sein des équipes, 
    en organisant des <strong>sessions de code review</strong> et en <strong>documentant les bonnes pratiques</strong>. Cette approche 
    collaborative a permis d'améliorer la <strong>qualité du code</strong> et l'<strong>efficacité de l'équipe</strong>.`,
    officialDescription: `L'esprit d'équipe est la capacité à <strong>travailler harmonieusement</strong> avec d'autres
    personnes, à <strong>contribuer activement</strong> aux objectifs communs et à maintenir un <strong>environnement de travail
    positif et productif</strong>.`,
    selfCriticism: `Je collabore bien en équipe, mais je dois améliorer ma capacité à <strong>déléguer</strong>
    et à <strong>faire confiance</strong> aux autres membres de l'équipe sur des tâches que je maîtrise.`,
    evolutionAxes: `Développer mes compétences en <strong>mentorat</strong> pour accompagner les développeurs
    juniors, et améliorer ma <strong>communication asynchrone</strong> pour les équipes distribuées.`
  },
  {
    name: `Organisation`,
    logo: skill,
    experience: 5,
    category: 'soft',
    description: `Mon expérience en développement m'a permis de développer une <strong>approche méthodique</strong> dans la 
    gestion des projets. J'utilise des outils comme <strong>Jira</strong> et <strong>Trello</strong> pour suivre l'avancement des 
    tâches et maintenir une <strong>vue d'ensemble claire</strong> des projets. \n

    J'ai également mis en place des <strong>processus de documentation</strong> et de <strong>versioning rigoureux</strong>, 
    permettant une meilleure <strong>traçabilité</strong> et une <strong>maintenance facilitée</strong> des projets. Cette 
    organisation méthodique contribue à la <strong>qualité</strong> et à la <strong>pérennité</strong> des solutions développées.`,
    officialDescription: `L'organisation est la capacité à <strong>structurer son travail</strong>, à <strong>gérer efficacement
    son temps</strong> et ses ressources pour atteindre les objectifs fixés dans les <strong>délais impartis</strong>.`,
    selfCriticism: `Mon organisation est efficace, mais je dois améliorer ma gestion des <strong>interruptions</strong>
    et ma capacité à <strong>estimer le temps</strong> nécessaire pour les tâches complexes.`,
    evolutionAxes: `Explorer des méthodologies comme <strong>GTD</strong> ou <strong>time blocking</strong> pour optimiser
    ma productivité, et améliorer ma <strong>documentation personnelle</strong> pour capitaliser sur
    mes apprentissages.`
  },
  {
    name: `Curiosité`,
    logo: skill,
    experience: 5,
    category: 'soft',
    description: `Cette curiosité m'a permis de <strong>rester à jour</strong> avec les dernières avancées technologiques et 
    d'<strong>expérimenter</strong> avec de nouveaux outils et frameworks. Je participe régulièrement à des 
    <strong>conférences</strong> et des <strong>meetups</strong> pour élargir mes connaissances et échanger avec d'autres 
    professionnels. \n

    Cette <strong>soif d'apprentissage</strong> se reflète dans mes projets personnels, où j'explore 
    régulièrement de <strong>nouvelles approches</strong> et <strong>technologies</strong> pour améliorer mes compétences et 
    enrichir mon expérience.`,
    officialDescription: `La curiosité est le <strong>désir constant d'apprendre</strong>, de <strong>découvrir</strong> et de <strong>comprendre
    de nouvelles choses</strong>, essentiel pour rester compétitif dans un domaine en <strong>perpétuelle évolution</strong>.`,
    selfCriticism: `Ma curiosité est un atout, mais elle peut parfois me disperser sur trop de sujets
    en même temps, au détriment de l'<strong>approfondissement</strong> de certaines compétences clés.`,
    evolutionAxes: `Canaliser ma curiosité vers des <strong>objectifs d'apprentissage structurés</strong>,
    et développer une approche plus <strong>sélective</strong> pour choisir les technologies à explorer
    en fonction de leur pertinence professionnelle.`
  },
  {
    name: `Autonomie`,
    logo: skill,
    experience: 5,
    category: 'soft',
    description: `Mon expérience en développement m'a permis de développer une <strong>forte autonomie</strong> dans la 
    <strong>résolution de problèmes techniques</strong>. Je sais <strong>identifier les ressources nécessaires</strong>, 
    <strong>rechercher des solutions</strong> et <strong>implémenter des réponses adaptées</strong> aux défis rencontrés. \n

    Cette autonomie se manifeste également dans ma capacité à <strong>gérer mes projets de bout en 
    bout</strong>, de l'<strong>analyse des besoins</strong> à la <strong>mise en production</strong>, tout en maintenant une 
    <strong>communication transparente</strong> avec les parties prenantes. \n

    L'<strong>auto-apprentissage</strong> est un aspect essentiel de mon autonomie. Je m'investis 
    régulièrement dans l'apprentissage de <strong>nouvelles technologies</strong> et <strong>méthodologies</strong>, en 
    utilisant diverses ressources comme la <strong>documentation officielle</strong>, les <strong>tutoriels en ligne</strong>, 
    et les <strong>projets pratiques</strong>. Cette capacité d'apprentissage autonome me permet de <strong>rester à 
    jour</strong> et de <strong>m'adapter rapidement</strong> aux nouvelles exigences techniques.`,
    officialDescription: `L'autonomie est la capacité à <strong>travailler de manière indépendante</strong>, à <strong>prendre des
    initiatives</strong> et à <strong>assumer la responsabilité</strong> de ses actions tout en maintenant une <strong>collaboration
    efficace</strong> avec l'équipe.`,
    selfCriticism: `Mon autonomie est un point fort, mais je dois parfois mieux <strong>communiquer
    mon avancement</strong> et demander de l'aide plus tôt lorsque je rencontre des blocages.`,
    evolutionAxes: `Améliorer ma capacité à <strong>identifier les moments</strong> où il est plus efficace
    de collaborer que de chercher seul, et développer une meilleure <strong>communication proactive</strong>
    sur l'état d'avancement de mes tâches.`
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