import { buildEmail, corsHeaders, sendViaResend, jsonResponse } from "./_email";

interface ParentFormData {
  guardian1_surname: string;
  guardian1_email: string;
  [key: string]: string;
}

export const onRequestPost: PagesFunction<{
  RESEND_API_KEY: string;
  ENQUIRY_TO: string;
  ENQUIRY_FROM: string;
}> = async (context) => {
  if (context.request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const data = await context.request.json() as ParentFormData;

    if (!data.guardian1_surname || !data.guardian1_email) {
      return jsonResponse({ error: "Required fields are missing" }, 400);
    }

    const { RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM } = context.env;

    if (!RESEND_API_KEY) {
      return jsonResponse({ error: "Email service is not configured" }, 500);
    }

    const subject = `New Parent Registration — ${data.guardian1_surname || "Unknown"}`;
    const html = buildEmail(
      "New Parent Registration",
      "A new parent registration has been submitted through the Little Wonders website.",
      data,
    );

    const result = await sendViaResend(
      RESEND_API_KEY,
      ENQUIRY_FROM,
      ENQUIRY_TO,
      subject,
      html,
      data.guardian1_email,
    );

    if (!result.ok) {
      return jsonResponse({ error: result.error }, 500);
    }

    return jsonResponse({ success: true, message: "Parent registration submitted successfully" });
  } catch (err) {
    console.error("Parent registration error:", err);
    return jsonResponse({ error: "An unexpected error occurred" }, 500);
  }
};
