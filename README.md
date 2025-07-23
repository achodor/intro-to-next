# Next.js Workshop Series

This is a Turborepo monorepo containing 5 Next.js applications that demonstrate progressive Next.js concepts through a returns management system. Each iteration builds upon the previous one, showcasing different Next.js features and patterns.

## Workshop Development

The workshop idea and structure were discussed and planned with Claude AI. All code in this repository was written by [Claude Code](https://claude.ai/code), Anthropic's AI coding assistant, to demonstrate modern Next.js development patterns and best practices.

## Apps

This monorepo contains 5 progressive Next.js applications:

- **iteration-1-basics** - Static returns table with basic layout
- **iteration-2-routing** - File-based routing with dynamic routes and loading states  
- **iteration-3-data-fetching** - Server Components with data fetching
- **iteration-4-forms-actions** - Forms with Server Actions and validation
- **iteration-5-authentication** - Full authentication system with JWT and middleware

Each app is built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: Bun
- **Linting/Formatting**: Biome
- **Monorepo**: Turborepo

## Getting Started

### Prerequisites
- Node.js >=22
- Bun package manager

### Installation

```bash
bun install
```

### Development

```bash
# Start all apps
bun run dev

# Start specific app
turbo dev --filter=iteration-1-basics
```

### Build

```bash
# Build all apps
bun run build

# Build specific app
turbo build --filter=iteration-1-basics
```

## Workshop Structure

Each iteration builds upon the previous one:

1. **Basics** - Learn Next.js fundamentals with static content
2. **Routing** - Implement file-based routing and navigation
3. **Data Fetching** - Use Server Components to fetch data
4. **Forms & Actions** - Handle forms with Server Actions
5. **Authentication** - Add JWT-based authentication

## Domain Model

All apps use a returns management system with this data structure:

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

## Additional Commands

```bash
# Lint all apps
bun run lint

# Type check all apps
bun run check-types

# Work with individual apps
cd apps/iteration-1-basics && bun run dev
```

## Learning Path

Start with `iteration-1-basics` and progress through each iteration to learn Next.js concepts progressively. Each app includes detailed README with specific learning objectives and implementation details.
