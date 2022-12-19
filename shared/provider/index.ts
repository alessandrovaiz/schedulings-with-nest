import { container } from 'tsyringe';

import { IEmailProvider } from '@shared/container/providers/emailProvider/emailProvider.domain';
import InstantMessengerEmailProvider from '@shared/container/providers/emailProvider/instantMessenger/instantMessengerEmailProvider';

container.registerSingleton<IEmailProvider>(
  'EmailProvider',
  InstantMessengerEmailProvider,
);
