import { SubmitHandler } from "react-hook-form";
import { FormValuesGet } from "../../types/schema";
import { updateToDo } from "../../services/todo-services";

export const onSubmit: SubmitHandler<FormValuesGet> = (data: FormValuesGet) => {
  console.log("data created", data);
  updateToDo(data);
};
