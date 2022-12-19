import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ScheduleEntity from './entities/schedule.entity';

@Injectable()
export class ScheduleRepository {
  constructor(
    @InjectRepository(ScheduleEntity)
    private readonly scheduleRepository: Repository<ScheduleEntity>,
  ) {}

  async create(schedule: ScheduleEntity): Promise<ScheduleEntity> {
    return this.scheduleRepository.save(schedule);
  }

  async findAll(): Promise<ScheduleEntity[]> {
    return this.scheduleRepository.find();
  }

  async findOne(id: string): Promise<ScheduleEntity> {
    return this.scheduleRepository.findOne({
      where: { id },
      relations: ['schedulings'],
    });
  }
}
