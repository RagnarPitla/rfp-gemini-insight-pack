import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  TrendingUp,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface FloatingShowcaseProps {
  isVisible: boolean;
  onClose: () => void;
}

export const FloatingShowcase: React.FC<FloatingShowcaseProps> = ({ isVisible, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);

    const demoTimer = setInterval(() => {
      setCurrentDemo((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(demoTimer);
    };
  }, []);

  if (!isVisible) return null;

  const demos = [
    {
      title: "RFP Analysis Complete",
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50",
      content: "High confidence response generated"
    },
    {
      title: "Processing Documents",
      icon: Clock,
      color: "text-blue-500", 
      bgColor: "bg-blue-50",
      content: "Analyzing customer requirements..."
    },
    {
      title: "Competitive Insights",
      icon: TrendingUp,
      color: "text-purple-500",
      bgColor: "bg-purple-50", 
      content: "25% advantage over SAP identified"
    }
  ];

  const currentDemoData = demos[currentDemo];
  const CurrentIcon = currentDemoData.icon;

  return (
    <div 
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
        isMinimized ? 'w-16 h-16' : 'w-80'
      }`}
    >
      <Card className={`glass-strong border-primary/20 shadow-2xl animate-slide-in-right ${
        isMinimized ? 'p-3' : 'p-6'
      }`}>
        {isMinimized ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(false)}
            className="w-full h-full"
          >
            <Maximize2 className="h-4 w-4 text-primary" />
          </Button>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                <span className="text-sm font-medium text-foreground">Live Demo</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(true)}
                  className="h-6 w-6 p-0"
                >
                  <Minimize2 className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="space-y-4">
              {/* Current Demo */}
              <div className={`p-3 rounded-lg ${currentDemoData.bgColor} transition-all duration-500`}>
                <div className="flex items-center gap-2 mb-2">
                  <CurrentIcon className={`h-4 w-4 ${currentDemoData.color}`} />
                  <span className="font-medium text-sm text-foreground">
                    {currentDemoData.title}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {currentDemoData.content}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Processing</span>
                  <span className="text-primary font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Sample Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <Button variant="default" size="sm" className="text-xs">
                  Primary
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Secondary
                </Button>
              </div>

              {/* Sample Badges */}
              <div className="flex flex-wrap gap-1">
                <Badge variant="default" className="text-xs">High</Badge>
                <Badge variant="secondary" className="text-xs">Medium</Badge>
                <Badge variant="outline" className="text-xs">Low</Badge>
              </div>

              {/* Temperature Gauge */}
              <div className="bg-gradient-to-r from-blue-500 to-red-500 h-2 rounded-full relative">
                <div 
                  className="absolute top-0 w-1 h-2 bg-white rounded-full shadow-sm transition-all duration-1000"
                  style={{ left: `${progress}%` }}
                />
                <div className="flex justify-between text-xs mt-1 text-muted-foreground">
                  <span>0°C</span>
                  <span>100°C</span>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Online</span>
                </div>
                <div className="flex items-center gap-1">
                  <AlertCircle className="h-3 w-3 text-orange-500" />
                  <span className="text-muted-foreground">3 alerts</span>
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};