import styled from "styled-components";
import { MovieList, Pagination } from "../organisms";
import { getMovieList } from "../../apis/MovieApi";
import { useState, useEffect } from "react";
const Movie = () => {
  const [isLoading, setIsloading] = useState(false);
  const [query, setQuery] = useState("");
  const [vlaue, setValue] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    if (query) {
      searchList();
    }
  }, [page, query]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(vlaue);
  };
  const searchList = async () => {
    setIsloading(true);
    const start = (page - 1) * 10 + 1;
    const params = { query, start };
    const { items, total } = await getMovieList(params);
    setMovieList(items);
    setTotal(total);
  };
  return (
    <>
      <MovieBox>
        <Form onSubmit={handleSubmit}>
          <InputQuery
            onChange={handleChange}
            value={vlaue}
            placeholder="검색어를 입력하세요"
          />
          <button>검색</button>
        </Form>

        <MovieList data={movieList} />
      </MovieBox>

      <Pagination
        onChange={(page) => setPage(page)}
        total={total}
        nowPage={page}
      />
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
