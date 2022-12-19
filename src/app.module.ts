import { Module } from '@nestjs/common';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { SchedulingsModule } from './modules/schedulings/schedulings.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [DatabaseModule, ScheduleModule, SchedulingsModule],
})
export class AppModule {}
