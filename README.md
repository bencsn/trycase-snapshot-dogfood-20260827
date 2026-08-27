# TryCase snapshot dogfood monorepo

A deliberately multi-target application for testing repository setup and pull-request verification:

- `apps/web`: a React + Vite customer dashboard
- `apps/api`: an Express JSON API
- `apps/cli`: a native command-line status client
- `apps/desktop`: an Electron desktop shell
- `packages/shared`: shared project data and formatting

Run `bun install`, then `bun run dev`. The web app is available on port `4173` and the API on port `4174`.

No secrets are required. The desktop target can be built on Linux; visual verification may use its generated HTML shell when a display is unavailable.
