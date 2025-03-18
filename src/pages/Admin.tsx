
import React from 'react';
import { useFeatureFlags } from '@/contexts/FeatureFlagContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Zap } from 'lucide-react';

const Admin: React.FC = () => {
  const { viewMode, setViewMode, isFeatureEnabled } = useFeatureFlags();

  // Feature lists from context
  const mvpFeatures = [
    'dashboard-overview', 
    'appliance-basic-tracking',
    'basic-protection',
    'basic-profile'
  ];

  const fullFeatures = [
    'home-value-tracking',
    'financial-services',
    'service-providers',
    'garage-management',
    'score-improvement',
    'advanced-analytics',
    'notifications',
    'member-services'
  ];

  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Feature Flag Administration</h1>
      
      <Card className="p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">View Mode</h2>
            <p className="text-muted-foreground">Switch between MVP and Full Vision mode</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch 
                id="view-mode-switch"
                checked={viewMode === 'full'}
                onCheckedChange={(checked) => setViewMode(checked ? 'full' : 'mvp')}
              />
              <span className="font-medium">
                {viewMode === 'mvp' ? 'MVP' : 'Full Vision'}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-medium">MVP Features</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              These features are available in both MVP and Full Vision modes.
            </p>
            <ul className="space-y-2">
              {mvpFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isFeatureEnabled(feature) ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="capitalize">{feature.replace(/-/g, ' ')}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-purple-500" />
              <h3 className="text-lg font-medium">Full Vision Features</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              These additional features are only available in Full Vision mode.
            </p>
            <ul className="space-y-2">
              {fullFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isFeatureEnabled(feature) ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="capitalize">{feature.replace(/-/g, ' ')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
      
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          onClick={() => setViewMode(viewMode === 'mvp' ? 'full' : 'mvp')}
        >
          Switch to {viewMode === 'mvp' ? 'Full Vision' : 'MVP'} Mode
        </Button>
      </div>
    </div>
  );
};

export default Admin;
