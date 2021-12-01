import { useState, useRef } from "react";
import styled from "styled-components";
const TodoBody = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 500px;
  border: 2px solid #a36e6e;
  border-radius: 4px;
`;
const TodoHead = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding: 20px;
  background: #a36e6e;
  text-align: center;
`;
const Bundle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 2px solid #a36e6e;
`;
const TodoInput = styled.input`
  border: 2px solid #a36e6e;
  border-right: none;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  padding: 10px 30px;
`;
const Button = styled.button`
  font-size: 25px;
  border: 2px solid #a36e6e;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #a36e6e;
  background: white;
  cursor: pointer;
`;
const TodoList = styled.ul`
  list-style: none;
  padding: 0 20px;
`;
const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #a36e6e;
  padding: 20px;
`;
const Check = styled.input``;
const Delete = styled.button`
  font-weight: 700;
  border: 2px solid #a36e6e;
  border-radius: 4px;
  color: #a36e6e;
  background: white;
  cursor: pointer;
`;
const Content = styled.span`
  color: #a36e6e;
  text-decoration: ${(p) => p.isDone && "line-through"};
`;

const Todo = () => {
  const [nextId, setNextId] = useState(3);
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [arr, setArr] = useState([
    {
      id: 1,
      text: "할 일1",
      isDone: false,
    },
    {
      id: 2,
      text: "할 일2",
      isDone: false,
    },
  ]);
  const change = (e) => {
    setText(e.target.value);
  };
  const click = () => {
    setArr([...arr, { id: nextId, text, isDone: false }]);
    setText("");
    inputRef.current.focus();
    setNextId(nextId + 1);
  };
  const itemDelete = (id) => {
    const newarr = arr.filter((arr) => arr.id !== id);
    setArr(newarr);
  };
  const done = (e, id) => {
    const isDone = e.target.checked;
    const newArray = arr.map((todo) => {
      return todo.id === id ? { ...todo, isDone } : todo;
    });
    setArr(newArray);
    console.log(isDone);
    console.log(id);
    console.log(newArray);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      click();
    }
  };
  return (
    <>
      <TodoBody>
        <TodoHead>Todo List</TodoHead>
        <Bundle>
          <TodoInput
            placeholder=" 할일 입력"
            onChange={change}
            value={text}
            ref={inputRef}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={click}>+</Button>
        </Bundle>
        <TodoList>
          {arr.map(({ id, text, isDone }) => (
            <TodoItem key={id} isDone={isDone}>
              <label>
                <Check type="checkbox" onChange={(e) => done(e, id)} />
                <Content isDone={isDone}> {text}</Content>
              </label>
              <Delete onClick={() => itemDelete(id)}>X</Delete>
            </TodoItem>
          ))}
        </TodoList>
      </TodoBody>
    </>
  );
};
export default Todo;
