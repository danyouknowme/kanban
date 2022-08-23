export interface ISubTask {
  name: string;
  isDone: boolean;
}

export interface ITaskList {
  id: string;
  name: string;
  description: string;
  subtasks: ISubTask[];
}

export interface ITask {
  taskName: string;
  taskList: ITaskList[];
  color: string;
}
