import styled from "styled-components";
import premium from "../../a/images/premium.png";
import { firstMenuData, centerMenuData } from "../../data/menuData";
import Menu from "./Menu";
import { useDropdownClickBody } from "../../hooks/index";
import { useRef } from "react";

const DropdownProfile = ({ onClose }) => {
  const dropdownEl = useRef(null);
  useDropdownClickBody(dropdownEl, onClose);
  return (
    <Container ref={dropdownEl}>
      <Header>
        <Img src="https://yt3.ggpht.com/yti/APfAmoH3YeAHexuBaiQ16UEUmayXD8FzSx6cRde3O-dOIw=s108-c-k-c0x00ffffff-no-rj" />
        <Profile>
          <Name>NaiDDa</Name>
          <Control>Google 계정 관리</Control>
        </Profile>
      </Header>
      <Menu data={firstMenuData} />
      <Menu data={centerMenuData} />

      <FooterMenu>
        <FooterItem>
          <ImgItem src={premium} />
          제한 모드: 사용 안함
        </FooterItem>
      </FooterMenu>
    </Container>
  );
};
const ImgItem = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 8px;
`;
const Container = styled.div`
  top: 82px;
  right: 50px;
  width: 300px;
  border: 1px solid #ddd;
  position: absolute;
  background: #fff;
`;
const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Img = styled.img`
  border-radius: 50%;
  padding: 20px 10px;
  width: 45px;
  cursor: pointer;
`;
const Name = styled.span``;
const Control = styled.a`
  font-size: 14px;
  padding-top: 10px;
  color: #243cc4;
  cursor: pointer;
`;
const FooterMenu = styled.ul`
  padding: 0 10px;
  list-style: none;
`;
const FooterItem = styled.li`
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #ece4e4;
  }
`;

export default DropdownProfile;
