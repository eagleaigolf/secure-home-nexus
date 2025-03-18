
import React from 'react';
import ApplianceTracker from '@/components/dashboard/ApplianceTracker';
import ServiceProviders from '@/components/dashboard/ServiceProviders';
import { useFeatureFlags } from '@/contexts/FeatureFlagContext';

const ApplianceSection: React.FC = () => {
  const { isFeatureEnabled } = useFeatureFlags();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <ApplianceTracker />
      
      {isFeatureEnabled('service-providers') && (
        <ServiceProviders />
      )}
    </div>
  );
};

export default ApplianceSection;
