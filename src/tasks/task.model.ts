export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus; // set the values that status can be.
}

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
