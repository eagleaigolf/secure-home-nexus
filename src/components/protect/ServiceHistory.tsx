
import React from 'react';
import { Wrench, CheckCircle, Calendar, DollarSign } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { cn } from '@/lib/utils';
import AnimatedNumber from '@/components/ui-custom/AnimatedNumber';

interface ServiceEvent {
  id: string;
  appliance: string;
  date: string;
  technician: string;
  issue: string;
  resolution: string;
  cost: number;
  covered: boolean;
}

interface ServiceHistoryProps {
  events: ServiceEvent[];
  totalSaved: number;
  className?: string;
}

const ServiceHistory: React.FC<ServiceHistoryProps> = ({ 
  events, 
  totalSaved,
  className 
}) => {
  return (
    <Card variant="premium" className={className}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center">
          <div className="bg-homebase/10 text-homebase p-2 rounded mr-3">
            <Wrench className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium">Service History</h3>
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg flex items-center">
          <div className="mr-3">
            <DollarSign className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <div className="text-sm text-green-800">Total Savings</div>
            <div className="font-semibold text-green-700">
              <AnimatedNumber
                value={totalSaved}
                prefix="$"
                formatter={(num) => num.toLocaleString()}
              />
            </div>
          </div>
        </div>
      </div>
      
      {events.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No service history yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div 
              key={event.id}
              className="p-4 border border-border rounded-lg transition-all hover:shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h4 className="font-medium">{event.appliance}</h4>
                <div className="flex items-center gap-2">
                  <span className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {event.date}
                  </span>
                  {event.covered && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Covered
                    </span>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Issue</div>
                  <div className="text-sm">{event.issue}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Resolution</div>
                  <div className="text-sm">{event.resolution}</div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-muted-foreground">Technician:</span> {event.technician}
                </div>
                <div className="text-sm font-medium">
                  <span className="text-muted-foreground mr-1">Cost:</span>
                  ${event.cost.toLocaleString()}
                  {event.covered && (
                    <span className="ml-1 text-green-600">
                      (Saved)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ServiceHistory;
