import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useBodyOverflowHidden } from "../../hooks/useBodyOverflowHidden";
const Modal = ({ onClose, onSubmit }) => {
  const [collapse, setCollapse] = useState(false);
  const [name, setName] = useState("");
  useBodyOverflowHidden();

  const handleClose = () => {
    setCollapse(true);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSubmit = () => {
    if (window.confirm("이름변경 ㄱ?")) {
      handleClose();
      onSubmit(name);
    }
  };
  return (
    <Container collapse={collapse}>
      <Header>
        <Title>Modal heading</Title>
        <BtnX onClick={handleClose}>X</BtnX>
      </Header>
      <Body>
        <label>
          Name : <input onChange={(e) => setName(e.target.value)} />
        </label>
      </Body>
      <Footer>
        <BtnClose onClick={handleClose}>Close</BtnClose>
        <BtnSave onClick={() => onSubmit(handleSubmit)}>Save Changes</BtnSave>
      </Footer>
    </Container>
  );
};
const modalSlide = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -30px)
    }
    to {
        opacity: 1;
        //transform: translate(-50%,  0)
    }
`;

const Container = styled.div`
  animation: ${modalSlide} 0.3s ease-out;
  width: 500px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  position: fixed;
  z-index: 100;
  top: 5%;
  left: 50%;
  opacity: ${({ collapse }) => (collapse ? "0" : "1")};
  transform: ${({ collapse }) =>
    collapse ? "translate(-50%, -30px)" : "translate(-50%, 0)"};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 16px;
`;
const Title = styled.div`
  font-size: 23px;
`;
const BtnX = styled.button`
  cursor: pointer;
  border: none;
  color: #948989;
  background: white;
  font-size: 20px;
  &:hover {
    color: #5c5858;
  }
`;
const Body = styled.div`
  padding: 16px;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  color: #212529;
`;

const Footer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.button`
  color: #fff;
  padding: 9px 12px;
  margin: 4px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    transition: 0.3s;
  }
`;
const BtnClose = styled(Btn)`
  background: #6c757d;
  &:hover {
    background: #585e64;
  }
`;
const BtnSave = styled(Btn)`
  background: #0d6efd;
  &:hover {
    background: #0b60e0;
  }
`;

export default Modal;
