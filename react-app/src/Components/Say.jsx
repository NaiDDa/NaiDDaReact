import { useState } from "react";
const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState();
  const handleEnter = () => {
    setMessage("어서와");
  };
  const handleLeave = () => {
    setMessage("응~잘가");
  };
  const red = () => {
    setColor("red");
  };
  const green = () => {
    setColor("green");
  };
  const blue = () => {
    setColor("blue");
  };

  return (
    <>
      <div>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleLeave}>퇴장</button>
        <h1 style={{ color }}>{message}</h1>
        <button style={{ color: "red" }} onClick={red}>
          뻘건색
        </button>
        <button style={{ color: "green" }} onClick={green}>
          초록색
        </button>
        <button style={{ color: "blue" }} onClick={blue}>
          퍼런색
        </button>
      </div>
    </>
  );
};
export default Say;
