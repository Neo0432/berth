<div align="center">

# Berth

**Find a team for your side project — and actually finish it.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![Sass](https://img.shields.io/badge/Sass-modules-CC6699?logo=sass&logoColor=white)](https://sass-lang.com)
[![Vitest](https://img.shields.io/badge/Vitest-5-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)
[![Storybook](https://img.shields.io/badge/Storybook-10-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org)
[![Architecture](https://img.shields.io/badge/architecture-Feature--Sliced_Design-2f7ae5)](https://feature-sliced.design)

</div>

---

## What it is

Side projects rarely die from a lack of ideas. They die because one person runs out of
steam three weeks in.

Berth builds **temporary teams around a fixed scope and a fixed deadline**. An author
publishes a project, opens slots for the roles they need, picks from the applicants, and
the team works a single cycle of 4–8 weeks. When the cycle ends the project closes — for
real, with an outcome — and every participant keeps a permanent record of what they built.

This is deliberately _not_ a co-founder platform. No equity, no legal commitments, no
open-ended obligations. Just one bounded cycle, and then everyone walks away with
something to show.

---

## Tech stack

| Layer            | Choice                         | Rationale                                                                  |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------- |
| Build            | Vite + TypeScript              | Fast dev loop, one config for dev, test and production                     |
| UI               | React 19                       | `ref` is a plain prop — no `forwardRef` ceremony                           |
| Server state     | TanStack Query                 | Nearly all state here is server state; a global store would be dead weight |
| Client state     | `useState` + URL search params | Feed filters belong in the address bar, not in a store                     |
| Routing          | react-router (data router)     | Lazy routes out of the box                                                 |
| Forms            | react-hook-form + zod          | Uncontrolled inputs, one schema for both validation and types              |
| Styling          | SCSS modules + CSS variables   | Tokens live in `:root`; retheming does not touch components                |
| i18n             | i18next                        | Strings live in dictionaries from day one                                  |
| Testing          | Vitest + Testing Library + MSW | Test behaviour, not implementation; mock the network, not your modules     |
| Component review | Storybook                      | Shared components can be inspected in isolation                            |

---

## Getting started

**Requirements:** Node 24+ and Yarn.

```bash
yarn install
yarn dev
```

The dev server runs on [localhost:3000](http://localhost:3000). `.env.development` is
committed and contains working defaults, so a fresh clone starts without any setup.

With `VITE_ENABLE_API_MOCKS=true` the app boots against MSW handlers instead of a real
backend.

---

## Scripts

| Command                       | What it does                                       |
| ----------------------------- | -------------------------------------------------- |
| `yarn dev`                    | Dev server on port 3000                            |
| `yarn build`                  | Type check, then production build                  |
| `yarn preview`                | Serve the production build locally                 |
| `yarn typecheck`              | TypeScript only, no emit                           |
| `yarn lint`                   | ESLint over `src`                                  |
| `yarn lint:fix`               | ESLint with autofix                                |
| `yarn stylelint`              | Stylelint over CSS and SCSS                        |
| `yarn stylelint:fix`          | Stylelint with autofix                             |
| `yarn prettier:write`         | Format TypeScript sources                          |
| `yarn test`                   | Vitest in watch mode                               |
| `yarn test:coverage`          | Single run with a coverage report                  |
| `yarn storybook`              | Storybook on port 6006                             |
| `yarn build-storybook`        | Static Storybook build                             |
| `yarn svg:transform-common`   | Regenerate icon components from `icons/svg/common` |
| `yarn svg:transform-external` | Same for third-party marks                         |

---

## Architecture

The project follows [Feature-Sliced Design](https://feature-sliced.design).

```
src/
├── app/         entry point, providers, router, global styles
├── pages/       page compositions; pages never know about each other
├── widgets/     self-contained page blocks (header, feed, project card)
├── features/    user actions (apply to a slot, accept an application, close a cycle)
├── entities/    business entities and their data (project, slot, application, user)
└── shared/      reusable code with no domain knowledge
    ├── api/     HTTP client, ApiError, QueryClient factory
    ├── assets/  styles (tokens, mixins, breakpoints) and icons
    ├── config/  environment variables, ROUTES
    ├── i18n/    initialisation and dictionaries
    ├── lib/     hooks, predicates, dates, logger
    ├── test/    MSW, setup, renderWithProviders
    ├── types/   shared types
    └── ui/      base components (Button, Spinner, Skeleton, Portal)
```

### Boundaries are enforced, not suggested

`eslint-plugin-boundaries` fails the lint run on violations, so the architecture cannot
quietly erode:

1. **A layer may only import from layers below it.** `features` → `entities` → `shared`
   is fine; `shared` → `features` is not.
2. **Slices on the same layer cannot see each other.** `features/apply-to-slot` does not
   import `features/manage-applications` — composition happens one layer up.

Inside a slice, the canonical FSD segments apply:

```
entities/project/
├── api/         requests and query keys
├── model/       types, schemas, pure logic
├── ui/          presentational components
└── index.ts     public API — only what the outside actually needs
```

### Component structure

Every component follows the same shape:

```
button/
├── styles/
│   ├── button.module.scss
│   └── get-classes.ts
├── button.tsx
└── index.ts
```

`get-classes.ts` declares each class name as its own constant and returns them as an
object. The component destructures ready-made `cnRoot`, `cnContent` and never touches raw
class names.

### Icons

Source SVGs live in `shared/assets/icons/svg/`. React components are **generated** into
`shared/assets/icons/components/` — those files are never edited by hand.

- `common/` — project icons. Hardcoded colours are replaced with a `color` prop that
  defaults to `currentColor`, so one file works on any background.
- `external/` — third-party marks. Brand colours are left untouched.

---

## Conventions

- **Files and folders use `kebab-case`.** `ProjectCard` lives in `project-card/project-card.tsx`.
- **Colors and spacing come from CSS variables** defined in `base/_variables.scss`.
  Stylelint rejects hardcoded hex values anywhere else.
- **Routes go through `ROUTES` and `routeTo()`.** No route string literals in components.
- **UI strings go through `t()`.** Hardcoded copy makes a second locale expensive.

---

## Environment

`.env.development` and `.env.test` are committed — they contain no secrets. A local
`.env` is git-ignored.

| Variable                | Meaning                                             |
| ----------------------- | --------------------------------------------------- |
| `VITE_API_BASE_URL`     | Base API URL, no trailing slash                     |
| `VITE_ENABLE_API_MOCKS` | `true` starts MSW in the browser (development only) |

The schema is validated with zod in `shared/config/env.ts` at startup. A malformed `.env`
crashes the app immediately with a readable message instead of surfacing half an hour
later as `fetch('undefined/projects')`.

Sessions are stored in an HttpOnly cookie, so `apiClient` sends `credentials: 'include'`
and no tokens are ever held in JavaScript.

---

## Git hooks

| Hook         | Runs                                                        |
| ------------ | ----------------------------------------------------------- |
| `pre-commit` | `lint-staged` (ESLint, Prettier, Stylelint) and `typecheck` |
| `commit-msg` | commitlint — conventional commits (`feat:`, `fix:`, …)      |
| `pre-push`   | branch name validation                                      |
