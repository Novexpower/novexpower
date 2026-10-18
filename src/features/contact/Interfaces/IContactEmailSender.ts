import type { Ticket } from "../types";

export interface IContactEmailSender {
  send(ticket: Ticket): Promise<{
    success: boolean;
    message: string;
  }>;
}