import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../../../components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { FormValuesGet } from "../types/schema";
import { getAllToDos } from "../hooks/queries/get-all-todos";
import { useEffect, useState } from "react";
import { deleteATodo } from "../hooks/mutations/delete-todo";

function ToDoList() {
  const [todos, setTodos] = useState<FormValuesGet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await getAllToDos();
        setTodos(todos as FormValuesGet[]);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [todos]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Outlet />
      <Link to={`create`}>
        <Button>Create a Task</Button>
      </Link>
      <Table>
        <TableCaption>To-Do List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Task ID</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Update</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((task: FormValuesGet) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>
                {task.completed ? "Completed" : "Not Completed"}
              </TableCell>
              <TableCell>
                <Link to={`update/${task.id}`}>
                  <Button>Update</Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button
                  className="bg-destructive"
                  onClick={() => deleteATodo(task.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default ToDoList;
