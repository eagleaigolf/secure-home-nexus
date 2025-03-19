
import React from 'react';
import { ViewMode } from '@/contexts/FeatureFlagContext';

interface ViewModeAlertProps {
  viewMode: ViewMode;
}

// This component is now empty since we display the view mode
// in the prototype controls bar above the header
const ViewModeAlert: React.FC<ViewModeAlertProps> = ({ viewMode }) => {
  // Return null to render nothing
  return null;
};

export default ViewModeAlert;
