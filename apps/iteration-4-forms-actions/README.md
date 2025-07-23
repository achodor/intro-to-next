# Iteration 4: Forms & Server Actions

Aplikacja z formularzami i Server Actions do edycji danych.

## Funkcjonalności

- Formularze do edycji zwrotów
- Server Actions z walidacją
- API routes z PATCH method
- Form validation i error handling
- Success/error messages

## Struktura

- `lib/actions.ts` - Server Actions
- `components/EditReturnForm.tsx` - Formularz edycji
- `app/returns/[id]/edit/page.tsx` - Strona edycji
- `app/api/returns/[id]/route.ts` - PATCH endpoint

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
