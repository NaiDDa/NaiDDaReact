import { useState } from "react";
import Todo from "./Components/todo/Todo";
import styles from "./App.module.scss";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
