import { useState } from "react";
import styled from "styled-components";
const imageList = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2015/10/01/21/39/background-image-967820_960_720.jpg",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2015/08/28/11/27/space-911785_960_720.jpg",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999_960_720.jpg",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2014/05/10/18/10/saturn-341379_960_720.jpg",
  },
];
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 400px;
`;
const List = styled.div``;
const Image = styled.img`
  position: absolute;
  width: 600px;
  height: 400px;
  opacity: ${({ active }) => !active && "0"};
  transition: ${({ active }) => active && "0.7s ease-out"};
`;
const BtnL = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 3.25rem;
  height: 3.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(90deg);
`;
const BtnR = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 3.25rem;
  height: 3.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(270deg);
`;
const BtnIndex = styled.button`
  background: #fffefe;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  background: ${({ active }) => active && "black"};
`;
const BtnIndexList = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;
const Carousels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (n) => {
    const lastIndex = imageList.length - 1;
    if (n === -1 && activeIndex === 0) {
      setActiveIndex(lastIndex);
    } else if (n === 1 && activeIndex === lastIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + n);
    }
    console.log(activeIndex);
  };

  return (
    <Wrapper>
      <List activeIndex={activeIndex}>
        {imageList.map(({ id, src }, index) => (
          <Image key={id} src={src} active={activeIndex === index}></Image>
        ))}
      </List>
      <BtnL onClick={() => handleClick(-1)}></BtnL>
      <BtnR onClick={() => handleClick(1)}></BtnR>
      <BtnIndexList>
        {imageList.map((img, index) => (
          <BtnIndex
            key={img.id}
            active={activeIndex === index}
            onClick={() => {
              setActiveIndex(index);
            }}
          ></BtnIndex>
        ))}
      </BtnIndexList>
    </Wrapper>
  );
};
export default Carousels;
