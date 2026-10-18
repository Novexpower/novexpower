import "server-only";

import { Ticket, ticketSchema } from "@/zod/validations-schema";
import { IContactEmailSender } from "./Interfaces/IContactEmailSender";
import { ERRORS } from "./types";


export class ContactService {
  constructor(
    private readonly emailSender: IContactEmailSender,
  ) {}

  async create(ticket: Ticket) {
    const parsed = ticketSchema.safeParse(ticket);

    if (!parsed.success) {
      const fields = parsed.error.flatten().fieldErrors;

      const errors: ERRORS = {
        name: fields.name?.[0],
        email: fields.email?.[0],
        message: fields.message?.[0],
      };

      return {
        success: false,
        message: "Validation failed. Please check your input.",
        errors,
      };
    }

    const result = await this.emailSender.send(parsed.data);

    return {
      ...result,
      errors: undefined,
    };
  }
}