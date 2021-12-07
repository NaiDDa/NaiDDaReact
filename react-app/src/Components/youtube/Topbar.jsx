import { useState } from "react";
import styled from "styled-components";
import DropdownProfile from "./DropdownProfile";
const Topbar = ({ onOpenSidebar }) => {
  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <>
      <Container>
        <SideBtn onClick={onOpenSidebar}>=</SideBtn>
        YouTube
        <DropdownWrapper>
          <BtnProfile />
          <Notice src="https://cdn-icons-png.flaticon.com/512/1510/1510441.png" />
          {showProfile && <DropdownProfile />}
          <ImgProfile
            onClick={() => toggleProfile()}
            src="https://yt3.ggpht.com/yti/APfAmoH3YeAHexuBaiQ16UEUmayXD8FzSx6cRde3O-dOIw=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </DropdownWrapper>
      </Container>
    </>
  );
};
const Notice = styled.img`
  width: 25px;
  height: 25px;
  padding: 8px;
`;
const SideBtn = styled.button`
  border: none;
  background: #fff;
  font-size: 30px;
`;
const DropdownWrapper = styled.div`
  position: relative;
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;
const Container = styled.div`
  width: 100vw;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 10px;
`;
const BtnProfile = styled.button`
  position: relative;
  padding: 0;
  border: none;
  background: #000;
`;
const ImgProfile = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 8px;
`;
export default Topbar;
