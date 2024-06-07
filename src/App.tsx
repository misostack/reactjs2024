import { useEffect, useState } from "react";
import reactTutorialLogo from "./assets/reactjs-tutorial.png";
import TaskPage from "./pages/task.page";
import { Task } from "./model/task.model";
import { useQuery } from "./hook/common.hooks";
import { TaskService } from "./service/task.service";

function App() {
  const [title, setTitle] = useState<string>("React Tutorial 2024 1");
  const { pending, error, data } = useQuery<Task[]>({
    queryFunc: () => TaskService.findAll(),
  });

  // useEffect(() => {
  //   setTitle((_) => "React Tutorial 2024 1");
  // }, []);

  return (
    <>
      <div>
        <a
          href="https://nextjsvietnam.com/categories/reactjs-tutorial/"
          target="_blank"
        >
          <img
            src={reactTutorialLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>{title}</h1>
      <div>**Target**</div>
      <p>Be able to use ReactJS efficiently in your real world projects</p>
      {pending && "..."}
      {error && <p>{JSON.stringify(error)}</p>}
      {data && <TaskPage tasks={data}></TaskPage>}
    </>
  );
}

export default App;
