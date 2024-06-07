import { Task } from "../model/task.model";
import { TaskService } from "../service/task.service";
import { useQuery } from "./common.hooks";

// export const useFindAllTasks = () => {
//   const { pending, error, data } = useQuery<Task[]>({
//     queryFunc: TaskService.findAll(),
//   });

//   return { pending, error, data };
// };
