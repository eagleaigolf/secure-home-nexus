
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Shield, Gauge } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HomeBaseScoreProps {
  score: number; // 0-100
  className?: string;
}

const HomeBaseScore: React.FC<HomeBaseScoreProps> = ({ score, className }) => {
  // Calculate letter grade based on score
  const getGrade = () => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  // Calculate color based on score
  const getScoreColor = () => {
    if (score >= 90) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 80) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 70) return 'text-amber-600 bg-amber-50 border-amber-200';
    if (score >= 60) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  // Calculate progress bar color
  const getProgressColor = () => {
    if (score >= 90) return 'bg-green-600';
    if (score >= 80) return 'bg-blue-600';
    if (score >= 70) return 'bg-amber-600';
    if (score >= 60) return 'bg-orange-600';
    return 'bg-red-600';
  };

  return (
    <div className={cn("bg-white rounded-lg border border-border p-4", className)}>
      <div className="flex items-center gap-4">
        <div 
          className={cn(
            "w-20 h-20 rounded-full border-2 flex items-center justify-center", 
            getScoreColor()
          )}
        >
          <div className="text-center">
            <div className="text-lg font-bold">{getGrade()}</div>
            <div className="text-xs">{score}/100</div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="h-4 w-4 text-homebase" />
            <h3 className="font-medium">AmericasHomeManager.ai Score</h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">
            Your home protection and efficiency rating
          </p>
          
          <div className="w-full">
            <Progress 
              value={score} 
              className="h-2" 
              style={{ 
                ['--progress-background' as any]: getProgressColor() 
              }} 
            />
          </div>
        </div>
        
        <Link to="/score">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-homebase hover:text-homebase-dark flex items-center gap-1"
          >
            Improve
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBaseScore;
