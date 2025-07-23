# Iteration 3: Data Fetching

Application with Server Components for data fetching (without API routes).

> **Note**: This application was created by [Claude Code](https://claude.ai/code) as part of the Next.js workshop series.

## Features

- Server Components with fetch() calls for data
- Loading states and error handling
- Cache management with `cache: 'no-store'`
- Routing between pages

## Structure

- `app/returns/page.tsx` - List with fetch() call
- `app/returns/[id]/page.tsx` - Details with fetch() call
- `lib/mock-data.ts` - Test data
- `lib/types.ts` - TypeScript interfaces

## Getting Started

```bash
cd apps/iteration-3-data-fetching
bun install
bun run dev
```

## Key Next.js Concepts

- Server Components data fetching
- Loading UI components
- Error boundaries
- Cache configuration (`cache: 'no-store'`)
- Dynamic routes
