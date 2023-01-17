import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./task.model";

@Entity()
export class Task {
  // entries become columns in the db
  @PrimaryGeneratedColumn() // Generates automatically,
  id: string; // use uuids so its not just 0, 1, 2...

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
