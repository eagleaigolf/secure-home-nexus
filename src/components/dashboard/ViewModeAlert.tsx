
import React from 'react';
import { ViewMode } from '@/contexts/FeatureFlagContext';

interface ViewModeAlertProps {
  viewMode: ViewMode;
}

const ViewModeAlert: React.FC<ViewModeAlertProps> = ({ viewMode }) => {
  if (viewMode === 'mvp') {
    return (
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-700">
        <div className="font-medium">MVP View Active</div>
        <p className="text-sm">You're viewing the Minimum Viable Product version with essential features only.</p>
      </div>
    );
  }

  if (viewMode === 'full') {
    return (
      <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-md text-purple-700">
        <div className="font-medium">Full Vision View Active</div>
        <p className="text-sm">You're viewing the complete vision with all planned features.</p>
      </div>
    );
  }

  return null;
};

export default ViewModeAlert;
