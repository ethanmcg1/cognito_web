import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface EnquiryData {
  name: string;
  email: string;
  phone: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, phone }: EnquiryData = await req.json();

    const emailContent = `
New Contact Enquiry Received

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:    ${name}
Email:   ${email}
Phone:   ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: ${new Date().toLocaleString()}
    `;

    console.log(emailContent);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Enquiry notification logged',
        details: { name, email, phone }
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing enquiry:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});