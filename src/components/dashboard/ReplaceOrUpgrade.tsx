
import React from 'react';
import { ArrowUpRight, Star, ShoppingCart, Award, ThumbsUp } from 'lucide-react';
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

const ReplaceOrUpgrade: React.FC = () => {
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
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5 text-homebase" />
          <h3 className="text-lg font-medium">Replace or Upgrade Appliances</h3>
        </div>
        <Link to="/appliances/upgrade">
          <Button variant="ghost" size="sm" className="text-homebase hover:text-homebase-dark">
            View All Options <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>

      <Card variant="default" padding="md" className="mb-4">
        <p className="text-sm text-center bg-homebase-light border border-homebase/10 text-homebase-dark p-3 rounded-md mb-4">
          Recommended by our experts to fit your space and lifestyle needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    </div>
  );
};

export default ReplaceOrUpgrade;
