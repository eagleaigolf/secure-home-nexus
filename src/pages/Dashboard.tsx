import React, { useState } from 'react';
import { ArrowUpRight, Home, Shield, CreditCard, Calendar, ThermometerSnowflake, X, BellRing } from 'lucide-react';
import OverviewCard from '@/components/dashboard/OverviewCard';
import HomeValueChart from '@/components/dashboard/HomeValueChart';
import NotificationCard from '@/components/dashboard/NotificationCard';
import ApplianceTracker from '@/components/dashboard/ApplianceTracker';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Dashboard: React.FC = () => {
  const { toast } = useToast();
  const [showWinterAlert, setShowWinterAlert] = useState(true);
  
  const notifications = [
    {
      id: '1',
      title: 'Winter HVAC Tune-Up',
      message: 'Schedule your pre-winter HVAC maintenance before temperatures drop for optimal performance.',
      type: 'weather' as const,
      date: 'Today',
      read: false,
      action: {
        label: 'Schedule service',
        url: '#'
      }
    },
    {
      id: '2',
      title: 'Contract Renewal Approaching',
      message: 'Your Sears Protect warranty for your refrigerator expires in 30 days.',
      type: 'contract' as const,
      date: '2 days ago',
      read: false,
      action: {
        label: 'Renew now',
        url: '#'
      }
    },
    {
      id: '3',
      title: 'Special Financing Available',
      message: 'You pre-qualify for 0% APR financing on appliance purchases over $499.',
      type: 'financial' as const,
      date: '4 days ago',
      read: true,
      action: {
        label: 'View offer',
        url: '#'
      }
    }
  ];

  const dismissAlert = () => {
    setShowWinterAlert(false);
    toast({
      title: "Alert dismissed",
      description: "You can find this information in your notifications.",
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-display font-semibold tracking-tight">Welcome back, Alex</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening with your home today.</p>
      </div>
      
      {showWinterAlert && (
        <div className="mb-8 animate-fade-in bg-gradient-to-r from-homebase to-blue-700 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative">
            <div className="absolute top-3 right-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 rounded-full bg-white/20 hover:bg-white/30 text-white"
                onClick={dismissAlert}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 p-3 bg-white rounded-full shadow-md">
                <ThermometerSnowflake className="h-6 w-6 text-homebase" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <BellRing className="h-4 w-4 text-amber-200" />
                  <h3 className="text-xl font-medium text-white">Winter Weather Alert</h3>
                </div>
                <p className="text-white/90">Cold temperatures expected next week. Is your home ready?</p>
              </div>
            </div>
            <Button className="bg-white text-homebase hover:bg-white/90 hover:text-homebase-dark shadow-md border border-white/20 flex items-center gap-1.5 min-w-40 mt-2 md:mt-0">
              Winterize Checklist
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 stagger-children">
        <OverviewCard
          title="Home Value"
          value={380000}
          trend="up"
          trendValue="+2.1%"
          type="currency"
          icon={<Home className="h-5 w-5" />}
        />
        <OverviewCard
          title="Active Contracts"
          value={3}
          type="number"
          icon={<Shield className="h-5 w-5" />}
        />
        <OverviewCard
          title="Available Credit"
          value={5000}
          type="currency"
          icon={<CreditCard className="h-5 w-5" />}
        />
        <OverviewCard
          title="Upcoming Services"
          value={2}
          type="number"
          alert={true}
          alertMessage="HVAC tune-up recommended"
          icon={<Calendar className="h-5 w-5" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <HomeValueChart className="lg:col-span-2" />
        <NotificationCard notifications={notifications} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ApplianceTracker />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-lg border p-5 transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-homebase/10 text-homebase rounded">
              <Shield className="h-5 w-5" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">Sears Protect</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Manage warranties and file claims</p>
          <Link to="/protect">
            <Button variant="ghost" className="w-full justify-between">
              View Protection
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg border p-5 transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-homebase/10 text-homebase rounded">
              <CreditCard className="h-5 w-5" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">Financial Services</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Payment options and financing</p>
          <Link to="/financial">
            <Button variant="ghost" className="w-full justify-between">
              Explore Options
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg border p-5 transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-homebase/10 text-homebase rounded">
              <Home className="h-5 w-5" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">Home Management</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Track and manage your appliances</p>
          <Link to="/appliances">
            <Button variant="ghost" className="w-full justify-between">
              Manage Appliances
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
