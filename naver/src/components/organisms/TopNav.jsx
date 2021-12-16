import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const IinkList = [
  {
    link: "/",
    name: "🏠",
  },
  {
    link: "/movie",
    name: "Movie",
  },
  {
    link: "/book",
    name: "Book",
  },
];
const TopNav = () => {
  let { pathname } = useLocation();

  if (pathname === "/") return <></>;

  return (
    <Container>
      <Nav>
        <LinkList>
          {IinkList.map(({ link, name }) => (
            <Link to={link} key={link}>
              <LinkItem active={link === pathname}>{name}</LinkItem>
            </Link>
          ))}
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
  background: #424242;
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
  background: ${({ active }) => active && "#000"};
  padding: 5px;
  border-radius: 8px;
  color: #fff;
  margin: 0 10px;
`;
export default TopNav;
