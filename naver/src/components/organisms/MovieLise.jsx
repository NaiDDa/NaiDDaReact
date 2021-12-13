import styled from "styled-components";

const MovieLise = () => {
  return (
    <List>
      <Item>
        <Image src="http://img.movist.com/?img=/x00/05/04/96_p1.jpg" />
        <Title>기생충</Title>
      </Item>
      <Item>
        <Image src="http://img.movist.com/?img=/x00/05/04/96_p1.jpg" />
        <Title>기생충</Title>
      </Item>
      <Item>
        <Image src="http://img.movist.com/?img=/x00/05/04/96_p1.jpg" />
        <Title>기생충</Title>
      </Item>
      <Item>
        <Image src="http://img.movist.com/?img=/x00/05/04/96_p1.jpg" />
        <Title>기생충</Title>
      </Item>
    </List>
  );
};
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Item = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.div``;
export default MovieLise;
