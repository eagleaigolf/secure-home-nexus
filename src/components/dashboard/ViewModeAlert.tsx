
import React from 'react';
import { ViewMode } from '@/contexts/FeatureFlagContext';
import { AlertCircle, Zap } from 'lucide-react';

interface ViewModeAlertProps {
  viewMode: ViewMode;
}

const ViewModeAlert: React.FC<ViewModeAlertProps> = ({ viewMode }) => {
  if (viewMode === 'mvp') {
    return (
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-700">
        <div className="flex items-center gap-2 font-medium">
          <AlertCircle size={18} />
          <span>MVP View Active</span>
        </div>
        <p className="text-sm mt-1">You're viewing the Minimum Viable Product version with essential features only.</p>
        <p className="text-sm mt-2">
          <a href="/admin" className="underline">Visit Admin Page</a> to switch to Full Vision mode.
        </p>
      </div>
    );
  }

  if (viewMode === 'full') {
    return (
      <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-md text-purple-700">
        <div className="flex items-center gap-2 font-medium">
          <Zap size={18} />
          <span>Full Vision View Active</span>
        </div>
        <p className="text-sm mt-1">You're viewing the complete vision with all planned features.</p>
        <p className="text-sm mt-2">
          <a href="/admin" className="underline">Visit Admin Page</a> to switch to MVP mode.
        </p>
      </div>
    );
  }

  return null;
};

export default ViewModeAlert;
