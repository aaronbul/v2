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

export interface Skill {
  name: string;
  logo: string;
  experience: number;
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    logo: html,
    experience: 5
  },
  {
    name: 'CSS',
    logo: css,
    experience: 5
  },
  {
    name: 'JavaScript',
    logo: javascript,
    experience: 5
  },  
  {
    name: 'TypeScript',
    logo: typescript,
    experience: 3
  },
  {
    name: 'Angular',
    logo: angular,
    experience: 2
  },
  {
    name: 'React',
    logo: react,
    experience: 3
  },
  {
    name: 'Tailwind',
    logo: tailwind,
    experience: 1
  },
  {
    name: 'Bootstrap',
    logo: bootstrap,
    experience: 5
  },
  {
    name: 'Docker',
    logo: docker,
    experience: 3
  },
  {
    name: 'Kubernetes',
    logo: kubernetes,
    experience: 1
  },
  {
    name: 'GitHub',
    logo: github,
    experience: 5
  },
  {
    name: 'GitLab',
    logo: gitlab,
    experience: 5
  },
  {
    name: 'Figma',
    logo: figma,
    experience: 3
  },
  {
    name: 'Java',
    logo: java,
    experience: 4
  },
  {
    name: 'Kotlin',
    logo: kotlin,
    experience: 1
  },
  {
    name: 'Prolog',
    logo: prolog,
    experience: 3
  },
  {
    name: 'C#',
    logo: csharp,
    experience: 1
  },
  {
    name: 'MongoDB',
    logo: mongodb,
    experience: 3
  },
  {
    name: 'MySQL',
    logo: mysql,
    experience: 5
  },
  {
    name: 'Node.js',
    logo: node,
    experience: 4
  },
  {
    name: 'Spring',
    logo: spring,
    experience: 2
  },
  {
    name: 'PHP',
    logo: php,
    experience: 4
  },
  {
    name: 'PrestaShop',
    logo: prestashop,
    experience: 2
  },
  {
    name: 'Python',
    logo: python,
    experience: 3
  },
  {
    name: 'Sass',
    logo: sass,
    experience: 2
  },
  {
    name: 'WordPress',
    logo: wordpress,
    experience: 2
  },
]; 