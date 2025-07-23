# Iteration 2: Routing

Application with routing system and detail pages.

> **Note**: This application was created by [Claude Code](https://claude.ai/code) as part of the Next.js workshop series.

## Features

- Routing between pages (`/`, `/returns`, `/returns/[id]`)
- Return detail page with URL parameters
- Loading states and error handling
- 404 page for non-existent returns

## Structure

- `app/page.tsx` - Homepage with link to returns
- `app/returns/page.tsx` - Returns list
- `app/returns/[id]/page.tsx` - Return details
- `app/returns/[id]/loading.tsx` - Loading UI
- `app/not-found.tsx` - 404 page

## Getting Started

```bash
cd apps/iteration-2-routing
bun install
bun run dev
```

## Key Next.js Concepts

- File-based routing
- Dynamic routes `[id]`
- Loading UI components
- Not found pages
- Link component navigation
