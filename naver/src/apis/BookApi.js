import axios from "axios";

export const getBookList = async (params) => {
  const result = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "bzsOutoI7ytKZoBHu1tM",
      "X-Naver-Client-Secret": "mtVRxCduTY",
    },
    params,
  });
  return result.data;
};
