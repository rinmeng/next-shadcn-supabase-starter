import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export default function Page3() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold'>Page 3</h1>

        <div className='space-y-6'>
          <Card>
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
                <Button>Get Started</Button>
                <Button variant='outline'>Learn More</Button>
                <Button variant='secondary'>Documentation</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
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
