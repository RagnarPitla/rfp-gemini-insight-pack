# n8n Keys and Hooks

## Webhooks

### File Upload Webhook
**POST URL:** `https://zhxcwxnlvsdqwjuqekpn.supabase.co/functions/v1/file-upload-webhook`

**Trigger:** When a user uploads an RFP file

**Payload:**
```json
{
  "fileName": "string",
  "fileSize": "number", 
  "fileType": "string",
  "timestamp": "ISO string",
  "customerContext": "object (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "File upload webhook processed successfully",
  "data": {
    "fileName": "string",
    "fileSize": "number",
    "fileType": "string", 
    "processedAt": "ISO string"
  }
}
```

## n8n Integration Notes

- Use the webhook URL above as a trigger in your n8n workflow
- The webhook is triggered automatically when files are uploaded through the app
- All webhooks include CORS headers for browser compatibility
- Webhook logs are available in the Supabase Functions dashboard

## API Keys

Add any required n8n API keys or authentication tokens here as needed.