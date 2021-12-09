import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Backdrop from "../bootstrap/backdrop";
import Hamburger_icon from "../../a/images/Hamburger_icon.png";
import logo from "../../a/images/logo.png";
import Menu from "./Menu";
import { useBodyOverflowHidden } from "../../hooks/useBodyOverflowHidden";
import {
  sidebarMenuData1,
  sidebarMenuData2,
  sidebarMenuMoreData3,
  sidebarMenuData3,
  sidebarMenuData4,
  sidebarMenuData5,
} from "../../data/menuData";
const ModalSidebar = ({ onClose }) => {
  const [collapse, setCollapse] = useState(false);
  useBodyOverflowHidden();
  const close = () => {
    setCollapse(true);
    setTimeout(onClose, 300);
  };

  return (
    <div>
      <Sidebar collapse={collapse}>
        <Header>
          <Btn onClick={close}>
            <Img src={Hamburger_icon} alt="#" />
          </Btn>
          <Logo src={logo}></Logo>
        </Header>
        <Bottom>
          <Menu data={sidebarMenuData1} />
          <Menu data={sidebarMenuData2} />
          <Menu title="구독" data={sidebarMenuData3} defaultCount={7} />
          <Menu title="Youtube 더보기" data={sidebarMenuData4} />
          <Menu data={sidebarMenuData5} />
        </Bottom>
      </Sidebar>
      <Backdrop collapse={collapse} onClick={close} />
    </div>
  );
};
const Bottom = styled.div`
  overflow: auto;
`;
const Logo = styled.img`
  width: 85px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 25px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
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
  display: flex;
  flex-direction: column;
`;
const Btn = styled.button`
  border: none;
  background: #fff;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
`;

export default ModalSidebar;
