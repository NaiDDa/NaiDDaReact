import { useState } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const News = () => {
  const [category, setCategory] = useState("sports");
  const onSelect = (category) => setCategory(category);
  return (
    <div>
      <Categories onSelect={onSelect} category={category} />
      <NewsList category={category} />
    </div>
  );
};
export default News;
