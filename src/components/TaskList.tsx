import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITaskList } from "../interfaces/task";

interface TaskListProps {
  tasklist: ITaskList;
  index: number;
}

const TaskList: React.FC<TaskListProps> = ({ tasklist, index }) => {
  return (
    <Draggable key={tasklist.id} draggableId={tasklist.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="flex flex-col bg-white dark:bg-main w-72 px-4 py-6 my-2.5 first:mt-6 last:mb-6 rounded-md"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <span className="font-medium text-black dark:text-white">{tasklist.name}</span>
            <span className="text-xs text-zinc-500 mt-1 font-semibold">0 of 3 subtasks</span>
          </div>
        );
      }}
    </Draggable>
  );
};

export default TaskList;
