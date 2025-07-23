# Iteration 5: Authentication

Application with full user authentication system.

> **Note**: This application was created by [Claude Code](https://claude.ai/code) as part of the Next.js workshop series.

## Features

- Login page with form
- JWT authentication with httpOnly cookies
- Middleware for route protection
- Session management
- Login/logout actions

## Test Credentials

- Email: `admin@example.com`
- Password: `password123`

## Structure

- `lib/auth.ts` - Authorization functions
- `middleware.ts` - Route protection
- `app/login/page.tsx` - Login page
- `app/returns/*` - Protected pages

## Getting Started

```bash
cd apps/iteration-5-authentication
bun install
bun run dev
```

## Key Next.js Concepts

- Middleware
- JWT with jose library  
- HttpOnly cookies
- Protected routes
- Session management
