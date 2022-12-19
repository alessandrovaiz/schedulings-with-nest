import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { ScheduleRepository } from './schedule.repository';
import ScheduleEntity from './entities/schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ScheduleController],
  imports: [TypeOrmModule.forFeature([ScheduleEntity])],
  providers: [ScheduleService, ScheduleRepository],
  exports: [ScheduleRepository],
})
export class ScheduleModule {}
