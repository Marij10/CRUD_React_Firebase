import { getToDos } from "../../services/todo-services";

export async function getAllToDos() {
  const todos = await getToDos();
  return todos;
}
