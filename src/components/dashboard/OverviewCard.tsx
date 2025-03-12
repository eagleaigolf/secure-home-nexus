
import React from 'react';
import { TrendingUp, AlertCircle, Shield } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import AnimatedNumber from '@/components/ui-custom/AnimatedNumber';
import { cn } from '@/lib/utils';

interface OverviewCardProps {
  title: string;
  value: number;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  type?: 'currency' | 'percent' | 'number';
  icon?: React.ReactNode;
  alert?: boolean;
  alertMessage?: string;
  className?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  trend = 'neutral',
  trendValue,
  type = 'number',
  icon,
  alert = false,
  alertMessage,
  className
}) => {
  const getValueFormatter = () => {
    switch (type) {
      case 'currency':
        return (num: number) => `$${num.toLocaleString()}`;
      case 'percent':
        return (num: number) => `${num}%`;
      default:
        return (num: number) => num.toLocaleString();
    }
  };
  
  const getPrefixForType = () => {
    return type === 'currency' ? '$' : '';
  };
  
  const getSuffixForType = () => {
    return type === 'percent' ? '%' : '';
  };

  return (
    <Card 
      variant="premium"
      className={cn("overflow-hidden", className)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">
            {title}
          </h3>
          <div className="mt-1 flex items-baseline">
            <div className="text-2xl font-semibold">
              <AnimatedNumber 
                value={value} 
                prefix={getPrefixForType()}
                suffix={getSuffixForType()}
                formatter={getValueFormatter()}
              />
            </div>
            
            {trendValue && (
              <span className={cn(
                "ml-2 text-xs px-1.5 py-0.5 rounded",
                trend === 'up' && "bg-green-100 text-green-800",
                trend === 'down' && "bg-red-100 text-red-800",
                trend === 'neutral' && "bg-gray-100 text-gray-800"
              )}>
                {trendValue}
              </span>
            )}
          </div>
        </div>
        
        {icon && (
          <div className="p-2 bg-homebase/10 text-homebase rounded">
            {icon}
          </div>
        )}
      </div>
      
      {alert && alertMessage && (
        <div className="mt-3 pt-3 border-t border-border flex items-center gap-1.5 text-xs text-muted-foreground">
          <AlertCircle className="h-3.5 w-3.5 text-homebase" />
          <span>{alertMessage}</span>
        </div>
      )}
    </Card>
  );
};

export default OverviewCard;
