import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { AnalysisResult } from '@/components/AnalysisResults';

interface HTMLExportProps {
  results: AnalysisResult;
}

export const HTMLExport: React.FC<HTMLExportProps> = ({ results }) => {
  const { toast } = useToast();
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const generateHTML = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RFP Analysis Report - Dynamics 365</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background: #f8fafc; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        h1 { color: #1e293b; font-size: 2.5rem; margin-bottom: 10px; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; }
        h2 { color: #334155; font-size: 1.8rem; margin: 30px 0 15px 0; }
        h3 { color: #475569; font-size: 1.3rem; margin: 25px 0 10px 0; }
        .summary { background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6; }
        .requirement { background: #ecfdf5; padding: 12px; margin: 8px 0; border-radius: 6px; border-left: 3px solid #10b981; }
        .advantage { background: #eff6ff; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #2563eb; }
        .insight { background: #fef7ff; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #9333ea; }
        .response { background: #fff7ed; padding: 15px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #ea580c; }
        .confidence-high { background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 4px; font-size: 0.9rem; }
        .confidence-medium { background: #fef3c7; color: #d97706; padding: 4px 8px; border-radius: 4px; font-size: 0.9rem; }
        .confidence-low { background: #fee2e2; color: #dc2626; padding: 4px 8px; border-radius: 4px; font-size: 0.9rem; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
        .section { margin: 30px 0; }
        ul { padding-left: 20px; }
        li { margin: 8px 0; }
        .header { text-align: center; margin-bottom: 40px; }
        .subtitle { color: #64748b; font-size: 1.2rem; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>RFP Analysis Report</h1>
            <p class="subtitle">Microsoft Dynamics 365 Competitive Response Pack</p>
            <p style="color: #64748b;">Generated on ${new Date().toLocaleDateString()}</p>
        </div>

        <div class="section">
            <h2>Executive Summary</h2>
            <div class="summary">
                <p>${results.executiveSummary}</p>
            </div>
        </div>

        <div class="section">
            <h2>Key Requirements Identified</h2>
            ${results.keyRequirements.map(req => `<div class="requirement">✓ ${req}</div>`).join('')}
        </div>

        <div class="section">
            <h2>Dynamics 365 Key Advantages</h2>
            ${results.d365Advantages.map(adv => `<div class="advantage">${adv}</div>`).join('')}
        </div>

        <div class="section">
            <h2>Suggested Responses</h2>
            ${results.suggestedResponses.map(resp => `
                <div class="response">
                    <h3>${resp.requirement} <span class="confidence-${resp.confidence}">${resp.confidence} confidence</span></h3>
                    <p>${resp.response}</p>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <h2>Competitive Insights</h2>
            ${results.competitiveInsights.map(insight => `<div class="insight">${insight}</div>`).join('')}
        </div>

        <div class="grid">
            <div>
                <h2>Architecture Recommendations</h2>
                <div class="summary">
                    <p>${results.architectureRecommendations}</p>
                </div>
            </div>
            <div>
                <h2>Implementation Timeline</h2>
                <div class="summary">
                    <p>${results.implementationTimeline}</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Risk Assessment</h2>
            <div class="summary">
                <p>${results.riskAssessment}</p>
            </div>
        </div>
    </div>
</body>
</html>`;
  };

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSection(section);
      toast({
        title: "Copied to clipboard",
        description: `${section} HTML has been copied`,
      });
      setTimeout(() => setCopiedSection(null), 2000);
    });
  };

  const downloadHTML = () => {
    const htmlContent = generateHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rfp-analysis-${new Date().getTime()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "HTML Downloaded",
      description: "Complete HTML report has been downloaded",
    });
  };

  const htmlContent = generateHTML();

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Code2 className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">HTML Export</h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => copyToClipboard(htmlContent, 'Complete HTML')}
            disabled={copiedSection === 'Complete HTML'}
          >
            {copiedSection === 'Complete HTML' ? (
              <>Copied!</>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy HTML
              </>
            )}
          </Button>
          <Button
            variant="premium"
            onClick={downloadHTML}
          >
            <Download className="mr-2 h-4 w-4" />
            Download HTML
          </Button>
        </div>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">HTML Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="mt-4">
          <div className="border rounded-lg overflow-hidden">
            <iframe
              srcDoc={htmlContent}
              className="w-full h-96 border-0"
              title="HTML Preview"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="mt-4">
          <div className="relative">
            <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm max-h-96">
              <code>{htmlContent}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};