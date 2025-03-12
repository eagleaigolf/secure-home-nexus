
import React from 'react';
import { Shield, Home, Wrench, Bell, CheckCircle, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Card from '@/components/ui-custom/Card';

const ScoreImprovement: React.FC = () => {
  // Sample improvement areas - in a real app, this would be dynamic
  const improvements = [
    {
      id: 'protection',
      icon: <Shield className="h-5 w-5" />,
      title: 'Protection Coverage',
      description: 'Add protection plans to more of your appliances',
      currentScore: 60,
      potentialGain: 15,
      action: 'Add protection plans',
      link: '/protect'
    },
    {
      id: 'appliances',
      icon: <Home className="h-5 w-5" />,
      title: 'Appliance Management',
      description: 'Add all your home appliances to your dashboard',
      currentScore: 40,
      potentialGain: 20,
      action: 'Add appliances',
      link: '/appliances'
    },
    {
      id: 'maintenance',
      icon: <Wrench className="h-5 w-5" />,
      title: 'Regular Maintenance',
      description: 'Schedule recommended maintenance for your HVAC system',
      currentScore: 30,
      potentialGain: 10,
      action: 'Schedule maintenance',
      link: '/appliances'
    },
    {
      id: 'notifications',
      icon: <Bell className="h-5 w-5" />,
      title: 'Notification Settings',
      description: 'Enable maintenance and protection alerts',
      currentScore: 50,
      potentialGain: 5,
      action: 'Enable notifications',
      link: '/dashboard'
    }
  ];

  return (
    <div className="animate-fade-in px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-homebase text-white p-1.5 rounded-md">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-homebase font-medium">HomeBase Score</span>
        </div>
        <h1 className="text-3xl font-display font-semibold tracking-tight">Improve Your Score</h1>
        <p className="text-muted-foreground mt-1">Make these changes to boost your HomeBase Score and better protect your home.</p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row items-center bg-white rounded-lg border border-border p-6 gap-6">
        <div className="w-36 h-36 rounded-full border-4 border-amber-200 bg-amber-50 flex items-center justify-center text-amber-600">
          <div className="text-center">
            <div className="text-5xl font-bold">C</div>
            <div className="text-xl">72/100</div>
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-medium mb-2">Your Current Score</h2>
          <p className="text-muted-foreground mb-4">
            Your HomeBase Score reflects how well you're managing, protecting, and maintaining your home and appliances.
          </p>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Current Score</span>
                <span>72/100</span>
              </div>
              <Progress value={72} className="h-2.5" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Potential Score</span>
                <span>100/100</span>
              </div>
              <Progress value={100} className="h-2.5 bg-gray-200">
                <div className="h-full bg-green-500" style={{ width: '72%' }}></div>
                <div className="h-full bg-amber-500 opacity-50" style={{ width: '28%' }}></div>
              </Progress>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-xl font-medium mb-4">Improvement Opportunities</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {improvements.map((item) => (
          <Card key={item.id} variant="premium" className="p-4">
            <div className="flex gap-4">
              <div className="bg-homebase/10 text-homebase p-2 rounded-full h-fit">
                {item.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                
                <div className="flex justify-between text-xs mb-1">
                  <div className="flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 text-amber-500" />
                    <span>Current: {item.currentScore}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Potential gain: +{item.potentialGain} points</span>
                  </div>
                </div>
                
                <Progress value={item.currentScore} className="h-1.5 mb-3" />
                
                <Link to={item.link}>
                  <Button size="sm" className="w-full bg-homebase hover:bg-homebase-dark">
                    {item.action}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ScoreImprovement;
