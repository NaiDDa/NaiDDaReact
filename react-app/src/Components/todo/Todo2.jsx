import { useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const [nextId, setNextId] = useState(1);
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  const change = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setArr([...arr, { text, id: nextId, isDone: false }]);
    setText("");
    setNextId(nextId + 1);
  };
  const Delete = (id) => {
    const newarr = arr.filter((arr) => arr.id !== id);
    setArr(newarr);
  };
  const Done = (e, id) => {
    const isDone = e.target.checked;
    const newDone = arr.map((item) => {
      if (item.id === id) {
        return { ...item, isDone };
      } else {
        return item;
      }
      //return item.id === id ? { ...item, isDone } : item;
    });
    setArr(newDone);
    console.log(arr);
    console.log(newDone);
  };

  return (
    <>
      <TodoBox>
        <Header>ToDo List</Header>
        <InputBox>
          <Input placeholder="할일 입력" onChange={change} value={text} />
          <AddButton onClick={handleClick}>+</AddButton>
        </InputBox>
        <TodoList>
          {arr.map(({ text, id, isDone }) => (
            <>
              <TodoItem isDone={isDone}>
                <label>
                  <Check type="checkbox" onChange={(e) => Done(e, id)} />
                  <Content isDone={isDone}>{text}</Content>
                </label>
                <DeleteButton onClick={() => Delete(id)}>X</DeleteButton>
              </TodoItem>
            </>
          ))}
        </TodoList>
      </TodoBox>
    </>
  );
};
const TodoBox = styled.div`
  border: 1px solid black;
  margin: 50px;
  width: 500px;
`;
const Header = styled.div`
  padding: 20px;
  font-size: 20px;
  border: 1px solid black;
  text-align: center;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  padding: 10px 30px;
`;
const TodoList = styled.ul`
  border: 1px solid black;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  margin: 0;
`;
const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  border-bottom: 1px solid black;
`;
const Content = styled.span`
  text-decoration: ${({ isDone }) => isDone && "line-through"};
`;
const Check = styled.input``;
const AddButton = styled.button`
  font-size: 22px;
  cursor: pointer;
  border: none;
  background: black;
  color: white;
`;
const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background: black;
  color: white;
`;
export default Todo;
