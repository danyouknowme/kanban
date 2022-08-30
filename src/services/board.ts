import axios from "axios";

export async function getAllBoards(userId: string) {
  const response = await axios.get(`http://localhost:5050/boards?userId=${userId}`);
  return response.data;
}
