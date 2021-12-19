import { useState } from "react";
import styled from "styled-components";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsMain = () => {
  const [category, setCategory] = useState("sports");
  const onSelect = (category) => setCategory(category);
  return (
    <Content>
      <Categories onSelect={onSelect} category={category} />
      <NewsList category={category} />
    </Content>
  );
};
const Content = styled.div`background:#f1eeee`
export default NewsMain;
