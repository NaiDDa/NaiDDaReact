import styled from "styled-components";
const chipData = [
  {
    name: "전체",
  },
  {
    name: "음악",
  },
  {
    name: "실시간",
  },
  {
    name: "랩",
  },
  {
    name: "피트니스",
  },
  {
    name: "포켓몬",
  },
  {
    name: "믹스",
  },
  {
    name: "사이클링",
  },
  {
    name: "애니메이션",
  },
  {
    name: "만화 영화",
  },
  {
    name: "플랫폼 게임",
  },
  {
    name: "요리 프로그램",
  },
  {
    name: "액션 어드벤쳐 게임",
  },
  {
    name: "요리",
  },
  {
    name: "반려동물",
  },
  {
    name: "최근에 업로드된 동영상",
  },
  {
    name: "감상한 동영상",
  },
  {
    name: "새로운 맞춤 동영상",
  },
];
const SubBar = () => {
  return (
    <List>
      <Chip>
        {chipData.map(({ name }) => (
          <ChipBtn>{name}</ChipBtn>
        ))}
      </Chip>
      <BtnPrevWrapper>
        <LeftArrow />
      </BtnPrevWrapper>
      <BtnNextWrapper>
        <RightArrow />
      </BtnNextWrapper>
    </List>
  );
};
const List = styled.div`
  padding: 0 50px;
  position: relative;
  display: flex;
  align-items: center;
`;
const Chip = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
`;
const Btn = styled.button`
  height: 100%;
  border: none;
  background: #fff;
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
  padding: 15px;
  top: 10px;
  background-repeat: no-repeat;
`;
const LeftArrow = styled(Btn)`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  transform: rotate(90deg);
`;
const RightArrow = styled(Btn)`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  transform: rotate(270deg);
`;
const BtnPrevWrapper = styled(Btn)`
  left: 0;
  background: #fff;
`;
const BtnNextWrapper = styled(Btn)`
  right: 0;
`;
const ChipBtn = styled.button`
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
  background: #f3f0f0;
  padding: 7px 7px;
  cursor: pointer;
  &:hover {
    background: #e4e2e2;
  }
`;
export default SubBar;
