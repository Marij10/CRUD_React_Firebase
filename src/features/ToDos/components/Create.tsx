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
import { FormValues, schema } from "../types/schema";
import { onSubmit } from "../hooks/mutations/create-todo";
import { useEffect } from "react";

function CreateToDo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <h1>Create Page</h1>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create ToDo</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
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
            <Button type="submit">Create</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}

export default CreateToDo;
