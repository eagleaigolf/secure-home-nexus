
import React from 'react';
import { Home, Shield, CreditCard, Calendar } from 'lucide-react';
import OverviewCard from '@/components/dashboard/OverviewCard';
import { useFeatureFlags } from '@/contexts/FeatureFlagContext';

const DashboardOverview: React.FC = () => {
  const { isFeatureEnabled } = useFeatureFlags();
  
  return (
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
        title="Member Contracts"
        value={3}
        type="number"
        icon={<Shield className="h-5 w-5" />}
      />
      {isFeatureEnabled('financial-services') && (
        <OverviewCard
          title="Member Credit"
          value={5000}
          type="currency"
          icon={<CreditCard className="h-5 w-5" />}
        />
      )}
      <OverviewCard
        title="Upcoming Services"
        value={2}
        type="number"
        alert={true}
        alertMessage="HVAC tune-up recommended"
        icon={<Calendar className="h-5 w-5" />}
      />
    </div>
  );
};

export default DashboardOverview;
