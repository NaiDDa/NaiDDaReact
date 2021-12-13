import styled from "styled-components";
import { MovieLise } from "../organisms";
import getMovieList from "../../apis/movie";
import { useState } from "react";
const Movie = ({ getMovieList }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    getMovieList(e.target.value);
  };
  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <InputQuery value={text} placeholder="검색어를 입력하세요" />
          <button onClick={handleClick}>검색</button>
        </Form>
        <MovieLise />
      </div>
    </>
  );
};
const Form = styled.form`
  display: flex;
  padding: 20px;
`;
const InputQuery = styled.input`
  flex: 1;
  margin-right: 10px;
`;
export default Movie;
