'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@/components/ui';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log({ email, password, isLogin });
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
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {!isLogin && (
                <div className='space-y-2'>
                  <Label htmlFor='confirm-password'>Confirm Password</Label>
                  <Input
                    id='confirm-password'
                    type='password'
                    placeholder='••••••••'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              {isLogin && (
                <div className='flex items-center justify-end'>
                  <Link
                    href='/forgot-password'
                    className='text-sm text-primary hover:underline'
                  >
                    Forgot password?
                  </Link>
                </div>
              )}
              <Button type='submit' className='w-full'>
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <div className='text-sm text-center text-muted-foreground'>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
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
