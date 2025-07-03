import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Download, Save } from 'lucide-react';
import { HTMLExport } from '@/components/HTMLExport';

interface AnalysisResult {
  executiveSummary: string;
  keyRequirements: string[];
  d365Advantages: string[];
  competitiveInsights: string[];
  suggestedResponses: Array<{
    requirement: string;
    response: string;
    confidence: 'high' | 'medium' | 'low';
  }>;
  architectureRecommendations: string;
  implementationTimeline: string;
  riskAssessment: string;
}

interface AnalysisResultsProps {
  results: AnalysisResult;
  onSaveReport: () => void;
  isSaving: boolean;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  results,
  onSaveReport,
  isSaving,
}) => {
  const getConfidenceBadgeVariant = (confidence: string) => {
    switch (confidence) {
      case 'high':
        return 'default';
      case 'medium':
        return 'secondary';
      case 'low':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                RFP Analysis Complete
              </h2>
              <p className="text-muted-foreground">
                Your comprehensive response pack is ready
              </p>
            </div>
          </div>
            <Button
              variant="premium"
              size="lg"
              onClick={onSaveReport}
              disabled={isSaving}
              className="min-w-40"
            >
              {isSaving ? (
                <>Exporting...</>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </>
              )}
            </Button>
        </div>
      </Card>

      {/* Executive Summary */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Executive Summary
        </h3>
        <p className="text-foreground leading-relaxed">
          {results.executiveSummary}
        </p>
      </Card>

      {/* Key Requirements */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Key Requirements Identified
        </h3>
        <div className="grid gap-3">
          {results.keyRequirements.map((requirement, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">{requirement}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Dynamics 365 Advantages */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Dynamics 365 Key Advantages
        </h3>
        <div className="grid gap-4">
          {results.d365Advantages.map((advantage, index) => (
            <div key={index} className="p-4 bg-accent/30 rounded-lg border border-accent">
              <p className="text-foreground">{advantage}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Suggested Responses */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Suggested Responses
        </h3>
        <div className="space-y-6">
          {results.suggestedResponses.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-foreground">{item.requirement}</h4>
                <Badge variant={getConfidenceBadgeVariant(item.confidence)}>
                  {item.confidence} confidence
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-primary/20">
                {item.response}
              </p>
              {index < results.suggestedResponses.length - 1 && (
                <Separator className="mt-4" />
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Competitive Insights */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Competitive Insights
        </h3>
        <div className="grid gap-4">
          {results.competitiveInsights.map((insight, index) => (
            <div key={index} className="p-4 bg-muted/30 rounded-lg">
              <p className="text-foreground">{insight}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Architecture & Implementation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Architecture Recommendations
          </h3>
          <p className="text-foreground leading-relaxed">
            {results.architectureRecommendations}
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Implementation Timeline
          </h3>
          <p className="text-foreground leading-relaxed">
            {results.implementationTimeline}
          </p>
        </Card>
      </div>

      {/* Risk Assessment */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Risk Assessment
        </h3>
        <p className="text-foreground leading-relaxed">
          {results.riskAssessment}
        </p>
      </Card>

      {/* HTML Export */}
      <HTMLExport results={results} />
    </div>
  );
};

export type { AnalysisResult };