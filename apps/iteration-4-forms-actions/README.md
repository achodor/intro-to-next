# Iteration 4: Forms & Server Actions

Aplikacja z formularzami i Server Actions do edycji danych.

> **Uwaga**: Ta aplikacja została stworzona przez [Claude Code](https://claude.ai/code) jako część warsztatów Next.js.

## Funkcjonalności

- Formularze do edycji zwrotów
- Server Actions z walidacją
- Form validation i error handling
- Success/error messages z useActionState

## Struktura

- `lib/actions.ts` - Server Actions
- `components/EditReturnForm.tsx` - Formularz edycji
- `app/returns/[id]/edit/page.tsx` - Strona edycji
- `lib/mock-data.ts` - Dane testowe
- `lib/types.ts` - Interfejsy TypeScript

## Uruchomienie

```bash
cd apps/iteration-4-forms-actions
bun install
bun run dev
```

## Kluczowe koncepty Next.js

- Server Actions
- Form handling
- useActionState hook
- Form validation
- Revalidation i redirect
