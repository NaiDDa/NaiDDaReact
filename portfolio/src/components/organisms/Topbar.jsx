import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const IinkList = [
  {
    link: "/",
    name: "MAIN",
  },
  {
    link: "/ABOUT",
    name: "ABOUT",
  },
  {
    link: "/SKILLS",
    name: "SKILLS",
  },
  {
    link: "/PROJECTS",
    name: "PROJECTS",
  },
  {
    link: "/CONTACT",
    name: "CONTACT",
  },
];
const Topbar = () => {
  let { pathname } = useLocation();

  if (pathname === "/About") return <></>;

  return (
    <>
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
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background: #424242;
`;
const Logo = styled.div``;
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
  padding: 10px;
  font-size: 22px;
  border-radius: 8px;
  color: #fff;
  margin: 0 10px;
`;
export default Topbar;
