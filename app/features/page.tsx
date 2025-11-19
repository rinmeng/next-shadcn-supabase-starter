import {
  Badge,
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
              <CardTitle>Authentication & Security</CardTitle>
              <CardDescription>Production-ready auth system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='default'>Supabase Auth</Badge>
                <Badge variant='secondary'>Email Verification</Badge>
                <Badge variant='secondary'>Protected Routes</Badge>
                <Badge variant='secondary'>Auth Callbacks</Badge>
                <Badge variant='secondary'>Route Proxy</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className='fade-in-from-right delay-[200ms]'>
            <CardHeader>
              <CardTitle>Modern Stack</CardTitle>
              <CardDescription>Built with cutting-edge technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='default'>Next.js 15</Badge>
                <Badge variant='secondary'>App Router</Badge>
                <Badge variant='secondary'>TypeScript</Badge>
                <Badge variant='secondary'>Tailwind CSS</Badge>
                <Badge variant='secondary'>Shadcn UI</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className='fade-in-from-right delay-[300ms]'>
            <CardHeader>
              <CardTitle>Architecture</CardTitle>
              <CardDescription>Scalable project structure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='default'>API Versioning</Badge>
                <Badge variant='secondary'>Server Components</Badge>
                <Badge variant='secondary'>Client Components</Badge>
                <Badge variant='secondary'>Route Handlers</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className='fade-in-from-right delay-[400ms]'>
            <CardHeader>
              <CardTitle>Developer Experience</CardTitle>
              <CardDescription>Optimized for productivity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='default'>Hot Reload</Badge>
                <Badge variant='secondary'>ESLint</Badge>
                <Badge variant='secondary'>Prettier</Badge>
                <Badge variant='secondary'>Type Safety</Badge>
                <Badge variant='secondary'>Form Validation</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
