'use client';

import { useState } from 'react';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const signupSchema = z
  .object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onLoginSubmit = (data: LoginFormValues) => {
    // Add your authentication logic here
    console.log({ data, isLogin: true });
  };

  const onSignupSubmit = (data: SignupFormValues) => {
    // Add your authentication logic here
    console.log({ data, isLogin: false });
  };

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
    loginForm.reset();
    signupForm.reset();
  };

  return (
    <div className='flex min-h-screen'>
      {/* Left Side - Logo */}
      <div
        className='hidden lg:flex lg:w-1/2 bg-primary/5 items-center justify-center p-12'
      >
        <div className='text-center space-y-6'>
          <Logo iconSize={40} className='mx-auto text-4xl' />
          <p className='text-muted-foreground text-lg max-w-md'>
            Welcome to our platform. Sign in to access your account and explore amazing
            features.
          </p>
        </div>
      </div>

      {/* Right Side - Login/Signup Form */}
      <div className='flex w-full lg:w-1/2 items-center justify-center p-6 sm:p-12'>
        <Card className='w-full max-w-md'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>
              {isLogin ? 'Welcome back' : 'Create an account'}
            </CardTitle>
            <CardDescription>
              {isLogin
                ? 'Enter your credentials to sign in to your account'
                : 'Enter your information to create a new account'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLogin ? (
              <Form {...loginForm}>
                <form
                  onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                  className='space-y-4'
                >
                  <FormField
                    control={loginForm.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='m@example.com'
                            autoComplete='email'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type='password'
                            placeholder='Enter password'
                            autoComplete='current-password'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='flex items-center justify-end'>
                    <Link
                      href='/forgot-password'
                      className='text-sm text-primary hover:underline'
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Button type='submit' className='w-full'>
                    Sign In
                  </Button>
                </form>
              </Form>
            ) : (
              <Form {...signupForm}>
                <form
                  onSubmit={signupForm.handleSubmit(onSignupSubmit)}
                  className='space-y-4'
                >
                  <FormField
                    control={signupForm.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='m@example.com'
                            autoComplete='email'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signupForm.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type='password'
                            placeholder='Enter password'
                            autoComplete='new-password'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signupForm.control}
                    name='confirmPassword'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type='password'
                            placeholder='Confirm password'
                            autoComplete='new-password'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='submit' className='w-full'>
                    Sign Up
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <div className='text-sm text-center text-muted-foreground'>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={handleToggleMode}
                className='text-primary hover:underline font-medium'
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
