import styled from "styled-components";
import { BookList } from "../organisms";
import { getBookList } from "../../apis/BookApi";
import { useState } from "react";

const Book = () => {
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = { query: query };
    const result = await getBookList(params);
    setBookList(result.items);
  };
  return (
    <>
      <MovieBox>
        <Form onSubmit={handleSubmit}>
          <InputQuery
            onChange={handleChange}
            value={query}
            placeholder="검색어를 입력하세요"
          />
          <button>검색</button>
        </Form>
        <BookList data={bookList} />
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
export default Book;
