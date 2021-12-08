import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Backdrop from "../bootstrap/backdrop";
import Hamburger_icon from "../../a/images/Hamburger_icon.png";
import logo from "../../a/images/logo.png";
import DropdownMenu from "./DropdownMenu";
import { sideFirstMenu, sidecenterMenu } from "../../data/menu";
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
          <Btn onClick={close}>
            <Img src={Hamburger_icon} alt="#" />
          </Btn>
          <Logo src={logo}></Logo>
        </Header>

        <DropdownMenu data={sideFirstMenu} />
        <DropdownMenu data={sidecenterMenu} />
      </Sidebar>
      <Backdrop collapse={collapse} onClick={close} />
    </div>
  );
};
const Logo = styled.img`
  width: 80px;
  height: 30px;
  border-radius: 6px;
`;
const Img = styled.img`
  width: 25px;
`;
const Header = styled.div`
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
`;
const Btn = styled.button`
  border: none;
  background: #fff;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
`;

export default ModalSidebar;
