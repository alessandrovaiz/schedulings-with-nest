import SchedulingsEntity from 'src/modules/schedulings/entities/scheduling.entity';
import { Column, Entity, ObjectType, OneToMany } from 'typeorm';

import Base from '../../../common/entities/baseEntity';

@Entity('schedule')
export default class ScheduleEntity extends Base {
  @Column({ type: 'varchar' })
  public owner?: string;

  @Column({ type: 'boolean', default: true })
  public isActive?: boolean;

  @OneToMany(
    (): ObjectType<SchedulingsEntity> => SchedulingsEntity,
    (scheduling: SchedulingsEntity): ScheduleEntity => scheduling.schedule,
  )
  schedulings?: SchedulingsEntity[];
}
