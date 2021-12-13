import styled from "styled-components";
import { Link } from "react-router-dom";
const TopNav = () => {
  return (
    <Container>
      <Nav>
        <LinkList>
          <Link to="/">
            <LinkItem>메인</LinkItem>
          </Link>
          <Link to="/movie">
            <LinkItem>영화</LinkItem>
          </Link>
          <Link to="/book">
            <LinkItem>책</LinkItem>
          </Link>
        </LinkList>
      </Nav>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
const Nav = styled.nav``;
const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;
const LinkItem = styled.li`
  margin: 0 10px;
`;
export default TopNav;
