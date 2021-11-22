import { useState } from "react";
import styled from "styled-components";

const TodoCompocent = () => {
  const [add, setAdd] = useState("");
  const btnAdd = () => {
    setAdd(add);
  };
  return (
    <>
      <Container>
        <Title>일정관리</Title>
        <InputWrapper>
          <Input placeholder="할일 입력" />
          <BtnAdd onClick={setAdd}>등록</BtnAdd>
        </InputWrapper>
        <TodoList>
          <TodoItem onChange={btnAdd}>
            <label>
              <input type="checkbox" />
              <TodoContent>{add}</TodoContent>
            </label>
            <BtnDelete>삭제</BtnDelete>
          </TodoItem>
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
  font-size: 16px;
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
const BtnDelete = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px;
  background: #332e2e;
  color: white;
`;
const TodoList = styled.ul`
  list-style: none;

  padding: 0;
`;
const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 30px 10px;
  border-bottom: 1px solid #332e2e;
`;
const TodoContent = styled.span`
  padding: 10px;
  width: 100%;
`;

export default TodoCompocent;
