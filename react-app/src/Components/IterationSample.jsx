import { useState } from "react";

const IterationSample = () => {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([
    {
      id: 1,
      text: "눈사람",
    },
    {
      id: 2,
      text: "얼음",
    },
  ]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setArr([...arr, { id: 0, text }]);
    setText("");
  };
  return (
    <>
      <input onChange={handleChange} value={text} />
      <button onClick={handleClick}>버튼</button>
      <ul>
        {arr.map((e, i) => (
          <li key={i}>{e.text}입니다.</li>
        ))}
      </ul>
    </>
  );
};
export default IterationSample;
