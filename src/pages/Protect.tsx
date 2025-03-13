
import React from 'react';
import { Shield, Check, Sparkles, Share2 } from 'lucide-react';
import ProtectContract from '@/components/protect/ProtectContract';
import ServiceHistory from '@/components/protect/ServiceHistory';
import MonthlyBilling from '@/components/protect/MonthlyBilling';
import Card from '@/components/ui-custom/Card';
import AnimatedNumber from '@/components/ui-custom/AnimatedNumber';
import { Button } from '@/components/ui/button';

const Protect: React.FC = () => {
  // Sample contract data
  const contract = {
    id: '1',
    name: 'Home Appliances Protection',
    type: 'Comprehensive Coverage',
    coverageItems: [
      'Refrigerator',
      'Dishwasher',
      'Washer & Dryer',
      'Range/Oven',
      'HVAC System'
    ],
    status: 'active' as const,
    startDate: 'Jan 15, 2023',
    endDate: 'Jan 15, 2024',
    daysRemaining: 145,
    percentRemaining: 40
  };
  
  // Sample service history events
  const serviceEvents = [
    {
      id: '1',
      appliance: 'Refrigerator',
      date: 'Oct 12, 2023',
      technician: 'Mike Johnson',
      issue: 'Ice maker not functioning properly',
      resolution: 'Replaced water inlet valve and filter',
      cost: 285,
      covered: true
    },
    {
      id: '2',
      appliance: 'HVAC System',
      date: 'July 22, 2023',
      technician: 'Sarah Williams',
      issue: 'AC not cooling effectively',
      resolution: 'Recharged refrigerant and cleaned condenser',
      cost: 420,
      covered: true
    }
  ];
  
  // Calculate total savings
  const totalSaved = serviceEvents.reduce((total, event) => 
    event.covered ? total + event.cost : total, 0
  );
  
  // Calculate annual contract cost (just for display)
  const annualCost = 249.99;
  
  // Calculate savings ratio
  const savingsRatio = totalSaved / annualCost;

  // Sample monthly plan data
  const monthlyPlan = {
    name: 'Home Appliances Protection Plan',
    amount: 20.83,
    dueDate: 'Nov 15, 2023',
    autoPayEnabled: true,
    discountAmount: 1.04 // 5% discount
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="inline-block bg-homebase/10 text-homebase px-2.5 py-1 rounded text-sm font-medium mb-2">
          Sears Protect
        </div>
        <h1 className="text-3xl font-display font-semibold tracking-tight">Your Protection Plan</h1>
        <p className="text-muted-foreground mt-1">Manage your warranty coverage and service history.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ProtectContract contract={contract} />
        </div>
        
        <MonthlyBilling plan={monthlyPlan} />
      </div>
      
      {/* Protection Value Card - Moved here between contract and service history */}
      <div className="mb-8">
        <Card variant="premium" className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Protection Value</h2>
            <div className="text-3xl font-bold mb-3 text-green-600">
              <AnimatedNumber
                value={totalSaved}
                prefix="$"
                formatter={(num) => num.toLocaleString()}
              />
            </div>
            <p className="text-muted-foreground mb-4">Total savings with Sears Protect</p>
            <div className="flex justify-center items-center gap-2 text-sm font-medium">
              <span>Plan cost:</span>
              <span className="text-muted-foreground">${annualCost}/year</span>
            </div>
            <div className="mt-2 text-sm">
              <span className="text-green-600 font-medium">{savingsRatio.toFixed(1)}x</span>
              <span className="text-muted-foreground ml-1">return on investment</span>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Service History - Now after the Protection Value card */}
      <div className="mb-8">
        <ServiceHistory 
          events={serviceEvents} 
          totalSaved={totalSaved} 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card variant="premium" className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-homebase/10 text-homebase rounded-full">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Refer a Friend</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Share the peace of mind with friends and family. They'll get one month free when they sign up.
              </p>
              <Button className="bg-homebase hover:bg-homebase-dark flex items-center gap-1.5">
                <Share2 className="h-4 w-4" />
                Share Referral Link
              </Button>
            </div>
          </div>
        </Card>
        
        <Card variant="premium" className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-homebase/10 text-homebase rounded-full">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Upgrade Your Protection</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                Add more coverage or extend your existing protection plan for additional peace of mind.
              </p>
              <Button variant="outline" className="w-full">
                View Upgrade Options
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Protect;
