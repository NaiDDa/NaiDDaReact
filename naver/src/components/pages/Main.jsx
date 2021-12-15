import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Wrapper>
        <Link to="/movie">
          <BtnMovie>Movie Search</BtnMovie>
        </Link>
        <Link to="/book">
          <BtnBook>Book Search</BtnBook>
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
const Btn = styled.button`
  width: 300px;
  height: 100px;
  font-size: 18px;
  background: #fff;
  border-radius: 4px;
  border: 2px solid #5f5e5e;
  margin: 10px;
`;
const BtnMovie = styled(Btn)``;
const BtnBook = styled(Btn)``;
export default Main;
