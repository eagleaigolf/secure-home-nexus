
import React from 'react';
import { Settings, Plus, Download } from 'lucide-react';
import ApplianceCard from '@/components/appliances/ApplianceCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Appliances: React.FC = () => {
  // Sample appliance data
  const appliances = [
    {
      id: '1',
      name: 'Refrigerator',
      brand: 'Kenmore',
      model: 'Elite 795.7205',
      serialNumber: 'KM3829571038',
      purchaseDate: 'June 12, 2020',
      warrantyExpiration: 'June 12, 2025',
      status: 'good' as const,
      lifeRemaining: 75,
      nextMaintenance: {
        type: 'Clean condenser coils',
        date: 'Jan 15, 2024'
      }
    },
    {
      id: '2',
      name: 'Washer',
      brand: 'Kenmore',
      model: '28132 Top-Load',
      serialNumber: 'KM9876543210',
      purchaseDate: 'March 3, 2019',
      warrantyExpiration: 'March 3, 2024',
      status: 'fair' as const,
      lifeRemaining: 52,
      nextMaintenance: {
        type: 'Clean drain pump filter',
        date: 'Dec 5, 2023'
      }
    },
    {
      id: '3',
      name: 'HVAC System',
      brand: 'Carrier',
      model: 'Infinity 24ANB1',
      serialNumber: 'CA12345678',
      purchaseDate: 'July 28, 2018',
      warrantyExpiration: 'July 28, 2023',
      status: 'needs-attention' as const,
      lifeRemaining: 21,
      nextMaintenance: {
        type: 'Winter tune-up',
        date: 'Nov 30, 2023'
      },
      issues: [
        'Filter needs replacement',
        'Low refrigerant detected',
        'Warranty expired - consider renewal'
      ]
    },
    {
      id: '4',
      name: 'Dishwasher',
      brand: 'Kenmore',
      model: '13473 Built-in',
      serialNumber: 'KM1122334455',
      purchaseDate: 'October 15, 2021',
      warrantyExpiration: 'October 15, 2026',
      status: 'excellent' as const,
      lifeRemaining: 92,
      nextMaintenance: {
        type: 'Clean filter',
        date: 'Dec 20, 2023'
      }
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="inline-block bg-homebase/10 text-homebase px-2.5 py-1 rounded text-sm font-medium mb-2">
          Home Management
        </div>
        <h1 className="text-3xl font-display font-semibold tracking-tight">Your Appliances</h1>
        <p className="text-muted-foreground mt-1">Manage and monitor all your home appliances.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Button className="bg-homebase hover:bg-homebase-dark flex items-center gap-1.5">
            <Plus className="h-4 w-4" />
            Add Appliance
          </Button>
          <Button variant="outline" className="flex items-center gap-1.5">
            <Download className="h-4 w-4" />
            Export List
          </Button>
        </div>
        
        <div className="w-full sm:w-auto">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="attention">Needs Attention</TabsTrigger>
              <TabsTrigger value="warranty">Under Warranty</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {appliances.map((appliance) => (
          <ApplianceCard key={appliance.id} appliance={appliance} />
        ))}
      </div>
      
      <div className="bg-gradient-to-br from-homebase-light to-white border border-homebase/10 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="mr-4 p-3 bg-white rounded-full shadow-sm">
              <Settings className="h-6 w-6 text-homebase" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Smart Appliance Integration</h3>
              <p className="text-muted-foreground">Connect your smart appliances for real-time monitoring.</p>
            </div>
          </div>
          <Button className="bg-homebase hover:bg-homebase-dark shadow-sm">
            Connect Devices
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Appliances;
