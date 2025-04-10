import { useNavigate } from 'react-router-dom';
import { ArrowRight, Home, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-homebase-light/20 to-white">
      <main>
        <section className="container py-16 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Everything for your home starts here
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              For over 100 years, Sears has been the trusted foundation of American homes. Now, OneSears Control Room brings everything together.
            </p>
            <Button 
              onClick={() => navigate('/dashboard')} 
              size="lg" 
              className="bg-homebase hover:bg-homebase-dark"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
        
        <section className="container py-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Power Your Home, Your Way</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-md transition-all">
              <div className="bg-homebase-light rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-homebase" />
              </div>
              <h3 className="text-xl font-bold mb-2">Home Management</h3>
              <p className="text-muted-foreground mb-4">
                Track appliances, warranties, and property details in one central place.
              </p>
              <Button 
                onClick={() => navigate('/dashboard')} 
                variant="outline" 
                className="text-homebase border-homebase hover:bg-homebase-light/20"
              >
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-md transition-all">
              <div className="bg-homebase-light rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-homebase" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sears Protect</h3>
              <p className="text-muted-foreground mb-4">
                Protect your home and appliances with built-in warranty management and expert support.
              </p>
              <Button 
                onClick={() => navigate('/protect')} 
                variant="outline" 
                className="text-homebase border-homebase hover:bg-homebase-light/20"
              >
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-md transition-all">
              <div className="bg-homebase-light rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-homebase" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Services</h3>
              <p className="text-muted-foreground mb-4">
                From buy now, pay later to credit cards and financing solutions for your home needs.
              </p>
              <Button 
                onClick={() => navigate('/financial')} 
                variant="outline" 
                className="text-homebase border-homebase hover:bg-homebase-light/20"
              >
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </section>
        
        <section className="container py-16 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-homebase-light/80 to-blue-50 rounded-xl p-10 shadow-soft">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to take control of your home?</h2>
              <p className="text-lg mb-8">
                AmericasHomeManager.ai by Sears helps you manage, protect, and optimize your home—all in one place.
              </p>
              <Button 
                onClick={() => navigate('/dashboard')} 
                size="lg" 
                className="bg-homebase hover:bg-homebase-dark"
              >
                Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-900 text-white py-10">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Home className="h-5 w-5 text-white" />
              <span className="font-bold text-xl">ONESEARS</span>
              <span className="text-xs text-slate-400 mt-0.5">Control Room</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Support</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Sears. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
