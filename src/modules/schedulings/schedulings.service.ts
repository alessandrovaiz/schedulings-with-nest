import { Injectable } from '@nestjs/common';
import { ScheduleRepository } from '../schedule/schedule.repository';
import SchedulingsEntity from './entities/scheduling.entity';
import { SchedulingRepository } from './schedulings.repository';

@Injectable()
export class SchedulingsService {
  constructor(
    private readonly schedulingRepository: SchedulingRepository,
    private readonly scheduleRepository: ScheduleRepository,
  ) {}

  async create(scheduling: SchedulingsEntity) {
    const schedule = await this.scheduleRepository.findOne(
      scheduling.scheduleId,
    );

    if (!schedule) {
      throw new Error('Schedule not found');
    }

    const isDateNotAvailable =
      await this.schedulingRepository.checkAvailableDate(
        schedule.id,
        scheduling.startDate,
        scheduling.endDate,
      );

    if (isDateNotAvailable.length) {
      throw new Error('You cannot perform a scheduling at this date');
    }

    return this.schedulingRepository.create(scheduling);
  }

  findManyByScheduleId(scheduleId: string) {
    return this.schedulingRepository.findManyByWhere({ scheduleId });
  }
}
