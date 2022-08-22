export interface ISubTask {
  name: string;
  isDone: boolean;
}

export interface ITaskList {
  name: string;
  subtasks: ISubTask[];
}

export interface ITask {
  taskName: string;
  taskList: ITaskList[];
  color: string;
}
