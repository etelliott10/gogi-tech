# Gogi Lead CRM

A frontend-first lead workspace built with Next.js, React, TypeScript, and
Tailwind CSS.

## Current state

The repository is an early scaffold. It currently contains one placeholder
page and no CRM domain model, backend, API routes, authentication, database
client, or third-party service integrations.

The app uses Next.js static export. A production build creates an `out/`
directory containing only HTML, CSS, JavaScript, and public assets. No
long-running Node.js or Next.js server is required in production.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

Open `http://localhost:3000` during development. After `npm run build`, serve
the `out/` directory with any static file host.

## Frontend-only boundary

Keep these concerns inside the app:

- Presentation and client-side interaction
- CRM domain types and deterministic business rules
- Seed/demo data
- Browser persistence for prototypes
- Calls to explicitly configured external APIs

Do not add Next.js route handlers, server actions, middleware, secrets, direct
database connections, or server-only packages. Browser code cannot safely
hold private API keys. If the product later needs privileged operations,
authentication enforcement, shared durable data, or webhooks, place those
behind a separately deployed service and access it through a small typed
client adapter.

## Suggested source layout

```text
src/
  app/                 routes and page composition
  components/          shared visual components
  features/            lead, pipeline, task, and activity modules
  lib/                 browser-safe utilities and API adapters
  data/                seed/demo fixtures
  types/               shared domain types
```

This keeps product code cohesive while preserving the option to replace demo
storage with an external service later.
