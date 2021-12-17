import styled from "styled-components";
import { MovieList, Pagination, BoxOffice } from "../organisms";
import { getMovieList, getBoxOfficeList } from "../../apis/MovieApi";
import { useState, useEffect } from "react";
const countryList = [
  {
    code: "all",
    name: "전체",
  },
  {
    code: "KR",
    name: "한국",
  },
  {
    code: "US",
    name: "미국",
  },
  {
    code: "JP",
    name: "일본",
  },
  {
    code: "HK",
    name: "홍콩",
  },
  {
    code: "GB",
    name: "영국",
  },
  {
    code: "FR",
    name: "프랑스",
  },
  {
    code: "ETC",
    name: "기타",
  },
];

const Movie = () => {
  const [country, setCountry] = useState(countryList[0].code);
  //const [isLoading, setIsloading] = useState(false);
  const [query, setQuery] = useState("");
  const [vlaue, setValue] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  //const [boxOfficeList, setBoxOfficeList] = useState([]);

  // useEffect(() => {
  //   renderBoxOffice();
  // }, []);
  // const renderBoxOffice = async () => {
  //   const result = await getBoxOfficeList();
  //   setBoxOfficeList(result);
  // };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setPage(1);
  };
  useEffect(() => {
    if (query) {
      searchList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query, country]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(vlaue);
  };

  const searchList = async () => {
    const start = (page - 1) * 10 + 1;
    const params = { query, start };
    if (country !== "all") {
      params.country = country;
    }
    const { items, total } = await getMovieList(params);
    //setIsloading(false);
    setMovieList(items);
    setTotal(total);
  };
  return (
    <>
      <MovieBox>
        <Title>MovieSearch</Title>
        <Form onSubmit={handleSubmit}>
          <select onChange={handleCountry}>
            {countryList.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>

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
const Title = styled.h2`
  text-align: center;
  border-bottom: 1px solid #ddd;
  margin: 0;
  padding: 10px;
`;
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
