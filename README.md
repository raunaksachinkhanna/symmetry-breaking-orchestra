# symmetry-breaking-orchestra
An interactive visual and auditory laboratory for exploring symmetry breaking, particle masses, and theory–experiment disagreement.

## Run locally

Use Node 22, then install and start the Vite development server:

```bash
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite. To check a production build locally, run `npm run build` followed by `npm run preview`.

## GitHub Pages deployment

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` runs on every push to `main` and can also be started manually. It installs the frontend dependencies, runs lint and the production build, uploads `frontend/dist`, and deploys that artifact with GitHub Pages.

The expected public URL is:

<https://raunaksachinkhanna.github.io/symmetry-breaking-orchestra/>
