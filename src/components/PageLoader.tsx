'use client';

import { useEffect, useState } from 'react';

interface PageLoaderProps {
  isLoading: boolean;
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
      setFadeOut(false);
    } else if (show) {
      // Start fade out animation
      setFadeOut(true);
      const timer = setTimeout(() => {
        setShow(false);
        setFadeOut(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, show]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-charcoal transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Placeholder - will be replaced with actual logo */}
        <div className="relative w-32 h-32 mb-4">
          {/* Background outline */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            {/* Grill/flame icon outline */}
            <path
              d="M50 10 C30 10 15 25 15 45 C15 65 30 85 50 90 C70 85 85 65 85 45 C85 25 70 10 50 10"
              fill="none"
              stroke="#5C3E2B"
              strokeWidth="2"
              className="opacity-30"
            />
            {/* Inner flame shape */}
            <path
              d="M50 20 C38 25 30 38 30 50 C30 65 40 78 50 82 C60 78 70 65 70 50 C70 38 62 25 50 20"
              fill="none"
              stroke="#5C3E2B"
              strokeWidth="2"
              className="opacity-30"
            />
          </svg>
          
          {/* Animated fill overlay */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <clipPath id="flameClip">
                <path d="M50 10 C30 10 15 25 15 45 C15 65 30 85 50 90 C70 85 85 65 85 45 C85 25 70 10 50 10" />
              </clipPath>
              <linearGradient id="fillGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#B08D57" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            
            {/* Animated fill from bottom to top */}
            <g clipPath="url(#flameClip)">
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="url(#fillGradient)"
                className="animate-fill-up"
              />
            </g>
            
            {/* Outline on top */}
            <path
              d="M50 10 C30 10 15 25 15 45 C15 65 30 85 50 90 C70 85 85 65 85 45 C85 25 70 10 50 10"
              fill="none"
              stroke="#B08D57"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Text */}
        <div 
          className="text-3xl font-semibold tracking-widest text-bronze animate-pulse"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          MEATUP
        </div>

        {/* Loading dots */}
        <div className="flex gap-1 mt-4">
          <span className="w-2 h-2 bg-bronze rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-bronze rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-bronze rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fill-up {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        .animate-fill-up {
          animation: fill-up 1.2s ease-out infinite;
        }
      `}</style>
    </div>
  );
}



