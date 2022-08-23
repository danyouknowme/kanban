import React from "react";
import { ITask } from "../interfaces/task";
import TaskList from "./TaskList";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: task.color }}></div>
        <span className="ml-3 text-zinc-500 text-xs tracking-widest uppercase">
          {task.taskName} ({task.taskList.length})
        </span>
      </div>
      <div className="flex flex-col">
        {task.taskList.map((tasklist, index) => (
          <TaskList tasklist={tasklist} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Task;
