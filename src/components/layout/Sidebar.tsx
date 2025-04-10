
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Shield, 
  BarChart3, 
  Settings, 
  CreditCard, 
  ChevronLeft,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const location = useLocation();
  
  const navItems = [
    { 
      icon: Home, 
      label: 'Dashboard', 
      path: '/dashboard',
      description: 'Home overview and insights'
    },
    { 
      icon: Shield, 
      label: 'Sears Protect', 
      path: '/protect',
      description: 'Warranties and protection'
    },
    { 
      icon: Settings, 
      label: 'Appliances', 
      path: '/appliances',
      description: 'Manage your appliances'
    },
    { 
      icon: CreditCard, 
      label: 'Financial', 
      path: '/financial',
      description: 'Payment and financing options'
    },
    { 
      icon: BarChart3, 
      label: 'Home Value', 
      path: '/home-value',
      description: 'Track your property value'
    }
  ];

  // Animation classes
  const sidebarClasses = cn(
    "fixed left-0 top-0 h-full bg-white z-50 flex flex-col border-r border-border",
    "transition-all duration-300 ease-in-out shadow-xl md:shadow-none",
    isOpen ? "w-64" : "w-0 md:w-16",
    "md:translate-x-0",
    !isOpen && "md:border-r md:w-16",
    !isOpen && "translate-x-[-100%] md:translate-x-0"
  );

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
          onClick={toggle}
        />
      )}
      
      <aside className={sidebarClasses}>
        {/* Logo */}
        <div className="h-16 border-b border-border flex items-center px-4 justify-between">
          <div className={cn(
            "overflow-hidden whitespace-nowrap transition-all duration-300",
            isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 md:w-auto md:opacity-100"
          )}>
            <div className="font-display font-bold text-xl tracking-tight">
              ONE<span className="text-homebase">SEARS</span>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggle}
            className={cn(
              "rounded-full transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0 hidden md:flex md:opacity-100"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Nav Items */}
        <nav className="flex-1 pt-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm group transition-all",
                  isActive 
                    ? "bg-homebase text-white" 
                    : "text-foreground hover:bg-secondary"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-all",
                  isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground"
                )} />
                <div className={cn(
                  "flex flex-col transition-all duration-300",
                  isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 md:hidden"
                )}>
                  <span className="font-medium">{item.label}</span>
                  {isOpen && (
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
        
        {/* Footer */}
        <div className="p-2 border-t border-border">
          <Button 
            variant="ghost" 
            className={cn(
              "w-full justify-start text-sm px-3 py-2",
              isOpen ? "" : "justify-center md:hidden"
            )}
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span className={cn(
              isOpen ? "opacity-100" : "opacity-0 hidden md:hidden"
            )}>
              Sign Out
            </span>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
