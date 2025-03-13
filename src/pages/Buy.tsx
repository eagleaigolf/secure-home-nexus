
import React, { useState } from 'react';
import { Filter, Grid, List, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

// Appliance categories
const categories = [
  { id: 'refrigerators', name: 'Refrigerators', count: 324 },
  { id: 'washers', name: 'Washers', count: 186 },
  { id: 'dryers', name: 'Dryers', count: 152 },
  { id: 'ranges', name: 'Ranges', count: 94 },
  { id: 'dishwashers', name: 'Dishwashers', count: 78 },
  { id: 'microwaves', name: 'Microwaves', count: 120 },
  { id: 'freezers', name: 'Freezers', count: 43 },
  { id: 'hoods', name: 'Range Hoods', count: 31 },
];

// Sample appliance data
const appliances = [
  {
    id: '1',
    name: 'Kenmore 26.1 cu. ft. French Door Refrigerator',
    brand: 'Kenmore',
    model: 'Elite 795.7205',
    price: 1299.99,
    originalPrice: 1599.99,
    rating: 4.5,
    reviewCount: 127,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'refrigerators',
    badge: 'Sale',
    inStock: true
  },
  {
    id: '2',
    name: 'Kenmore Elite Top Load Washer with Steam',
    brand: 'Kenmore',
    model: '31633 Top-Load',
    price: 899.99,
    originalPrice: 1099.99,
    rating: 4.3,
    reviewCount: 86,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'washers',
    badge: 'Best Seller',
    inStock: true
  },
  {
    id: '3',
    name: 'Kenmore Electric Dryer with Wrinkle Guard',
    brand: 'Kenmore',
    model: '65132 Electric',
    price: 749.99,
    originalPrice: 849.99,
    rating: 4.2,
    reviewCount: 73,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'dryers',
    badge: 'Sale',
    inStock: true
  },
  {
    id: '4',
    name: 'Kenmore Electric Range with Convection Oven',
    brand: 'Kenmore',
    model: '95053 Electric',
    price: 849.99,
    originalPrice: 999.99,
    rating: 4.4,
    reviewCount: 58,
    image: 'https://images.unsplash.com/photo-1586455122341-ba7b3b3b2e51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'ranges',
    badge: null,
    inStock: true
  },
  {
    id: '5',
    name: 'Kenmore Dishwasher with PowerWave Spray Arm',
    brand: 'Kenmore',
    model: '13473 Built-in',
    price: 599.99,
    originalPrice: 699.99,
    rating: 4.6,
    reviewCount: 102,
    image: 'https://images.unsplash.com/photo-1586455014431-a6b43f4caa1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'dishwashers',
    badge: 'Top Rated',
    inStock: true
  },
  {
    id: '6',
    name: 'Kenmore Countertop Microwave',
    brand: 'Kenmore',
    model: '80333 Countertop',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.1,
    reviewCount: 45,
    image: 'https://images.unsplash.com/photo-1585659722983-a5668bfe6d60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'microwaves',
    badge: null,
    inStock: true
  },
];

const Buy = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('featured');

  // Filter appliances based on active category
  const filteredAppliances = activeCategory
    ? appliances.filter(appliance => appliance.category === activeCategory)
    : appliances;

  // Generate star rating display
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex text-yellow-400 text-sm">
        {Array(fullStars).fill('★').join('')}
        {hasHalfStar ? '½' : ''}
        {Array(5 - fullStars - (hasHalfStar ? 1 : 0)).fill('☆').join('')}
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="inline-block bg-homebase/10 text-homebase px-2.5 py-1 rounded text-sm font-medium mb-2">
          Shop
        </div>
        <h1 className="text-3xl font-display font-semibold tracking-tight">Appliances</h1>
        <p className="text-muted-foreground mt-1">Find the perfect appliances for your home from trusted brands.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Category Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                <Button 
                  variant={activeCategory === null ? "default" : "ghost"} 
                  className={`w-full justify-start ${activeCategory === null ? "bg-homebase hover:bg-homebase-dark" : ""}`}
                  onClick={() => setActiveCategory(null)}
                >
                  All Appliances
                </Button>
                {categories.map(category => (
                  <Button 
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "ghost"} 
                    className={`w-full justify-between ${activeCategory === category.id ? "bg-homebase hover:bg-homebase-dark" : ""}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs text-muted-foreground">{category.count}</span>
                  </Button>
                ))}
              </div>

              <Separator className="my-6" />

              <h3 className="font-medium mb-4">Filter By</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm mb-2">Brand</h4>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input id="brand-kenmore" type="checkbox" className="mr-2" defaultChecked />
                      <label htmlFor="brand-kenmore" className="text-sm">Kenmore</label>
                    </div>
                    <div className="flex items-center">
                      <input id="brand-whirlpool" type="checkbox" className="mr-2" />
                      <label htmlFor="brand-whirlpool" className="text-sm">Whirlpool</label>
                    </div>
                    <div className="flex items-center">
                      <input id="brand-ge" type="checkbox" className="mr-2" />
                      <label htmlFor="brand-ge" className="text-sm">GE</label>
                    </div>
                    <div className="flex items-center">
                      <input id="brand-lg" type="checkbox" className="mr-2" />
                      <label htmlFor="brand-lg" className="text-sm">LG</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm mb-2">Price Range</h4>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input id="price-1" type="checkbox" className="mr-2" />
                      <label htmlFor="price-1" className="text-sm">Under $500</label>
                    </div>
                    <div className="flex items-center">
                      <input id="price-2" type="checkbox" className="mr-2" />
                      <label htmlFor="price-2" className="text-sm">$500 - $1000</label>
                    </div>
                    <div className="flex items-center">
                      <input id="price-3" type="checkbox" className="mr-2" />
                      <label htmlFor="price-3" className="text-sm">$1000 - $2000</label>
                    </div>
                    <div className="flex items-center">
                      <input id="price-4" type="checkbox" className="mr-2" />
                      <label htmlFor="price-4" className="text-sm">$2000+</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-muted-foreground">
              Showing {filteredAppliances.length} products
            </div>
            <div className="flex items-center gap-4">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={viewMode === 'grid' ? 'bg-secondary' : ''}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={viewMode === 'list' ? 'bg-secondary' : ''}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAppliances.map(appliance => (
                <Card key={appliance.id} className="h-full flex flex-col overflow-hidden">
                  <div className="relative">
                    <img 
                      src={appliance.image} 
                      alt={appliance.name} 
                      className="w-full h-48 object-cover"
                    />
                    {appliance.badge && (
                      <Badge className="absolute top-2 left-2 bg-homebase">
                        {appliance.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="flex flex-col flex-grow p-4">
                    <div className="text-sm text-muted-foreground">{appliance.brand}</div>
                    <h3 className="font-medium line-clamp-2 mb-1">{appliance.name}</h3>
                    <div className="flex items-center mb-2">
                      {renderRating(appliance.rating)}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({appliance.reviewCount})
                      </span>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center">
                        <span className="font-semibold text-lg">${appliance.price}</span>
                        {appliance.originalPrice > appliance.price && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            ${appliance.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-homebase hover:bg-homebase-dark">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAppliances.map(appliance => (
                <Card key={appliance.id} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative sm:w-48 h-48">
                      <img 
                        src={appliance.image} 
                        alt={appliance.name} 
                        className="w-full h-full object-cover"
                      />
                      {appliance.badge && (
                        <Badge className="absolute top-2 left-2 bg-homebase">
                          {appliance.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1 p-4">
                      <div className="text-sm text-muted-foreground">{appliance.brand}</div>
                      <h3 className="font-medium mb-1">{appliance.name}</h3>
                      <div className="flex items-center mb-2">
                        {renderRating(appliance.rating)}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({appliance.reviewCount})
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Model: {appliance.model}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-semibold text-lg">${appliance.price}</span>
                          {appliance.originalPrice > appliance.price && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              ${appliance.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button className="bg-homebase hover:bg-homebase-dark">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buy;
