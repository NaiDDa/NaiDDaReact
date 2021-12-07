import styled, { keyframes } from "styled-components";
const modalSlide = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 0.5;
    }
`;

const Backdrop = styled.div`
  background: #000;
  opacity: ${({ collapse }) => (collapse ? "0" : "0.5")};
  transition: opacity 0.3s ease-out;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  animation: ${modalSlide} 0.3s ease-out;
`;

export default Backdrop;
