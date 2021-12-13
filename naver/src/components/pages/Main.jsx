import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Wrapper>
        <Link to="/movie">
          <BtnMovie>영화 검색</BtnMovie>
        </Link>
        <Link to="/book">
          <BtnBook>책 검색</BtnBook>
        </Link>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;
const BtnMovie = styled.button`
  width: 300px;
  height: 100px;
  font-size: 20px;
  background: #fff;
  border-radius: 4px;
  border: 2px solid #ddd;
  margin: 20px;
`;
const BtnBook = styled.button`
  width: 300px;
  height: 100px;
  font-size: 20px;
  background: #fff;
  border-radius: 4px;
  border: 2px solid #ddd;
  margin: 20px;
`;
export default Main;
