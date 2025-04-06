import angular from "../assets/skills/angular.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import github from "../assets/skills/github.svg";
import java from "../assets/skills/java.svg";
import mongodb from "../assets/skills/mongodb.svg";
import mysql from "../assets/skills/mysql.svg";
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
    name: 'HTML',
    logo: html,
    experience: 5,
    description: "Je maîtrise le HTML5 et ses fonctionnalités avancées, notamment les sémantiques, les formulaires, et l'intégration multimédia. Je suis également familier avec les bonnes pratiques d'accessibilité et de SEO.",
    officialDescription: "HTML (HyperText Markup Language) est le langage de balisage standard pour créer des pages web. Il décrit la structure du contenu web et permet d'organiser le contenu en sections, paragraphes, listes, liens, images et autres éléments.",
    officialWebsite: "https://developer.mozilla.org/fr/docs/Web/HTML",
    examples: [
      {
        title: "Haddock",
        description: "Site web sur les jurons du Capitaine Haddock avec une structure HTML5 sémantique",
        link: "https://github.com/aaronbul/Haddock"
      },
      {
        title: "Portfolio 2021",
        description: "Développement d'un portfolio responsive avec HTML5",
        link: "https://github.com/aaronbul/v1"
      },
      {
        title: "Portfolio 2025",
        description: "Création d'un portfolio moderne avec React et HTML5",
        link: "https://github.com/aaronbul/v1"
      }
    ]
  },
  {
    name: 'CSS',
    logo: css,
    experience: 5,
    description: "Expert en CSS3 avec une solide expérience en animations, transitions, et design responsive. Je maîtrise également les préprocesseurs CSS comme Sass et les frameworks comme Tailwind CSS.",
    officialDescription: "CSS (Cascading Style Sheets) est un langage de feuille de style utilisé pour décrire la présentation d'un document HTML. Il permet de contrôler la mise en page, les couleurs, les polices, les animations et d'autres aspects visuels.",
    officialWebsite: "https://developer.mozilla.org/fr/docs/Web/CSS",
    examples: [
      {
        title: "Haddock",
        description: "Création d'une interface responsive avec CSS vanilla",
        link: "https://github.com/aaronbul/Haddock"
      },
      {
        title: "Portfolio 2021",
        description: "Développement d'un portfolio avec CSS personnalisé",
        link: "https://github.com/aaronbul/v1"
      }
    ]
  },
  {
    name: 'JavaScript',
    logo: javascript,
    experience: 5,
    description: "Développement JavaScript moderne avec une expertise en ES6+, programmation asynchrone, et manipulation du DOM. Je suis également familier avec les frameworks modernes comme React et Angular.",
    officialDescription: "JavaScript est un langage de programmation dynamique qui permet d'ajouter des fonctionnalités interactives aux pages web. Il est l'un des trois langages fondamentaux du web, aux côtés de HTML et CSS.",
    officialWebsite: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    examples: [
      {
        title: "Haddock",
        description: "Développement d'une interface interactive pour la gestion des jurons",
        link: "https://github.com/aaronbul/Haddock"
      },
      {
        title: "Portfolio 2021",
        description: "Création d'animations et d'interactions avec JavaScript vanilla",
        link: "https://github.com/aaronbul/v1"
      }
    ]
  },  
  {
    name: 'TypeScript',
    logo: typescript,
    experience: 3,
    description: "Développement d'applications TypeScript avec typage statique et interfaces. Je maîtrise les fonctionnalités avancées comme les génériques et les décorateurs.",
    officialDescription: "TypeScript est un sur-ensemble typé de JavaScript qui se compile en JavaScript. Il ajoute des types statiques optionnels, des classes, des modules et d'autres fonctionnalités à JavaScript.",
    officialWebsite: "https://www.typescriptlang.org/fr/",
    examples: [
      {
        title: "Portfolio 2025",
        description: "Développement d'un portfolio moderne avec TypeScript et React",
        link: "https://github.com/aaronbul/v1"
      }
    ]
  },
  {
    name: 'Angular',
    logo: angular,
    experience: 2,
    description: "Développement d'applications Angular avec les dernières versions, incluant les composants, les services, et la gestion d'état.",
    officialDescription: "Angular est une plateforme et un framework pour créer des applications web à page unique (SPA) en utilisant HTML et TypeScript.",
    officialWebsite: "https://angular.io/",
    examples: [
      {
        title: "Application de Gestion",
        description: "Création d'une application de gestion avec Angular et Material Design"
      }
    ]
  },
  {
    name: 'React',
    logo: react,
    experience: 3,
    description: "Développement d'applications React modernes avec hooks, context API, et gestion d'état. Je suis également familier avec Next.js et les bonnes pratiques de performance.",
    officialDescription: "React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Elle permet de créer des applications web complexes en composants réutilisables et gère efficacement le rendu et les mises à jour de l'interface.",
    officialWebsite: "https://fr.reactjs.org/",
    examples: [
      {
        title: "Portfolio 2025",
        description: "Développement d'un portfolio moderne avec React et TypeScript",
        link: "https://github.com/aaronbul/v1"
      }
    ]
  },
  {
    name: 'Tailwind',
    logo: tailwind,
    experience: 1,
    description: "Utilisation de Tailwind CSS pour créer des interfaces modernes et responsives avec une approche utility-first.",
    officialDescription: "Tailwind CSS est un framework CSS utility-first qui permet de construire rapidement des designs personnalisés sans quitter votre HTML.",
    officialWebsite: "https://tailwindcss.com/",
    examples: [
      {
        title: "Portfolio 2025",
        description: "Création d'une interface moderne avec Tailwind CSS",
        link: "https://github.com/aaronbul/v1"
      }
    ]
  },
  {
    name: 'Bootstrap',
    logo: bootstrap,
    experience: 5,
    description: "Expert en Bootstrap avec une solide expérience dans la création d'interfaces responsives et l'utilisation des composants avancés.",
    officialDescription: "Bootstrap est un framework CSS open-source qui facilite le développement de sites web responsifs et mobiles-first.",
    officialWebsite: "https://getbootstrap.com/",
    examples: [
      {
        title: "Haddock",
        description: "Développement d'une interface responsive avec Bootstrap",
        link: "https://github.com/aaronbul/Haddock"
      }
    ]
  },
  {
    name: 'Docker',
    logo: docker,
    experience: 3,
    description: "Création et gestion de conteneurs Docker pour le développement et le déploiement d'applications.",
    officialDescription: "Docker est une plateforme de conteneurisation qui permet d'empaqueter une application et ses dépendances dans un conteneur isolé.",
    officialWebsite: "https://www.docker.com/",
    examples: [
      {
        title: "Microservices",
        description: "Mise en place d'une architecture microservices avec Docker"
      }
    ]
  },
  {
    name: 'Kubernetes',
    logo: kubernetes,
    experience: 1,
    description: "Gestion de clusters Kubernetes pour l'orchestration de conteneurs et le déploiement d'applications.",
    officialDescription: "Kubernetes est un système d'orchestration de conteneurs open-source qui automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées.",
    officialWebsite: "https://kubernetes.io/fr/",
    examples: [
      {
        title: "Cluster de Production",
        description: "Configuration d'un cluster Kubernetes pour le déploiement d'applications"
      }
    ]
  },
  {
    name: 'GitHub',
    logo: github,
    experience: 5,
    description: "Utilisation intensive de GitHub pour la gestion de versions, la collaboration et l'intégration continue.",
    officialDescription: "GitHub est une plateforme de développement qui permet de collaborer sur des projets de code source en utilisant Git.",
    officialWebsite: "https://github.com/",
    examples: [
      {
        title: "Gestion de Projet",
        description: "Gestion de projets collaboratifs avec GitHub"
      }
    ]
  },
  {
    name: 'GitLab',
    logo: gitlab,
    experience: 5,
    description: "Utilisation de GitLab pour la gestion de versions, CI/CD et la collaboration d'équipe.",
    officialDescription: "GitLab est une plateforme DevOps complète qui fournit des outils de gestion de code source, CI/CD, et collaboration.",
    officialWebsite: "https://about.gitlab.com/",
    examples: [
      {
        title: "Pipeline CI/CD",
        description: "Mise en place de pipelines CI/CD avec GitLab"
      }
    ]
  },
  {
    name: 'Figma',
    logo: figma,
    experience: 3,
    description: "Création de maquettes et de prototypes interactifs avec Figma pour le design d'interfaces.",
    officialDescription: "Figma est un outil de design collaboratif basé sur le web qui permet de créer des interfaces utilisateur et des prototypes.",
    officialWebsite: "https://www.figma.com/",
    examples: [
      {
        title: "Design System",
        description: "Création d'un design system complet avec Figma"
      }
    ]
  },
  {
    name: 'Java',
    logo: java,
    experience: 4,
    description: "Développement d'applications Java avec Spring Boot et les frameworks modernes.",
    officialDescription: "Java est un langage de programmation orienté objet qui permet de créer des applications multiplateformes.",
    officialWebsite: "https://www.oracle.com/java/",
    examples: [
      {
        title: "Application Backend",
        description: "Développement d'une application backend avec Java et Spring Boot"
      }
    ]
  },
  {
    name: 'Kotlin',
    logo: kotlin,
    experience: 1,
    description: "Développement d'applications Android et backend avec Kotlin.",
    officialDescription: "Kotlin est un langage de programmation moderne qui s'exécute sur la JVM et peut être compilé en JavaScript ou en code natif.",
    officialWebsite: "https://kotlinlang.org/",
    examples: [
      {
        title: "Application Android",
        description: "Développement d'une application Android avec Kotlin"
      }
    ]
  },
  {
    name: 'Prolog',
    logo: prolog,
    experience: 3,
    description: "Développement d'applications de logique et d'intelligence artificielle avec Prolog.",
    officialDescription: "Prolog est un langage de programmation logique utilisé principalement pour l'intelligence artificielle et le traitement du langage naturel.",
    officialWebsite: "https://www.swi-prolog.org/",
    examples: [
      {
        title: "Système Expert",
        description: "Création d'un système expert simple avec Prolog"
      }
    ]
  },
  {
    name: 'C#',
    logo: csharp,
    experience: 1,
    description: "Développement d'applications Windows et web avec C# et .NET.",
    officialDescription: "C# est un langage de programmation moderne, orienté objet et typé, conçu pour le développement d'applications sur la plateforme .NET.",
    officialWebsite: "https://learn.microsoft.com/fr-fr/dotnet/csharp/",
    examples: [
      {
        title: "Application Windows",
        description: "Développement d'une application Windows Forms avec C#"
      }
    ]
  },
  {
    name: 'MongoDB',
    logo: mongodb,
    experience: 3,
    description: "Utilisation de MongoDB pour le stockage de données NoSQL et la gestion de documents.",
    officialDescription: "MongoDB est une base de données NoSQL qui stocke les données sous forme de documents JSON.",
    officialWebsite: "https://www.mongodb.com/",
    examples: [
      {
        title: "API REST",
        description: "Création d'une API REST avec Node.js et MongoDB"
      }
    ]
  },
  {
    name: 'MySQL',
    logo: mysql,
    experience: 5,
    description: "Expert en MySQL avec une solide expérience dans la conception de bases de données et l'optimisation des performances.",
    officialDescription: "MySQL est un système de gestion de base de données relationnelle open-source.",
    officialWebsite: "https://www.mysql.com/",
    examples: [
      {
        title: "Haddock",
        description: "Conception et implémentation de la base de données pour le stockage des jurons",
        link: "https://github.com/aaronbul/Haddock"
      }
    ]
  },
  {
    name: 'Node.js',
    logo: node,
    experience: 4,
    description: "Développement backend avec Node.js, Express, et MongoDB. Je maîtrise également la création d'APIs RESTful et la gestion des microservices.",
    officialDescription: "Node.js est un environnement d'exécution JavaScript qui permet de créer des applications réseau évolutives.",
    officialWebsite: "https://nodejs.org/",
    examples: [
      {
        title: "API REST",
        description: "Développement d'une API REST complète avec authentification JWT et gestion des fichiers"
      }
    ]
  },
  {
    name: 'Spring',
    logo: spring,
    experience: 2,
    description: "Développement d'applications Java avec le framework Spring et ses différents modules.",
    officialDescription: "Spring est un framework Java populaire pour le développement d'applications d'entreprise.",
    officialWebsite: "https://spring.io/",
    examples: [
      {
        title: "Application Web",
        description: "Création d'une application web avec Spring Boot"
      }
    ]
  },
  {
    name: 'PHP',
    logo: php,
    experience: 4,
    description: "Développement d'applications web avec PHP et ses frameworks modernes comme Laravel et Symfony.",
    officialDescription: "PHP est un langage de script généraliste particulièrement adapté au développement web.",
    officialWebsite: "https://www.php.net/",
    examples: [
      {
        title: "Haddock",
        description: "Développement du backend avec PHP pour la gestion des jurons",
        link: "https://github.com/aaronbul/Haddock"
      }
    ]
  },
  {
    name: 'PrestaShop',
    logo: prestashop,
    experience: 2,
    description: "Développement de modules et de thèmes pour PrestaShop, ainsi que la personnalisation de boutiques en ligne.",
    officialDescription: "PrestaShop est une plateforme e-commerce open-source permettant de créer des boutiques en ligne.",
    officialWebsite: "https://www.prestashop.com/",
    examples: [
      {
        title: "Boutique en Ligne",
        description: "Création d'une boutique en ligne avec PrestaShop"
      }
    ]
  },
  {
    name: 'Python',
    logo: python,
    experience: 3,
    description: "Développement d'applications Python pour l'automatisation, l'analyse de données et le web.",
    officialDescription: "Python est un langage de programmation polyvalent, facile à apprendre et puissant.",
    officialWebsite: "https://www.python.org/",
    examples: [
      {
        title: "Script d'Automatisation",
        description: "Développement d'un script d'automatisation avec Python"
      }
    ]
  },
  {
    name: 'Sass',
    logo: sass,
    experience: 2,
    description: "Utilisation de Sass pour la création de styles CSS plus maintenables et modulaires.",
    officialDescription: "Sass est un préprocesseur CSS qui ajoute des fonctionnalités puissantes comme les variables, les imbrications et les mixins.",
    officialWebsite: "https://sass-lang.com/",
    examples: [
      {
        title: "Styles Avancés",
        description: "Création de styles CSS avancés avec Sass"
      }
    ]
  },
  {
    name: 'WordPress',
    logo: wordpress,
    experience: 2,
    description: "Développement de thèmes et de plugins WordPress, ainsi que la personnalisation de sites web.",
    officialDescription: "WordPress est un système de gestion de contenu (CMS) open-source utilisé pour créer des sites web.",
    officialWebsite: "https://wordpress.org/",
    examples: [
      {
        title: "Site Web",
        description: "Création d'un site web avec WordPress"
      }
    ]
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