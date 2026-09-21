# Kavinesh Kumar — Portfolio

A personal portfolio site built with **Angular 18** (standalone components) and **PrimeNG 18**,
featuring a bespoke navy + gold theme, scroll-reveal animations, and content pulled from my resume:
experience, projects, skills, Microsoft certifications and achievements.

## Stack

- Angular 18 (standalone components, no NgModules)
- PrimeNG 18 + PrimeIcons (Aura theme, customized with a navy/gold preset)
- SCSS with CSS custom properties for theming

## Getting started

```bash
npm install
npm start        # http://localhost:4200
```

## Build

```bash
npm run build     # outputs to dist/portfolio/browser
```

## Deploy to GitHub Pages

This repo is wired up with [`angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages).

```bash
npm run deploy
```

That builds the app for production and pushes `dist/portfolio/browser` to the `gh-pages` branch of
this repository. Then in the repo's **Settings → Pages**, set the source to the `gh-pages` branch.

If you're deploying from a project page (`https://<user>.github.io/<repo>/`), keep the
`--base-href=/<repo>/` flag in the `deploy` script in `package.json` in sync with your repo name.

## Project structure

```
src/app/
  components/     Section components (hero, about, experience, projects, skills, certifications,
                   achievements, contact, footer, navbar)
  data/           Single source of truth for all portfolio content
  directives/     Scroll-reveal directive
```

## Content sources

Résumé content was summarized from the author's own resume and Microsoft Learn transcript. The
Microsoft certifications transcript PDF and resume PDF are available for direct download from the
site itself (Certifications and Navbar sections).
