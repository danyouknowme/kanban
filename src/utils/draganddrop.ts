import { ActionCreatorWithPayload, AnyAction, Dispatch } from "@reduxjs/toolkit";
import { DropResult } from "react-beautiful-dnd";
import { editTaskListDiffColumn, editTaskListSameColumn } from "../services/task";

export const onDragEnd = (
  result: DropResult,
  dispatch: Dispatch<AnyAction>,
  columns: any,
  setColumns: ActionCreatorWithPayload<any, string>,
  boardId: string,
  userId: string
) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.taskList];
    const destItems = [...destColumn.taskList];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    dispatch(
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          taskList: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          taskList: destItems,
        },
      })
    );

    const payload = {
      sourceId: source.droppableId,
      destinationId: destination.droppableId,
      sourceItems: sourceItems,
      destinationItems: destItems,
    };

    editTaskListDiffColumn(boardId, userId, payload);
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.taskList];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    dispatch(
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          taskList: copiedItems,
        },
      })
    );

    const payload = {
      boardTaskId: source.droppableId,
      taskList: copiedItems,
    };
    editTaskListSameColumn(boardId, userId, payload);
  }
};
