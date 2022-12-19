export interface IEmailRequestBody {
  to: string;
  type: 'text' | 'template';
  provider: string;
  subject: string;
  text?: {
    body: string;
  };
  template?: {
    name: string;
    args: Record<string, unknown>;
  };
}

export interface IEmailProvider {
  sendEmail(data: IEmailRequestBody): Promise<void>;
  getTemplates(): Promise<void>;
}
