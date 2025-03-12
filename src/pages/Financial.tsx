
import { Helmet } from 'react-helmet';
import { DollarSign, CreditCard, PiggyBank, BarChart3 } from 'lucide-react';
import FinancialOptions from '@/components/financial/FinancialOptions';

const Financial = () => {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Financial Services | HOME BASE by Sears</title>
      </Helmet>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Financial Services</h1>
        <p className="text-muted-foreground">Manage your payment options and explore financing solutions for your home needs.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass p-6 rounded-lg shadow-soft border border-border/40 flex items-center gap-4">
          <div className="bg-homebase-light rounded-full p-3">
            <CreditCard className="h-6 w-6 text-homebase" />
          </div>
          <div>
            <h3 className="font-medium">Credit Cards</h3>
            <p className="text-sm text-muted-foreground">Explore Sears card options</p>
          </div>
        </div>
        
        <div className="glass p-6 rounded-lg shadow-soft border border-border/40 flex items-center gap-4">
          <div className="bg-homebase-light rounded-full p-3">
            <PiggyBank className="h-6 w-6 text-homebase" />
          </div>
          <div>
            <h3 className="font-medium">Buy Now, Pay Later</h3>
            <p className="text-sm text-muted-foreground">Flexible payment options</p>
          </div>
        </div>
        
        <div className="glass p-6 rounded-lg shadow-soft border border-border/40 flex items-center gap-4">
          <div className="bg-homebase-light rounded-full p-3">
            <BarChart3 className="h-6 w-6 text-homebase" />
          </div>
          <div>
            <h3 className="font-medium">Home Financing</h3>
            <p className="text-sm text-muted-foreground">Loans for big projects</p>
          </div>
        </div>
      </div>
      
      <FinancialOptions className="mb-8" />
      
      <div className="bg-gradient-to-r from-homebase-light to-blue-50 rounded-xl p-8 shadow-soft border border-border/40 mb-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to renovate or replace?</h2>
          <p className="mb-6 text-slate-700">Whether you're planning a kitchen remodel or need a new appliance, our financial solutions make it easier to get what your home needs.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-homebase text-white px-5 py-2.5 rounded-md hover:bg-homebase-dark transition-colors">
              Check Eligibility
            </button>
            <button className="border border-homebase bg-white text-homebase px-5 py-2.5 rounded-md hover:bg-homebase-light/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
