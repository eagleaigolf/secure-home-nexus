
import React, { useState } from 'react';
import { CreditCard, Calendar, DollarSign, Percent, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FinancialOption {
  id: string;
  name: string;
  description: string;
  interestRate?: string;
  termLength?: string;
  minAmount?: string;
  maxAmount?: string;
  features: string[];
  ideal: string;
  action: {
    label: string;
    url: string;
  };
}

interface FinancialOptionsProps {
  className?: string;
}

const FinancialOptions: React.FC<FinancialOptionsProps> = ({ className }) => {
  // Sample data
  const creditOptions: FinancialOption[] = [
    {
      id: 'credit-sears',
      name: 'Sears Card',
      description: 'Store card with special financing on Sears purchases',
      interestRate: '26.99% variable APR',
      features: [
        'No annual fee',
        'Special financing on Sears purchases',
        'Exclusive cardholder events'
      ],
      ideal: 'Frequent Sears shoppers',
      action: {
        label: 'Apply Now',
        url: '#'
      }
    },
    {
      id: 'credit-mastercard',
      name: 'Sears Mastercard',
      description: 'Use anywhere Mastercard is accepted with rewards on purchases',
      interestRate: '24.99% variable APR',
      features: [
        'No annual fee',
        '3% cash back on groceries',
        '2% cash back on gas',
        '1% cash back on everything else'
      ],
      ideal: 'Everyday shoppers seeking rewards',
      action: {
        label: 'Apply Now',
        url: '#'
      }
    }
  ];
  
  const bnplOptions: FinancialOption[] = [
    {
      id: 'bnpl-standard',
      name: 'Pay in 4',
      description: 'Split your purchase into 4 interest-free payments',
      termLength: '6 weeks',
      minAmount: '$35',
      maxAmount: '$1,000',
      features: [
        'No interest or fees (if paid on time)',
        'Automatic payments every 2 weeks',
        'Quick approval decision'
      ],
      ideal: 'Smaller everyday purchases',
      action: {
        label: 'Learn More',
        url: '#'
      }
    },
    {
      id: 'bnpl-monthly',
      name: 'Monthly Payments',
      description: 'Larger purchases with longer payment terms',
      interestRate: '0% for qualifying customers',
      termLength: '3-24 months',
      minAmount: '$500',
      maxAmount: '$10,000',
      features: [
        'Fixed monthly payments',
        'Longer terms for large purchases',
        'Early payoff available'
      ],
      ideal: 'Major home improvements and appliances',
      action: {
        label: 'Learn More',
        url: '#'
      }
    }
  ];
  
  const financingOptions: FinancialOption[] = [
    {
      id: 'financing-home',
      name: 'Home Improvement Loan',
      description: 'Fixed-rate personal loans for home projects',
      interestRate: '7.99% - 15.99% APR',
      termLength: '3-7 years',
      minAmount: '$3,500',
      maxAmount: '$50,000',
      features: [
        'No home equity required',
        'Fixed monthly payments',
        'No prepayment penalties'
      ],
      ideal: 'Major renovations and repairs',
      action: {
        label: 'Check Rates',
        url: '#'
      }
    },
    {
      id: 'financing-heloc',
      name: 'Home Equity Line of Credit',
      description: 'Use your home\'s equity for flexible financing',
      interestRate: 'Starting at 6.75% variable APR',
      termLength: 'Up to 30 years',
      minAmount: '$10,000',
      maxAmount: 'Based on equity',
      features: [
        'Only pay interest on what you use',
        'Potential tax benefits (consult tax advisor)',
        'Access funds as needed'
      ],
      ideal: 'Ongoing home improvements',
      action: {
        label: 'Check Eligibility',
        url: '#'
      }
    }
  ];
  
  // Active tab state
  const [activeTab, setActiveTab] = useState('credit');

  return (
    <Card variant="premium" className={className}>
      <h3 className="text-lg font-medium mb-5">Payment & Financing Options</h3>
      
      <Tabs defaultValue="credit" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="credit" className="flex items-center gap-1">
            <CreditCard className="h-4 w-4" />
            <span className="hidden md:inline">Credit</span>
          </TabsTrigger>
          <TabsTrigger value="bnpl" className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="hidden md:inline">Pay Later</span>
          </TabsTrigger>
          <TabsTrigger value="financing" className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span className="hidden md:inline">Financing</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="credit" className="space-y-4">
          {creditOptions.map((option) => (
            <div 
              key={option.id} 
              className="border border-border rounded-lg p-4 transition-all hover:shadow-sm"
            >
              <h4 className="font-medium text-base">{option.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
              
              {option.interestRate && (
                <div className="flex items-center gap-1.5 mt-3">
                  <Percent className="h-4 w-4 text-homebase" />
                  <span className="text-sm">{option.interestRate}</span>
                </div>
              )}
              
              <div className="mt-4">
                <div className="text-xs text-muted-foreground mb-2">Features:</div>
                <ul className="space-y-1">
                  {option.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 pt-3 border-t border-border flex justify-between">
                <div className="text-xs">
                  <span className="text-muted-foreground">Best for:</span>
                  <span className="font-medium ml-1">{option.ideal}</span>
                </div>
                <Button 
                  size="sm" 
                  className="text-xs bg-homebase hover:bg-homebase-dark flex items-center gap-1"
                >
                  {option.action.label}
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="bnpl" className="space-y-4">
          {bnplOptions.map((option) => (
            <div 
              key={option.id} 
              className="border border-border rounded-lg p-4 transition-all hover:shadow-sm"
            >
              <h4 className="font-medium text-base">{option.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
              
              <div className="grid grid-cols-2 gap-2 mt-3">
                {option.termLength && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-homebase" />
                    <span className="text-sm">{option.termLength}</span>
                  </div>
                )}
                
                {option.interestRate && (
                  <div className="flex items-center gap-1.5">
                    <Percent className="h-4 w-4 text-homebase" />
                    <span className="text-sm">{option.interestRate}</span>
                  </div>
                )}
                
                {option.minAmount && option.maxAmount && (
                  <div className="flex items-center gap-1.5 col-span-2">
                    <DollarSign className="h-4 w-4 text-homebase" />
                    <span className="text-sm">{option.minAmount} - {option.maxAmount}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <div className="text-xs text-muted-foreground mb-2">Features:</div>
                <ul className="space-y-1">
                  {option.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 pt-3 border-t border-border flex justify-between">
                <div className="text-xs">
                  <span className="text-muted-foreground">Best for:</span>
                  <span className="font-medium ml-1">{option.ideal}</span>
                </div>
                <Button 
                  size="sm" 
                  className="text-xs bg-homebase hover:bg-homebase-dark flex items-center gap-1"
                >
                  {option.action.label}
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="financing" className="space-y-4">
          {financingOptions.map((option) => (
            <div 
              key={option.id} 
              className="border border-border rounded-lg p-4 transition-all hover:shadow-sm"
            >
              <h4 className="font-medium text-base">{option.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
              
              <div className="grid grid-cols-2 gap-2 mt-3">
                {option.interestRate && (
                  <div className="flex items-center gap-1.5">
                    <Percent className="h-4 w-4 text-homebase" />
                    <span className="text-sm">{option.interestRate}</span>
                  </div>
                )}
                
                {option.termLength && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-homebase" />
                    <span className="text-sm">{option.termLength}</span>
                  </div>
                )}
                
                {option.minAmount && option.maxAmount && (
                  <div className="flex items-center gap-1.5 col-span-2">
                    <DollarSign className="h-4 w-4 text-homebase" />
                    <span className="text-sm">{option.minAmount} - {option.maxAmount}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <div className="text-xs text-muted-foreground mb-2">Features:</div>
                <ul className="space-y-1">
                  {option.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 pt-3 border-t border-border flex justify-between">
                <div className="text-xs">
                  <span className="text-muted-foreground">Best for:</span>
                  <span className="font-medium ml-1">{option.ideal}</span>
                </div>
                <Button 
                  size="sm" 
                  className="text-xs bg-homebase hover:bg-homebase-dark flex items-center gap-1"
                >
                  {option.action.label}
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default FinancialOptions;
