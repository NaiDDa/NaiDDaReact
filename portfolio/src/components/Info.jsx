import styled from "styled-components";
const InfoData = [
  {
    title: "이름",
    name: "김승환",
  },
  {
    title: "생년월일",
    name: "1995.12.29",
  },
  {
    title: "주소지",
    name: "서울특별시 은평구",
  },
  {
    title: "이메일",
    name: "tmdrbwk3@gmail.com",
  },
  {
    title: "학력",
    name: "경일관광경영고등학교(금융정보과)",
  },
  {
    title: "회사",
    name: "#",
  },
];
const Info = () => {
  return (
    <>
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
            <TopBox>
              <TopText>
                <H4>안녕하세요, 김승환입니다.</H4>
                <H4>저는 신입 프론트엔드 개발자 입니다.</H4>
                <H4>저의 포트폴리오 페이지에 와주셔서 감사합니다.</H4>
              </TopText>
            </TopBox>
          </TopMenu>
          <HeaderImg src="img/code.png" />
        </Header>

        <AboutContent>
          <H1>ABOUT ME</H1>
          <Title>INFO</Title>
          <InfoBox>
            {InfoData.map(({ title, name }) => (
              <NameBox>
                <NameTitle>{title}</NameTitle>
                <Name>{name}</Name>
              </NameBox>
            ))}
          </InfoBox>
          <Title>I AM..</Title>
          <Introduce>
            안녕하세요. 저는 신입 프론트엔드 개발자 김승환입니다. 웹개발과는
            거리가 먼 직장을 다니다가 우연하게 웹개발이라는 직업중 프론트엔드
            라는 직업에 흥미를 가지기 시작해
            <br />
            퇴근 후 프론트엔드 인터넷강의을 듣게되었습니다. 공부를 하던중 막히는
            부분이 있었지만 막힌 부분을 해결해 가면서 프론트에 대한 부족한
            지식을 얻을때마다 성취감을 느끼고는 했습니다. 좀더 공부에 집중하고자
            직장을 그만두고 국비지원을 통해 프론트엔드 에 대한 공부를 하며
            성장하고 있는중입니다!
          </Introduce>
        </AboutContent>
      </Wrapper>
    </>
  );
};
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
const TopBox = styled.div`
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
const H1 = styled.h1`
  text-align: center;
  border-bottom: 2px solid #000;
  font-size: 35px;
  padding: 20px;
  margin: 0;
`;
const AboutContent = styled.div`
  margin: 50px 200px;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 2px solid #000;
`;
const Title = styled.h1`
  font-size: 15px;
  padding-left: 180px;
  padding-top: 30px;
`;
const NameBox = styled.div`
  padding: 30px 25px;
`;
const NameTitle = styled.h3``;
const Name = styled.h5`
  font-weight: normal;
`;
const Introduce = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 20px;
`;
export default Info;
