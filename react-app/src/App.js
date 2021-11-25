import { useState } from "react";
import Bootstrap from "./Components/bootstrap/Bootstrap";
import styles from "./App.module.scss";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Bootstrap />
    </>
  );
}

export default App;
