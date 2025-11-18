'use client';

import * as React from 'react';
import { Toaster } from '@/components/ui/sonner';
import type { ToasterProps } from 'sonner';

export function ToastProvider({
  children,
  ...props
}: { children: React.ReactNode } & ToasterProps) {
  return (
    <>
      <Toaster {...props} />
      {children}
    </>
  );
}
