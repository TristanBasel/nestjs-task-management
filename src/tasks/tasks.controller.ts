import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    // Doesn't have to be the same name, but it might be helpful to keep tack of everything
    return this.tasksService.getAllTasks();
  }
}
