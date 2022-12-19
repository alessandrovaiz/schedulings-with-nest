import { IEmailProvider, IEmailRequestBody } from '@shared/container/providers/emailProvider/emailProvider.domain';

class FakeEmailProvider implements IEmailProvider {
  sendEmail(data: IEmailRequestBody): Promise<void> {
    return Promise.resolve();
  }

  getTemplates(): Promise<void> {
    return Promise.resolve();
  }
}

export default FakeEmailProvider;
