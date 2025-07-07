import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FileUploadWebhookRequest {
  fileName: string;
  fileSize: number;
  fileType: string;
  timestamp: string;
  customerContext?: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fileName, fileSize, fileType, timestamp, customerContext }: FileUploadWebhookRequest = await req.json();

    console.log('File upload webhook triggered:', {
      fileName,
      fileSize,
      fileType,
      timestamp,
      customerContext
    });

    // Here you can add your webhook logic:
    // - Log the upload event
    // - Send notifications
    // - Trigger other services
    // - Store metadata in database
    
    const response = {
      success: true,
      message: 'File upload webhook processed successfully',
      data: {
        fileName,
        fileSize,
        fileType,
        processedAt: new Date().toISOString()
      }
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error('Error in file-upload-webhook:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);