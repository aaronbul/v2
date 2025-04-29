export interface Experience {
  titre: string;
  entreprise: string;
  periode: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    titre: "Baccalauréat STMG Gestion et Finance",
    entreprise: "Lycée Français de Tananarive",
    periode: "2015 - 2018",
    description: [
      "Candidat au Baccalauréat Science et Technologie du management et de la gestion option Gestion et Finance. Obtention du diplôme en juin 2018."
    ]
  },
  {
    titre: "BTS SIO SLAM",
    entreprise: "Lycée Sainte Marguerite",
    periode: "2018 - 2020",
    description: [
      "Candidat au BTS Services informatiques aux organisations, option B Solutions logicielles et applications métiers, obtenu en juillet 2021."
    ]
  },
  {
    titre: "Développeur web (Stage)",
    entreprise: "Borial",
    periode: "Mai - Juin 2019",
    description: [
      "Participation à l'élaboration d'un site vitrine et création deux sites e-commerce, l'un avec PrestaShop et l'autre avec WordPress."
    ]
  },
  {
    titre: "Développeur web (Stage)",
    entreprise: "Cfocop",
    periode: "Mars - Avril 2020",
    description: [
      "Réalisation de l'audit d'un site web, comparaison de différents hébergeurs et participation à l'administration d'un site WordPress."
    ]
  },
  {
    titre: "Bachelor Concepteur développeur d’application",
    entreprise: "Iscod",
    periode: "2022 - 2023",
    description: [
      "Candidat au Bachelor Concepteur développeur d’application. Obtention du diplôme en août 2023."
    ]
  },
  {
    titre: "Ingénieur développement (Alternance)",
    entreprise: "Cegedim",
    periode: "2022 - Aujourd'hui",
    description: [
      "Analyse et conception d'évolutions pour un logiciel SIRH. Développement de fonctionnalités clés (exports, gestion des aptitudes/rémunérations, fermeture de collaborateurs) et optimisation des performances (PL/SQL, Oracle)."
    ]
  },
  {
    titre: "Mastère Expert en Ingénierie Logicielle",
    entreprise: "Iscod",
    periode: "2023 - Aujourd'hui",
    description: [
      "Candidat au Mastère Expert en Ingénierie Logicielle."
    ]
  },
]; 