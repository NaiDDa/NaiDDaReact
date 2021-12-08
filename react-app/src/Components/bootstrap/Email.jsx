import { useState } from "react";
import { useBodyOverflowHidden } from "../../hooks/useBodyOverflowHidden";
import styled from "styled-components";
const Email = ({ onClose, onSubmitEmail }) => {
  useBodyOverflowHidden();
  const [text, setText] = useState("");
  const Close = () => {
    onClose();
  };
  const handleEmail = () => {
    onClose();
    onSubmitEmail(text);
  };
  return (
    <>
      <Wrapper>
        <Header>
          <Title>Edit Your Email</Title>
          <BtnX onClick={Close}>X</BtnX>
        </Header>
        <Body>
          <label>
            Email : <Input onChange={(e) => setText(e.target.value)} />
          </label>
        </Body>
        <Footer>
          <BtnCose onClick={Close}>Close</BtnCose>
          <BtnSave onClick={() => onSubmitEmail(handleEmail)}>Save</BtnSave>
        </Footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  border: 1px solid #ccc;
  width: 400px;
  border-radius: 4px;
  z-index: 100;
  position: fixed;
  background: #fff;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;
const Title = styled.div`
  font-size: 20px;
`;
const Btn = styled.button`
  border: none;
  background: #fff;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  &:hover {
    background: #ecebeb;
    border-radius: 4px;
  }
`;
const BtnX = styled(Btn)``;
const Body = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;
const Input = styled.input`
  border: 1px solid #a3a2a2;
  border-radius: 4px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BtnCose = styled(Btn)``;
const BtnSave = styled(Btn)``;
export default Email;
