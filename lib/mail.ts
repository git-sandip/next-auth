import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
) => {
  await resend.emails.send({
    from: "no-reply@sapkotasandip.com.np",
    to: email,
    subject: "2 Factor Authentication Code",
    html: `<body style="font-family: 'Arial', sans-serif;  color: #495057; margin: 0; padding: 0; text-align: center; line-height: 1.6;">
    <div style="max-width: 600px; margin: 20px auto; padding: 40px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #007bff; font-size: 28px; margin-bottom: 20px;">2FA Code</h1>
      <p style="font-size: 18px; margin-bottom: 10px;">Your 2FA code is:</p>
      <p style="font-size: 36px; font-weight: bold; color: #28a745; margin: 20px 0;">${token}</p>
      <p style="font-size: 18px;">Please use this code to complete your authentication process.</p>
      <p style="margin-top: 20px; color: #888;">This email was sent from <strong>no-reply@sapkotasandip.com.np</strong>. Do not reply to this email.</p>
    </div>
  </body>`
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: "no-reply@sapkotasandip.com.np",
    to: email,
    subject: "Reset your password.",
    html: `<body style="font-family: 'Arial', sans-serif;  color: #495057; margin: 0; padding: 0; text-align: center; line-height: 1.6;">
    <div style="max-width: 600px; margin: 20px auto; padding: 40px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #007bff; font-size: 28px; margin-bottom: 20px;">Reset Your Password</h1>
        <p style="font-size: 16px; margin-bottom: 20px;">You've requested to reset your password. Click the link below to reset it:</p>
        <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Reset Password</a>
        <p style="font-size: 16px; margin-top: 20px;">If you didn't request a password reset, you can safely ignore this email.</p>
        <p style="margin-top: 20px; color: #888;">This email was sent from <strong>no-reply@sapkotasandip.com.np</strong>. Do not reply to this email.</p>
    </div>
</body>`
  });
};

export const sendVerificationEmail = async (
  email: string,
  token: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "verify@sapkotasandip.com.np",
    to: email,
    subject: "Please Confirm your Email.",
    html: ` <body style="font-family: 'Arial', sans-serif; color: #495057; margin: 0; padding: 0; text-align: center; line-height: 1.6;">
    <div style="max-width: 600px; margin: 20px auto; padding: 40px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #007bff; font-size: 28px; margin-bottom: 20px;">Confirm Your Email</h1>
        <p style="font-size: 16px; margin-bottom: 20px;">Welcome! You're almost there. Click the link below to confirm your email:</p>
        <a href="${confirmLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Confirm Email</a>
        <p style="font-size: 16px; margin-top: 20px;">If you didn't create an account, you can safely ignore this email.</p>
        <p style="margin-top: 20px; color: #888;">This email was sent from <strong>verify@sapkotasandip.com.np</strong>. Do not reply to this email.</p>
    </div>
</body>`
  });
};
