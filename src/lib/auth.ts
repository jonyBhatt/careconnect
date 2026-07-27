import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { sendEmail } from "./actions/auth-action/email/verification-email.action";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    expiration: 3600, // 1 hour
    // autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
       await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
        html: `
          <div>
            <h2>Verify your email</h2>
            <p>Click the link below to verify your email address for your account:</p>
            <p><a href="${url}">Verify Email Address</a></p>
          </div>
        `,
      });
    },
  },
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  advanced: {
    database: {
      generateId: false,
    },
  },
});
