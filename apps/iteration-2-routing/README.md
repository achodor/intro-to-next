# Iteration 2: Routing

Aplikacja z systemem routingu i stronami szczegółów.

> **Uwaga**: Ta aplikacja została stworzona przez [Claude Code](https://claude.ai/code) jako część warsztatów Next.js.

## Funkcjonalności

- Routing między stronami (`/`, `/returns`, `/returns/[id]`)
- Strona szczegółów zwrotu z parametrami URL
- Loading states i error handling
- 404 strona dla nieistniejących zwrotów

## Struktura

- `app/page.tsx` - Strona główna z linkiem do zwrotów
- `app/returns/page.tsx` - Lista zwrotów
- `app/returns/[id]/page.tsx` - Szczegóły zwrotu
- `app/returns/[id]/loading.tsx` - Loading UI
- `app/not-found.tsx` - 404 strona

## Uruchomienie

```bash
cd apps/iteration-2-routing
bun install
bun run dev
```

## Kluczowe koncepty Next.js

- File-based routing
- Dynamic routes `[id]`
- Loading UI components
- Not found pages
- Link component navigation
