
import React from 'react';
import HomeValueChart from '@/components/dashboard/HomeValueChart';
import NotificationCard from '@/components/dashboard/NotificationCard';
import { useFeatureFlags } from '@/contexts/FeatureFlagContext';

const ChartSection: React.FC = () => {
  const { isFeatureEnabled } = useFeatureFlags();
  
  // Sample notifications data
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
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {isFeatureEnabled('home-value-tracking') && (
        <HomeValueChart className="lg:col-span-2" />
      )}
      
      {isFeatureEnabled('notifications') && (
        <NotificationCard notifications={notifications} />
      )}
    </div>
  );
};

export default ChartSection;
