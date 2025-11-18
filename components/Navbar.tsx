'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button, Sheet, SheetContent, SheetTrigger } from '@/components/ui';
import { ModeToggle } from './ModeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/page1', label: 'Page 1' },
  { href: '/page2', label: 'Page 2' },
  { href: '/page3', label: 'Page 3' },
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
        <Link href='/' className='text-xl font-bold'>
          Next Starter
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Navigation - Sheet */}
        <div className='md:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <div className='flex flex-col gap-6'>
                <div className='border-b pb-4'>
                  <h2 className='text-xl font-bold'>Next Starter</h2>
                </div>
                <nav className='flex flex-col gap-4'>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className='rounded-lg px-4 py-2 text-sm font-medium
                        transition-colors hover:bg-accent hover:text-accent-foreground'
                    >
                      {link.label}
                    </Link>
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
