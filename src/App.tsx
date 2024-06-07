import { useEffect, useState } from "react";
import reactTutorialLogo from "./assets/reactjs-tutorial.png";

function App() {
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    setTitle((_) => "React Tutorial 2024 1");
    setTitle((_) => "React Tutorial 2024 2");
  }, []);

  useEffect(() => {
    console.log(title);
  }, [title]);
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
    </>
  );
}

export default App;
