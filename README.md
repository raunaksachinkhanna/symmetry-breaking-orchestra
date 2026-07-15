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

## Academic Learning Path

Alongside the interactive laboratory, the app includes an Academic Learning Path: a 21-lesson course in field theory, organized into five chapters —

1. Why fields?
2. Action and field equations
3. Quantization and particles
4. Global symmetry breaking
5. The Higgs mechanism

Each lesson answers one guiding question and poses the next one, so the chapters form a concept-dependency sequence rather than a flat list. Every lesson can be read at three depth levels, selectable independently of which lesson is open: Intuition (plain-language, no unexplained notation), Mathematical Bridge (the shortest correct derivation), and Academic Depth (assumptions, full notation, and limitations). A prerequisite map shows the dependency graph across all 21 lessons and lets you jump directly to any prerequisite.

Chapter D's lessons connect directly to the interactive laboratory's global U(1) model — the same μ², λ, vacuum expectation value, and mode masses the dashboard computes are derived and cross-checked in the lesson text. Chapter E goes further, gauging that symmetry and sketching how the same mechanism generalizes to the Standard Model's electroweak sector; the laboratory itself models only the classical global U(1) case, not a gauged theory or the full Standard Model.

## GitHub Pages deployment

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` runs on every push to `main` and can also be started manually. It installs the frontend dependencies, runs lint and the production build, uploads `frontend/dist`, and deploys that artifact with GitHub Pages.

The expected public URL is:

<https://raunaksachinkhanna.github.io/symmetry-breaking-orchestra/>
