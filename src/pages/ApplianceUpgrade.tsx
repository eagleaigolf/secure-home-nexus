
import React from 'react';
import { ArrowUpRight, Star, ShoppingCart, Award, ThumbsUp, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui-custom/Card';
import { Link } from 'react-router-dom';

interface ApplianceOption {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  tier: 'good' | 'better' | 'best';
}

const ApplianceUpgrade: React.FC = () => {
  // Sample appliance options data
  const applianceOptions: ApplianceOption[] = [
    {
      id: '1',
      name: 'Kenmore 4.5 cu. ft. Front Load Washer',
      description: 'Energy-efficient washing with multiple cycles',
      price: 649.99,
      image: 'https://placehold.co/300x200/e0e0e0/808080?text=Washer',
      rating: 4.2,
      tier: 'good'
    },
    {
      id: '2',
      name: 'Kenmore Elite 5.2 cu. ft. Front Load Washer',
      description: 'Advanced washing technology with steam clean',
      price: 899.99,
      image: 'https://placehold.co/300x200/e0e0e0/808080?text=Elite+Washer',
      rating: 4.6,
      tier: 'better'
    },
    {
      id: '3',
      name: 'Kenmore Pro 5.8 cu. ft. Smart Front Load Washer',
      description: 'Smart home integration with premium features',
      price: 1249.99,
      image: 'https://placehold.co/300x200/e0e0e0/808080?text=Pro+Washer',
      rating: 4.9,
      tier: 'best'
    }
  ];

  const getTierIcon = (tier: 'good' | 'better' | 'best') => {
    switch (tier) {
      case 'good':
        return <ThumbsUp className="h-4 w-4 text-blue-600" />;
      case 'better':
        return <Star className="h-4 w-4 text-amber-500" />;
      case 'best':
        return <Award className="h-4 w-4 text-purple-600" />;
      default:
        return null;
    }
  };

  const getTierLabel = (tier: 'good' | 'better' | 'best') => {
    switch (tier) {
      case 'good':
        return <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">Good</span>;
      case 'better':
        return <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-medium">Better</span>;
      case 'best':
        return <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">Best</span>;
      default:
        return null;
    }
  };

  return (
    <div className="container py-6 animate-fade-in">
      <div className="mb-6">
        <Link to="/dashboard" className="text-homebase flex items-center gap-1 hover:underline mb-3">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <div className="inline-block bg-homebase/10 text-homebase px-2.5 py-1 rounded text-sm font-medium mb-2">
          Appliance Upgrade
        </div>
        <h1 className="text-3xl font-display font-semibold tracking-tight">Replace or Upgrade Your Appliances</h1>
        <p className="text-muted-foreground mt-1">Find the perfect replacement that fits your needs and budget.</p>
      </div>

      <Card variant="default" padding="md" className="mb-6">
        <p className="text-sm text-center bg-homebase-light border border-homebase/10 text-homebase-dark p-3 rounded-md mb-4">
          Recommended by our experts to fit your space and lifestyle needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applianceOptions.map((option) => (
            <div 
              key={option.id} 
              className={`border rounded-lg overflow-hidden transition-all hover:shadow-md ${
                option.tier === 'best' ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              <div className="aspect-[3/2] relative">
                <img 
                  src={option.image} 
                  alt={option.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1">
                  {getTierLabel(option.tier)}
                </div>
                {option.tier === 'best' && (
                  <div className="absolute top-0 left-0 bg-purple-600 text-white text-xs px-2 py-1">
                    RECOMMENDED
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {getTierIcon(option.tier)}
                  <p className="text-sm">{option.rating.toFixed(1)} ★</p>
                </div>
                <h4 className="font-medium leading-snug mb-1">{option.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">${option.price.toFixed(2)}</span>
                  <Button size="sm" className="bg-homebase hover:bg-homebase-dark">
                    <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card variant="outline" padding="md" className="bg-homebase-light/50">
          <h3 className="text-lg font-medium mb-2">Why upgrade with AmericasHomeManager.ai?</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 text-homebase">
                <CheckIcon className="h-4 w-4" />
              </div>
              <p className="text-sm">Expert installation by certified technicians</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-homebase">
                <CheckIcon className="h-4 w-4" />
              </div>
              <p className="text-sm">Extended warranty options available</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-homebase">
                <CheckIcon className="h-4 w-4" />
              </div>
              <p className="text-sm">Haul away and recycling of old appliances</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-homebase">
                <CheckIcon className="h-4 w-4" />
              </div>
              <p className="text-sm">Energy-efficient models that save on utility bills</p>
            </li>
          </ul>
        </Card>

        <Card variant="outline" padding="md" className="bg-homebase-light/50">
          <h3 className="text-lg font-medium mb-2">Financing options available</h3>
          <p className="text-sm mb-3">Get the appliances you need today with flexible payment options.</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-white p-2 rounded border">
              <span className="font-medium">No interest if paid in 12 months</span>
              <ArrowUpRight className="h-4 w-4 text-homebase" />
            </div>
            <div className="flex items-center justify-between bg-white p-2 rounded border">
              <span className="font-medium">Low monthly payments</span>
              <ArrowUpRight className="h-4 w-4 text-homebase" />
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">Learn more about financing</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Check icon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default ApplianceUpgrade;
