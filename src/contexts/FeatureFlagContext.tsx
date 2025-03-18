
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type ViewMode = 'mvp' | 'full';

interface FeatureFlagContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isFeatureEnabled: (featureName: string) => boolean;
}

// Define features for MVP vs full vision
const MVP_FEATURES = [
  'dashboard-overview', 
  'appliance-basic-tracking',
  'basic-protection',
  'basic-profile'
];

const FULL_FEATURES = [
  ...MVP_FEATURES,
  'home-value-tracking',
  'financial-services',
  'service-providers',
  'garage-management',
  'score-improvement',
  'advanced-analytics',
  'notifications',
  'member-services'
];

const FeatureFlagContext = createContext<FeatureFlagContextType | undefined>(undefined);

export const FeatureFlagProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('full');

  const isFeatureEnabled = (featureName: string): boolean => {
    if (viewMode === 'full') {
      return FULL_FEATURES.includes(featureName);
    }
    return MVP_FEATURES.includes(featureName);
  };

  return (
    <FeatureFlagContext.Provider value={{ viewMode, setViewMode, isFeatureEnabled }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlags = (): FeatureFlagContextType => {
  const context = useContext(FeatureFlagContext);
  if (context === undefined) {
    throw new Error('useFeatureFlags must be used within a FeatureFlagProvider');
  }
  return context;
};
