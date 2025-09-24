# Portfolio

A storytelling-driven personal portfolio for Avery Mitchell, built with React, Vite, Tailwind CSS, and Framer Motion. It blends
long-form narrative with measurable outcomes to highlight product, AI, and engineering leadership.

## Getting started

```bash
npm install
npm run dev
```

The development server defaults to [http://localhost:5173](http://localhost:5173). Use `npm run preview` after building if you
need to inspect the production bundle locally.

## Build for production

```bash
npm run build
```

The production-ready assets live in the `dist` directory.

## Deploying to Amazon S3

An automated GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and publishes the compiled assets to an
Amazon S3 bucket.

To enable deployments:

1. Create an S3 bucket (for example, `avery-portfolio`) and enable static website hosting.
2. Add the following GitHub repository secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
3. (Optional) Define `AWS_SESSION_TOKEN` if you use temporary credentials.
4. Add a repository variable or secret named `S3_BUCKET` that matches your bucket name.
5. (Optional) Add `AWS_ROLE_TO_ASSUME` if you prefer GitHub OIDC to assume a role instead of long-lived credentials.

Each push to the `main` branch will run the workflow, build the project, and sync the `dist` directory to `s3://$S3_BUCKET`. The
workflow uses aggressive caching for static assets and separately uploads `index.html` with `no-cache` headers for instant
updates.

## Customizing content

Edit the React components inside `src/sections` and `src/components` to tailor the copy, visuals, and interaction patterns to
your narrative.
