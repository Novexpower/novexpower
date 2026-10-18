"use server";

import { contact } from "../feature";



export async function sendTicket(prevState: any, payload: FormData) {
  const name = ((payload.get("name") as string) || "").trim();
  const email = ((payload.get("email") as string) || "").trim();
  const message = ((payload.get("message") as string) || "").trim();

  const response = await contact.service.create({
    name,
    email,
    message,
  });

  if (response.success) {
    return {
      success: true,
      message: response.message,
    };
  } else {
    return {
      success: false,
      message: response.message,
      errors: response.errors as {
        name?: string;
        email?: string;
        message?: string;
      },
    };
  }
}
