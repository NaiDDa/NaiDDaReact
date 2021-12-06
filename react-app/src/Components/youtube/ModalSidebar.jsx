import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useBodyOverflowHidden } from "../../hooks/useBodyOverflowHidden"
const ModalSidebar = ({ onClose }) => {
  useBodyOverflowHidden()
  const Close = () => {
    onClose();
  };
  return (
    <div>
      <Sidebar>
        <Header>
          <Btn onClick={Close}>=</Btn> <Logo src="/img/NaiDDa-logo.png"></Logo>
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

    </div>
  );
};
const SidebarSlide = keyframes`
    from {
        opacity: 0;
        transform: translate(-100%)
    }
    to {
        opacity: 1;
    }
`;

const Sidebar = styled.div`

 animation: ${SidebarSlide} 0.2s ease-out;
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 100;
`;

const Header = styled.div`
display: flex;
padding: 20px;
`
const Btn = styled.button`
  border-bottom: 1px solid #ccc;
  border: none;
  background: #fff;
  font-size: 40px;
  cursor: pointer;
`;
const Logo = styled.img`
margin-left: 20px;
width: 100px;
height: 50px;
background: #5e5e5e;
border-radius: 8px;
`
const ItemList = styled.ul`
list-style: none;
font-size: 18px;
border-bottom: 1px solid #ccc;
padding-bottom: 15px;
`
const Item = styled.li`
padding: 10px;
cursor: pointer;
&:hover {
  background: #eeeeee;
}
`


export default ModalSidebar;
