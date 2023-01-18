import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from "../auth/user.entity";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  //  This line is no longer in use for DB.
  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }

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

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto, user); // put the code that was in here in the repository to keep the service clean.
  }

  async deleteTask(id: string): Promise<void> {
    // handle the case for a task that doesn't exist.
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found!`)
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskByID(id); // if task dosn't exist we will throw error like in that function.
    task.status = status;

    await this.tasksRepository.save(task);

    return task;
  }
}
