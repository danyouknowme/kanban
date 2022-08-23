import { ActionCreatorWithPayload, AnyAction, Dispatch } from "@reduxjs/toolkit";
import { DropResult } from "react-beautiful-dnd";

export const onDragEnd = (result: DropResult, dispatch: Dispatch<AnyAction>, columns: any, setColumns: ActionCreatorWithPayload<any, string>) => {
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
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.taskList];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    console.log(copiedItems);
    dispatch(
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          taskList: copiedItems,
        },
      })
    );
  }
};
