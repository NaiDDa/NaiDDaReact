import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Backdrop from "../bootstrap/backdrop";
const ModalSidebar = ({ onClose }) => {
  const Close = () => {
    onClose();
  };
  return (
    <div>
      <Sidebar>
        <Btn onClick={Close}>=</Btn>
      </Sidebar>
      <Backdrop />
    </div>
  );
};
const SidebarSlide = keyframes`
 from {

 }
 to {
   
 }
`;
const Sidebar = styled.div`
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
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
