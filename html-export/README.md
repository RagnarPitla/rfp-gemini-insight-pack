# HTML Export Templates

This folder contains HTML templates and exported reports for the RFP Analysis Tool.

## Files

- `rfp-analysis-template.html` - Base template with placeholders for generating custom reports
- Generated reports will be saved here when exported from the application

## Usage

1. The main application generates HTML reports using the template
2. Placeholders in the template are replaced with actual analysis data
3. Complete reports can be downloaded as standalone HTML files
4. These HTML files can be opened in any browser or shared independently

## Template Placeholders

The template uses the following placeholders that get replaced with actual data:

- `[DATE_PLACEHOLDER]` - Generation date
- `[EXECUTIVE_SUMMARY_PLACEHOLDER]` - Executive summary content
- `[REQUIREMENT_PLACEHOLDER]` - Individual requirements
- `[ADVANTAGE_PLACEHOLDER]` - D365 advantages
- `[REQUIREMENT_TITLE]`, `[CONFIDENCE]`, `[RESPONSE_TEXT]` - Response details
- `[INSIGHT_PLACEHOLDER]` - Competitive insights
- `[ARCHITECTURE_PLACEHOLDER]` - Architecture recommendations
- `[TIMELINE_PLACEHOLDER]` - Implementation timeline
- `[RISK_ASSESSMENT_PLACEHOLDER]` - Risk assessment

## Customization

You can modify the template to:
- Change styling and branding
- Add company logos
- Adjust layout and formatting
- Include additional sections