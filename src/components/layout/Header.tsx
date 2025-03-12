
import React, { useState, useEffect } from 'react';
import { Bell, User, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current page title
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === '/') return 'Home';
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/protect') return 'Sears Protect';
    if (path === '/appliances') return 'Appliances';
    if (path === '/financial') return 'Financial Services';
    
    return path.charAt(1).toUpperCase() + path.slice(2);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-3 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-[1800px] mx-auto">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="hidden md:block text-xl font-display font-medium tracking-tight">
            {getPageTitle()}
          </div>
        </div>
        
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
    </header>
  );
};

export default Header;
