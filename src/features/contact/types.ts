export type Ticket = {
  name: string;
  email: string;
  message: string;
};
export type ContactResponse = {
    success: boolean;
    message: string;
    errors?: ERRORS;
  }
export type IContactService = {
  createTicket: (ticket: Ticket) => Promise<ContactResponse>;
};



export type ERRORS = {
  name?: string;
  email?: string;
  message?: string;
};

export type InputField = {
  name: string;
  label: string;
  type: string;
};

export type CheckboxField = {
  name: string;
  label: string;
  options: string[];
};

export type TextareaField = {
  name: string;
  label: string;
  rows?: number;
};

export type ContactFrontmatter = {
  enable: boolean;
  title: string;
  description: string;
  inputs: InputField[];
  checkboxes: CheckboxField[];
  textareas: TextareaField[];
  submit: {
    label: string;
  };
  successMessage: string;
  errorMessage: string;
};

export type ContactData = {
  frontmatter: ContactFrontmatter;
  content: string;
};
