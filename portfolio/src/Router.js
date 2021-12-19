import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, About, Skills, Contact, Projects } from "./components/pages";

const Router = () => {
  return (
    //   BrowserRouter라우터종류
    <BrowserRouter>
      {/* Routes라우터 감싸는것 */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
// eslint-disable-next-line no-lone-blocks
{/* <Container>
<Nav>
  <LinkList>
          <Link to={"/"} key={Main}>
        <LinkItem active={"/" === pathname}>Main</LinkItem>
      </Link>
      <Link to={"/about"} key={Main}>
        <LinkItem active={"/about" === pathname}>about</LinkItem>
      </Link>
      <Link to={"/skills"} key={Main}>
        <LinkItem active={"/skills" === pathname}>skills</LinkItem>
      </Link>
      <Link to={"/projects"} key={Main}>
        <LinkItem active={"/projects" === pathname}>projects</LinkItem>
      </Link>
      <Link to={"/contact"} key={Main}>
        <LinkItem active={"/contact" === pathname}>contact</LinkItem>
      </Link>
  </LinkList>
</Nav>
</Container> */}