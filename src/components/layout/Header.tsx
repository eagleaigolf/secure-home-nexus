
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Bell, User, ShoppingBag, Car, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useFeatureFlags } from '@/contexts/FeatureFlagContext';

const Header = () => {
  const location = useLocation();
  
  // Get current page title
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === '/') return 'Home';
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/protect') return 'Protect';
    if (path === '/appliances') return 'Appliances';
    if (path === '/financial') return 'Financial Services';
    if (path === '/buy') return 'Shop Appliances';
    if (path === '/garage') return 'Garage';
    
    return path.charAt(1).toUpperCase() + path.slice(2);
  };

  return (
    <header className="border-b border-border/40 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5 text-homebase" />
            <span className="font-bold text-xl">HOMEBASE</span>
            <span className="text-xs text-muted-foreground mt-0.5">by Sears</span>
          </Link>
          
          <div className="hidden md:block ml-8 text-lg font-medium">
            {getPageTitle()}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/dashboard">
              <Button 
                variant={location.pathname === '/dashboard' ? 'default' : 'ghost'} 
                className={cn(
                  location.pathname === '/dashboard' ? 'bg-homebase hover:bg-homebase-dark' : ''
                )}
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/protect">
              <Button 
                variant={location.pathname === '/protect' ? 'default' : 'ghost'}
                className={cn(
                  location.pathname === '/protect' ? 'bg-homebase hover:bg-homebase-dark' : ''
                )}
              >
                Protect
              </Button>
            </Link>
            <Link to="/appliances">
              <Button 
                variant={location.pathname === '/appliances' ? 'default' : 'ghost'}
                className={cn(
                  location.pathname === '/appliances' ? 'bg-homebase hover:bg-homebase-dark' : ''
                )}
              >
                Appliances
              </Button>
            </Link>
            <Link to="/garage">
              <Button 
                variant={location.pathname === '/garage' ? 'default' : 'ghost'}
                className={cn(
                  location.pathname === '/garage' ? 'bg-homebase hover:bg-homebase-dark' : ''
                )}
              >
                <Car className="h-4 w-4 mr-1" />
                Garage
              </Button>
            </Link>
            <Link to="/buy">
              <Button 
                variant={location.pathname === '/buy' ? 'default' : 'ghost'}
                className={cn(
                  location.pathname === '/buy' ? 'bg-homebase hover:bg-homebase-dark' : ''
                )}
              >
                <ShoppingBag className="h-4 w-4 mr-1" />
                Buy
              </Button>
            </Link>
            <Link to="/financial">
              <Button 
                variant={location.pathname === '/financial' ? 'default' : 'ghost'}
                className={cn(
                  location.pathname === '/financial' ? 'bg-homebase hover:bg-homebase-dark' : ''
                )}
              >
                Financial
              </Button>
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-homebase rounded-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px] p-4">
                <div className="mb-2 font-medium">Notifications</div>
                <div className="space-y-2">
                  <div className="text-sm p-2 rounded-md bg-secondary hover:bg-secondary/80 cursor-pointer transition-colors">
                    <div className="font-medium">HVAC Maintenance Reminder</div>
                    <div className="text-muted-foreground text-xs mt-1">
                      Schedule your pre-winter HVAC tune-up before temperatures drop.
                    </div>
                  </div>
                  <div className="text-sm p-2 rounded-md bg-secondary hover:bg-secondary/80 cursor-pointer transition-colors">
                    <div className="font-medium">Contract Renewal Alert</div>
                    <div className="text-muted-foreground text-xs mt-1">
                      Your Sears Protect contract expires in 30 days.
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-full bg-homebase text-white hover:bg-homebase-dark"
                >
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
