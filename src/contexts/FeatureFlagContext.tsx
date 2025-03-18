
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type ViewMode = 'mvp' | 'full';

interface FeatureFlagContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isFeatureEnabled: (featureName: string) => boolean;
  toggleFeature: (featureName: string) => void;
  enabledFeatures: string[];
  setEnabledFeatures: (features: string[]) => void;
  MVP_FEATURES: string[];
  FULL_FEATURES: string[];
}

// Define features for MVP vs full vision
export const MVP_FEATURES = [
  'dashboard-overview', 
  'appliance-basic-tracking',
  'basic-protection',
  'basic-profile'
];

export const FULL_FEATURES = [
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
  const [enabledFeatures, setEnabledFeatures] = useState<string[]>(FULL_FEATURES);

  // Reset enabled features when switching view modes
  const handleSetViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    setEnabledFeatures(mode === 'mvp' ? MVP_FEATURES : FULL_FEATURES);
  };

  const isFeatureEnabled = (featureName: string): boolean => {
    return enabledFeatures.includes(featureName);
  };

  const toggleFeature = (featureName: string) => {
    setEnabledFeatures(prev => {
      if (prev.includes(featureName)) {
        return prev.filter(f => f !== featureName);
      } else {
        return [...prev, featureName];
      }
    });
    
    // If we're in MVP mode and enabling a full feature, or in full mode and disabling an MVP feature,
    // we're now in a custom configuration
    if ((viewMode === 'mvp' && !MVP_FEATURES.includes(featureName)) || 
        (viewMode === 'full' && MVP_FEATURES.includes(featureName))) {
      // We don't change the mode label when customizing, just the features
    }
  };

  return (
    <FeatureFlagContext.Provider value={{ 
      viewMode, 
      setViewMode: handleSetViewMode, 
      isFeatureEnabled,
      toggleFeature,
      enabledFeatures,
      setEnabledFeatures,
      MVP_FEATURES,
      FULL_FEATURES
    }}>
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
