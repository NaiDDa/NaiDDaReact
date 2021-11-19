import { useRef, useState } from "react";

const IterationSample = () => {
  // const [nextId, setnextId] = useState(3);
  const nextId = useRef();
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
    setArr([...arr, { id: nextId.current, text }]);
    setText("");
    //setnextId(nextId + 1);
    nextId.current = nextId.current + 1;
  };
  const handleDelete = (id) => {
    console.log("id : " + id);
    const newArr = arr.filter((e) => e.id !== id);
    console.log(newArr);
    setArr(newArr);
  };
  return (
    <>
      <input onChange={handleChange} value={text} />
      <button onClick={handleClick}>버튼</button>
      <ul>
        {arr.map((e) => (
          <li key={e.id} onDoubleClick={() => handleDelete(e.id)}>
            {e.text}입니다.
          </li>
        ))}
      </ul>
    </>
  );
};
export default IterationSample;
