import { SubmitHandler } from "react-hook-form";
import { FormValues } from "../../types/schema";
import { createToDo } from "../../services/todo-services";

export const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
  console.log("data created", data);
  createToDo(data);
};
