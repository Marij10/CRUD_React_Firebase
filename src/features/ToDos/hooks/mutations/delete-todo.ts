import { deleteToDo } from "@/features/ToDos/services/todo-services";

export async function deleteATodo(id: string) {
  try {
    await deleteToDo(id);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}
