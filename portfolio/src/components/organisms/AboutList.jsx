import styled from "styled-components";
const AboutList = ({ data }) => {
  return (
    <List>
AboutList
    </List>
  );
};

const Author = styled.div`
  border-bottom: 2px solid #ddd;
  padding: 10px;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Item = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
`;
const Title = styled.div`
  padding: 10px;
  font-size: 17px;
  color: #000;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  text-decoration: none;
`;
const Subtitle = styled.li`
  width: 100px;
  height: 100px;
  font-size: 14px;
  border-bottom: 2px solid #ddd;
  color: #000;
`;
export default AboutList;
