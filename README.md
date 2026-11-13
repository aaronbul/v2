# Portfolio v2

**English** | [Français](README.fr.md)

My personal portfolio, live at [portfolio.bulgheroni.me](https://portfolio.bulgheroni.me).

This is the second version (hence the repo name). The [first one](https://github.com/aaronbul/v1),
built back in 2021 with plain HTML/Sass/JS, was starting to look pretty dated, so I rebuilt
everything from scratch and used it as an excuse to learn React + TypeScript on a real project.

You'll find my background, my projects (work and school), the tech I use and a contact form.

## Stack

- React 18 + TypeScript, with Vite
- Tailwind for styling
- Formik + Yup for the contact form
- A small Express server (`server.js`) that sends the contact form emails through Resend

## Running it locally

```bash
npm install
npm run dev
```

If you want the contact form to work, you also need to run the server alongside it:

```bash
cp .env.example .env   # then fill in the Resend key and the email address
npm start
```

The site still runs without the `.env`, only the email sending will fail.

## Deployment

Every push to `main` triggers a GitHub Action that builds the site and uploads it to my
IONOS hosting over FTP (and to GitHub Pages while it's at it). The Express server for the
emails runs on Heroku.

## Things I'd still like to do

- Translate the site into English (or at least make it bilingual)
- Add some tests, there aren't any yet...
- Rework the project descriptions, some of them are a bit long

If you spot a bug or something weird, feel free to reach out through the contact form on the site.
