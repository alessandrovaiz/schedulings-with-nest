import { environment } from '@config/environment';
import { inject, singleton } from 'tsyringe';

import IHttpClientProvider, {
  IRequestParameters,
} from '../../HttpClientProvider/models/IHttpClientProvider';
import { IEmailProvider, IEmailRequestBody } from '../emailProvider.domain';

@singleton()
export default class InstantMessengerEmailProvider implements IEmailProvider {
  private readonly httpClientProvider: IHttpClientProvider;

  constructor(
    @inject('HttpClientProvider')
    httpClientProvider: IHttpClientProvider,
  ) {
    this.httpClientProvider = httpClientProvider;
  }

  async sendEmail(payload: IEmailRequestBody): Promise<void> {
    const requestParams = {
      payload,
      url: `${environment.INSTANT_MESSENGER_EMAIL_ENDPOINT}/${environment.INSTANT_MESSENGER_EMAIL_APP_ID}/messages`,
      headers: {
        Authorization: `Bearer ${environment.INSTANT_MESSENGER_EMAIL_AUTH_TOKEN}`,
      },
    } as IRequestParameters;

    await this.httpClientProvider.post(requestParams);
  }

  async getTemplates(): Promise<void> {
    const requestParams = {
      url: `${environment.INSTANT_MESSENGER_EMAIL_ENDPOINT}/${environment.INSTANT_MESSENGER_EMAIL_APP_ID}/templates`,
      headers: {
        Authorization: environment.INSTANT_MESSENGER_EMAIL_AUTH_TOKEN,
      },
    } as IRequestParameters;

    await this.httpClientProvider.get(requestParams);
  }
}
