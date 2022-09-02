import axios from "axios";

export async function createNewTask(boardId: string, userId: string, payload: any) {
  const response = await axios.post(`http://localhost:5050/tasks?boardId=${boardId}&userId=${userId}`, payload);
  return response.data;
}

export async function editTaskListSameColumn(boardId: string, userId: string, payload: any) {
  const response = await axios.put(`http://localhost:5050/tasks/list/same?boardId=${boardId}&userId=${userId}`, payload);
  return response.data;
}

export async function editTaskListDiffColumn(boardId: string, userId: string, payload: any) {
  const response = await axios.put(`http://localhost:5050/tasks/list/diff?boardId=${boardId}&userId=${userId}`, payload);
  return response.data;
}

export async function editSubtaskStatus(boardId: string, userId: string, payload: any) {
  const response = await axios.put(`http://localhost:5050/tasks/subtask?boardId=${boardId}&userId=${userId}`, payload);
  return response.data;
}
