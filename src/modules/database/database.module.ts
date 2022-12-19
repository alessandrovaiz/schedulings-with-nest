import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EnvironmentModule } from '../environment/environment.module';
import { EnvironmentService } from '../environment/environment.service';

const environment = new EnvironmentService().read();

@Module({
  imports: [
    EnvironmentModule,
    TypeOrmModule.forRoot({
      type: environment.DB_TYPE as any,
      host: environment.DB_HOST,
      port: environment.DB_PORT,
      username: environment.DB_USER,
      password: environment.DB_PASSWORD,
      database: environment.DB_NAME,
      entities: [join(__dirname, '/../**/**/**.entity{.ts,.js}')],
      synchronize: environment.NODE_ENV === 'development',
    }),
  ],
})
export class DatabaseModule {}
