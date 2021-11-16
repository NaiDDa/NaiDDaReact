import { useState } from "react";

const Test3 = () => {
  const [array, setArray] = useState(["눈사람"]);
  const [text, setText] = useState();
  const Change = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const btn = () => {
    setArray([...array, text]);
    setText("");
  };

  return (
    <>
      <input onChange={Change} value={text} />
      <button onClick={btn}>버튼</button>

      <ul>
        {array.map((e, i) => (
          <li key={i}>{e}입니다.</li>
        ))}
      </ul>
    </>
  );
};
export default Test3;
