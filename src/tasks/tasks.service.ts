import { Injectable, NotFoundException } from "@nestjs/common";
import { TasksRepository } from "./tasks.repository";
import { Task } from "./task.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  //  This line is no longer in use for DB.
  //
  // getTasksWIthFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   // define a temporary array to hold result
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (
  //         task.title.toLowerCase().includes(search) ||
  //         task.description.includes(search)
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }
  // getAllTasks(): Task[] {
  //   // public by default, the : Task[] adds type safety.
  //   return this.tasks;
  // }

  async getTaskByID(id: string): Promise<Task> {
    // whenever interacting with db it will be async method
    const found = await this.tasksRepository.findOne(
      // {where: {id: id}},
      id,
    );
    // if not found, throw an error (404 not found)
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`); // object of NotFoundException class which bubbles up into nest js,
      // we could wrap in a catch block and handle ourselves later.
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto); // put the code that was in here in the repository to keep the service clean.
  }
  //
  // deleteTask(id: string): void {
  //   // handle the case for a task that doesn't exist.
  //   const found = this.getTaskByID(id);
  //   // remove the task that has the task id passed in.
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
  //
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskByID(id);
  //   task.status = status;
  //   return task;
  // }
}
