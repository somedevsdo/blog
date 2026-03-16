# Agent Guide

## How to use this guide

- Read this file before acting; assume all instructions here are mandatory unless the user explicitly overrides them.
- In new requests, restate that you are following AGENTS.md so the rules stay in context.
- If any task conflicts with these rules, ask the user which to prioritise and document the decision.
- When finishing feature work, walk through the Before PR checklist and report completion.

## Project overview

- Astro-powered blog with MDX content, Tailwind CSS v4 (via Vite plugin), Astro Icon, and custom components. Config in [astro.config.mjs](astro.config.mjs).
- Package manager: pnpm (see [package.json](package.json)). Node version: v20 ([.nvmrc](.nvmrc)).
- Typescript strict mode via [tsconfig.json](tsconfig.json); `.astro` files rely on Astro JSX types.

## Build and run

- Install: `pnpm install`.
- Develop: `pnpm dev` (serve at 4321 by default).
- Preview prod build: `pnpm preview`.
- Build: `pnpm build` (runs `astro check` then `astro build`).

## Testing and QA

- Lint and formatting check: `pnpm lint` (ESLint flat config + Prettier check). Auto-format: `pnpm format`.
- Playwright E2E: `pnpm test` (headless), `pnpm test:ui`, or `pnpm test:headed`; base URL and web server are configured in [playwright.config.ts](playwright.config.ts).
- No unit test suite yet; `pnpm test` runs end-to-end browser tests.

## Code style guidelines

- ESLint flat config in [eslint.config.mjs](eslint.config.mjs) using `eslint-plugin-astro` + TypeScript parser; apply to `.astro` and TS.
- Prettier config in [.prettierrc.mjs](.prettierrc.mjs): width 100, semi-colons on, double quotes, trailing commas `es5`.
- Stylelint config in [.stylelintrc.mjs](.stylelintrc.mjs) using `stylelint-config-standard-scss`, `stylelint-config-astro`, and `stylelint-config-tailwindcss`.
- Prefer pnpm scripts over ad-hoc commands; keep imports ordered by usage clarity, not necessarily alphabetic.

## Security considerations

- No backend; avoid introducing secrets or API keys. Do not commit env files.
- External assets/scripts should be vetted; keep content local when possible.
- Dependencies: watch for peer warnings when upgrading (Tailwind/Vite versions, ESLint plugin ranges). Prefer minimal changes unless required.
- For Playwright, avoid hitting real services; tests assume local site at 4321.

## Before PR checklist

- `pnpm lint` (ESLint + Prettier check)
- `pnpm format` (if needed)
- `pnpm build`
- `pnpm test` (headless Playwright E2E)

## General agentic rules

- Always prefer to plan before implementing. Scrutinise details, and ask me as much as needed to be confident the plan is correct.
