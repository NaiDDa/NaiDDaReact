import axios from "axios";

export const getMovieList = async (params) => {
  const result = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "bzsOutoI7ytKZoBHu1tM",
      "X-Naver-Client-Secret": "mtVRxCduTY",
    },
    params,
  });
  return result.data;
};

export const getBoxOfficeList = async (params) => {
  const result = await axios.get(
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
    {
      params: {
        key: "9f2f86b58ab827e950429800eb720393",
        targetDt: "20211215",
      },
    }
  );
  return result.data;
};
