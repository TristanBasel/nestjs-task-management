import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Task {
  // entries become columns in the db
  @PrimaryGeneratedColumn('uuid') // Generates automatically,
  id: string; // use uuids so its not just 0, 1, 2...

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
  @Exclude({ toPlainOnly: true }) // whenever printing that property, we want to exclude it frm being shown.
  user: User;
}
