import styled from "styled-components";

const Project = () => {
  return (
    <>
      <Contents>
      <Wrapper>
        <Title>PROJECTS</Title>
        <Item>
            <Info>
            <ProjectTitle>GitHub 랜딩페이지</ProjectTitle>
            <Text>HTML, CSS , JS 을 탄탄히<br/> 하고자 만든 GitHub 클론코딩 입니다.</Text>
            <TextSub>클론코딩을 하며 반응형페이지에 대해 이해를 하였고<br/> Google 의 지도 Api 를 호출하여 사용하였습니다</TextSub>
            </Info>
            <ProjectImage />
        </Item>
        </Wrapper>
      </Contents>
    </>
  );
};
const Contents = styled.div`
  background: #d5e7f5;
  height: 770px;


`;
const Wrapper = styled.div`
  margin: 50px 200px;
`
const Item = styled.div`
`;
const Title = styled.h1`
  margin: 0;
  text-align: center;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
`;
const Info = styled.p``
const ProjectTitle = styled.p``
const Text = styled.p``
const TextSub =styled.p``
const ProjectImage = styled.img``
export default Project;
