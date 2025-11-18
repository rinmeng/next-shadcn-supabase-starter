import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  onClick?: () => void;
}

export function Logo({ className, iconSize = 20, showText = true, onClick }: LogoProps) {
  return (
    <Button variant='link' asChild>
      <Link
        href='/'
        className={cn('flex items-center gap-2', className)}
        onClick={onClick}
      >
        <Image
          src='/favicon.ico'
          alt='Logo'
          width={iconSize}
          height={iconSize}
          className={cn('h-5 w-5')}
          style={{ width: iconSize, height: iconSize }}
        />
        {showText && <span className={className}>Next Starter</span>}
      </Link>
    </Button>
  );
}
