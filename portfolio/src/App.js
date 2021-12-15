import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Header>
        <TopMenu>
          <Logo>-NaiDDa PORTFOLIO-</Logo>
          <Menu>
            <Item>ABOUT</Item>
            <Item>SKILLS</Item>
            <Item>PROJECTS</Item>
            <Item>CONTACT</Item>
          </Menu>
          <Box>
            <TopText>
              <H4>안녕하세요, 김승환입니다.</H4>
              <H4>저는 신입 프론트엔드 개발자 입니다.</H4>
              <H4>저의 포트폴리오 페이지에 와주셔서 감사합니다.</H4>
            </TopText>
          </Box>
        </TopMenu>
        <HeaderImg src="img/code.png" />
      </Header>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Header = styled.header`
  position: relative;
`;
const TopMenu = styled.div`
  position: absolute;
  border-bottom: 2px solid #ddd;
  width: 100%;
  height: 66px;
`;
const Logo = styled.h1`
  cursor: pointer;
  border: 2px solid #ddd;
  border-radius: 7px;
  position: absolute;
  color: #fff;
  &:hover {
    background: #ddd;
    border-radius: 8px;
    color: #000;
    transition: 0.5s ease-out;
  }
`;
const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
`;
const TopText = styled.div`
  text-align: center;
  width: 600px;
  margin-top: 80px;
  color: #ddd;
  border-bottom: 3px solid #ddd;
  border-top: 3px solid #ddd;
  font-size: 23px;
`;
const Item = styled.li`
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #ddd;
    border-radius: 8px;
    color: #000;
    transition: 0.5s ease-out;
  }
`;
const HeaderImg = styled.img`
  width: 100%;
  height: 450px;
`;
const H4 = styled.h4`
  margin: 0;
  padding: 10px;
`;
export default App;
