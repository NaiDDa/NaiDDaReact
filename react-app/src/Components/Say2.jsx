import { useState } from "react";
const Say2 = () => {
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState({ color: "black", backgrund: "black" });
  const handleEnter = () => {
    setMessage("어서오고");
  };
  const handleLeave = () => {
    setMessage("응~잘가");
  };
  const red = () => {
    handleColor("red");
  };
  const green = () => {
    handleColor("green");
  };
  const blue = () => {
    handleColor("blue");
  };

  const handleColor = (color) => {
    setStyle((prev) => ({ ...prev, color }));
  };

  return (
    <>
      <div>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleLeave}>퇴장</button>
        <h1 style={{ style }}>{message}</h1>
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
export default Say2;
