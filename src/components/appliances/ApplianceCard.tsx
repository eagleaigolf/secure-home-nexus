
import React from 'react';
import { Settings, Calendar, AlertTriangle, CheckCircle, Wrench, FileText } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Appliance {
  id: string;
  name: string;
  brand: string;
  model: string;
  serialNumber: string;
  purchaseDate: string;
  warrantyExpiration: string;
  status: 'excellent' | 'good' | 'fair' | 'needs-attention';
  lifeRemaining: number;
  nextMaintenance?: {
    type: string;
    date: string;
  };
  issues?: string[];
}

interface ApplianceCardProps {
  appliance: Appliance;
  className?: string;
}

const ApplianceCard: React.FC<ApplianceCardProps> = ({ appliance, className }) => {
  // Status indicator styles
  const getStatusStyles = () => {
    switch (appliance.status) {
      case 'excellent':
        return "bg-green-100 text-green-800";
      case 'good':
        return "bg-blue-100 text-blue-800";
      case 'fair':
        return "bg-amber-100 text-amber-800";
      case 'needs-attention':
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = () => {
    switch (appliance.status) {
      case 'excellent':
        return <CheckCircle className="h-4 w-4" />;
      case 'good':
        return <CheckCircle className="h-4 w-4" />;
      case 'fair':
        return <AlertTriangle className="h-4 w-4" />;
      case 'needs-attention':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getStatusLabel = () => {
    return appliance.status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  const getHealthColor = () => {
    if (appliance.lifeRemaining > 75) return "bg-green-500";
    if (appliance.lifeRemaining > 50) return "bg-blue-500";
    if (appliance.lifeRemaining > 25) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <Card variant="premium" className={cn("overflow-hidden", className)}>
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="bg-homebase/10 text-homebase p-2 rounded mr-3">
            <Settings className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-medium">{appliance.name}</h3>
            <p className="text-sm text-muted-foreground">{appliance.brand} • {appliance.model}</p>
          </div>
        </div>
        
        <div className={cn(
          "px-2 py-1 rounded text-xs font-medium flex items-center gap-1",
          getStatusStyles()
        )}>
          {getStatusIcon()}
          <span>{getStatusLabel()}</span>
        </div>
      </div>
      
      <div className="mt-5">
        <div className="flex justify-between text-sm mb-1">
          <span>Appliance health</span>
          <span className="font-medium">
            {appliance.lifeRemaining}% life remaining
          </span>
        </div>
        <Progress value={appliance.lifeRemaining} className={cn("h-2", getHealthColor())} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div>
          <div className="text-xs text-muted-foreground mb-1">Serial Number</div>
          <div className="text-sm font-mono">{appliance.serialNumber}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground mb-1">Purchase Date</div>
          <div className="text-sm">{appliance.purchaseDate}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground mb-1">Warranty Until</div>
          <div className="text-sm">{appliance.warrantyExpiration}</div>
        </div>
        {appliance.nextMaintenance && (
          <div>
            <div className="text-xs text-muted-foreground mb-1">Next Maintenance</div>
            <div className="text-sm flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1.5 text-homebase" />
              {appliance.nextMaintenance.type} - {appliance.nextMaintenance.date}
            </div>
          </div>
        )}
      </div>
      
      {appliance.issues && appliance.issues.length > 0 && (
        <div className="mt-5 pt-4 border-t border-border">
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1.5">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            Issues to address
          </h4>
          <ul className="space-y-1">
            {appliance.issues.map((issue, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                - {issue}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="flex gap-3 mt-6">
        <Button className="flex-1 bg-homebase hover:bg-homebase-dark flex items-center gap-1.5">
          <Wrench className="h-4 w-4" />
          Schedule Service
        </Button>
        <Button variant="outline" className="flex-1 flex items-center gap-1.5">
          <FileText className="h-4 w-4" />
          Manual
        </Button>
      </div>
    </Card>
  );
};

export default ApplianceCard;
