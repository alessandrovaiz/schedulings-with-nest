import convict from 'convict';

export interface TConfigSchema {
  NODE_ENV: string;
  DB_TYPE: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
}

export const Schema: convict.Schema<TConfigSchema> = {
  NODE_ENV: {
    doc: 'Application environment',
    format: ['development', 'production', 'homologation', 'test'],
    env: 'NODE_ENV',
    default: 'development',
  },
  DB_TYPE: {
    doc: 'Database type',
    format: ['mysql', 'mariadb', 'postgres'],
    env: 'DB_TYPE',
    default: '*',
  },
  DB_HOST: {
    doc: 'Database Host',
    format: String,
    env: 'DB_HOST',
    default: '*',
  },
  DB_NAME: {
    doc: 'Database Name',
    format: String,
    env: 'DB_NAME',
    default: '*',
  },
  DB_PORT: {
    doc: 'Database Port',
    format: Number,
    env: 'DB_PORT',
    default: 0,
  },
  DB_USER: {
    doc: 'Database User',
    format: String,
    env: 'DB_USER',
    default: '*',
  },
  DB_PASSWORD: {
    doc: 'Database Password',
    format: String,
    env: 'DB_PASSWORD',
    default: '*',
  },
};
