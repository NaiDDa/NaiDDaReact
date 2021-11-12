import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h2>값 : {number}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
    </>
  );
};
export default Counter;
