import { useState, useRef } from "react";
import styled, { css } from "styled-components";

const TodoCompocent = () => {
  const inputRef = useRef(null);
  const [nextId, setNextId] = useState(3);
  const [text, setText] = useState("");
  const [arr, setArr] = useState([
    {
      id: 1,
      text: "할일1",
      isDone: false,
    },
    {
      id: 2,
      text: "할일2",
      isDone: false,
    },
  ]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    setArr([...arr, { id: nextId, text, isDone: false }]);
    setText("");
    setNextId(nextId + 1);
    inputRef.current.focus();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleDelete = (id) => {
    const newArr = arr.filter((todo) => todo.id !== id);
    setArr(newArr);
  };
  const handleToggle = (e, id) => {
    const isDone = e.target.checked;
    const newArray = arr.map((todo) => {
      return todo.id === id ? { ...todo, isDone } : todo;
    });
    console.log(newArray);
    setArr(newArray);
  };
  return (
    <>
      <Container>
        <Title>ToDo List</Title>
        <InputWrapper>
          <Input
            onKeyPress={handleKeyPress}
            ref={inputRef}
            placeholder="할일 입력"
            onChange={handleChange}
            value={text}
          />
          <BtnAdd onClick={handleClick}>등록</BtnAdd>
        </InputWrapper>
        <TodoList>
          {arr.map(({ id, text, isDone }) => (
            <TodoItem key={id} isDone={isDone}>
              <label>
                <input type="checkbox" onChange={(e) => handleToggle(e, id)} />
                <TodoContent isDone={isDone}>{text}</TodoContent>
              </label>
              <BtnDelete onClick={() => handleDelete(id)}>삭제</BtnDelete>
            </TodoItem>
          ))}
        </TodoList>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 650px;
  margin: 20px auto;
  border: 1px solid;
`;
const Title = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: 800;
  font-size: 26px;
  background: #82b6d8;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  background: #332e2e;
`;
const Input = styled.input`
  background: none;
  padding: 15px 30px;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  font-size: 16px;
`;

const BtnAdd = styled.button`
  cursor: pointer;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px;
  background: #332e2e;
  color: white;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;
const TodoContent = styled.span``;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 15px;
  border-bottom: 1px solid #332e2e;
  border-radius: 6px;

  ${({ isDone }) =>
    isDone &&
    css`
      background: #332e2e;
      color: #aca5a5;
      ${TodoContent} {
        padding: 10px;
        font-size: 18px;
        text-decoration: "line-through";
      }
    `}
`;
const BtnDelete = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px;
  background: #332e2e;
  color: white;
  border-radius: 6px;
`;
export default TodoCompocent;
