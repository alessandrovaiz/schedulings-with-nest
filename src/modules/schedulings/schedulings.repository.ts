import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import SchedulingsEntity from './entities/scheduling.entity';

@Injectable()
export class SchedulingRepository {
  constructor(
    @InjectRepository(SchedulingsEntity)
    private readonly schedulingRepository: Repository<SchedulingsEntity>,
  ) {}

  async create(scheduling: SchedulingsEntity): Promise<SchedulingsEntity> {
    return this.schedulingRepository.save(scheduling);
  }

  async checkAvailableDate(
    scheduleId: string,
    startDate: any,
    endDate: any,
  ): Promise<SchedulingsEntity[]> {
    const query = this.schedulingRepository
      .createQueryBuilder('schedulings')
      .where('schedulings.scheduleId = :scheduleId', { scheduleId })
      .andWhere(
        ':startDate >= schedulings.startDate and :startDate <= schedulings.endDate',
        {
          startDate,
          endDate,
        },
      )
      .andWhere(
        ':endDate >= schedulings.startDate and :endDate <= schedulings.endDate ',
      );
    console.log(query.getQueryAndParameters());
    return query.getMany();
  }

  async findManyByWhere(
    where: FindOptionsWhere<SchedulingsEntity>,
  ): Promise<SchedulingsEntity[]> {
    return this.schedulingRepository.findBy(where);
  }
}
