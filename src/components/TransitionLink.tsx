'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLoading } from '@/context/LoadingContext';
import { ReactNode } from 'react';

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
  const router = useRouter();
  const { startLoading } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }
    
    // Start loading animation
    startLoading();
    
    // Small delay to show the loader, then navigate
    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}




