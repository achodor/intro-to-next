# Iteration 5: Authentication

Aplikacja z pełnym systemem autoryzacji użytkowników.

## Funkcjonalności

- Strona logowania z formularzem
- JWT authentication z httpOnly cookies
- Middleware do ochrony routes
- Session management
- Login/logout actions

## Dane testowe

- Email: `admin@example.com`
- Hasło: `password123`

## Struktura

- `lib/auth.ts` - Funkcje autoryzacji
- `middleware.ts` - Route protection
- `app/login/page.tsx` - Strona logowania
- `app/returns/*` - Chronione strony

## Uruchomienie

```bash
cd apps/iteration-5-authentication
bun install
bun run dev
```

## Kluczowe koncepty Next.js

- Middleware
- JWT z jose library  
- HttpOnly cookies
- Protected routes
- Session management
