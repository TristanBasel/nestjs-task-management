import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = []; // private to limit room for error, empty array of tasks.
  getAllTasks() { // public by default
    return this.tasks;
  }
}
