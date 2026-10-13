# Smit Patel — Portfolio

A React + Vite portfolio site, Diwali-themed (deep maroon/gold), built from
`Smit's resume content. Ready to deploy on Vercel as-is.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy on Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects Vite — framework preset "Vite", build command
   `npm run build`, output directory `dist`. Just click **Deploy**.

**Option B — via Vercel CLI**
```bash
npm i -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # deploy to production
```

## Editing content

Almost everything you'll want to change lives in one file:
`src/data/content.js` — stats, skills, projects (incl. GitHub links),
education, and certifications. Edit the arrays there and the page updates
automatically; no need to touch the components.

Two projects still need GitHub links — once you have them, add a `github`
value to the matching entry in `content.js`.

Your resume PDF lives at `public/resume.pdf` — replace that file (keep the
same name) to update what the "Download resume" button serves.

## Structure

```
src/
  components/   one component per section (Hero, About, Skills, Projects, ...)
  data/content.js   all editable content
  index.css     global styles + the Diwali color tokens (:root)
  App.jsx       page assembly + scroll/theme/active-nav logic
public/
  resume.pdf    downloadable resume
```
