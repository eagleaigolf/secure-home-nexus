
import React from 'react';
import { Award, Shield, CreditCard, Home, ArrowUpRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MemberServices: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Award className="h-5 w-5 text-homebase" />
        <h3 className="text-lg font-medium">Exclusive Member Services</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-lg border border-homebase/20 p-5 transition-all hover:shadow-md hover:border-homebase/40">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-homebase/10 text-homebase rounded">
              <Shield className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-medium text-homebase">Member Exclusive</span>
            </div>
          </div>
          <h3 className="text-lg font-medium">Sears Protect</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Premium warranty coverage at member rates</p>
          <Link to="/protect">
            <Button variant="ghost" className="w-full justify-between">
              View Protection
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg border border-homebase/20 p-5 transition-all hover:shadow-md hover:border-homebase/40">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-homebase/10 text-homebase rounded">
              <CreditCard className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-medium text-homebase">Member Exclusive</span>
            </div>
          </div>
          <h3 className="text-lg font-medium">Financial Services</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Special financing options for members</p>
          <Link to="/financial">
            <Button variant="ghost" className="w-full justify-between">
              Explore Options
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg border border-homebase/20 p-5 transition-all hover:shadow-md hover:border-homebase/40">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-homebase/10 text-homebase rounded">
              <Home className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-medium text-homebase">Member Exclusive</span>
            </div>
          </div>
          <h3 className="text-lg font-medium">Home Management</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">Priority service for all appliances</p>
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

export default MemberServices;
