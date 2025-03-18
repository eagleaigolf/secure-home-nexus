
import React from 'react';
import { AlertTriangle, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui-custom/Card';

const WeatherAlert: React.FC = () => {
  return (
    <div className="mb-6">
      <Card 
        variant="outline" 
        padding="md" 
        className="border-amber-400/50 bg-amber-50"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="mr-4 p-3 bg-amber-100 rounded-full shadow-sm">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-amber-800 mb-1">Winter Weather Alert</h3>
              <p className="text-amber-700">Schedule your pre-winter HVAC maintenance before temperatures drop for optimal performance.</p>
            </div>
          </div>
          <Button className="bg-amber-600 text-white hover:bg-amber-700 shadow-sm flex items-center gap-1.5 min-w-40 md:mt-0">
            Schedule Service
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default WeatherAlert;
