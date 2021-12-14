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
              <Author>
                저자 : <Danger>{author}</Danger>
              </Author>
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

const Author = styled.div``;
const List = styled.div`
  width: 500px;
  height: 200px;
`;
const Item = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 10px;
`;
const Image = styled.img`
  width: 150px;
  height: 200px;
`;
const Title = styled.div`
  width: 150px;
  font-size: 17px;
  color: #000;
  border-right: 2px solid #ddd;
  text-decoration: none;
`;
const Subtitle = styled.li`
  width: 150px;
  text-align: center;
  font-size: 14px;
  color: #000;
`;
export default BookList;
