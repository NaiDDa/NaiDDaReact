import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Movie, Book } from "./components/pages";
import { TopNav } from "./components/organisms";
const Router = () => {
  return (
    //   BrowserRouter라우터종류
    <BrowserRouter>
      {/* Routes라우터 감싸는것 */}
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
