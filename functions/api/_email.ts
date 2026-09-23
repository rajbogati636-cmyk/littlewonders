export function buildEmail(title: string, intro: string, d: Record<string, unknown>): string {
  const rows = Object.entries(d).map(([label, val]) => {
    const display = Array.isArray(val) ? val.join(", ") : String(val ?? "—");
    return `<tr><td style="padding:8px 16px;border-bottom:1px solid #eee;font-weight:600;color:#315f89;text-transform:capitalize;">${label.replace(/[-_]/g, " ")}</td><td style="padding:8px 16px;border-bottom:1px solid #eee;">${display}</td></tr>`;
  }).join("");

  return `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#fbfaf7;padding:32px;">
    <h1 style="color:#315f89;font-size:28px;margin-bottom:24px;">${title}</h1>
    <p style="color:#637180;font-size:14px;margin-bottom:24px;">${intro}</p>
    <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;font-size:14px;color:#3d4650;">${rows}</table>
    <p style="margin-top:32px;color:#8291a0;font-size:12px;">This email was sent automatically from the Little Wonders website.</p>
  </div>`;
}

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function sendViaResend(
  apiKey: string,
  from: string,
  to: string,
  subject: string,
  html: string,
  replyTo?: string,
): Promise<{ ok: boolean; error?: string }> {
  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!emailResponse.ok) {
    const errText = await emailResponse.text();
    console.error("Resend API error:", errText);
    return { ok: false, error: "Failed to send email" };
  }

  return { ok: true };
}

export function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
