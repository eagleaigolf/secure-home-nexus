
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '@/components/ui-custom/Card';
import AnimatedNumber from '@/components/ui-custom/AnimatedNumber';

// Sample data - would be replaced with real data
const data = [
  { month: 'Jan', value: 350000 },
  { month: 'Feb', value: 352000 },
  { month: 'Mar', value: 354000 },
  { month: 'Apr', value: 351000 },
  { month: 'May', value: 356000 },
  { month: 'Jun', value: 360000 },
  { month: 'Jul', value: 362000 },
  { month: 'Aug', value: 367000 },
  { month: 'Sep', value: 371000 },
  { month: 'Oct', value: 375000 },
  { month: 'Nov', value: 378000 },
  { month: 'Dec', value: 380000 },
];

interface HomeValueChartProps {
  className?: string;
}

const HomeValueChart: React.FC<HomeValueChartProps> = ({ className }) => {
  const currentValue = data[data.length - 1].value;
  const startValue = data[0].value;
  const growth = ((currentValue - startValue) / startValue) * 100;
  
  // Format as currency
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <Card variant="premium" className={className}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium">Home Value</h3>
          <p className="text-sm text-muted-foreground">12-month history</p>
        </div>
        <div className="mt-2 md:mt-0">
          <div className="text-2xl font-semibold">
            <AnimatedNumber
              value={currentValue}
              prefix="$"
              formatter={(num) => num.toLocaleString()}
            />
          </div>
          <div className="flex items-center mt-1">
            <span className="text-xs px-1.5 py-0.5 rounded bg-green-100 text-green-800">
              +{growth.toFixed(1)}%
            </span>
            <span className="text-xs text-muted-foreground ml-2">
              in the last year
            </span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="homeValueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--homebase))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--homebase))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              tickFormatter={formatCurrency}
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={80}
            />
            <Tooltip 
              formatter={(value) => [formatCurrency(value as number), 'Value']}
              contentStyle={{ 
                borderRadius: '0.5rem',
                border: '1px solid hsl(var(--border))',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--homebase))" 
              strokeWidth={2}
              fill="url(#homeValueGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default HomeValueChart;
