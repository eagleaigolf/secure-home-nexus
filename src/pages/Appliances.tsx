
import React from 'react';
import { Settings, Plus, Download, Shield, ShieldCheck, ShieldOff, AirVent, Waves, RotateCw, Refrigerator } from 'lucide-react';
import ApplianceCard from '@/components/appliances/ApplianceCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Card from '@/components/ui-custom/Card';
import { Badge } from '@/components/ui/badge';

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
      isProtected: true,
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
      isProtected: true,
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
      isProtected: true,
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
      isProtected: true,
      nextMaintenance: {
        type: 'Clean filter',
        date: 'Dec 20, 2023'
      }
    },
    {
      id: '5',
      name: 'Microwave',
      brand: 'Kenmore',
      model: '2215 Countertop',
      serialNumber: 'KM5566778899',
      purchaseDate: 'January 5, 2022',
      warrantyExpiration: 'January 5, 2024',
      status: 'good' as const,
      lifeRemaining: 65,
      isProtected: false,
      nextMaintenance: {
        type: 'Clean interior',
        date: 'Dec 1, 2023'
      }
    }
  ];

  // Types of appliances the user could add
  const suggestedAppliances = [
    { id: 'hvac', name: 'HVAC System', icon: <AirVent className="h-10 w-10 text-muted-foreground/50" /> },
    { id: 'water-softener', name: 'Water Softener', icon: <Waves className="h-10 w-10 text-muted-foreground/50" /> },
    { id: 'dryer', name: 'Dryer', icon: <RotateCw className="h-10 w-10 text-muted-foreground/50" /> },
    { id: 'fridge', name: 'Refrigerator', icon: <Refrigerator className="h-10 w-10 text-muted-foreground/50" /> }
  ];

  return (
    <div className="animate-fade-in px-4 sm:px-6 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto">
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
              <TabsTrigger value="protected">Protected</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {appliances.map((appliance) => (
          <ApplianceCard 
            key={appliance.id} 
            appliance={{
              ...appliance,
              isProtected: appliance.isProtected
            }} 
          />
        ))}
        
        <h3 className="lg:col-span-2 text-lg font-medium mt-4 mb-2">Suggested Appliances to Add</h3>
        
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {suggestedAppliances.map((appliance) => (
            <Card 
              key={appliance.id} 
              variant="outline" 
              className="p-6 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer"
            >
              {appliance.icon}
              <h3 className="mt-3 mb-1 font-medium">{appliance.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">Click to add to inventory</p>
              <Button variant="outline" size="sm" className="mt-auto">
                <Plus className="h-3.5 w-3.5 mr-1.5" />
                Add {appliance.name}
              </Button>
            </Card>
          ))}
        </div>
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
