
import React, { useState } from 'react';
import { MapPin, ArrowRight, Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui-custom/Card';
import { Link } from 'react-router-dom';

// Service provider data by category
const serviceProviderData = {
  "Home Repair": [
    { id: 1, name: "Sears Home Services", specialty: "Appliance Repair", distance: 3.2, phone: "(800) 555-2424", logo: "sears" },
    { id: 2, name: "Mr. Handyman", specialty: "General Repair", distance: 4.5, phone: "(800) 555-6789", logo: "handyman" },
  ],
  "Outdoor": [
    { id: 3, name: "TruGreen", specialty: "Lawn Care", distance: 2.8, phone: "(800) 555-8787", logo: "trugreen" },
    { id: 4, name: "Sears Garage", specialty: "Garage Doors", distance: 5.1, phone: "(800) 555-1212", logo: "garage" },
  ],
  "Home Decor": [
    { id: 5, name: "3 Day Blinds", specialty: "Window Treatments", distance: 6.7, phone: "(800) 555-3030", logo: "blinds" },
    { id: 6, name: "Sears Carpet", specialty: "Flooring", distance: 3.9, phone: "(800) 555-4141", logo: "carpet" },
  ]
};

// Service provider categories
const categories = Object.keys(serviceProviderData);

const ServiceProviders: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [userZip, setUserZip] = useState<string>("90210");
  
  // Get providers for the active category
  const providers = serviceProviderData[activeCategory as keyof typeof serviceProviderData];

  return (
    <Card variant="premium" className="overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Local Service Providers</h3>
        <Link to="/services">
          <Button variant="ghost" size="sm" className="text-homebase hover:text-homebase-dark">
            View All <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap ${activeCategory === category ? 'bg-homebase hover:bg-homebase-dark' : ''}`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="relative hidden sm:flex items-center min-w-36">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Zip code"
            value={userZip}
            onChange={(e) => setUserZip(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-8 py-2 text-sm shadow-sm transition-colors"
          />
          <div className="absolute right-3 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 inline-block mr-1" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {providers.map((provider) => (
          <div 
            key={provider.id} 
            className="flex justify-between items-center p-3 border border-border rounded-md hover:bg-gray-50 transition-colors"
          >
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-homebase/10 rounded-md flex items-center justify-center text-homebase font-semibold">
                {provider.logo.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-medium">{provider.name}</h4>
                <p className="text-sm text-muted-foreground">{provider.specialty}</p>
                <div className="flex items-center text-xs text-homebase mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {provider.distance} miles away
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 hidden sm:flex">
                <Phone className="h-3.5 w-3.5 mr-1.5" />
                {provider.phone}
              </Button>
              <Button size="sm" className="h-8 bg-homebase hover:bg-homebase-dark sm:px-4">
                <Phone className="h-3.5 w-3.5 sm:mr-1.5" />
                <span className="hidden sm:inline">Contact</span>
              </Button>
            </div>
          </div>
        ))}
        
        <Link to="/services" className="block">
          <div className="flex items-center justify-center p-3 border border-dashed border-homebase/40 rounded-md hover:bg-homebase/5 transition-colors text-homebase cursor-pointer">
            <span>View more service providers</span>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceProviders;
