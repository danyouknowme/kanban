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
  [id: string]: {
    boardTaskId: string;
    taskName: string;
    taskList: ITaskList[];
    tagColor: string;
  };
}
