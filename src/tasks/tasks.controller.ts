import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { TasksService } from './tasks.service';
import { TaskStatus } from "./task-status.enum";
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   // If we have any filters defined, call tasksService.getTasksWithFilters
  //   // Otherwise, just get all tasks
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWIthFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  //   // Doesn't have to be the same name, but it might be helpful to keep tack of everything
  //   return this.tasksService.getAllTasks();
  // }
  //
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskByID(id);
  // }
  //
  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   // This decorator @body is important.
  //   return this.tasksService.createTask(createTaskDto);
  // }
  //
  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   this.tasksService.deleteTask(id);
  // }
  //
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
