
import React from 'react';
import { Bell, ChevronRight, AlertCircle, ThermometerSnowflake, Calendar, CreditCard } from 'lucide-react';
import Card from '@/components/ui-custom/Card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Type definitions
type NotificationType = 'reminder' | 'alert' | 'weather' | 'contract' | 'financial';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  date: string;
  read: boolean;
  action?: {
    label: string;
    url: string;
  };
}

interface NotificationCardProps {
  notifications: Notification[];
  className?: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  notifications, 
  className 
}) => {
  // Get icon based on notification type
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'reminder':
        return <Calendar className="h-5 w-5" />;
      case 'alert':
        return <AlertCircle className="h-5 w-5" />;
      case 'weather':
        return <ThermometerSnowflake className="h-5 w-5" />;
      case 'contract':
        return <Calendar className="h-5 w-5" />;
      case 'financial':
        return <CreditCard className="h-5 w-5" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };
  
  // Get background color based on notification type
  const getIconBackground = (type: NotificationType) => {
    switch (type) {
      case 'reminder': return 'bg-blue-100 text-blue-600';
      case 'alert': return 'bg-amber-100 text-amber-600';
      case 'weather': return 'bg-sky-100 text-sky-600';
      case 'contract': return 'bg-purple-100 text-purple-600';
      case 'financial': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Card variant="premium" className={className}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Bell className="h-4 w-4 text-homebase" />
          Notifications
        </h3>
        <Button variant="ghost" size="sm" className="text-xs">
          View all
        </Button>
      </div>
      
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className={cn(
              "flex gap-3 p-3 rounded-md transition-colors",
              notification.read 
                ? "bg-secondary/50" 
                : "bg-secondary hover:bg-secondary/80 cursor-pointer"
            )}
          >
            <div className={cn(
              "rounded-full p-2 self-start",
              getIconBackground(notification.type)
            )}>
              {getIcon(notification.type)}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">{notification.title}</h4>
                <span className="text-xs text-muted-foreground">
                  {notification.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {notification.message}
              </p>
              
              {notification.action && (
                <div className="mt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-7 text-xs font-medium text-homebase hover:text-homebase-dark hover:bg-homebase/5"
                  >
                    {notification.action.label} 
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default NotificationCard;
