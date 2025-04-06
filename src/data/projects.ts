import old_portfolio from "../assets/projects/portfolio-capture.png";
import haddock from "../assets/projects/haddock-capture.png";
import new_portfolio from "../assets/projects/new-portfolio-capture.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  link?: string;
  codeLink?: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Haddock",
    description: "Site web sur les jurons du Capitaine Haddock de Tintin",
    longDescription: "Durant mon cursus de BTS SIO, j'ai développé un site web interactif dédié aux célèbres jurons du Capitaine Haddock de la série Tintin. Ce projet m'a permis de mettre en pratique mes compétences en développement web en créant une base de données MySQL pour stocker les jurons et leurs contextes, une interface utilisateur responsive avec Bootstrap, et un backend en PHP pour gérer les requêtes. Les utilisateurs peuvent parcourir la collection de jurons, effectuer des recherches, et même contribuer en suggérant de nouveaux jurons avec leur contexte d'apparition dans les albums. J'ai également implémenté un système d'authentification pour la modération du contenu.",
    imageUrl: haddock,
    codeLink: "https://github.com/aaronbul/Haddock",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]
  },
  {
    id: "2",
    title: "Portfolio 2021",
    description: "Mon premier portfolio développé avec HTML, CSS et JavaScript",
    longDescription: "Mon premier portfolio est un projet qui m'a permis de me lancer dans le développement web. J'ai créé une interface simple et responsive en utilisant uniquement HTML, CSS et JavaScript natif. Le site présente mes projets et compétences de manière claire et efficace, me permettant d'acquérir les bases fondamentales du développement web front-end.",
    imageUrl: old_portfolio,
    link: "https://aaronbul.github.io/v1/",
    codeLink: "https://github.com/aaronbul/v1",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "3",
    title: "Portfolio 2025",
    description: "Une refonte de mon portfolio avec React et Tailwind CSS",
    longDescription: "Il s'agit de mon deuxième site personnel et de ma première incursion dans le développement avec React. J'ai créé une interface moderne et responsive en utilisant Tailwind CSS, avec des animations fluides et une navigation intuitive. Le site présente mes projets et compétences de manière élégante.",
    imageUrl: new_portfolio,
    link: "https://portfolio.bulgheroni.tech",
    codeLink: "https://github.com/aaronbul/v2",
    technologies: ["React", "Tailwind", "TypeScript"]
  },
];