/**
 * Email utility functions
 * 
 * TODO: Интегрировать реальный email сервис (Resend, SendGrid, AWS SES и т.д.)
 */

interface SendPasswordResetEmailOptions {
  email: string;
  resetUrl: string;
  userName?: string;
}

export async function sendPasswordResetEmail({
  email,
  resetUrl,
  userName,
}: SendPasswordResetEmailOptions): Promise<void> {
  // Заглушка для отправки email
  // В реальном приложении здесь должна быть интеграция с email сервисом
  
  console.log("📧 Password Reset Email:", {
    to: email,
    subject: "Reset Your Password",
    resetUrl,
    userName: userName || email,
  });

  // Пример интеграции с Resend (раскомментируйте когда настроите):
  /*
  import { Resend } from 'resend';
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: 'noreply@yourdomain.com',
    to: email,
    subject: 'Reset Your Password',
    html: `
      <h1>Reset Your Password</h1>
      <p>Hello ${userName || email},</p>
      <p>You requested to reset your password. Click the link below to reset it:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  });
  */

  // Пример интеграции с SendGrid:
  /*
  import sgMail from '@sendgrid/mail';
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  
  await sgMail.send({
    to: email,
    from: 'noreply@yourdomain.com',
    subject: 'Reset Your Password',
    html: `
      <h1>Reset Your Password</h1>
      <p>Hello ${userName || email},</p>
      <p>You requested to reset your password. Click the link below to reset it:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  });
  */
}

