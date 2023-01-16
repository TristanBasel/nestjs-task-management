import { Body, Controller, Get, Post } from "@nestjs/common";
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    // Doesn't have to be the same name, but it might be helpful to keep tack of everything
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
