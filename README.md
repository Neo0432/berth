# Berth

**Find a team for your side project — and actually finish it.**

[![License: FSL-1.1-MIT](https://img.shields.io/badge/license-FSL--1.1--MIT-yellow)](LICENSE.md)
[![Status](https://img.shields.io/badge/status-in_development-orange)](#about)
[![Node](https://img.shields.io/badge/node-%3E%3D24-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Yarn](https://img.shields.io/badge/yarn-1.x-2C8EBB?logo=yarn&logoColor=white)](https://classic.yarnpkg.com)
[![Conventional Commits](https://img.shields.io/badge/Conventional_Commits-1.0.0-FE5196?logo=conventionalcommits&logoColor=white)](https://www.conventionalcommits.org)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![next-intl](https://img.shields.io/badge/next--intl-4-1F2937)](https://next-intl.dev)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-EC5990?logo=reacthookform&logoColor=white)](https://react-hook-form.com)
[![Zod](https://img.shields.io/badge/Zod-4-3E67B1?logo=zod&logoColor=white)](https://zod.dev)
[![Sass](https://img.shields.io/badge/Sass-modules-CC6699?logo=sass&logoColor=white)](https://sass-lang.com)

[![Jest](https://img.shields.io/badge/Jest-30-C21325?logo=jest&logoColor=white)](https://jestjs.io)
[![Testing Library](https://img.shields.io/badge/Testing_Library-16-E33332?logo=testinglibrary&logoColor=white)](https://testing-library.com)
[![MSW](https://img.shields.io/badge/MSW-2-FF6A33?logo=mockserviceworker&logoColor=white)](https://mswjs.io)
[![Storybook](https://img.shields.io/badge/Storybook-10-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org)
[![Architecture](https://img.shields.io/badge/architecture-Feature--Sliced_Design-2F7AE5)](https://feature-sliced.design)

---

## Table of contents

- [About](#about)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Architecture](#architecture)
- [Internationalisation](#internationalisation)
- [Testing](#testing)
- [Conventions](#conventions)
- [Development workflow](#development-workflow)
- [License](#license)

---

## About

Side projects rarely die from a lack of ideas. They die because one person runs out of
steam three weeks in.

Berth builds **temporary teams around a fixed scope and a fixed deadline**. An author
publishes a project, opens slots for the roles they need, picks from the applicants, and
the team works a single cycle of 2–12 weeks. When the cycle ends the project closes — for
real, with an outcome — and every participant keeps a permanent record of what they built.

This is deliberately _not_ a co-founder platform. No equity, no legal commitments, no
open-ended obligations. Just one bounded cycle, and then everyone walks away with
something to show.

**Key concepts**

- **Project** — an idea with a public scope, a stack, a cycle length and weekly hours. The
  scope is a contract: changing it mid-cycle notifies the whole team.
- **Slot** — an open seat for one role (Frontend, Backend, Design, QA, …) with the skills
  it needs. Candidates apply to a slot, not to the project as a whole.
- **Cycle** — the fixed period the team works. It always ends with an outcome:
  completed, partially completed or abandoned.
- **Participation** — the permanent record each member gets on their profile: role,
  dates and outcome.
- **Showcase** — the public gallery of finished cycles and the teams behind them.

**Status:** in active development.

This repository is the web client. It talks to a REST API configured through
`NEXT_PUBLIC_API_BASE_URL`, and in development it can run entirely against
[MSW](https://mswjs.io) mocks.

---

## Tech stack

| Layer            | Choice                         | Rationale                                                                  |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------- |
| Framework        | Next.js 16 (App Router)        | Server rendering for public pages, file-based routing                      |
| UI               | React 19                       | `ref` is a plain prop — no `forwardRef` ceremony                           |
| Server state     | TanStack Query                 | Nearly all state here is server state; a global store would be dead weight |
| Client state     | `useState` + URL search params | Feed filters belong in the address bar, not in a store                     |
| Forms            | react-hook-form + zod          | Uncontrolled inputs, one schema for both validation and types              |
| Styling          | SCSS modules + CSS variables   | Tokens live in `:root`; retheming does not touch components                |
| Selects          | react-select                   | Accessible combobox behaviour, styled to the design system                 |
| i18n             | next-intl                      | Works in server components; strings live in dictionaries from day one      |
| Testing          | Jest + Testing Library + MSW   | Test behaviour, not implementation; mock the network, not your modules     |
| Component review | Storybook                      | Shared components can be inspected in isolation                            |

---

## Getting started

### Prerequisites

- **Node.js 24** or newer (the exact major is pinned in `.nvmrc`)
- **Yarn 1** (classic)

### Installation

```bash
git clone https://github.com/Neo0432/berth.git
cd berth
yarn install
```

`yarn install` also runs the `prepare` script, which installs the Git hooks.

### Running the app

```bash
yarn dev
```

The dev server runs on [localhost:3000](http://localhost:3000). `.env.development` is
committed with working defaults, so a fresh clone starts without any setup. With
`NEXT_PUBLIC_ENABLE_API_MOCKS=true` the browser talks to MSW handlers instead of a real
backend. Requests made by server components are not mocked yet.

### Environment variables

`.env.development` and `.env.test` are committed — they contain no secrets. A local `.env`
is git-ignored; `.env.example` lists every variable.

| Variable                       | Required | Meaning                                             |
| ------------------------------ | -------- | --------------------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL`     | yes      | Base API URL, no trailing slash                     |
| `NEXT_PUBLIC_ENABLE_API_MOCKS` | no       | `true` starts MSW in the browser (development only) |

The variables are validated with zod in `src/shared/config/env.ts` at startup. A malformed
value crashes the app immediately with a readable message instead of surfacing later as
`fetch('undefined/projects')`.

There is no `.env.production` yet: `yarn build` prerenders pages and validates the
environment while doing so, so it needs `NEXT_PUBLIC_API_BASE_URL` from the shell or the
deploy environment.

Sessions are stored in an HttpOnly cookie, so the API client sends
`credentials: 'include'` and no tokens are ever held in JavaScript.

---

## Scripts

| Command                      | What it does                                        |
| ---------------------------- | --------------------------------------------------- |
| `yarn dev`                   | Dev server on port 3000                             |
| `yarn build`                 | Type check, then production build                   |
| `yarn start`                 | Serve the production build locally                  |
| `yarn typecheck`             | TypeScript only, no emit                            |
| `yarn lint`                  | ESLint over `src` and `app`                         |
| `yarn lint:fix`              | ESLint with autofix                                 |
| `yarn stylelint`             | Stylelint over CSS and SCSS                         |
| `yarn stylelint:fix`         | Stylelint with autofix                              |
| `yarn prettier`              | Check formatting of TypeScript sources              |
| `yarn prettier:write`        | Format TypeScript sources                           |
| `yarn test`                  | Run the Jest suite                                  |
| `yarn test:coverage`         | Single run with a coverage report                   |
| `yarn storybook`             | Storybook on port 6006                              |
| `yarn build-storybook`       | Static Storybook build                              |
| `yarn svg:transform`         | Regenerate all icon components                      |
| `yarn svg:transform-common`  | Regenerate icon components from `icons/svg/common`  |
| `yarn svg:transform-complex` | Regenerate icon components from `icons/svg/complex` |

---

## Architecture

The project follows [Feature-Sliced Design](https://feature-sliced.design).

```
app/             Next.js routes — thin files that render FSD pages
pages/           intentionally empty, see pages/README.md
proxy.ts         locale detection and redirects (next-intl)
src/
├── app/         providers, fonts, global styles
├── pages/       page compositions; pages never know about each other
├── widgets/     self-contained page blocks (layout, header, footer)
├── features/    user actions (switch the locale, apply to a slot, close a cycle)
├── entities/    business entities and their data (project, slot, application, user)
└── shared/      reusable code with no domain knowledge
    ├── api/     HTTP client, ApiError, QueryClient factory
    ├── assets/  styles (tokens, mixins, breakpoints) and icons
    ├── config/  environment variables, ROUTES
    ├── i18n/    routing, navigation and dictionaries
    ├── lib/     hooks, predicates, dates, logger
    ├── test/    MSW, setup, renderWithProviders
    ├── types/   shared types
    └── ui/      base components (Button, Select, FieldControl, Spinner, …)
```

### Boundaries are enforced, not suggested

`eslint-plugin-boundaries` fails the lint run on violations, so the architecture cannot
quietly erode:

1. **A layer may only import from layers below it.** `features` → `entities` → `shared`
   is fine; `shared` → `features` is not.
2. **Slices on the same layer cannot see each other.** `features/apply-to-slot` does not
   import `features/manage-applications` — composition happens one layer up.
3. **Slices are reached only through their public API.** Imports go to `index.ts`, never
   into a slice's internals.

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

Source SVGs live in `src/shared/assets/icons/svg/`. React components are **generated**
into `src/shared/assets/icons/components/` with `yarn svg:transform` — those files are
never edited by hand.

- `common/` — project icons. Hardcoded colours are replaced with a `color` prop that
  defaults to `currentColor`, so one file works on any background.
- `complex/` — multicolour artwork: brand marks and illustrations. Colours are left
  untouched.

---

## Internationalisation

Strings live in `src/shared/i18n/locales/<locale>/<namespace>.json` and are read with
`t()` from next-intl. The `en` dictionaries define the message types
(`src/shared/i18n/next-intl.d.ts`), so a missing or misspelled key fails the type check.

| Locale | URL            | Notes                     |
| ------ | -------------- | ------------------------- |
| `en`   | `/projects`    | Default, no prefix        |
| `ru`   | `/ru/projects` | Added to test the routing |

**Adding a locale**

1. Copy `locales/en/` to `locales/<locale>/` and translate it key for key.
2. Add the locale to `locales` in `src/shared/i18n/routing.ts`.
3. Add its native name to `LOCALE_NAMES` in `src/features/switch-locale`. The type check
   fails until you do.

**Adding a namespace:** a JSON file per locale, one entry in
`src/shared/i18n/messages.ts` and one in `src/shared/i18n/next-intl.d.ts`.

---

## Testing

```bash
yarn test
```

Tests live next to the code they cover (`*.test.tsx`) and render through
`renderWithProviders` from `@shared/test`, which wraps the same providers the app uses.
The network is mocked with MSW; a request without a handler fails the test instead of
passing silently.

Shared UI components also have stories (`*.stories.tsx`) — run `yarn storybook` to review
them in isolation. The accessibility addon reports violations as errors.

---

## Conventions

- **Files and folders use `kebab-case`.** `ProjectCard` lives in `project-card/project-card.tsx`.
- **Class names follow BEM** (`block__element--modifier`); Stylelint enforces the pattern.
- **Colours and spacing come from CSS variables** defined in `base/_variables.scss`.
  Stylelint rejects hex colours anywhere else.
- **SCSS imports are written from `src`** — `@use 'shared/assets/styles/...'`, not
  `@shared/...`. Turbopack on Windows cannot resolve relative `@forward` inside a file it
  loaded through an alias, so Sass resolves project styles from disk instead.
- **Routes go through `ROUTES` and `routeTo()`.** No route string literals in components.
- **Links go through `Link` from `@shared/i18n`**, so they keep the current locale.
- **UI strings go through `t()`.** Hardcoded copy makes a second locale expensive.

---

## Development workflow

### Branches

Branch names follow `<type>/<short-description>`, where `type` is one of `feat`, `fix`,
`chore`, `hotfix` or `refactor` — for example `feat/home-landing`. `main`, `develop` and
`pre-prod` are the long-lived branches.

### Commits

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org):
`<type>: <subject>`, where `type` is one of `feat`, `fix`, `refactor`, `perf`, `style`,
`test`, `docs`, `build`, `ci`, `chore` or `revert`.

```
feat: add language switcher to the footer
fix: keep the locale prefix in footer links
```

### Git hooks

Installed by [husky](https://typicode.github.io/husky) on `yarn install`.

| Hook         | Runs                                                                             |
| ------------ | -------------------------------------------------------------------------------- |
| `pre-commit` | `lint-staged` (ESLint, Prettier, Stylelint on staged files), `typecheck`, `test` |
| `commit-msg` | commitlint — Conventional Commits                                                |
| `pre-push`   | branch name validation                                                           |

---

## License

Berth is source-available under the
[Functional Source License, Version 1.1, MIT Future License](LICENSE.md) (FSL-1.1-MIT).

- You may use, modify and redistribute the code for any purpose except a **competing use**:
  offering it to others as a commercial product or service that substitutes for Berth or
  provides substantially similar functionality.
- Internal use, non-commercial education and non-commercial research are explicitly
  permitted.
- Each version becomes available under the **MIT license two years after it is released**.
- The license does not grant any rights to the Berth name or logo.

[`LICENSE.md`](LICENSE.md) is the binding text; this summary is for convenience only.
