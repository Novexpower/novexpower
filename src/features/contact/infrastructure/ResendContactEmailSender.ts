import "server-only";

import { Resend } from "resend";
import { escapeHtml } from "@/utils/escapeHtml";
import type { Ticket } from "../types";
import { IContactEmailSender } from "../Interfaces/IContactEmailSender";

export class ResendContactEmailSender implements IContactEmailSender {
  async send(ticket: Ticket) {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.CONTACT_FROM_EMAIL?.trim();
    const to = process.env.CONTACT_TO_EMAIL?.trim() || from;

    if (!apiKey || !from || !to) {
      console.error("Contact email configuration is incomplete.");

      return {
        success: false,
        message: "The email service is not configured.",
      };
    }

    try {
      const resend = new Resend(apiKey);
      const { name, email, message } = ticket;

      const result = await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `New contact form submission: ${name}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      });

      if (result.error) {
        console.error("Resend error:", result.error.message);

        return {
          success: false,
          message: "Could not send your message. Please try again.",
        };
      }

      return {
        success: true,
        message: "Ticket submitted successfully!",
      };
    } catch (error) {
      console.error("Contact email failed:", error);

      return {
        success: false,
        message: "Could not send your message. Please try again.",
      };
    }
  }
}