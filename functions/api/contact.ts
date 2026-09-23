interface ContactFormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestPost: PagesFunction<{
  RESEND_API_KEY: string;
  ENQUIRY_TO: string;
  ENQUIRY_FROM: string;
}> = async (context) => {
  if (context.request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const data = await context.request.json() as ContactFormData;

    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM } = context.env;

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Email service is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const subject = `New Contact Message — ${data.name}`;
    const html = buildEmail(data);

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: ENQUIRY_FROM,
        to: [ENQUIRY_TO],
        subject,
        html,
        reply_to: data.email,
      }),
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Resend API error:", errText);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
};

function buildEmail(d: ContactFormData): string {
  const rows = Object.entries(d).map(([label, val]) => {
    const display = Array.isArray(val) ? val.join(", ") : String(val ?? "—");
    return `<tr><td style="padding:8px 16px;border-bottom:1px solid #eee;font-weight:600;color:#315f89;text-transform:capitalize;">${label.replace(/[-_]/g, " ")}</td><td style="padding:8px 16px;border-bottom:1px solid #eee;">${display}</td></tr>`;
  }).join("");

  return `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#fbfaf7;padding:32px;">
    <h1 style="color:#315f89;font-size:28px;margin-bottom:24px;">New Contact Message</h1>
    <p style="color:#637180;font-size:14px;margin-bottom:24px;">A new contact message has been submitted through the Little Wonders website.</p>
    <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;font-size:14px;color:#3d4650;">${rows}</table>
    <p style="margin-top:32px;color:#8291a0;font-size:12px;">This email was sent automatically from the Little Wonders website.</p>
  </div>`;
}
