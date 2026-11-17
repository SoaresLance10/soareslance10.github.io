# Lance Soares - Portfolio

Personal portfolio site, live at https://soareslance10.github.io.

Built with Vite, React, Motion and react-three-fiber.

## Develop

```bash
npm install
cp .env.example .env   # fill in EmailJS values for the contact form
npm run dev
```

`npm run lint` and `npm run build` run in CI on every push and pull request.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Build output is never committed.

The contact form needs repository secrets `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID` and `VITE_PUBLIC_KEY` (Settings -> Secrets and variables -> Actions).
