import { Injectable } from '@nestjs/common';
import ScheduleEntity from './entities/schedule.entity';
import { ScheduleRepository } from './schedule.repository';

@Injectable()
export class ScheduleService {
  constructor(private readonly scheduleRepository: ScheduleRepository) {}

  async create(schedule: ScheduleEntity) {
    return this.scheduleRepository.create(schedule);
  }

  async findAll() {
    return this.scheduleRepository.findAll();
  }

  async findOne(id: string) {
    return this.scheduleRepository.findOne(id);
  }
}
