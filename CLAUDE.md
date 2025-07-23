# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Turborepo monorepo containing 5 Next.js applications that demonstrate progressive Next.js concepts through a returns management system. Each iteration builds upon the previous one, showcasing different Next.js features and patterns. The project uses Bun as the package manager and Biome for linting/formatting.

## Development Commands

### Root-level commands (run from project root):
- `bun run dev` - Start development servers for all apps
- `bun run build` - Build all apps
- `bun run lint` - Lint all apps using Biome and Next.js linting
- `bun run check-types` - Run TypeScript type checking across all apps

### Working with specific apps:
- Use Turbo filters to target specific iterations: `turbo dev --filter=iteration-1-basics`
- Each app has standard Next.js commands: `dev`, `build`, `start`, `lint`
- Individual app development: `cd apps/iteration-X-name && bun run dev`

### Package Manager
- This project uses **Bun** (v1.2.12) as the package manager
- Node.js version requirement: >=22

## Architecture

### Monorepo Structure
- **Turborepo**: Manages builds, caching, and task orchestration
- **Apps**: Located in `apps/` directory, each representing a different learning iteration:
  - `iteration-1-basics` - Static returns table with basic layout
  - `iteration-2-routing` - File-based routing with dynamic routes and loading states
  - `iteration-3-data-fetching` - API routes and Server Components with data fetching
  - `iteration-4-forms-actions` - Forms with Server Actions and validation
  - `iteration-5-authentication` - Full authentication system with JWT and middleware

### Returns Management Domain Model
All applications use a consistent data structure:

```typescript
interface Return {
  id: string;
  orderNumber: string;
  customerName: string;
  productName: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected' | 'processed';
  requestDate: string;
  carrier: 'dpd' | 'inpost' | 'dhl' | 'gls';
  trackingNumber: string;
  sendDate: string;
  notes?: string;
}
```

### Tech Stack
- **Framework**: Next.js 15.4.3 with App Router
- **React**: Version 19.1.0
- **TypeScript**: Version 5.8.3
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono (via next/font/google)
- **Linting/Formatting**: Biome (configured for tab indentation, double quotes)
- **Build Tool**: Turbo with caching enabled
- **Authentication**: JWT with jose library (iteration 5 only)

### Development Setup
- Each app uses Next.js with Turbopack for fast development
- Apps run on standard Next.js ports (3000, 3001, etc.)
- TypeScript is configured across all apps
- Biome handles code formatting and linting with consistent rules

## Application-Specific Details

### Iteration 1: Basics
- Simple homepage with static returns list
- Basic Tailwind styling and responsive design
- Polish UI labels with English code

### Iteration 2: Routing
- File-based routing: `/`, `/returns`, `/returns/[id]`
- Dynamic route parameters and navigation
- Loading UI components and not-found pages

### Iteration 3: Data Fetching
- API routes: `/api/returns`, `/api/returns/[id]`
- Server Components with fetch() calls
- Error handling and cache management
- **Important**: Uses `cache: 'no-store'` for fresh data

### Iteration 4: Forms & Server Actions  
- Edit forms with validation and error handling
- Server Actions using `useActionState` hook
- Form submission with success/error messages
- API routes with PATCH method for updates
- **Key files**: `lib/actions.ts`, `components/EditReturnForm.tsx`

### Iteration 5: Authentication
- JWT authentication with httpOnly cookies
- Middleware for route protection (`middleware.ts`)
- Login/logout functionality with session management
- **Demo credentials**: Email: `admin@example.com`, Password: `password123`
- **Protected routes**: All `/returns/*` paths require authentication

## Code Conventions
- **Language**: Polish UI text, English code and comments
- **Indentation**: Tabs (configured in biome.json)
- **Quotes**: Double quotes for JavaScript/TypeScript
- **Import organization**: Automatic via Biome
- **File structure**: Standard Next.js App Router structure (app/ directory)
- **Components**: React functional components with TypeScript
- **Data**: Realistic Polish customer/product names in mock data

## Common Development Tasks

### Adding new mock data
- Update `lib/mock-data.ts` in relevant iteration
- Follow existing Polish naming conventions for customers/products
- Ensure all required Return interface fields are included

### Working with authentication (iteration 5)
- Use `requireAuth()` for protected Server Components
- Use `getUser()` for optional authentication checks
- JWT secret can be configured via `JWT_SECRET` environment variable

### Form validation patterns (iteration 4)
- Server Actions return `{ success: boolean, error?: string, fieldErrors?: object }`
- Use `useActionState` for form state management
- Implement proper loading states and user feedback

### API development (iterations 3-4)
- Follow NextResponse patterns for consistent API responses
- Include artificial delays for realistic loading states
- Implement proper error handling with appropriate HTTP status codes