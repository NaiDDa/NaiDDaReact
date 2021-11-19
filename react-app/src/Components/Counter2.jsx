import { useState } from "react";

const Counter2 = () => {
  const [counter, setCounter] = useState(0);

  const num = (n) => {
    setCounter(counter + n);
  };

  return (
    <>
      <div>현재 카운터값은 {counter} 입니다.</div>
      <button onClick={() => num(+1)}>+1</button>
      <button onClick={() => num(-1)}>-1</button>
    </>
  );
};
export default Counter2;
