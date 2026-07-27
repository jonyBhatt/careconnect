"use server"
import { transporter } from "@/lib/nodemailer";

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  console.log("To, Subject, Text", to, subject, text);
  try {
    await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_SMTP_USER,
    to,
    subject,
    text,
    html: html || `<p>${text}</p>`,
  });

  return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email" };
  }
}
