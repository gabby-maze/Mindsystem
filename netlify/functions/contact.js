// Netlify serverless function: contact form → Resend → info@mazeperformance.ai
// Requires RESEND_API_KEY in Netlify site environment variables.
// Also add RESEND_FROM_DOMAIN if different from gabbycole.com.

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = "info@mazeperformance.ai";
const FROM_EMAIL = "Gabby Cole Website <no-reply@gabbycole.com>";

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let name, email, subject, message;
  try {
    ({ name, email, subject, message } = JSON.parse(event.body || "{}"));
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  if (!name || !email || !message) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Name, email, and message are required." }) };
  }

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
  <div style="background:#0a0a0a;padding:24px 32px">
    <span style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.2em;color:#00D4C8">gabbycole.com</span>
    <h2 style="color:#fff;margin:8px 0 0;font-size:1.3rem">New Contact Form Message</h2>
  </div>
  <div style="padding:32px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:#999;width:80px">From</td>
          <td style="padding:8px 0;font-weight:600;color:#111">${name}</td></tr>
      <tr><td style="padding:8px 0;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:#999">Email</td>
          <td style="padding:8px 0"><a href="mailto:${email}" style="color:#FF2D78;text-decoration:none">${email}</a></td></tr>
      ${subject ? `<tr><td style="padding:8px 0;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:#999">Subject</td>
          <td style="padding:8px 0;color:#111">${subject}</td></tr>` : ""}
    </table>
    <div style="margin-top:24px;padding:20px;background:#f9f9f9;border-radius:6px;border-left:3px solid #FF2D78">
      <p style="margin:0;line-height:1.7;color:#333;white-space:pre-wrap">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
    </div>
    <div style="margin-top:24px">
      <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Your message')}"
         style="display:inline-block;background:#FF2D78;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.1em">
        Reply to ${name}
      </a>
    </div>
  </div>
</div>
</body>
</html>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email,
        subject: subject ? `Contact: ${subject}` : `New message from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Failed to send email." }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Contact function error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error." }) };
  }
};
