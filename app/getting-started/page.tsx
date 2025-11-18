import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { SquareArrowOutUpRight } from 'lucide-react';

export default function GettingStarted() {
  return (
    <div className='container nb-padding mx-auto px-4 nb-padding'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold fade-in-from-right'>Getting Started</h1>
        <div className='space-y-6'>
          <Card className='fade-in-from-right delay-[100ms]'>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>Ready to build something amazing?</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p className='text-muted-foreground'>
                This boilerplate provides everything you need to start building your
                Next.js application with Shadcn UI and Supabase.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Button>
                  <a
                    href='https://github.com/rinmeng/next-shadcn-supabase-starter/blob/main/README.md'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Get Started
                  </a>
                  <SquareArrowOutUpRight />
                </Button>
                <Button variant='outline'>
                  Learn More
                  <SquareArrowOutUpRight />
                </Button>
                <Button variant='secondary'>
                  Documentation
                  <SquareArrowOutUpRight />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className='fade-in-from-right delay-[200ms]'>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>Mobile-first approach</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                The navigation automatically adapts to different screen sizes. On desktop,
                you&apos;ll see a horizontal navigation bar. On tablet and mobile devices,
                the menu transforms into a slide-out sheet from the right side for a
                better mobile experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
