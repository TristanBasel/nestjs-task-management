import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // private to limit room for error, empty array of tasks.
  getAllTasks(): Task[] {
    // public by default, the : Task[] adds type safety.
    return this.tasks;
  }
}
