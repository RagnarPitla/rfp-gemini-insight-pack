import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { FloatingShowcase } from '@/components/FloatingShowcase';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { 
  Bot, 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  Brain, 
  FileText,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Home = () => {
  const [showFloatingDemo, setShowFloatingDemo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingDemo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const capabilities = [
    {
      icon: Bot,
      title: "Autonomous RFP Processing",
      description: "Automatically track and process RFP request emails, parse any file format, and generate comprehensive draft responses with deep reasoning.",
      delay: "animate-delay-100"
    },
    {
      icon: Brain,
      title: "Intelligent Knowledge Base",
      description: "Leverage past successful RFPs, product specifications, and documentation to generate highly accurate and relevant responses.",
      delay: "animate-delay-200"
    },
    {
      icon: Target,
      title: "Strategic AI Insights",
      description: "Conduct competitive research, recommend executive win themes, and provide go/no-go recommendations based on deep analysis.",
      delay: "animate-delay-300"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      stat: <AnimatedCounter end={90} suffix="%" />,
      title: "Faster Completion",
      description: "Reduce RFP completion time from weeks to days"
    },
    {
      icon: TrendingUp,
      stat: <AnimatedCounter end={2} suffix=".5X" />,
      title: "More Submissions", 
      description: "Handle significantly more RFP opportunities"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "RFP Document Upload",
      description: "Receive RFP via email or upload - acts as autonomous trigger"
    },
    {
      step: "02", 
      title: "AI Analysis & Summarization",
      description: "Parse document, identify requirements, and summarize for processing"
    },
    {
      step: "03",
      title: "Knowledge Base Integration", 
      description: "Pull from previous responses, documentation, and internal systems"
    },
    {
      step: "04",
      title: "Response Generation",
      description: "Generate comprehensive proposal with competitive insights"
    },
    {
      step: "05",
      title: "Collaborative Review",
      description: "Team refinement in Microsoft Teams with tracking and feedback"
    },
    {
      step: "06",
      title: "Export & Submission",
      description: "Finalize and export in multiple formats for submission"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">RFP Agent</span>
              <Badge variant="secondary" className="ml-2">by Ragnar</Badge>
            </div>
            <Link to="/app">
              <Button variant="premium" size="lg">
                Try Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20">
            AI-Powered RFP Solution for the AI ERP Era
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Win More ERP Customers with 
            <span className="block text-primary mt-2">Intelligent RFP Automation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your proposal process with an AI agent that autonomously processes RFPs, 
            generates high-quality responses, and leverages competitive intelligence to win in the evolving AI ERP landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/app">
              <Button variant="premium" size="lg" className="text-lg px-8">
                <Zap className="mr-2 h-5 w-5" />
                Try RFP Analysis Demo
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <FileText className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50">
                <benefit.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{benefit.stat}</div>
                <div className="font-semibold text-foreground mb-2">{benefit.title}</div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Powerful Capabilities for AI ERP Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our RFP Agent combines advanced AI with deep ERP domain knowledge to deliver 
              unmatched proposal quality and competitive positioning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
                <capability.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-accent/30 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How the RFP Agent Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined workflow that transforms complex RFP processes into efficient, 
              AI-powered proposal generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((step, index) => (
              <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 relative">
                <div className="text-4xl font-bold text-primary/20 absolute top-4 right-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 pr-12">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Built on Robust Technology
            </h2>
            <p className="text-xl text-muted-foreground">
              Leveraging enterprise-grade platforms for scalability and seamless integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Microsoft Ecosystem</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Microsoft Copilot Studio for AI agent construction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Power Platform for workflow automation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  SharePoint for document management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Microsoft Teams for collaboration
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/30 to-accent/10 border-accent">
              <h3 className="text-2xl font-semibold text-foreground mb-4">AI & Integration</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Vector Databases (Pinecone) for knowledge retrieval
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Large Language Models (GPT-4o Mini)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  CRM integration (Salesforce, HubSpot)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Communication tools (Slack, Teams)
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your RFP Process?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join forward-thinking organizations who are winning more ERP deals with AI-powered proposal automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/app">
              <Button variant="premium" size="lg" className="text-lg px-12">
                <Zap className="mr-2 h-5 w-5" />
                Try Demo Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-12">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">RFP Agent by Ragnar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 RFP Agent. Built for the AI ERP era.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Demo Showcase */}
      <FloatingShowcase 
        isVisible={showFloatingDemo} 
        onClose={() => setShowFloatingDemo(false)} 
      />
    </div>
  );
};

export default Home;