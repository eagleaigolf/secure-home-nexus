
import React from 'react';
import { FileText, Calendar, Wrench, ArrowRight, ShoppingCart, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui-custom/Card';
import { Link } from 'react-router-dom';

// Sample data for appliances
const appliances = [
  {
    id: '1',
    name: 'Refrigerator',
    brand: 'Kenmore',
    model: 'Elite 795.7205',
    nextMaintenance: 'Clean coils - Dec 15, 2023',
    status: 'good',
  },
  {
    id: '2',
    name: 'Washer',
    brand: 'Kenmore',
    model: '28132 Top-Load',
    nextMaintenance: 'Clean filter - Nov 30, 2023',
    status: 'fair',
  },
  {
    id: '3',
    name: 'HVAC System',
    brand: 'Carrier',
    model: 'Infinity 24ANB1',
    nextMaintenance: 'Winter tune-up - Nov 25, 2023',
    status: 'needs-attention',
  }
];

const ApplianceTracker: React.FC = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good':
        return <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Good</span>;
      case 'fair':
        return <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">Fair</span>;
      case 'needs-attention':
        return <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">Needs Attention</span>;
      default:
        return null;
    }
  };

  return (
    <Card variant="premium" className="overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Your Appliances</h3>
        <Link to="/appliances">
          <Button variant="ghost" size="sm" className="text-homebase hover:text-homebase-dark">
            View All <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>

      <div className="space-y-3">
        {appliances.map((appliance) => (
          <div 
            key={appliance.id} 
            className="flex justify-between items-center p-3 border border-border rounded-md hover:bg-gray-50 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{appliance.name}</h4>
                {getStatusBadge(appliance.status)}
              </div>
              <p className="text-sm text-muted-foreground">{appliance.brand} • {appliance.model}</p>
              <div className="flex items-center text-xs text-homebase mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                {appliance.nextMaintenance}
              </div>
            </div>
            <div className="flex gap-2">
              <Link to={`/appliances/upgrade?appliance=${appliance.id}`}>
                <Button size="sm" variant="outline" className="h-8 px-2">
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span className="sr-only md:not-sr-only md:ml-1.5">Replace / Upgrade</span>
                </Button>
              </Link>
              <Button size="sm" variant="outline" className="h-8 px-2">
                <FileText className="h-3.5 w-3.5" />
                <span className="sr-only md:not-sr-only md:ml-1.5">Manual</span>
              </Button>
              <Button size="sm" variant="outline" className="h-8 px-2">
                <Wrench className="h-3.5 w-3.5" />
                <span className="sr-only md:not-sr-only md:ml-1.5">Service</span>
              </Button>
            </div>
          </div>
        ))}
        
        <Link to="/appliances" className="block">
          <div className="flex items-center justify-center p-3 border border-dashed border-homebase/40 rounded-md hover:bg-homebase/5 transition-colors text-homebase cursor-pointer">
            <Plus className="h-4 w-4 mr-2" />
            <span>Add an appliance</span>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default ApplianceTracker;
