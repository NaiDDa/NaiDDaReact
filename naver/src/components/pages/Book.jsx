import styled from "styled-components";
import { BookList, Pagination } from "../organisms";
import { getBookList } from "../../apis/BookApi";
import { useState, useEffect } from "react";

const Book = () => {
  const [query, setQuery] = useState("");
  const [vlaue, setValue] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    if (query) {
      searchList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const start = (page - 1) * 10 + 1;
    const params = { query, start };
    const { items, total } = await getBookList(params);
    setBookList(items);
    setTotal(total);
  };
  return (
    <>
      <Title>BookSearch</Title>
      <Form onSubmit={handleSubmit}>
        <InputQuery
          onChange={handleChange}
          value={vlaue}
          placeholder="검색어를 입력하세요"
        />
        <button>검색</button>
      </Form>

      <BookList data={bookList} />

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
const Form = styled.form`
  display: flex;
  padding: 20px;
`;
const InputQuery = styled.input`
  flex: 1;
  margin-right: 10px;
`;
export default Book;
