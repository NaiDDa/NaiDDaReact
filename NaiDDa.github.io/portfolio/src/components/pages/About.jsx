import styled from "styled-components";
import Topbar from "../organisms/Topbar"

const About = () => {

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

  return (
    <>
    <Wrapper>
      <Topbar/>
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
          거리가 먼 직장을 다니다가 우연하게 웹개발 이라는것을 알게 되어서  프론트엔드
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

const Wrapper = styled.div`
background: #ddd;
height: 950px;
@media only screen and (max-width:935px) {
  height: 1100px;
  }
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
  @media only screen and (max-width:1340px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  border-bottom: 2px solid #000;
  }

  @media only screen and (max-width:935px) {
    display: grid;
    grid-template-columns: 1fr 1fr ;
  padding: 10px;
  border-bottom: 2px solid #000;
  }
  @media only screen and (max-width:750px) {
    display: grid;
    grid-template-columns: 1fr ;
  padding: 10px;
  border-bottom: 2px solid #000;
  }

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
export default About;
