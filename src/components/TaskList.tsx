import React from "react";
import { ITaskList } from "../interfaces/task";

interface TaskListProps {
  tasklist: ITaskList;
}

const TaskList: React.FC<TaskListProps> = ({ tasklist }) => {
  return (
    <div className="flex flex-col bg-main w-72 px-4 py-6 my-2.5 first:mt-6 last:mb-6 rounded-md">
      <span className="font-medium text-white">{tasklist.name}</span>
      <span className="text-xs text-zinc-500 mt-1 font-semibold">0 of 3 subtasks</span>
    </div>
  );
};

export default TaskList;
