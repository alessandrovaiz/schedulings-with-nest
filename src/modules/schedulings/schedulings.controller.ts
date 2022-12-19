import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import SchedulingsEntity from './entities/scheduling.entity';
import { SchedulingsService } from './schedulings.service';

@Controller('schedulings')
export class SchedulingsController {
  constructor(private readonly schedulingsService: SchedulingsService) {}

  @Post()
  create(@Body() scheduling: SchedulingsEntity) {
    return this.schedulingsService.create(scheduling);
  }

  @Get(':scheduleId')
  findManyByScheduleId(@Param('scheduleId') scheduleId: string) {
    return this.schedulingsService.findManyByScheduleId(scheduleId);
  }
}
