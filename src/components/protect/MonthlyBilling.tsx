
import React from 'react';
import { Calendar, CreditCard, BadgeDollarSign, ArrowDown, Info } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MonthlyBillingProps {
  className?: string;
  plan: {
    name: string;
    amount: number;
    dueDate: string;
    autoPayEnabled: boolean;
    discountAmount?: number;
  };
}

const MonthlyBilling: React.FC<MonthlyBillingProps> = ({ className, plan }) => {
  const cardDiscount = plan.discountAmount || 0;
  const totalAfterDiscount = plan.amount - cardDiscount;

  return (
    <Card variant="premium" className={cn(className, "overflow-hidden")}>
      <div className="flex items-center justify-between p-5 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div className="bg-homebase/10 text-homebase p-2.5 rounded-full">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Monthly Payment</h3>
            <p className="text-sm text-muted-foreground">
              {plan.autoPayEnabled ? 'Auto-pay enabled' : 'Due soon'}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold">${plan.amount.toFixed(2)}</div>
          <div className="text-sm text-muted-foreground">Due {plan.dueDate}</div>
        </div>
      </div>

      <div className="p-5 bg-muted/30">
        <div className="rounded-lg border border-dashed border-homebase bg-homebase/5 p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-homebase text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
            SPECIAL OFFER
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-homebase/10 text-homebase p-2 rounded-full">
              <CreditCard className="h-5 w-5" />
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-homebase mb-1">Save with SYW Mastercard</h4>
              <p className="text-sm mb-3">
                Apply for a Shop Your Way Mastercard and save 5% on monthly home protection plans.
              </p>
              
              {cardDiscount > 0 && (
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-md text-sm mb-3">
                  <ArrowDown className="h-4 w-4" />
                  <span>-${cardDiscount.toFixed(2)} off this bill with SYW card</span>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button className="bg-homebase hover:bg-homebase-dark text-sm h-8">
                  Apply Now
                </Button>
                <Button variant="outline" className="text-sm h-8" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm">Plan total</span>
          <span>${plan.amount.toFixed(2)}</span>
        </div>
        
        {cardDiscount > 0 && (
          <div className="flex justify-between items-center mb-3 text-green-600">
            <span className="text-sm flex items-center gap-1">
              <BadgeDollarSign className="h-4 w-4" />
              SYW Mastercard discount
            </span>
            <span>-${cardDiscount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center font-medium pt-3 border-t">
          <span>Total due</span>
          <span>${totalAfterDiscount.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1 justify-end">
          <Info className="h-3 w-3" />
          <span>Due on {plan.dueDate}</span>
        </div>
        
        <Button className="w-full mt-4">
          Pay Now
        </Button>
      </div>
    </Card>
  );
};

export default MonthlyBilling;
