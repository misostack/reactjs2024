import { PropsWithChildren } from "react";
import { Task } from "../../model/task.model";
import { TaskForm } from "./components/task.form";

const TaskPage = (props: PropsWithChildren & { tasks: Task[] }) => {
  const { tasks } = props;
  return (
    <>
      <h1>List of tasks</h1>
      <TaskForm></TaskForm>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.views})
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskPage;
