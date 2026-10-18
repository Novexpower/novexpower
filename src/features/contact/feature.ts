import "server-only";


import { ResendContactEmailSender } from "./infrastructure/ResendContactEmailSender";
import { ContactService } from "./service";

const emailSender = new ResendContactEmailSender();

export const contact = {
  service: new ContactService(emailSender),
};