import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  social?: string;
}

export async function POST(req: Request) {
  // Validate environment variables
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmailTo = process.env.CONTACT_EMAIL_TO;
  const contactEmailFrom = process.env.CONTACT_EMAIL_FROM;

  if (!resendApiKey || !contactEmailTo || !contactEmailFrom) {
    console.error("Missing required environment variables");
    return new NextResponse(
      JSON.stringify({ error: "Server configuration error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const body: ContactFormData = await req.json();
    const { name, email, message, social } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Format the email body
    const emailBody = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica',
          'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }
      .header {
        border-bottom: 2px solid #007bff;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }
      .header h2 {
        margin: 0;
        color: #007bff;
      }
      .field {
        margin-bottom: 15px;
      }
      .field-label {
        font-weight: bold;
        color: #555;
        font-size: 14px;
        margin-bottom: 5px;
      }
      .field-value {
        background-color: #fff;
        padding: 10px;
        border-left: 3px solid #007bff;
        border-radius: 4px;
        word-break: break-word;
      }
      .footer {
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px solid #e0e0e0;
        font-size: 12px;
        color: #999;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>🎉 New Portfolio Contact Message</h2>
      </div>

      <div class="field">
        <div class="field-label">👤 Name</div>
        <div class="field-value">${name}</div>
      </div>

      <div class="field">
        <div class="field-label">📧 Email</div>
        <div class="field-value">
          <a href="mailto:${email}">${email}</a>
        </div>
      </div>

      <div class="field">
        <div class="field-label">💬 Message</div>
        <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
      </div>

      ${
        social
          ? `
      <div class="field">
        <div class="field-label">🔗 Social</div>
        <div class="field-value">
          <a href="${social}" target="_blank" rel="noopener noreferrer">${social}</a>
        </div>
      </div>
      `
          : ""
      }

      <div class="footer">
        <p>This email was sent from your portfolio contact form.</p>
      </div>
    </div>
  </body>
</html>
    `.trim();

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      replyTo: email,
      subject: `New Portfolio Contact Message from ${name}`,
      html: emailBody,
    });

    // Check if email was sent successfully
    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to send email" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
