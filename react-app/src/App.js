import { useState } from "react";
import IterationSample from "./Components/IterationSample";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <IterationSample />}
    </>
  );
}

export default App;
