import Link from 'next/link';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export default function Home() {
  return (
    <div className='container mx-auto px-4 nb-padding'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-5xl font-bold tracking-tight'>
            Next.js Starter Template
          </h1>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground'>
            A modern boilerplate with Next.js, Shadcn UI, and Supabase. Get started
            building your next project with this production-ready starter.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle>Fast Development</CardTitle>
              <CardDescription>Start building immediately</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                Pre-configured with all the tools you need. Beautiful UI components,
                authentication, and database ready to go.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Type Safe</CardTitle>
              <CardDescription>Full TypeScript support</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                End-to-end type safety with TypeScript, ensuring fewer bugs and better
                developer experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Production Ready</CardTitle>
              <CardDescription>Deploy with confidence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                Optimized for performance and ready to deploy to Vercel, Netlify, or any
                platform.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='mt-12 text-center'>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/features'>
              <Button size='lg'>Explore Pages</Button>
            </Link>
            <Button size='lg' variant='outline' asChild>
              <a
                href='https://github.com/rinmeng/next-shadcn-supabase-starter'
                target='_blank'
                rel='noopener noreferrer'
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
