import { Resend } from 'resend';

interface SendPasswordResetEmailOptions {
  email: string;
  resetUrl: string;
  userName?: string;
}

interface SendInviteEmailOptions {
  email: string;
  inviteUrl: string;
  inviterName?: string;
  inviterCompany?: string;
}

export async function sendPasswordResetEmail({
  email,
  resetUrl,
  userName,
}: SendPasswordResetEmailOptions): Promise<void> {
  
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (!apiKey) {
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Reset Your Password</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px;">
            <h1 style="color: #2563eb; margin-top: 0;">Reset Your Password</h1>
            <p>Hello ${userName || email},</p>
            <p>You requested to reset your password. Click the button below to reset it:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reset Password</a>
            </div>
            <p style="font-size: 14px; color: #666;">Or copy and paste this link into your browser:</p>
            <p style="font-size: 12px; color: #999; word-break: break-all;">${resetUrl}</p>
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              <strong>This link will expire in 1 hour.</strong>
            </p>
            <p style="font-size: 14px; color: #666;">
              If you didn't request this, please ignore this email.
            </p>
          </div>
        </body>
      </html>
    `;

    const emailText = `
Reset Your Password

Hello ${userName || email},

You requested to reset your password. Click the link below to reset it:

${resetUrl}

This link will expire in 1 hour.

If you didn't request this, please ignore this email.
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Reset Your Password',
      html: emailHtml,
      text: emailText,
    });

    if (result.error) {
      console.error("❌ Resend API returned an error:", {
        error: result.error,
        message: result.error.message,
        name: result.error.name,
      });
      
      const errorMessage = result.error.message;
      
      throw new Error(`Resend API error: ${errorMessage}`);
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorName = error instanceof Error ? error.name : undefined;
    
    console.error("❌ Error sending password reset email:", {
      error: errorMessage,
      stack: errorStack,
      name: errorName,
    });
    throw error;
  }
}

export async function sendInviteEmail({
  email,
  inviteUrl,
  inviterName,
  inviterCompany,
}: SendInviteEmailOptions): Promise<void> {
  
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  
  if (!apiKey) {
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const inviterInfo = inviterName || 'A colleague';
    const companyInfo = inviterCompany ? ` from ${inviterCompany}` : '';
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>You're Invited to Coordinator</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px;">
            <h1 style="color: #2563eb; margin-top: 0;">You're Invited!</h1>
            <p>Hello,</p>
            <p><strong>${inviterInfo}</strong>${companyInfo} has invited you to join Coordinator, a workspace collaboration platform.</p>
            <p>Click the button below to accept the invitation and create your account:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${inviteUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Accept Invitation</a>
            </div>
            <p style="font-size: 14px; color: #666;">Or copy and paste this link into your browser:</p>
            <p style="font-size: 12px; color: #999; word-break: break-all;">${inviteUrl}</p>
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              <strong>This invitation will expire in 7 days.</strong>
            </p>
            <p style="font-size: 14px; color: #666;">
              If you didn't expect this invitation, you can safely ignore this email.
            </p>
          </div>
        </body>
      </html>
    `;

    const emailText = `
You're Invited to Coordinator

Hello,

${inviterInfo}${companyInfo} has invited you to join Coordinator, a workspace collaboration platform.

Click the link below to accept the invitation and create your account:

${inviteUrl}

This invitation will expire in 7 days.

If you didn't expect this invitation, you can safely ignore this email.
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `${inviterInfo} invited you to join Coordinator`,
      html: emailHtml,
      text: emailText,
    });

    if (result.error) {
      console.error("❌ Resend API returned an error:", {
        error: result.error,
        message: result.error.message,
        name: result.error.name,
      });
      
      const errorMessage = result.error.message;
      
      throw new Error(`Resend API error: ${errorMessage}`);
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorName = error instanceof Error ? error.name : undefined;
    
    console.error("❌ Error sending invite email:", {
      error: errorMessage,
      stack: errorStack,
      name: errorName,
    });
    throw error;
  }
}

