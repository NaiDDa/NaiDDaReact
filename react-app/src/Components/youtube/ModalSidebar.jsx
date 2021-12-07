import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Backdrop from "../bootstrap/backdrop";
const ModalSidebar = ({ onClose }) => {
  const [collapse, setCollapse] = useState(false);

  const close = () => {
    setCollapse(true);
    setTimeout(onClose, 300);
  };

  return (
    <div>
      <Sidebar collapse={collapse}>
        <Header>
          <Btn onClick={close}>=</Btn>
        </Header>
        <ItemList>
          <Item>홈</Item>
          <Item>탐색</Item>
          <Item>구독</Item>
        </ItemList>
        <ItemList>
          <Item>보관함</Item>
          <Item>시청 기록</Item>
          <Item>내 동영상</Item>
          <Item>나중에 볼 동영상</Item>
          <Item>좋아요 표시한 동영상</Item>
        </ItemList>
      </Sidebar>
      <Backdrop collapse={collapse} onClick={close} />
    </div>
  );
};
const Header = styled.div``
const ItemList = styled.ul`
list-style: none;
font-size: 18px;
border-bottom: 1px solid #ccc;
padding-bottom: 15px;
padding: 0 20px;
`
const Item = styled.li`
padding: 10px;
cursor: pointer;
&:hover {
  background: #eeeeee;
}`
const SidebarSlide = keyframes`
from {
  left : -240px
}
to {
  left : 0
}
`;
const Sidebar = styled.div`
  animation: ${SidebarSlide} 0.3s ease-out;
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: left 0.3s ease-out;
  left: ${({ collapse }) => (collapse ? "-240px" : "0")};
  background: #fff;
  z-index: 100;
`;
const Btn = styled.button`
  border: none;
  background: #fff;
  font-size: 30px;
  cursor: pointer;
  padding-left: 30px;
`;

export default ModalSidebar;
