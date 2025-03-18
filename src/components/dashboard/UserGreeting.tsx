
import React from 'react';
import { Award } from 'lucide-react';

const UserGreeting: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-homebase text-white p-1.5 rounded-md">
          <Award className="h-5 w-5" />
        </div>
        <span className="text-homebase font-medium">Premium Member</span>
      </div>
      <h1 className="text-3xl font-display font-semibold tracking-tight">Welcome back, Alex</h1>
      <p className="text-muted-foreground mt-1">Here's what's happening with your home today.</p>
    </div>
  );
};

export default UserGreeting;
