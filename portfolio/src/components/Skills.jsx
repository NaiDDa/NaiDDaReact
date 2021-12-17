import styled from "styled-components";

const Skills = () => {
  return (
    <>
      <Content>
        <Wrapper>
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
        </Wrapper>
      </Content>
    </>
  );
};
const Content = styled.div`
  background: #eaeaf7;
  height: 770px;

`;
const Wrapper = styled.div`
  margin: 50px 200px;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
`;
const Title = styled.h1`
  text-align: center;
  border-bottom: 2px solid #000;
  padding: 20px;
`;
const SkillBox = styled.div`
  display: flex;
  justify-content: center;
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
`;
const Img = styled.img`
  width: 300px;
  padding: 50px;
`;
const HjcImage = styled(Img)``;
const JqueryImage = styled(Img)``;
const ReactImage = styled(Img)``;
const GitImage = styled(Img)`
  width: 200px;
`;
export default Skills;
