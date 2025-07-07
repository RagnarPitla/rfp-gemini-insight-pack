import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Upload,
  MessageSquare,
  Zap,
  Users,
  ExternalLink,
  Play,
  Bot,
  FileText,
  Target,
  Lightbulb,
  Settings,
  Database,
  LinkIcon
} from 'lucide-react';

const Slides = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/open-source">
                <Button variant="outline">Open Source</Button>
              </Link>
              <Link to="/app">
                <Button variant="premium">Try Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Scrollable Content */}
      <div className="container mx-auto max-w-4xl px-4 py-8 space-y-16">
        
        {/* Slide 1: Opening Title */}
        <section className="min-h-screen flex items-center justify-center text-center">
          <div className="space-y-8">
            <Badge variant="outline" className="text-primary border-primary/20">
              🚀 Open Source Initiative
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              I'm Building an Open Source
              <span className="block text-primary mt-2">RFP Agent for ERP & CRM</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Not just to answer faster — but to get to the right conversations sooner.
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-accent-foreground">
              <Bot className="h-6 w-6 text-primary" />
              Built for AI-first ERP and CRM teams
            </div>
          </div>
        </section>

        {/* Slide 2: The Problem with RFPs */}
        <section className="min-h-screen flex items-center">
          <div className="w-full space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
              Why Traditional RFPs Aren't Enough
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-3"></div>
                    <p className="text-lg text-muted-foreground">Hundreds of questions ≠ real solutions</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-3"></div>
                    <p className="text-lg text-muted-foreground">Most RFPs are based on 6-month-old reports</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-3"></div>
                    <p className="text-lg text-muted-foreground">Product-fit ≠ solution-fit in the age of AI</p>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center space-y-4">
                <div className="text-6xl">📄</div>
                <p className="text-sm text-muted-foreground">vs</p>
                <div className="text-6xl">💬</div>
                <p className="text-lg font-semibold text-foreground">Expert Conversation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: What Matters Most */}
        <section className="min-h-screen flex items-center">
          <div className="w-full text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Real Wins Start with Expert Conversations
            </h2>
            <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20 max-w-3xl mx-auto">
              <CardContent className="p-12">
                <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic leading-relaxed">
                  "Generative AI and agentic systems don't fit in old frameworks."
                </blockquote>
              </CardContent>
            </Card>
            <div className="flex items-center justify-center gap-8 text-4xl">
              <FileText className="h-16 w-16 text-muted-foreground" />
              <span className="text-2xl text-muted-foreground">→</span>
              <Bot className="h-16 w-16 text-primary" />
              <span className="text-2xl text-muted-foreground">→</span>
              <Target className="h-16 w-16 text-accent-foreground" />
            </div>
          </div>
        </section>

        {/* Slide 4: What I've Built */}
        <section className="min-h-screen flex items-center">
          <div className="w-full space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
              The RFP Agent — Built for You
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Upload your RFP → We analyze, summarize, and respond using AI + expert logic
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-8 space-y-4">
                  <Upload className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Upload RFP</h3>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-8 space-y-4">
                  <Database className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Analyze + Cross-reference</h3>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-8 space-y-4">
                  <Zap className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Generate Response</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Slide 5: How It Works - Inputs */}
        <section className="min-h-screen flex items-center">
          <div className="w-full space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
              Upload Your RFP & Context
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <Upload className="h-6 w-6 text-primary" />
                    <p className="text-lg text-muted-foreground">Upload the RFP document</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <p className="text-lg text-muted-foreground">Select customer type, industry, and region</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <p className="text-lg text-muted-foreground">Add customer pain points & key requests</p>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center text-8xl">📋</div>
            </div>
          </div>
        </section>

        {/* Slide 6: How It Works - Outputs */}
        <section className="min-h-screen flex items-center">
          <div className="w-full space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
              Get a Solution-Centric RFP Response
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">Executive Summary</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">Key Requirements + Risks</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">Suggested Responses</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">Competitive Insights</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">Architecture Recommendations</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground">Implementation Timeline</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Slide 7: Open Source + MCP Server Vision */}
        <section className="min-h-screen flex items-center">
          <div className="w-full space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
              Make It Yours with MCP Integration
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              Bring your own knowledge — securely connected through your MCP Server
            </p>
            <div className="flex items-center justify-center gap-8 text-4xl">
              <Bot className="h-16 w-16 text-primary" />
              <span className="text-2xl text-muted-foreground">↔</span>
              <LinkIcon className="h-16 w-16 text-accent-foreground" />
              <span className="text-2xl text-muted-foreground">↔</span>
              <Database className="h-16 w-16 text-muted-foreground" />
            </div>
            <Card className="bg-gradient-to-br from-accent/30 to-accent/10 border-accent max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground">
                  Your data stays private. The agent just retrieves and reasons.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Slide 8: Demo Teaser */}
        <section className="min-h-screen flex items-center">
          <div className="w-full text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Jump Into the Demo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how it works in action with a real SAP customer document
            </p>
            <div className="space-y-8">
              <div className="text-8xl">🎥</div>
              <Link to="/app">
                <Button variant="premium" size="lg" className="text-lg px-8 py-6">
                  <Play className="mr-3 h-6 w-6" />
                  Try the Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Slide 9: Call for Collaboration */}
        <section className="min-h-screen flex items-center">
          <div className="w-full space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
              Help Me Build This With You
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-6">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Have knowledge sources you want to connect?</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Want to contribute to the open source repo?</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Have feedback or architecture ideas?</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center space-y-6">
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.linkedin.com/in/ragnarpitla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-lg px-8 py-6"
                >
                  <ExternalLink className="mr-3 h-5 w-5" />
                  Let's co-create the future of AI-first RFP automation
                </a>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Slides;