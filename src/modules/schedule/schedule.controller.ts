import { Controller, Get, Post, Body, Param, Render } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import ScheduleEntity from './entities/schedule.entity';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  create(@Body() schedule: ScheduleEntity) {
    return this.scheduleService.create(schedule);
  }

  @Get()
  @Render('index')
  async viewSchedules() {
    const result = await this.scheduleService.findAll();
    return { result };
  }

  @Get(':id')
  @Render('schedule')
  async viewScheduleDetails(@Param('id') id: string) {
    const response = await this.scheduleService.findOne(id);
    return { schedulings: response.schedulings };
  }
}
