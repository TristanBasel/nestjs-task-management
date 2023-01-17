import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task-status.enum';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  //
}
