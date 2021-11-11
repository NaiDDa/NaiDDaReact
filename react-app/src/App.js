import { Fragment } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
function App() {
  const name = "리액트1";
  const jal = "자알";
  const age = 0;
  return (
    <>
      {age || <h1>undefined입니다</h1>}
      {name === "리액트" && <h1>리액트입니다.</h1>}
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다</h1>}
      <h1 className="react">{name} 안녕</h1>
      <h2>{jal} 잘동하냐</h2>
      <input />

      <MyComponent name="React123" name2="asdadasdasdsa">
        <h1>CHILDREN</h1>
      </MyComponent>
    </>
  );
}

export default App;
