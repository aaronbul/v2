import old_portfolio from "../assets/projects/portfolio-capture.png";
import haddock from "../assets/projects/haddock-capture.png";
import new_portfolio from "../assets/projects/new-portfolio-capture.png";
import other from "../assets/projects/other-capture.jpg";

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
    id: `1`,
    title: `Haddock`,
    description: `Site web sur les jurons du Capitaine Haddock de Tintin`,
    longDescription: `Durant mon cursus de BTS SIO, j'ai développé un site web interactif dédié aux 
    célèbres jurons du Capitaine Haddock de la série Tintin. \n

    En tant que développeur unique sur ce projet, j'ai travaillé en étroite collaboration avec mes 
    professeurs qui m'ont guidé dans la validation des fonctionnalités. Le projet visait principalement 
    les fans de Tintin. \n

    Le développement s'est déroulé en plusieurs phases. J'ai commencé par une analyse approfondie des 
    besoins et la conception d'une base de données MySQL robuste. Ensuite, j'ai développé l'interface 
    utilisateur avec Bootstrap, en veillant à la rendre responsive et intuitive. L'implémentation du 
    backend en PHP a suivi, permettant de gérer efficacement les requêtes et les interactions utilisateurs. 
    J'ai également mis en place un système d'authentification pour assurer une modération efficace du contenu. \n

    Le résultat final est une plateforme complète qui préserve et partage le patrimoine culturel de 
    Tintin. Le site permet aux utilisateurs de parcourir une base de données exhaustive des jurons, 
    d'effectuer des recherches précises et même de contribuer en suggérant de nouveaux jurons avec leur 
    contexte d'apparition dans les albums. \n

    Ce projet a été particulièrement enrichissant sur le plan technique, me permettant de maîtriser PHP, 
    MySQL, Bootstrap et JavaScript. J'ai également développé des soft skills essentiels comme l'autonomie, 
    la gestion de projet, la communication avec les parties prenantes et la capacité à documenter efficacement mon travail.`,
    imageUrl: haddock,
    codeLink: `https://github.com/aaronbul/Haddock`,
    technologies: [`PHP`, `SQL`, `JavaScript`, `Bootstrap`, `HTML`, `CSS`, `GitHub`, `Esprit d'équipe`, `Autonomie`, `Organisation`]
  },
  {
    id: `2`,
    title: `Portfolio 2021`,
    description: `Mon premier portfolio développé avec HTML, CSS et JavaScript`,
    longDescription: `Mon premier portfolio est un projet qui m'a permis de me lancer dans le 
    développement web. \n

    Bien que ce soit un projet personnel, j'ai bénéficié du mentorat précieux de développeurs 
    expérimentés de la communauté qui m'ont guidé dans mes choix techniques et m'ont aidé à 
    structurer mon approche. \n

    Le processus de développement a débuté par une phase d'apprentissage intensive des fondamentaux 
    du web. J'ai ensuite conçu l'interface utilisateur en me concentrant sur la simplicité et 
    l'efficacité. Le développement des composants s'est fait de manière progressive, en utilisant 
    uniquement HTML, CSS et JavaScript natif. Une attention particulière a été portée à l'optimisation 
    pour différents appareils avant le déploiement final sur GitHub Pages. \n

    Cette première expérience m'a permis d'établir une présence professionnelle en ligne tout en 
    servant de vitrine pour mes compétences techniques. Le site est devenu une base solide pour 
    mes futurs développements et une démonstration concrète de mes capacités. \n

    Ce projet m'a permis de développer des soft skills comme la curiosité, l'autonomie, la capacité à 
    apprendre par moi-même, ainsi que le sens du détail et de l'organisation dans la gestion de mon travail.`,
    imageUrl: old_portfolio,
    link: `https://aaronbul.github.io/v1/`,
    codeLink: `https://github.com/aaronbul/v1`,
    technologies: [`JavaScript`, `HTML`, `CSS`, `GitHub`, `Sass`, `Curiosité`, `Autonomie`, `Organisation`]
  },
  {
    id: `3`,
    title: `Portfolio 2025`,
    description: `Une refonte de mon portfolio avec React et Tailwind CSS`,
    longDescription: `Il s'agit de mon deuxième site personnel et de ma première incursion dans le 
    développement avec React. \n

    Ce projet, bien que personnel, a bénéficié d'une approche collaborative enrichissante. J'ai 
    travaillé aux côtés de designers UI/UX pour affiner l'expérience utilisateur, et la communauté 
    de développeurs m'a fourni des retours précieux tout au long du développement. \n

    Le processus a débuté par une phase de conception minutieuse sur Figma, suivie par la mise en 
    place d'une architecture React/TypeScript robuste. J'ai accordé une attention particulière au 
    développement de composants réutilisables et à l'intégration d'animations fluides. J'ai également 
    appris de manière autonome à utiliser Tailwind CSS afin de moderniser l'interface et d'optimiser 
    le développement du site. L'optimisation des performances a été une priorité constante, notamment 
    à travers l'implémentation du lazy loading et du code splitting. \n

    L'application finale se distingue par son interface moderne et performante, offrant une 
    expérience utilisateur fluide et intuitive. Le système de filtrage des projets et le blog 
    technique intégré permettent une présentation dynamique de mon travail et le partage de mes 
    connaissances avec la communauté. \n

    Ce projet représente une vitrine technique de mes compétences React et sert de plateforme 
    évolutive pour partager mon expertise. En plus des compétences techniques, j'ai renforcé 
    des soft skills comme la collaboration, l'esprit critique, la gestion du temps, la créativité 
    et la capacité à intégrer des retours pour améliorer continuellement le produit.`,
    imageUrl: new_portfolio,
    link: `https://portfolio.bulgheroni.tech`,
    codeLink: `https://github.com/aaronbul/v2`,
    technologies: [`React`, `TypeScript`, `Tailwind`, `Node.js`, `JavaScript`, `HTML`, `CSS`, `GitHub`, `Figma`, `Curiosité`, `Autonomie`, `Organisation`]
  },
  {
    id: `4`,
    title: `Export Analytique`,
    description: `Mise en place et maintien d'une fonctionnalité d'export analytique pour un progiciel SIRH`,
    longDescription: `Dans le cadre de ce projet, j'ai développé et maintenu une fonctionnalité d'export analytique 
    permettant aux utilisateurs d'exporter des données spécifiques au format CSV. Cette fonctionnalité 
    s'intègre dans un progiciel SIRH complet, offrant de nombreuses autres fonctionnalités de gestion 
    des ressources humaines. \n

    La solution propose deux approches complémentaires pour l'export des données. D'une part, 
    une interface graphique développée en Prolog offre une expérience utilisateur intuitive. 
    D'autre part, un système d'export par fichier batch permet d'automatiser les opérations 
    récurrentes. \n

    Les données sont extraites d'une base de données Oracle (PL/SQL), garantissant ainsi une 
    fiabilité et une performance optimales pour le traitement des données. \n

    Ce projet m'a permis de développer des compétences essentielles en matière d'organisation 
    et d'adaptabilité, notamment pour répondre aux besoins spécifiques et évolutifs des utilisateurs. 
    La collaboration étroite avec l'équipe de développement et les utilisateurs finaux a également 
    renforcé mon esprit d'équipe et ma capacité à travailler dans un environnement collaboratif. \n

    Pour des raisons de confidentialité liées à la nature sensible des données SIRH, je ne peux 
    pas détailler davantage les aspects techniques et fonctionnels de cette implémentation.`,
    imageUrl: other,
    technologies: [`Prolog`, `SQL`, `Adaptabilité`, `Esprit d'équipe`, `Organisation`]
  },
  {
    id: `5`,
    title: `Ajout d'aptitude`,
    description: `Mise en place et maintien d'une fonctionnalité de gestion d'aptitude pour un progiciel SIRH`,
    longDescription: `Dans le cadre de ce projet, j'ai développé et maintenu une fonctionnalité de gestion 
    d'aptitude pour un progiciel SIRH. Cette fonctionnalité s'intègre dans un système plus large 
    de gestion des ressources humaines. \n

    La solution comprend deux interfaces distinctes développées en Prolog. La première interface 
    permet de créer et de gérer de nouvelles aptitudes pour l'année N+1, offrant ainsi une 
    planification anticipée des compétences requises. La seconde interface est dédiée à la 
    gestion des rémunérations associées à ces aptitudes, permettant une configuration précise 
    des aspects financiers. \n

    Ce projet m'a permis de renforcer mes compétences en développement Prolog et de développer 
    une compréhension approfondie des processus de gestion des aptitudes dans un contexte SIRH. 
    La collaboration étroite avec le testeur a renforcé mon esprit d'équipe, tandis que j'ai 
    développé mes compétences en organisation en structurant efficacement mon travail et en 
    gérant mes priorités pour respecter les délais. \n

    Pour des raisons de confidentialité liées à la nature sensible des données SIRH et des 
    informations de rémunération, je ne peux pas détailler davantage les aspects techniques 
    et fonctionnels de cette implémentation.`,
    imageUrl: other,
    technologies: [`Prolog`, `Esprit d'équipe`, `Organisation`]
  },
  {
    id: `6`,
    title: `Fermeture de collaborateur`,
    description: `Mise en place et maintien d'une fonctionnalité de fermeture de collaborateur pour un progiciel SIRH`,
    longDescription: `Dans le cadre de ce projet, j'ai développé et maintenu une fonctionnalité de fermeture 
    de collaborateur pour un progiciel SIRH. Cette fonctionnalité s'intègre dans un système plus 
    large de gestion des ressources humaines. \n

    La solution consiste en l'ajout d'un bouton sur une fenêtre existante, permettant de clôturer 
    le contrat d'un collaborateur selon des contraintes spécifiques définies par l'utilisateur. 
    Le système effectue des vérifications approfondies avant la clôture, et si les contraintes 
    ne sont pas respectées, la clôture est empêchée. Des alertes spécifiques sont générées selon 
    les différents cas de figure rencontrés. L'ensemble de cette logique a été développée en Prolog. \n

    Ce projet a été particulièrement enrichissant sur le plan personnel. Il m'a permis de développer 
    mon autonomie et ma curiosité, notamment à travers l'apprentissage de Prolog que j'ai réalisé 
    en parallèle du développement. La collaboration étroite avec le testeur a renforcé mon esprit 
    d'équipe, tandis que la complexité du projet m'a amené à développer mes compétences en 
    organisation pour gérer efficacement les différentes phases de développement. \n

    Pour des raisons de confidentialité liées à la nature sensible des données SIRH et des 
    informations relatives aux collaborateurs, je ne peux pas détailler davantage les aspects 
    techniques et fonctionnels de cette implémentation.`,
    imageUrl: other,
    technologies: [`Prolog`, `SQL`, `Autonomie`, `Curiosité`, `Esprit d'équipe`, `Organisation`]
  }
];