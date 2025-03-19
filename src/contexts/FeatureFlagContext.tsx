
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type ViewMode = 'mvp' | 'full';

// Define a feature with its metadata
export interface Feature {
  id: string;
  name: string;
  description: string;
  defaultInMVP: boolean;
  defaultInFull: boolean;
}

interface FeatureFlagContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isFeatureEnabled: (featureId: string) => boolean;
  toggleFeature: (featureId: string) => void;
  enabledFeatures: string[];
  setEnabledFeatures: (features: string[]) => void;
  features: Feature[];
  updateFeatureDefaults: (featureId: string, inMVP: boolean, inFull: boolean) => void;
  resetToDefaults: () => void;
}

// Define all features with metadata
export const ALL_FEATURES: Feature[] = [
  {
    id: 'dashboard-overview',
    name: 'Dashboard Overview',
    description: 'Basic dashboard layout and components',
    defaultInMVP: true,
    defaultInFull: true
  },
  {
    id: 'appliance-basic-tracking',
    name: 'Basic Appliance Tracking',
    description: 'Track appliances and their status',
    defaultInMVP: true,
    defaultInFull: true
  },
  {
    id: 'basic-protection',
    name: 'Basic Protection',
    description: 'Essential warranty services',
    defaultInMVP: true,
    defaultInFull: true
  },
  {
    id: 'basic-profile',
    name: 'Basic Profile',
    description: 'User profile management',
    defaultInMVP: true,
    defaultInFull: true
  },
  {
    id: 'home-value-tracking',
    name: 'Home Value Tracking',
    description: 'Monitor home value over time',
    defaultInMVP: false,
    defaultInFull: true
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Access to financing options',
    defaultInMVP: false,
    defaultInFull: true
  },
  {
    id: 'service-providers',
    name: 'Service Providers',
    description: 'Network of service providers',
    defaultInMVP: false,
    defaultInFull: true
  },
  {
    id: 'garage-management',
    name: 'Garage Management',
    description: 'Manage garage and vehicles',
    defaultInMVP: false,
    defaultInFull: true
  },
  {
    id: 'score-improvement',
    name: 'Score Improvement',
    description: 'Tips to improve HomeBase score',
    defaultInMVP: false,
    defaultInFull: true
  },
  {
    id: 'advanced-analytics',
    name: 'Advanced Analytics',
    description: 'Detailed home analytics',
    defaultInMVP: false,
    defaultInFull: true
  },
  {
    id: 'notifications',
    name: 'Notifications',
    description: 'System notifications',
    defaultInMVP: false,
    defaultInFull: true
  },
  {
    id: 'member-services',
    name: 'Member Services',
    description: 'Exclusive member services',
    defaultInMVP: false,
    defaultInFull: true
  }
];

// Helper functions to get feature IDs by mode
export const getMVPFeatureIds = (): string[] => {
  return ALL_FEATURES.filter(feature => feature.defaultInMVP).map(feature => feature.id);
};

export const getFullFeatureIds = (): string[] => {
  return ALL_FEATURES.filter(feature => feature.defaultInFull).map(feature => feature.id);
};

// For backward compatibility
export const MVP_FEATURES = getMVPFeatureIds();
export const FULL_FEATURES = getFullFeatureIds();

const FeatureFlagContext = createContext<FeatureFlagContextType | undefined>(undefined);

export const FeatureFlagProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [features, setFeatures] = useState<Feature[]>(ALL_FEATURES);
  const [viewMode, setViewMode] = useState<ViewMode>('full');
  const [enabledFeatures, setEnabledFeatures] = useState<string[]>(getFullFeatureIds());

  // Reset enabled features when switching view modes
  const handleSetViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    setEnabledFeatures(mode === 'mvp' ? getMVPFeatureIds() : getFullFeatureIds());
  };

  const isFeatureEnabled = (featureId: string): boolean => {
    return enabledFeatures.includes(featureId);
  };

  const toggleFeature = (featureId: string) => {
    setEnabledFeatures(prev => {
      if (prev.includes(featureId)) {
        return prev.filter(f => f !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  // Update a feature's default flags
  const updateFeatureDefaults = (featureId: string, inMVP: boolean, inFull: boolean) => {
    setFeatures(prevFeatures => 
      prevFeatures.map(feature => 
        feature.id === featureId 
          ? { ...feature, defaultInMVP: inMVP, defaultInFull: inFull } 
          : feature
      )
    );
  };

  // Reset to defaults based on current view mode
  const resetToDefaults = () => {
    setEnabledFeatures(viewMode === 'mvp' ? getMVPFeatureIds() : getFullFeatureIds());
  };

  return (
    <FeatureFlagContext.Provider value={{ 
      viewMode, 
      setViewMode: handleSetViewMode, 
      isFeatureEnabled,
      toggleFeature,
      enabledFeatures,
      setEnabledFeatures,
      features,
      updateFeatureDefaults,
      resetToDefaults
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
