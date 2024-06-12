import { Button, Input } from "@nextui-org/react";
import { PropsWithChildren } from "react";

import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Required" }),
});

export const TaskForm = (props: PropsWithChildren) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (fieldValues: FieldValues) => {
    console.log(fieldValues);
  };
  return (
    <div className="container w-1/3">
      <form
        className="flex flex-col"
        onSubmit={handleSubmit((d) => onSubmit(d))}
      >
        <div className="m-2">
          <h1 className="font-bold text-2xl">Task Form</h1>
        </div>
        <div className="m-2">
          <Input
            isRequired
            {...register("title")}
            type="title"
            label="Title"
            isInvalid={errors.title ? true : false}
            errorMessage={(errors?.title as any)?.message}
          />
        </div>
        <div className="m-2">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};
