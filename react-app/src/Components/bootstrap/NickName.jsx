import { useState } from "react";
import styled from "styled-components";
import { useBodyOverflowHidden } from "../../hooks/useBodyOverflowHidden";
const NickName = ({ onClose, onSubmitNick }) => {
  const [text, setText] = useState("");
  useBodyOverflowHidden();
  const Close = () => {
    onClose();
  };
  const handleNick = () => {
    onClose();
    onSubmitNick(text);
  };
  return (
    <>
      <Container>
        <Head>
          <Title>Edit your nickname</Title>
          <BtnX onClick={Close}>X</BtnX>
        </Head>
        <Body>
          <label>
            NickName : <input onChange={(e) => setText(e.target.value)} />
          </label>
        </Body>
        <Footer>
          <CloseBtn onClick={Close}>Close</CloseBtn>
          <SaveBtn onClick={() => onSubmitNick(handleNick)}>Save</SaveBtn>
        </Footer>
      </Container>
    </>
  );
};
const Container = styled.div`
  border: 1px solid #ccc;
  width: 400px;
  border-radius: 4px;
  z-index: 100;
  position: fixed;
  background: #fff;
  left: 50%;
  transform: translate(-50%, 0);
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
const Title = styled.div`
  font-size: 20px;
`;

const Btn = styled.button`
  border: none;
  background: #fff;
  font-size: 16px;
  cursor: pointer;
`;
const BtnX = styled(Btn)``;
const Body = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const CloseBtn = styled(Btn)`
  margin: 10px;
`;
const SaveBtn = styled(Btn)``;
export default NickName;
