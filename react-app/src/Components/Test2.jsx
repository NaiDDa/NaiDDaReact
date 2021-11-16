import { useState } from "react";

const Test2 = () => {
  const [test, setTest] = useState("");
  const inputChange = (e) => {
    setTest(e.target.value);
    console.log(e.target.value);
  };

  const btn = () => {
    alert(test);
  };
  return (
    <div>
      <input onChange={inputChange} />
      <button onClick={btn}>버튼</button>
    </div>
  );
};
export default Test2;
