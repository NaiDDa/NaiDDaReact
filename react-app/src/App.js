import { useState } from "react";
import NewsList from "./Components/NewsList";
import styles from "./App.module.scss";

function App() {
  const [visible, setVisible] = useState(false);
  function printMe() {
    console.log("완료");
  }
  setTimeout(printMe, 3000);
  console.log("대기중.....");
  return (
    <>
      <NewsList />
    </>
  );
}

export default App;
