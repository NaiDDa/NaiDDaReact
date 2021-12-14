import styled from "styled-components";
import { MovieList } from "../organisms";
import { getMovieList } from "../../apis/MovieApi";
import { useState } from "react";
const Movie = () => {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = { query: query };
    const result = await getMovieList(params);
    setMovieList(result.items);
  };

  const handleClick = () => {};
  return (
    <>
      <MovieBox>
        <Form onSubmit={handleSubmit}>
          <InputQuery
            onChange={handleChange}
            value={query}
            placeholder="검색어를 입력하세요"
          />
          <button onClick={handleClick}>검색</button>
        </Form>
        <MovieList data={movieList} />
      </MovieBox>
    </>
  );
};
const MovieBox = styled.div``;
const Form = styled.form`
  display: flex;
  padding: 20px;
`;
const InputQuery = styled.input`
  flex: 1;
  margin-right: 10px;
`;
export default Movie;
