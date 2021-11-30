import { useState } from "react";
import styled from "styled-components";

const Carousels = ({ imageList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndex = (n) => {
    const lastIndex = imageList.length - 1;
    let nextIndex;
    if (n === -1 && activeIndex === 0) {
      nextIndex = lastIndex;
    } else if (n === 1 && activeIndex === lastIndex) {
      nextIndex = 0;
    } else {
      nextIndex = activeIndex + n;
    }
    setActiveIndex(nextIndex);
  };

  return (
    <Wrapper>
      <List activeIndex={activeIndex}>
        {imageList.map(({ id, src }, i) => (
          <Image key={id} src={src} active={activeIndex === i} />
        ))}
      </List>
      <BtnLeft onClick={() => handleIndex(-1)}></BtnLeft>
      <BtnRight onClick={() => handleIndex(1)}></BtnRight>
      <IndexList>
        {imageList.map((image, index) => (
          <BtnIndex
            key={image.id}
            active={activeIndex === index}
            onClick={() => {
              setActiveIndex(index);
            }}
          ></BtnIndex>
        ))}
      </IndexList>
    </Wrapper>
  );
};
const IndexList = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnIndex = styled.button`
  background: #f1bfbf;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  background: ${({ active }) => active && "black"};
`;
const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  overflow: hidden;
`;
const List = styled.div`
  position: absolute;
  display: flex;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 800}px)`};
  transition: transform 0.5s ease-out;
`;
const Image = styled.img`
  width: 800px;
  height: 600px;
  top: 0;
  left: 0;
`;
const BtnLeft = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 3.25rem;
  height: 3.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(90deg);
`;
const BtnRight = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 3.25rem;
  height: 3.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(270deg);
`;

export default Carousels;
