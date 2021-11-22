import { useState } from "react";
import TodoCompocent from "./Components/Todo";
import styles from "./App.module.scss";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <TodoCompocent />
    </>
  );
}

export default App;
