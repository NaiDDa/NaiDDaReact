import styled from "styled-components";

const Pagination = ({ total, onChange, nowPage }) => {
  const lastPage = Math.ceil(total / 10);
  const startPage = Math.floor((nowPage - 1) / 10) * 10 + 1;
  //const startPage2 = Math.ceil((nowPage / 10) * 10) * 10 - 9;
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;
  const pageList = [];
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }
  return (
    <>
      <PageList>
        {nowPage > 1 && lastPage && (
          <BtnPage onClick={() => onChange(nowPage - 1)}>이전</BtnPage>
        )}
        {pageList.map((page) => (
          <BtnPag
            key={page}
            active={nowPage === page}
            onClick={() => onChange(page)}
          >
            {page}
          </BtnPag>
        ))}
        {nowPage < lastPage && (
          <BtnPage onClick={() => onChange(nowPage + 1)}>다음</BtnPage>
        )}
      </PageList>
    </>
  );
};
const PageList = styled.ul`
  display: flex;
  justify-content: center;
`;
const BtnPag = styled.button`
  border: none;
  border-radius: 10px;
  padding: 8px;
  background: ${({ active }) => active && "#000"};
  color: ${({ active }) => active && "#fff"};
`;
const BtnPage = styled.button``;
export default Pagination;
