import ScheduleEntity from 'src/modules/schedule/entities/schedule.entity';
import { Column, Entity, JoinColumn, ManyToOne, ObjectType } from 'typeorm';

import Base from '../../../common/entities/baseEntity';

@Entity('schedulings')
export default class SchedulingsEntity extends Base {
  @Column({ type: 'varchar' })
  public activity?: string;

  @Column({ type: 'timestamptz' })
  public startDate?: Date;

  @Column({ type: 'timestamptz' })
  public endDate?: Date;

  @Column({ type: 'boolean', default: false })
  public isCanceled?: boolean;

  @Column({ type: 'varchar' })
  public scheduleId?: string;

  @ManyToOne((): ObjectType<ScheduleEntity> => ScheduleEntity)
  @JoinColumn({ name: 'scheduleId', referencedColumnName: 'id' })
  public schedule?: ScheduleEntity;
}
