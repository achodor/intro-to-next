# Iteration 3: Data Fetching

Aplikacja z API routes i Server Components do pobierania danych.

## Funkcjonalności

- API routes (`/api/returns`, `/api/returns/[id]`)
- Server Components z fetch() calls
- Proper error handling dla API
- Loading states i cache management

## Struktura

- `app/api/returns/route.ts` - GET wszystkich zwrotów
- `app/api/returns/[id]/route.ts` - GET zwrotu po ID
- `app/returns/page.tsx` - Lista z API fetch
- `app/returns/[id]/page.tsx` - Szczegóły z API fetch

## Uruchomienie

```bash
cd apps/iteration-3-data-fetching
bun install
bun run dev
```

## Kluczowe koncepty Next.js

- API Routes (Route Handlers)
- Server Components data fetching
- Error boundaries
- Cache configuration
- NextResponse usage
