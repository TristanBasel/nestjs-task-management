import { TaskStatus } from '../task.model';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional() // the way to make sure its an optional parameter despite ts not available at runtime.
  @IsEnum(TaskStatus) // check if it is a valid available status.
  status?: TaskStatus;
  @IsOptional()
  @IsString()
  search?: string;
}
