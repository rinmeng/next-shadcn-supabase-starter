# Next.js + Shadcn UI + Supabase Starter

A modern, production-ready boilerplate for building full-stack applications with Next.js, Shadcn UI components, and Supabase backend.

## ✨ Features

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router, Server Components, and Server Actions
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautifully designed, accessible components built with Radix UI and Tailwind CSS
- **[Supabase](https://supabase.com/)** - Open source Firebase alternative with PostgreSQL database, authentication, and real-time subscriptions
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety across the entire stack
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Prettier](https://prettier.io/)** - Opinionated code formatter with custom plugins for import sorting and Tailwind class ordering

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended), npm, or yarn
- A [Supabase account](https://supabase.com/) and project

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rinmeng/next-shadcn-supabase-starter.git
cd next-shadcn-supabase-starter
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Add your Supabase credentials to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

You can find these in your [Supabase project settings](https://supabase.com/dashboard/project/_/settings/api).

4. Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📚 Documentation & Resources

### Next.js

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [App Router](https://nextjs.org/docs/app) - Modern routing and layouts
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) - Server-side mutations
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial

### Shadcn UI

- [Shadcn UI Documentation](https://ui.shadcn.com/docs) - Component library docs
- [Browse Components](https://ui.shadcn.com/docs/components) - Available components
- [Installation Guide](https://ui.shadcn.com/docs/installation/next) - Next.js specific setup
- [Theming](https://ui.shadcn.com/docs/theming) - Customize colors and appearance

### Supabase

- [Supabase Documentation](https://supabase.com/docs) - Complete guide
- [Authentication](https://supabase.com/docs/guides/auth) - User authentication setup
- [Database](https://supabase.com/docs/guides/database) - PostgreSQL database
- [Real-time](https://supabase.com/docs/guides/realtime) - Real-time subscriptions
- [Storage](https://supabase.com/docs/guides/storage) - File storage
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs) - Integration guide

### Styling

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility classes
- [Radix UI](https://www.radix-ui.com/primitives) - Accessible component primitives

### Code Quality

- [Prettier Documentation](https://prettier.io/docs/en/) - Code formatting
- [Prettier Plugins](https://prettier.io/docs/en/plugins.html) - Extend Prettier functionality

## 🎨 Code Formatting with Prettier

This project uses Prettier with several plugins for consistent code formatting:

### Configured Plugins

- **[@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)** - Automatically sorts imports in a specific order (React imports first, then third-party modules, then local imports)
- **[prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)** - Formats and sorts `package.json` files
- **[prettier-plugin-classnames](https://github.com/fisker/prettier-plugin-classnames)** - Formats className attributes

### Key Settings

The `.prettierrc` configuration includes:

- **Print Width**: 90 characters
- **Single Quotes**: Enabled for JS/TS
- **Import Order**: React → Third-party → Components → Hooks → Utils → Relative imports

Format your code:

```bash
pnpm format
# or manually format files
pnpm prettier --write .
```

## 🛠️ Adding Shadcn UI Components

Add new components to your project:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
```

See all [available components](https://ui.shadcn.com/docs/components).

## 🗃️ Database Setup

1. Go to your [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql)
2. Create your tables and run migrations
3. Set up [Row Level Security (RLS)](https://supabase.com/docs/guides/auth/row-level-security) policies
4. Configure [authentication providers](https://supabase.com/dashboard/project/_/auth/providers)

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rinmeng/next-shadcn-supabase-starter)

1. Connect your GitHub repository
2. Add environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
3. Deploy

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.

## 📝 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # Shadcn UI components
├── lib/                   # Utility functions
│   └── supabase/         # Supabase client setup
├── public/               # Static assets
└── next.config.ts        # Next.js configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) by Vercel
- [Shadcn UI](https://ui.shadcn.com/) by [@shadcn](https://twitter.com/shadcn)
- [Supabase](https://supabase.com/) team
