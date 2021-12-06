import styled from "styled-components";
import dataList from "./Data";

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
`;
const GroupBox = styled.div``;
const GroupUl = styled.ul`
  list-style: none;
`;
const GroupItem = styled.li``;
const FoldImg = styled.img``;
const GroupImg = styled.img``;
const Box = styled.div`
  display: flex;
  padding: 10px;
`;
const Box2 = styled.div`

`;

const Group = () => {
  return (
    <Wrapper>
      <GroupBox>
        <GroupUl>
          {dataList.map(({ groupUid, name, items }) => (
            <>
              <Box>
                <FoldImg src="/img/fold.svg" />
                <GroupImg src="img/group.svg" />
                <GroupItem>{name}</GroupItem>
              </Box>
              {items.map((item) => (
                <h2>{item.name}</h2>
              ))}
            </>
          ))}
        </GroupUl>
      </GroupBox>
    </Wrapper>
  );
};
export default Group;
