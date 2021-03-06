import React from "react";
import styled from "styled-components";

const chipList = [
  {
    name: "전체",
    value: "all",
  },
  {
    name: "음악",
    value: "music",
  },
  {
    name: "실시간",
    value: "live",
  },
  {
    name: "애니메이션",
    value: "animation",
  },
  {
    name: "만화 영화",
    value: "cartoon",
  },
  {
    name: "ASMR",
    value: "asmr",
  },
];

const ChipList = ({ category, chipChange }) => {
  const change = (value) => {
    chipChange(value);
  };
  return (
    <Wrapper>
      <List>
        {chipList.map(({ name, value }) => (
          <Chip
            key={value}
            value={category === value}
            onClick={() => change(value)}
          >
            {name}
          </Chip>
        ))}
      </List>
      <BtnPrevWrapper>
        <BtnPrev>이전</BtnPrev>
      </BtnPrevWrapper>
      <BtnNextWrapper>
        <BtnNext>다음</BtnNext>
      </BtnNextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 60px;
  position: relative;
  border-bottom: 1px solid #ddd;
`;
const List = styled.div``;
const Chip = styled.div`
  cursor: pointer;
  height: 32px;
  padding: 10px;
  border: 1px solid #ddd;
  background: #efefef;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  margin: 10px;
  color: ${({ value }) => value && "#fff"};
  background: ${({ value }) => value && "black"};
`;
const BtnWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  display: flex;
  align-items: center;
`;

const BtnPrevWrapper = styled(BtnWrapper)`
  left: 0;
  ::after {
    height: 100%;
    width: 100px;
    content: "";
    background: linear-gradient(to right, #fff 20%, rgba(255, 255, 255, 0) 80%);
  }
`;
const BtnPrev = styled.button`
  height: 100%;
  background: #fff;
  border: none;
  cursor: pointer;
  padding: 0 20px;
`;
const BtnNextWrapper = styled(BtnWrapper)`
  right: 0;
  ::before {
    height: 100%;
    width: 100px;
    content: "";
    background: linear-gradient(to left, #fff 20%, rgba(255, 255, 255, 0) 80%);
  }
`;
const BtnNext = styled.button`
  height: 100%;
  background: #fff;
  cursor: pointer;
  border: none;
  padding: 0 20px;
`;
export default ChipList;
