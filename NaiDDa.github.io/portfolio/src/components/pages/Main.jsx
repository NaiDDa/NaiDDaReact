import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Topbar from "../organisms/Topbar"


const Main = () => {
  let { pathname } = useLocation();

  if (pathname === "/About") return <></>;

  return (
    <>
      <Topbar/>
      <Header>
        <TopMenu>
            <Text>
              <H4>안녕하세요, 김승환입니다.</H4>
              <H4>저는 신입 프론트엔드 개발자 입니다.</H4>
              <H4>저의 포트폴리오 페이지에 와주셔서 감사합니다.</H4>
            </Text>
        </TopMenu>
        <HeaderImg src="img/code.png" />
      </Header>

    </>
  );
};

const Header = styled.header`
  position: relative;
`;
const TopMenu = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 80px;
  color: #fff;
  border-bottom: 3px solid #ddd;
  border-top: 3px solid #ddd;
  font-size: 23px;
`;
const HeaderImg = styled.img`
  width: 100%;
  height: 850px;
`;
const H4 = styled.h4`
  margin: 0;
  padding: 10px;
`;
export default Main;
