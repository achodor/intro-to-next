# Iteration 4: Forms & Server Actions

Application with forms and Server Actions for data editing.

> **Note**: This application was created by [Claude Code](https://claude.ai/code) as part of the Next.js workshop series.

## Features

- Forms for editing returns
- Server Actions with validation
- Form validation and error handling
- Success/error messages with useActionState

## Structure

- `lib/actions.ts` - Server Actions
- `components/EditReturnForm.tsx` - Edit form
- `app/returns/[id]/edit/page.tsx` - Edit page
- `lib/mock-data.ts` - Test data
- `lib/types.ts` - TypeScript interfaces

## Getting Started

```bash
cd apps/iteration-4-forms-actions
bun install
bun run dev
```

## Key Next.js Concepts

- Server Actions
- Form handling
- useActionState hook
- Form validation
- Revalidation and redirect
