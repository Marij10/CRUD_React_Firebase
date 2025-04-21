import { getToDo } from "../../services/todo-services";

export async function getOneToDo(id: string) {
  const todo = await getToDo(id);
  console.log("todo", todo);
  return todo;
}
