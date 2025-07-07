import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Lightbulb, 
  Brain, 
  Package, 
  Link as LinkIcon, 
  Play, 
  Users,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Upload,
  Settings,
  Database,
  Zap,
  Clock
} from 'lucide-react';

const OpenSource = () => {
  const whyBuilt = [
    "Answering 100s of questions doesn't build solutions — real conversations do.",
    "Most RFPs are based on outdated reports, not AI-native solution design.",
    "Generative + agentic AI systems require a ground-up approach."
  ];

  const howItWorks = [
    { icon: Upload, text: "Upload your RFP document" },
    { icon: Settings, text: "Select customer type, industry, and region" },
    { icon: Brain, text: "Input customer pain points and intelligence requirements" },
    { icon: Database, text: "Cross-reference knowledge (yours + mine)" },
    { icon: Zap, text: "Generate a full analysis + response" }
  ];

  const deliverables = [
    "Executive Summary",
    "Key Requirements + Risks", 
    "Suggested Responses & Competitive Insights",
    "Architecture Recommendations",
    "Implementation Timeline"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex items-center gap-2">
                <Bot className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Open Source RFP Agent</span>
              </div>
            </div>
            <Link to="/app">
              <Button variant="premium" size="lg">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20">
            🚀 Open Source Initiative
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Open Source RFP Agent for 
            <span className="block text-primary mt-2">ERP & CRM</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Hi friends, I've been quietly building an RFP analysis tool designed to help you not just respond faster, 
            but get to the right conversations — the kind that lead to real AI-first solutions in ERP and CRM.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Why I Built This */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  💡 Why I Built This
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {whyBuilt.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Brain className="h-6 w-6 text-primary" />
                  🧠 How It Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {howItWorks.map((step, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <step.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{step.text}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* What You Get */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Package className="h-6 w-6 text-primary" />
                  📦 What You Get
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* MCP Server Integration */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <LinkIcon className="h-6 w-6 text-primary" />
                  🔗 MCP Server Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  You'll be able to connect your internal knowledge sources through your own MCP server. 
                  The agent won't store your data — it will retrieve and reason over your existing tools securely.
                </p>
              </CardContent>
            </Card>

            {/* Next: See the Demo */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Play className="h-6 w-6 text-primary" />
                  🎥 Next: See the Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'll walk you through how the tool works — end-to-end. Watch how it generates 
                  enterprise-ready RFP responses in minutes.
                </p>
                <Link to="/app">
                  <Button variant="premium" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Try the Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Want to Contribute? */}
            <Card className="bg-gradient-to-br from-accent/30 to-accent/10 border-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="h-6 w-6 text-primary" />
                  🤝 Want to Contribute?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you want to help with testing, building, or improving knowledge integration, 
                  reach out on LinkedIn. I'd love your feedback and ideas!
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://www.linkedin.com/in/ragnarpitla" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">Open Source RFP Agent</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built for the AI ERP & CRM community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OpenSource;