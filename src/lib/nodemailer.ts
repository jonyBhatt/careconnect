import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT) || 465, secure: true, // true for port 465 (SSL), false for port 587
    auth: {
        user: process.env.SMTP_USER, pass: process.env.SMTP_PASS,
    },
});

export async function sendEmail({
                                    to, subject, text, html,
                                }: {
    to: string; subject: string; text: string; html?: string;
}) {
    return await transporter.sendMail({
        from: process.env.SMTP_FROM, to, subject, text, html: html || `<p>${text}</p>`,
    });
}