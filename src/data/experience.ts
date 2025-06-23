import cegedim from "../assets/experiences/logo-cegedim-business-service.svg";
import iscod from "../assets/experiences/logo-iscod.svg";
import marguerite from "../assets/experiences/logo-lycee-ste-marguerite-sfda.png";
import lft from "../assets/experiences/logo-lycee-francais-de-tananarive-large.jpg";
import placeholder from "../assets/skills/skills.svg";

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  logo?: string;
  aboutCompany?: string;
  skills?: string[];
  status?: string;
  website?: string;
  responsibility?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Baccalauréat STMG Gestion et Finance",
    company: "Lycée Français de Tananarive",
    period: "2015 - 2018",
    description: [
      "Candidat au Baccalauréat Science et Technologie du management et de la gestion option Gestion et Finance. Obtention du diplôme en juin 2018."
    ],
    logo: lft,
    status: "Formation",
    aboutCompany: "Le Lycée Français de Tananarive (LFT) est un établissement scolaire français situé à Antananarivo, Madagascar. Fondé en 1951, il fait partie du réseau de l'Agence pour l'enseignement français à l'étranger (AEFE). L'établissement accueille plus de 1 200 élèves de la maternelle à la terminale et propose un enseignement conforme aux programmes français, préparant aux diplômes du baccalauréat français.",
    website: "https://www.egd.mg/"
  },
  {
    id: "2",
    title: "BTS SIO SLAM",
    company: "Lycée Sainte Marguerite",
    period: "2018 - 2020",
    description: [
      "Candidat au BTS Services informatiques aux organisations, option B Solutions logicielles et applications métiers, obtenu en juillet 2021."
    ],
    logo: marguerite,
    status: "Formation",
    skills: ["PHP", "SQL", "C#", "JavaScript", "HTML", "CSS", "Sass", "GitHub", "GitLab", "Bootstrap", "Curiosité", "Autonomie", "Organisation", "Esprit d'équipe", "Adaptabilité"],
    aboutCompany: "Le Lycée Sainte Marguerite de Chambray-lès-Tours est un établissement privé catholique situé dans l'agglomération tourangelle. L'établissement propose des formations du collège au BTS dans un cadre éducatif basé sur les valeurs chrétiennes. Il est reconnu pour la qualité de son enseignement et son accompagnement personnalisé des élèves, notamment dans les filières technologiques et professionnelles.",
    website: "https://www.sfda37.fr/etablissements-lycee-ste-marguerite/"
  },
  {
    id: "3",
    title: "Développeur web",
    company: "Borial",
    period: "Mai - Juin 2019",
    description: [
      "Participation à l'élaboration d'un site vitrine et création deux sites e-commerce, l'un avec PrestaShop et l'autre avec WordPress."
    ],
    logo: placeholder,
    status: "Stage",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "PrestaShop", "WordPress", "Curiosité", "Autonomie", "Organisation", "Esprit d'équipe", "Adaptabilité"],
    aboutCompany: "Borial est une agence web spécialisée dans la création de sites internet et le développement d'applications web. L'entreprise propose des services complets incluant la conception, le développement, l'hébergement et la maintenance de sites web pour les PME et les collectivités locales.",
    website: "https://www.borial.fr",
    responsibility: "Création de sites e-commerce avec PrestaShop et WordPress"
  },
  {
    id: "4",
    title: "Développeur web",
    company: "Cfocop",
    period: "Mars - Avril 2020",
    description: [
      "Réalisation de l'audit d'un site web, comparaison de différents hébergeurs et participation à l'administration d'un site WordPress."
    ],
    logo: placeholder,
    status: "Stage",
    skills: ["WordPress", "Curiosité", "Autonomie", "Organisation", "Adaptabilité"],
    aboutCompany: "Cfocop est un organisme de formation professionnelle spécialisé dans les métiers du numérique et de l'informatique. L'entreprise propose des formations qualifiantes et certifiantes pour adultes, notamment dans les domaines du développement web, de la bureautique et des nouvelles technologies.",
    website: "https://www.cfocop.fr",
    responsibility: "Maintenance et mise à jour d'un site WordPress"
  },
  {
    id: "5",
    title: "Bachelor Concepteur développeur d'application",
    company: "Iscod",
    period: "2022 - 2023",
    description: [
      "Candidat au Bachelor Concepteur développeur d'application. Obtention du diplôme en août 2023."
    ],
    logo: iscod,
    status: "Formation",
    skills: ["Java", "MongoDB", "SQL", "GitHub", "GitLab", "Docker", "React", "TypeScript", "Node.js", "Curiosité", "Autonomie", "Organisation", "Esprit d'équipe", "Adaptabilité"],
    aboutCompany: "ISCOD est une école de commerce en ligne spécialisée dans les formations 100 % en alternance et à distance. Elle propose des cursus diplômants reconnus par l'État, du Bac+3 au Bac+5, dans les domaines du numérique, du développement web, du marketing digital, des RH, de la communication, et de la gestion. L'approche pédagogique est axée sur la flexibilité, la professionnalisation et l'accompagnement personnalisé des apprenants tout au long de leur parcours.",
    website: "https://www.iscod.fr"
  },
  {
    id: "6",
    title: "Ingénieur développement",
    company: "Cegedim",
    period: "2022 - Aujourd'hui",
    description: [
      "Analyse et conception d'évolutions pour un logiciel SIRH. Développement de fonctionnalités clés (exports, gestion des aptitudes/rémunérations, fermeture de collaborateurs) et optimisation des performances (PL/SQL, Oracle)."
    ],
    logo: cegedim,
    status: "Alternance",
    skills: ["SQL", "Prolog", "Autonomie", "Curiosité", "Esprit d'équipe", "Organisation", "Adaptabilité"],
    aboutCompany: "Cegedim est un groupe français leader dans les technologies de santé et les logiciels de gestion RH. Fondé en 1969, l'entreprise développe des solutions innovantes pour les professionnels de santé, les laboratoires pharmaceutiques et les services RH. Cegedim Business Services, spécialisé dans les solutions SIRH, accompagne plus de 10 000 entreprises dans la gestion de leurs ressources humaines.",
    website: "https://www.cegedim.com",
    responsibility: "Intégration de nouvelles fonctionnalités sur le logiciel SIRH"
  },
  {
    id: "7",
    title: "Mastère Expert en Ingénierie Logicielle",
    company: "Iscod",
    period: "2023 - Aujourd'hui",
    description: [
      "Candidat au Mastère Expert en Ingénierie Logicielle."
    ],
    logo: iscod,
    status: "Formation",
    skills: ["Angular", "React", "TypeScript", "Tailwind", "Figma", "Node.js", "Java", "Spring", "Kotlin", "Docker", "Kubernetes", "GitLab", "GitHub", "Curiosité", "Autonomie", "Organisation", "Esprit d'équipe", "Adaptabilité"],
    aboutCompany: "ISCOD est une école de commerce en ligne spécialisée dans les formations 100 % en alternance et à distance. Elle propose des cursus diplômants reconnus par l'État, du Bac+3 au Bac+5, dans les domaines du numérique, du développement web, du marketing digital, des RH, de la communication, et de la gestion. L'approche pédagogique est axée sur la flexibilité, la professionnalisation et l'accompagnement personnalisé des apprenants tout au long de leur parcours.",
    website: "https://www.iscod.fr"
  },
]; 