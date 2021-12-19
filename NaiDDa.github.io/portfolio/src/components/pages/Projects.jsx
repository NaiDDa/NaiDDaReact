
import styled from "styled-components";
import Topbar from "../organisms/Topbar"

const Projects = () => {



  return (
    <>

<Contents>
<Topbar/>
      <Wrapper>
        <Title>PROJECTS</Title>
        <Item>
            <Info>
            <ProjectTitle>GitHub Clon</ProjectTitle>
            <Text>HTML, CSS , JS 을 탄탄히<br/> 하고자 만든 GitHub 클론코딩 입니다.</Text>
            <TextSub>클론코딩을 하며 반응형페이지에 대해 이해를 하였고<br/> Google 의 지도 Api 를 호출하여 사용하였습니다</TextSub>
            </Info>
            <ProjectImage src="img/githubClon.gif"/>
        </Item>
        <Item>
            <Info>
            <ProjectTitle>News Page</ProjectTitle>
            <Text>React를 사용하여 만든 NewsPage 입니다.</Text>
            <TextSub>Axios를 활용하여 News API 를 호출하였습니다.<br/>
            News Page를 만들며 Promise 기반의 HTTP 통신<br/> 라이브러리인 Axios에 대해 이해하게 되었습니다.</TextSub>
            </Info>
            <ProjectImage src="img/News.gif"/>
        </Item>
        <Item>
            <Info>
            <ProjectTitle>Todo List</ProjectTitle>
            <Text>React를 사용하여 만든 TodoList 입니다.</Text>
            <TextSub>styled-components 를 통한 컴포넌트 스타일링을 하였고<br/> useState,useRef 를 사용하여 배열의 상태관리를 하였습니다. </TextSub>
            </Info>
            <ProjectImage src="img/TodoList.gif"/>
        </Item>

        <Item>
            <Info>
            <ProjectTitle>영화 및 책검색 사이트</ProjectTitle>
            <Text>React를 사용하여 만든 NewsPage 입니다.</Text>
            <TextSub>Axios를 활용하여 News API 를 호출하였습니다.<br/>
            News Page를 만들며 Promise 기반의 HTTP 통신<br/> 라이브러리인 Axios에 대해 이해하게 되었습니다.</TextSub>
            </Info>
            <ProjectImage2 src="img/MovieBook.gif"/>
        </Item>
        </Wrapper>
      </Contents>
    </>
  );
};

const Contents = styled.div`
  background: #d5e7f5;

`;
const Wrapper = styled.div`
  margin: 50px 200px;
`
const Item = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-around;
border-top: 2px solid #000;
align-items: center;
padding-top: 25px;
font-weight: 700;
padding: 20px;
@media only screen and (max-width:1000px) {
    display: grid;
    grid-template-columns: 1fr;

  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  padding: 20px;
  margin: 0;
`;
const Info = styled.p``
const ProjectTitle = styled.h1``
const Text = styled.p`
width: 300px;
font-size: 22px;
`
const TextSub =styled.p`
font-size: 22px;
`
const ProjectImage = styled.img`
width: 500px;
height: 400px;
`
const ProjectImage2 =styled.img`
width: 300px;
`


export default Projects;
