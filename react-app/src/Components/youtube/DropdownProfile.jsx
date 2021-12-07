
import styled from "styled-components";

const DropdownProfile = () => {
  return (
    <Container>
      <Header>
        <Img src="https://yt3.ggpht.com/yti/APfAmoH3YeAHexuBaiQ16UEUmayXD8FzSx6cRde3O-dOIw=s108-c-k-c0x00ffffff-no-rj" />
        <Profile>
          <Name>NaiDDa</Name>
          <Control>Google 계정 관리</Control>
        </Profile>
      </Header>
      <Menu>
        <Item>내 채널</Item>
        <Item>구매 항목 및 멤버십</Item>
        <Item>YouTube 스튜디오</Item>
        <Item>계정 전환</Item>
        <Item>로그아웃</Item>
      </Menu>
      <Menu>
        <Item>디자인: 기기 테마</Item>
        <Item>언어: 한국어</Item>
        <Item>위치: 한국</Item>
        <Item>설정</Item>
        <Item>YouTube의 내 데이터</Item>
        <Item>고객센터</Item>
        <Item>의견 보내기</Item>
        <Item>단축키</Item>
      </Menu>
      <Footer>
        <FooterMenu>
          <FooterItem>제한 모드: 사용 안함</FooterItem>
        </FooterMenu>
      </Footer>
    </Container>
  );
};
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
const Menu = styled.ul`
  list-style: none;
  border-bottom: 1px solid #ddd;
`;
const Item = styled.li`
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #ece4e4;
  }
`;
const FooterMenu = styled.ul`
  list-style: none;`
const FooterItem = styled(Item)`
`
const Footer = styled.div``;
export default DropdownProfile;
