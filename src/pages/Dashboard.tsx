
import React from 'react';
import { useFeatureFlags } from '@/contexts/FeatureFlagContext';
import UserGreeting from '@/components/dashboard/UserGreeting';
import HomeBaseScore from '@/components/dashboard/HomeBaseScore';
import WeatherAlert from '@/components/dashboard/WeatherAlert';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import ChartSection from '@/components/dashboard/ChartSection';
import ApplianceSection from '@/components/dashboard/ApplianceSection';
import MemberServices from '@/components/dashboard/MemberServices';

const Dashboard: React.FC = () => {
  const { viewMode, isFeatureEnabled } = useFeatureFlags();
  
  return (
    <div className="animate-fade-in px-4 md:px-6">
      <UserGreeting />
      
      {/* HomeBase Score - show in full vision only */}
      {isFeatureEnabled('advanced-analytics') && (
        <div className="mb-6">
          <HomeBaseScore score={72} />
        </div>
      )}
      
      <WeatherAlert />
      <DashboardOverview />
      <ChartSection />
      <ApplianceSection />
      
      {isFeatureEnabled('member-services') && (
        <MemberServices />
      )}
    </div>
  );
};

export default Dashboard;
