import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CustomerContext {
  currentERP: string;
  industry: string;
  region: string;
  painPoints: string;
  companySize: string;
  additionalContext: string;
}

interface CustomerContextFormProps {
  context: CustomerContext;
  onChange: (context: CustomerContext) => void;
}

export const CustomerContextForm: React.FC<CustomerContextFormProps> = ({
  context,
  onChange,
}) => {
  const updateContext = (field: keyof CustomerContext, value: string) => {
    onChange({ ...context, [field]: value });
  };

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Customer Context
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Provide details about the customer to generate a tailored analysis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="currentERP">Current ERP/CRM System</Label>
          <Select onValueChange={(value) => updateContext('currentERP', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select current ERP/CRM" />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border shadow-lg">
              <SelectItem value="salesforce">Salesforce</SelectItem>
              <SelectItem value="d365-fno">Dynamics 365 F&O</SelectItem>
              <SelectItem value="d365-ce">D365 CE</SelectItem>
              <SelectItem value="d365-sales">D365 Sales</SelectItem>
              <SelectItem value="d365-crm">D365 CRM</SelectItem>
              <SelectItem value="sap">SAP</SelectItem>
              <SelectItem value="oracle">Oracle</SelectItem>
              <SelectItem value="netsuite">NetSuite</SelectItem>
              <SelectItem value="quickbooks">QuickBooks</SelectItem>
              <SelectItem value="sage">Sage</SelectItem>
              <SelectItem value="spreadsheets">Excel/Spreadsheets</SelectItem>
              <SelectItem value="legacy">Legacy System</SelectItem>
              <SelectItem value="none">No Current ERP</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select onValueChange={(value) => updateContext('industry', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="wholesale">Wholesale Distribution</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Financial Services</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="automotive">Automotive</SelectItem>
              <SelectItem value="food-beverage">Food & Beverage</SelectItem>
              <SelectItem value="energy">Energy & Utilities</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="region">Region</Label>
          <Select onValueChange={(value) => updateContext('region', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="north-america">North America</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
              <SelectItem value="latin-america">Latin America</SelectItem>
              <SelectItem value="middle-east-africa">Middle East & Africa</SelectItem>
              <SelectItem value="global">Global</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="companySize">Company Size</Label>
          <Select onValueChange={(value) => updateContext('companySize', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
              <SelectItem value="small">Small (51-200 employees)</SelectItem>
              <SelectItem value="medium">Medium (201-1000 employees)</SelectItem>
              <SelectItem value="large">Large (1001-5000 employees)</SelectItem>
              <SelectItem value="enterprise">Enterprise (5000+ employees)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="painPoints">About the Customer and Their Problems</Label>
        <Textarea
          id="painPoints"
          placeholder="Describe current business challenges, system limitations, manual processes, integration issues, competitive pressures, market dynamics, regulatory requirements, scalability concerns, digital transformation goals, operational inefficiencies, data silos, reporting gaps, user experience issues, compliance challenges, growth barriers, technology debt, vendor relationship problems, cost pressures, and any other strategic business pain points..."
          value={context.painPoints}
          onChange={(e) => updateContext('painPoints', e.target.value)}
          className="min-h-32"
        />
        <p className="text-xs text-muted-foreground">
          Include competitive landscape insights, current vendor relationships, budget constraints, timeline pressures, 
          stakeholder concerns, change management challenges, technical requirements, and strategic business objectives.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalContext">Competitive Intelligence & Resources</Label>
        <Textarea
          id="additionalContext"
          placeholder="Reference your competitive data, industry benchmarks, pricing intelligence, feature comparisons, customer success stories, implementation case studies, ROI calculations, total cost of ownership analysis, migration strategies, risk mitigation approaches, and any specialized resources or tools available for this opportunity..."
          value={context.additionalContext}
          onChange={(e) => updateContext('additionalContext', e.target.value)}
          className="min-h-32"
        />
        <p className="text-xs text-muted-foreground">
          Include available competitive battlecards, industry reports, analyst insights, customer references, 
          partnership advantages, technical differentiators, and any proprietary data or tools that can strengthen the response.
        </p>
      </div>
    </Card>
  );
};

export type { CustomerContext };