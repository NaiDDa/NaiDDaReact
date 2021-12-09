import { useState } from "react";
import styled from "styled-components";
import DropdownProfile from "./DropdownProfile";
import Hamburger_icon from "../../a/images/Hamburger_icon.png";
import logo from "../../a/images/logo.png";
const Topbar = ({ onOpenSidebar }) => {
  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <>
      <Container>
        <Img onClick={onOpenSidebar} src={Hamburger_icon}></Img>
        <Logo src={logo}></Logo>
        <SeacrcWrapper>
          <InputSearch placeholder=" 검색"></InputSearch>
          <BtnSearcg>검색</BtnSearcg>
        </SeacrcWrapper>
        <DropdownWrapper>
          <BtnProfile />
          <Notice src="https://cdn-icons-png.flaticon.com/512/1510/1510441.png" />
          {showProfile && (
            <DropdownProfile onClose={() => setShowProfile(false)} />
          )}
          <ImgProfile
            onClick={() => toggleProfile()}
            src="https://yt3.ggpht.com/yti/APfAmoH3YeAHexuBaiQ16UEUmayXD8FzSx6cRde3O-dOIw=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </DropdownWrapper>
      </Container>
    </>
  );
};
const SeacrcWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0 30px;
`;
const InputSearch = styled.input`
  max-width: 600px;
  height: 40px;
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
`;
const BtnSearcg = styled.button`
  width: 64px;
`;
const Logo = styled.img`
  width: 100px;
  height: 50px;
  padding: 8px;
  cursor: pointer;
`;
const Notice = styled.img`
  width: 40px;
  height: 40px;
  padding: 8px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 25px;
  cursor: pointer;
  border: none;
  background: #fff;
  font-size: 30px;
  margin: 10px;
`;
const DropdownWrapper = styled.div`
  position: relative;
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 8px;
`;
export default Topbar;
