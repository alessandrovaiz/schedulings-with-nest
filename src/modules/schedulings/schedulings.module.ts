import { Module } from '@nestjs/common';
import { SchedulingsService } from './schedulings.service';
import { SchedulingsController } from './schedulings.controller';
import SchedulingsEntity from './entities/scheduling.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulingRepository } from './schedulings.repository';
import { ScheduleModule } from '../schedule/schedule.module';

@Module({
  controllers: [SchedulingsController],
  imports: [TypeOrmModule.forFeature([SchedulingsEntity]), ScheduleModule],
  providers: [SchedulingsService, SchedulingRepository],
})
export class SchedulingsModule {}
