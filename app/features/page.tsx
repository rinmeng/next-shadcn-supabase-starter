import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export default function Features() {
  return (
    <div className='container nb-padding mx-auto px-4 nb-padding'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold fade-in-from-right'>Features</h1>
        <div className='grid gap-6 md:grid-cols-2'>
          <Card className='fade-in-from-right delay-[100ms]'>
            <CardHeader>
              <CardTitle>Welcome to Features</CardTitle>
              <CardDescription>This is the first demo page</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                This page demonstrates the responsive navigation system with Shadcn UI
                components and Tailwind CSS styling.
              </p>
            </CardContent>
          </Card>

          <Card className='fade-in-from-right delay-[200ms]'>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>Built with modern tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
                <li>Next.js App Router</li>
                <li>Shadcn UI Components</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
