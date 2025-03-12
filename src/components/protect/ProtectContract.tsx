
import React from 'react';
import { Shield, Clock, CheckCircle, AlertTriangle, FileText } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ProtectContractProps {
  contract: {
    id: string;
    name: string;
    type: string;
    coverageItems: string[];
    status: 'active' | 'expiring' | 'expired';
    startDate: string;
    endDate: string;
    daysRemaining: number;
    percentRemaining: number;
  };
  className?: string;
}

const ProtectContract: React.FC<ProtectContractProps> = ({ contract, className }) => {
  // Status indicator styles
  const getStatusStyles = () => {
    switch (contract.status) {
      case 'active':
        return "bg-green-100 text-green-800";
      case 'expiring':
        return "bg-amber-100 text-amber-800";
      case 'expired':
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = () => {
    switch (contract.status) {
      case 'active':
        return <CheckCircle className="h-4 w-4" />;
      case 'expiring':
        return <Clock className="h-4 w-4" />;
      case 'expired':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Card variant="premium" className={className}>
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="bg-homebase/10 text-homebase p-2 rounded mr-3">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-medium">{contract.name}</h3>
            <p className="text-sm text-muted-foreground">{contract.type}</p>
          </div>
        </div>
        
        <div className={cn(
          "px-2 py-1 rounded text-xs font-medium flex items-center gap-1",
          getStatusStyles()
        )}>
          {getStatusIcon()}
          <span>{contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}</span>
        </div>
      </div>
      
      <div className="mt-5">
        <div className="flex justify-between text-sm mb-1">
          <span>Coverage period</span>
          <span className="font-medium">
            {contract.daysRemaining} days remaining
          </span>
        </div>
        <Progress value={contract.percentRemaining} className="h-2" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{contract.startDate}</span>
          <span>{contract.endDate}</span>
        </div>
      </div>
      
      <div className="mt-5 pt-4 border-t border-border">
        <h4 className="text-sm font-medium mb-2">Coverage includes:</h4>
        <ul className="space-y-1">
          {contract.coverageItems.map((item, index) => (
            <li key={index} className="text-sm flex items-center gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-green-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex gap-3 mt-6">
        <Button className="flex-1 bg-homebase hover:bg-homebase-dark">
          File a Claim
        </Button>
        <Button variant="outline" className="flex-1 flex items-center gap-1.5">
          <FileText className="h-4 w-4" />
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default ProtectContract;
