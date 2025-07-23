# Iteration 3: Data Fetching

Aplikacja z Server Components do pobierania danych (bez API routes).

> **Uwaga**: Ta aplikacja została stworzona przez [Claude Code](https://claude.ai/code) jako część warsztatów Next.js.

## Funkcjonalności

- Server Components z fetch() calls do danych
- Loading states i error handling
- Cache management z `cache: 'no-store'`
- Routing między stronami

## Struktura

- `app/returns/page.tsx` - Lista z fetch() call
- `app/returns/[id]/page.tsx` - Szczegóły z fetch() call
- `lib/mock-data.ts` - Dane testowe
- `lib/types.ts` - Interfejsy TypeScript

## Uruchomienie

```bash
cd apps/iteration-3-data-fetching
bun install
bun run dev
```

## Kluczowe koncepty Next.js

- Server Components data fetching
- Loading UI components
- Error boundaries
- Cache configuration (`cache: 'no-store'`)
- Dynamic routes
