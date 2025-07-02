import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileUpload } from '@/components/FileUpload';
import { CustomerContextForm, CustomerContext } from '@/components/CustomerContextForm';
import { AnalysisResults, AnalysisResult } from '@/components/AnalysisResults';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-image.jpg';
import { Upload, Zap, Shield, Cloud } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [customerContext, setCustomerContext] = useState<CustomerContext>({
    currentERP: '',
    industry: '',
    region: '',
    painPoints: '',
    companySize: '',
    additionalContext: '',
  });
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    toast({
      title: "File uploaded successfully",
      description: `${file.name} is ready for analysis`,
    });
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    toast({
      title: "File removed",
      description: "Please select another file to continue",
    });
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please upload an RFP document first",
        variant: "destructive",
      });
      return;
    }

    if (!customerContext.currentERP || !customerContext.industry || !customerContext.region) {
      toast({
        title: "Missing information",
        description: "Please fill in all required customer context fields",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // Simulate API call - in real implementation, this would call your backend
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock results for demonstration
      const mockResults: AnalysisResult = {
        executiveSummary: "Based on the analysis of the customer's RFP, we've identified key opportunities for Dynamics 365 F&O to address their manufacturing and supply chain requirements. The customer seeks to modernize their legacy ERP system with enhanced reporting capabilities, real-time inventory management, and improved financial controls.",
        keyRequirements: [
          "Real-time inventory tracking and management",
          "Advanced financial reporting and analytics", 
          "Supply chain optimization and planning",
          "Multi-location support and consolidation",
          "Integration with existing CRM system",
          "Mobile access for field operations"
        ],
        d365Advantages: [
          "Native integration with Microsoft ecosystem including Power BI, Office 365, and Azure",
          "Industry-specific manufacturing modules with advanced planning capabilities",
          "Cloud-first architecture ensuring scalability and reduced IT overhead",
          "Built-in AI and machine learning for predictive analytics and demand forecasting",
          "Comprehensive supply chain management with vendor collaboration portals"
        ],
        competitiveInsights: [
          "Unlike SAP's complex customization requirements, D365 offers out-of-the-box functionality for 80% of business processes",
          "Oracle's cloud transition costs are significantly higher than D365's transparent subscription model",
          "NetSuite lacks the advanced manufacturing capabilities that D365 provides natively",
          "D365's Power Platform integration provides no-code/low-code customization that competitors can't match"
        ],
        suggestedResponses: [
          {
            requirement: "Real-time inventory tracking",
            response: "Dynamics 365 F&O provides real-time inventory visibility across all locations with automated replenishment, cycle counting, and warehouse management. Integration with IoT devices enables automatic inventory updates.",
            confidence: "high"
          },
          {
            requirement: "Advanced reporting capabilities",
            response: "Built-in Power BI integration delivers self-service analytics with pre-built industry dashboards. Financial reporting includes regulatory compliance templates and real-time consolidation.",
            confidence: "high"
          },
          {
            requirement: "Multi-location support",
            response: "D365 supports unlimited legal entities and locations with centralized configuration management. Inter-company transactions and consolidation are handled automatically.",
            confidence: "medium"
          }
        ],
        architectureRecommendations: "Recommend a phased cloud implementation starting with Finance & Operations core modules, followed by Supply Chain Management and Manufacturing. Leverage Azure integration for data lake and advanced analytics. Consider Power Apps for custom mobile solutions.",
        implementationTimeline: "Phase 1 (6 months): Core Finance & Operations. Phase 2 (4 months): Supply Chain & Manufacturing modules. Phase 3 (3 months): Advanced analytics and mobile solutions. Total timeline: 13 months with parallel testing and training.",
        riskAssessment: "Low risk implementation given D365's proven track record in manufacturing. Main considerations include data migration quality and user adoption. Recommend comprehensive training program and phased go-live approach."
      };
      
      setAnalysisResults(mockResults);
      
      toast({
        title: "Analysis complete!",
        description: "Your RFP response pack has been generated successfully",
      });
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "Please try again or contact support",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSaveReport = async () => {
    setIsSaving(true);
    
    try {
      // Simulate saving to Google Drive
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Report saved successfully",
        description: "The analysis report has been saved to your Google Drive",
      });
    } catch (error) {
      toast({
        title: "Save failed",
        description: "Please try again or contact support",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (analysisResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => setAnalysisResults(null)}
                className="mb-4"
              >
                ← Back to Analysis
              </Button>
            </div>
            <AnalysisResults
              results={analysisResults}
              onSaveReport={handleSaveReport}
              isSaving={isSaving}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative bg-gradient-to-r from-primary/5 to-primary-glow/5">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                RFP Analysis Tool
                <span className="block text-primary">for Dynamics 365</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Leverage AI-powered analysis to generate comprehensive, competitive responses 
                to Microsoft Dynamics 365 RFPs with confidence and precision.
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">AI-Powered Analysis</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Advanced AI processes your RFP documents to identify key requirements and opportunities
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Competitive Intelligence</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Generate insights that position D365 against SAP, Oracle, and NetSuite
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <Cloud className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Google Drive Integration</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Automatically save RFPs and reports to your organized Google Drive folder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* File Upload Section */}
          <Card className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Upload RFP Document
              </h2>
              <p className="text-muted-foreground">
                Start by uploading the customer's RFP document for analysis
              </p>
            </div>
            
            <FileUpload
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
              onRemoveFile={handleRemoveFile}
            />
          </Card>

          {/* Customer Context Form */}
          <CustomerContextForm
            context={customerContext}
            onChange={setCustomerContext}
          />

          {/* Analysis Button */}
          <div className="flex justify-center">
            <Button
              variant="premium"
              size="lg"
              onClick={handleAnalyze}
              disabled={isAnalyzing || !selectedFile}
              className="min-w-64 h-14 text-lg"
            >
              {isAnalyzing ? (
                <>Analyzing RFP...</>
              ) : (
                <>
                  <Upload className="mr-2 h-5 w-5" />
                  Analyze & Generate Response Pack
                </>
              )}
            </Button>
          </div>

          {/* Getting Started Guide */}
          <Card className="p-6 bg-gradient-to-r from-accent/30 to-accent/10 border-accent">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Getting Started
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-foreground mb-2">1. Upload Document</h4>
                <p className="text-muted-foreground">Upload your RFP in PDF, Excel, or PowerPoint format</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">2. Add Context</h4>
                <p className="text-muted-foreground">Provide customer details and current ERP information</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">3. Generate Analysis</h4>
                <p className="text-muted-foreground">AI processes the data and creates your response pack</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">4. Save Report</h4>
                <p className="text-muted-foreground">Export your comprehensive analysis to Google Drive</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
