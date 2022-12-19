import { Injectable } from '@nestjs/common';
import { Schema, TConfigSchema } from './environment.schema';
import * as convict from 'convict';
import * as dotenv from 'dotenv';

@Injectable()
export class EnvironmentService {
  config: convict.Config<TConfigSchema>;

  constructor() {
    this.config = convict(Schema);
    const dotEnvFile = dotenv.config().parsed;
    if (dotEnvFile) {
      this.config.load(dotenv.config().parsed);
    }
    this.config.validate({ allowed: 'warn' });
  }

  read() {
    return this.config.getProperties();
  }

  getOne(configName: any) {
    return this.config.get(configName);
  }
}
