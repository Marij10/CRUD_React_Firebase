import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValuesGet, schemaGet } from "../types/schema";
import { onSubmit } from "../hooks/mutations/update-todo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneToDo } from "../hooks/queries/get-one-todo";
import { useNavigate } from "react-router-dom";

function UpdateToDo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValuesGet>({
    resolver: zodResolver(schemaGet),
  });

  const id = useParams();
  // const [todo, setTodo] = useState<DocumentData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        if (id.id) {
          const fetchedTodo = await getOneToDo(id.id);
          // setTodo(fetchedTodo || null);
          reset({
            id: id.id,
            title: fetchedTodo?.title || "",
            completed: fetchedTodo?.completed || false,
          });
        }
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTodo();
  }, [id, reset]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      navigate("/Todos/create");
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <h1>Update Page</h1>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Update ToDo</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              {" "}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="id">ID</Label>
                <Input {...register("id")} id="id" readOnly />
                {errors.id && (
                  <div className="text-destructive">{errors.id.message}</div>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  {...register("title")}
                  id="title"
                  placeholder="Write ToDo task"
                />
                {errors.title && (
                  <div className="text-destructive">{errors.title.message}</div>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="completed">Completed</Label>
                <input
                  type="checkbox"
                  id="completed"
                  {...register("completed")}
                />
                {errors.completed && (
                  <div className="text-destructive">
                    {errors.completed.message}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => reset()}>
              Cancel
            </Button>
            <Button type="submit">Update</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}

export default UpdateToDo;
