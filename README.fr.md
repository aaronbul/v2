# Portfolio v2

[English](README.md) | **Français**

Mon portfolio perso, en ligne sur [portfolio.bulgheroni.me](https://portfolio.bulgheroni.me).

C'est la deuxième version (d'où le nom du repo). La [première](https://github.com/aaronbul/v1),
faite en 2021 en HTML/Sass/JS, commençait sérieusement à dater, donc j'ai tout repris de zéro
et j'en ai profité pour apprendre React + TypeScript sur un vrai projet.

On y trouve mon parcours, mes projets (pro et scolaires), les techno que j'utilise et un
formulaire de contact.

## Stack

- React 18 + TypeScript, avec Vite
- Tailwind pour le style
- Formik + Yup pour le formulaire de contact
- Un petit serveur Express (`server.js`) qui envoie les mails du formulaire via Resend

## Lancer le projet en local

```bash
npm install
npm run dev
```

Pour que le formulaire de contact marche, il faut aussi lancer le serveur à côté :

```bash
cp .env.example .env   # puis remplir la clé Resend et l'adresse mail
npm start
```

Sans le `.env` le site tourne quand même, c'est juste l'envoi de mail qui plante.

## Déploiement

À chaque push sur `main`, une GitHub Action build le site et le pousse sur mon hébergement
IONOS en FTP (et sur GitHub Pages au passage). Le serveur Express pour les mails, lui, tourne
sur Heroku.

## Ce que je voudrais encore faire

- Passer le site en anglais (ou au moins le proposer en deux langues)
- Ajouter quelques tests, il n'y en a aucun pour l'instant...
- Retravailler les textes des projets, certains sont un peu longs

Si vous voyez un bug ou un truc bizarre, n'hésitez pas à m'écrire via le formulaire du site.
