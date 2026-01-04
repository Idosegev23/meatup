'use client';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({ children, onClick, className = '' }: AnimatedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`animated-button ${className}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}

