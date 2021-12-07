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
        <Btn onClick={close}>=</Btn>
      </Sidebar>
      <Backdrop collapse={collapse} onClick={close} />
    </div>
  );
};
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
`;

export default ModalSidebar;
