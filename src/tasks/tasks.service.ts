import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
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
  //
  // getTaskByID(id: string): Task {
  //   // try to get a task
  //   const found = this.tasks.find((task) => task.id === id);
  //   // if not found, throw an error (404 not found)
  //   if (!found) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`); // object of NotFoundException class which bubbles up into nest js, we could wrap in a catch block and handle ourselves later.
  //   }
  //   // otherwise, return the found task
  //   return found;
  // }
  //
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //
  //   this.tasks.push(task);
  //   return task;
  // }
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
