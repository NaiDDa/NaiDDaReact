import styled from "styled-components";
import { Danger } from "../atoms";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ title, link, image, author, publisher, pubdate, price }) => (
        <a href={link} target="_blank" rel="noreferrer" key={link}>
          <Item key={link}>
            <Image src={image} />
            <Title>
              <Danger>{title}</Danger>
            </Title>
            <Subtitle>
              저자 : <Danger>{author}</Danger>
              <br />
              출판사:
              <Danger>{publisher}</Danger>
              <br />
              출간일: {pubdate}
              <br />
              정가: {price}
            </Subtitle>
          </Item>
        </a>
      ))}
    </List>
  );
};

const List = styled.div`
  width: 400px;
  height: 200px;
`;
const Item = styled.ul`
  border-bottom: 5px solid #ddd;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 10px;
`;
const Image = styled.img`
  width: 150px;
  height: 200px;
  border: 2px solid #c5c5c5;
`;
const Title = styled.div`
  width: 150px;
  font-size: 18px;
  color: #000;
  border-right: 2px solid #c5c5c5;
  text-decoration: none;
`;
const Subtitle = styled.li`
  width: 120px;
  font-size: 14px;
  color: #000;
`;
export default BookList;
