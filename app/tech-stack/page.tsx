import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';

export default function TechStack() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold'>Tech Stack</h1>
        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle>Tech Stack</CardTitle>
                <Badge>Modern</Badge>
              </div>
              <CardDescription>Technologies used in this boilerplate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <h3 className='font-semibold'>Frontend</h3>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='secondary'>Next.js 15</Badge>
                    <Badge variant='secondary'>React</Badge>
                    <Badge variant='secondary'>TypeScript</Badge>
                  </div>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-semibold'>UI & Styling</h3>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='secondary'>Shadcn UI</Badge>
                    <Badge variant='secondary'>Tailwind CSS</Badge>
                    <Badge variant='secondary'>Radix UI</Badge>
                  </div>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-semibold'>Backend</h3>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='secondary'>Supabase</Badge>
                    <Badge variant='secondary'>PostgreSQL</Badge>
                  </div>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-semibold'>Code Quality</h3>
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='secondary'>Prettier</Badge>
                    <Badge variant='secondary'>ESLint</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
