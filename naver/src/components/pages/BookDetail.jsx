import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { getBookInfo } from "../../apis/BookApi";

const BookDetail = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState({});
  const {
    image,
    title,
    author,
    price,
    publisher,
    pubdate,
    discount,
    description,
  } = book;
  const Init = async () => {
    const params = { d_isbn: isbn };
    const { items } = await getBookInfo(params);
    setBook(items[0]);
  };
  useEffect(() => {
    Init();
  }, []);
  return (
    <>
      <Info>
        <Detail>
          <Image src={image} />
          <Title>제목 : {title}</Title>
        </Detail>
      </Info>
      <MoreInfo>
        <Author>저자 : {author}</Author>
        <Publisher>출판사 : {publisher}</Publisher>
        <Pubdate>출간일 : {pubdate}</Pubdate>
        <Price>가격 : {price}원</Price>
        <Discount>
          할인정보 : <Dis>{price} 원</Dis> → {discount}원
        </Discount>
      </MoreInfo>
      <Summary>줄거리...</Summary>
      <Contents>{description}</Contents>
    </>
  );
};
const Info = styled.div`
  display: flex;
  padding: 15px;
  margin: 0;
  align-items: center;
  border-bottom: 2px solid #ddd;
`;
const MoreInfo = styled.div`
  text-align: center;
  border-bottom: 2px solid #ddd;
  padding: 10px;
`;
const Contents = styled(Info)`
  font-size: 14px;
  border-bottom: 2px solid #ddd;
`;
const Summary = styled.h5`
  margin: 0;
  padding-left: 15px;
  padding-top: 15px;
`;
const Detail = styled.div`
  font-weight: 700;
  margin: 0 auto;
`;
const Title = styled.div`
  padding-bottom: 10px;
`;
const Image = styled.img`
  width: 100%;
  border: 2px solid #ddd;
`;
const Author = styled.div``;
const Publisher = styled.div``;
const Pubdate = styled.div``;
const Price = styled.div``;
const Discount = styled.div``;
const Dis = styled.div`
  font-weight: normal;
  text-decoration: line-through;
`;

export default BookDetail;
