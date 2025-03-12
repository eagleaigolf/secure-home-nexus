
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  formatter?: (value: number) => string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1000,
  prefix = '',
  suffix = '',
  className,
  formatter = (num) => num.toLocaleString()
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    // Reset animation when value changes
    setKey(prev => prev + 1);
    
    let startTimestamp: number | null = null;
    const startValue = displayValue;
    const endValue = value;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setDisplayValue(startValue + Math.floor(progress * (endValue - startValue)));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    const animationId = window.requestAnimationFrame(step);
    
    return () => window.cancelAnimationFrame(animationId);
  }, [value, duration]);

  return (
    <span key={key} className={cn("tabular-nums", className)}>
      {prefix}{formatter(displayValue)}{suffix}
    </span>
  );
};

export default AnimatedNumber;
