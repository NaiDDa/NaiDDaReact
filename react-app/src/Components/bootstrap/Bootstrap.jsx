import { useState } from "react";
import Carousels from "./Carousels";
import Accordion from "./Accordion";
import Accordion2 from "./Accordion2";
const imageList = [
  {
    id: 1,
    src: "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D",
  },
  {
    id: 2,
    src: "https://www.kgnews.co.kr/data/photos/20210208/art_16141331574034_a45648.jpg",
  },
  {
    id: 3,
    src: "https://en.pimg.jp/033/277/436/1/33277436.jpg",
  },
  {
    id: 5,
    src: "https://en.pimg.jp/010/067/757/1/10067757.jpg",
  },
];
const accordionData = [
  {
    id: 1,
    title: "Title1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
    active: false,
  },
  {
    id: 2,
    title: "Title2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
    active: false,
  },
  {
    id: 3,
    title: "Title3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
    active: false,
  },
];
const Bootstrap = () => {
  return (
    <div>
      <Accordion oData={accordionData} />
      <Accordion2 />
      <Carousels imageList={imageList} />
    </div>
  );
};
export default Bootstrap;
