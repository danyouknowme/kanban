import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { ITaskList } from "../interfaces/task";
import TaskList from "./TaskList";

interface Task {
  boardTaskId: string;
  taskName: string;
  taskList: ITaskList[];
  tagColor: string;
}

interface TaskProps {
  task: Task;
  columnId: string;
}

const Task: React.FC<TaskProps> = ({ task, columnId }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: task.tagColor }}></div>
        <span className="ml-3 text-zinc-500 text-xs tracking-widest uppercase">
          {task.taskName} ({task.taskList.length})
        </span>
      </div>
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <div className="flex flex-col w-72 min-h-full" {...provided.droppableProps} ref={provided.innerRef}>
              {task.taskList.map((tasklist, index) => (
                <TaskList tasklist={tasklist} index={index} key={index} columnId={columnId} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Task;
