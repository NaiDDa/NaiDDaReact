import styled from "styled-components";
import Topbar from "../organisms/Topbar"
const Skills = () => {


  return (
    <>

        <Wrapper>
        <Topbar/>
        <SkillContent>
          <Title>SKILLS</Title>
          <SkillBox>
            <ImgBox>
              <Position>FRONTEND</Position>
              <ImgWrapper>
                <ImgList>
                  <HjcImage src="img/hjc.png" />
                  <JqueryImage src="img/jquery.png" />
                  <ReactImage src="img/react.png" />
                  <GitImage src="img/git.png" />
                </ImgList>
              </ImgWrapper>
            </ImgBox>
          </SkillBox>
          </SkillContent>
        </Wrapper>
    
   


    </>
  );
};


const Wrapper = styled.div`
background: #ddd8d3;
height: 950px;
`;
const SkillContent = styled.div`
  margin: 50px 200px;
`
const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  padding: 20px;
  margin: 0;
`;
const SkillBox = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 20px;
`;
const Position = styled.h1`
  margin: 0;
  padding: 30px;
`;
const ImgWrapper = styled.a`
  display: flex;
  justify-content: center;
`;
const ImgBox = styled.div`
  background: #fff;
  width: 1250px;
`;
const ImgList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const Img = styled.img`
  width: 300px;
  padding: 50px;
`;
const HjcImage = styled(Img)``;
const JqueryImage = styled(Img)`
width: 350px;
`;
const ReactImage = styled(Img)``;
const GitImage = styled(Img)`
  width: 200px;
`;

export default Skills;
