'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { ModeToggle } from './ModeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/tech-stack', label: 'Tech Stack' },
  { href: '/getting-started', label: 'Getting Started' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='border-b bg-background'>
      <div
        className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6
          lg:px-8'
      >
        {/* Logo */}
        <Button variant='link' asChild>
          <Link
            href='/'
            className='flex items-center gap-2 text-xl'
            onClick={() => setOpen(false)}
          >
            <Image
              src='/favicon.ico'
              alt='Logo'
              width={20}
              height={20}
              className='h-5 w-5'
            />
            Next Starter
          </Link>
        </Button>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-4 md:flex'>
          {navLinks.map((link) => (
            <Button key={link.href} variant='ghost' asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Navigation - Sheet */}
        <div className='md:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon'>
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <SheetHeader>
                <SheetTitle>
                  <Button variant='link' asChild>
                    <Link
                      href='/'
                      className='flex items-center gap-2'
                      onClick={() => setOpen(false)}
                    >
                      <Image
                        src='/favicon.ico'
                        alt='Logo'
                        width={20}
                        height={20}
                        className='h-5 w-5'
                      />
                      Next Starter
                    </Link>
                  </Button>
                </SheetTitle>
              </SheetHeader>
              <div className='flex flex-col gap-6'>
                <nav className='flex flex-col gap-4 justify-center items-center'>
                  {navLinks.map((link) => (
                    <Button key={link.href} variant='ghost' className='w-1/2' asChild>
                      <Link href={link.href} onClick={() => setOpen(false)}>
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                  <ModeToggle />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
