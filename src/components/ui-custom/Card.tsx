
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'premium' | 'glass' | 'outline';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border transition-all duration-300",
        variant === 'default' && "bg-card",
        variant === 'premium' && "bg-gradient-to-b from-white to-gray-50 shadow-card",
        variant === 'glass' && "bg-white/80 backdrop-blur-md",
        variant === 'outline' && "bg-transparent",
        padding === 'none' && "p-0",
        padding === 'sm' && "p-3",
        padding === 'md' && "p-5",
        padding === 'lg' && "p-7",
        hover && "hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
