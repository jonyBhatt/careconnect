"use server";

import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";

type SignUpEmailActionBodyRequest = {
  name: string;
  email: string;
  password: string;
};

export async function signUpEmailAction({
  name,
  email,
  password,
}: SignUpEmailActionBodyRequest) {

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code ) : "UNKNOWN";

      switch (errCode) {
        case "USER_ALREADY_EXISTS":
          return { error: "Oops! Something went wrong. Please try again." };
        default:
          return { error: err.message };
      }
    }

    console.log("Error Server Action: ", err)

    return { error: "Internal Server Error",err };
  }
}