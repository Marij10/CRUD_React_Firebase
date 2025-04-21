import { z } from "zod";

export const schema = z.object({
  title: z.string().min(3),
  completed: z.coerce.boolean(),
});

export type FormValues = z.infer<typeof schema>;

export const schemaGet = z.object({
  id: z.string(),
  title: z.string().min(3),
  completed: z.coerce.boolean(),
});
export type FormValuesGet = z.infer<typeof schemaGet>;
