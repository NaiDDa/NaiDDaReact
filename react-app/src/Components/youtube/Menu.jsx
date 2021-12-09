import { useState } from "react";
import styled from "styled-components";
const Menu = ({ data, title, defaultCount = 999 }) => {
  const [more, setMore] = useState(false);
  const moreItem = () => {
    setMore(!more);
  };
  return (
    <>
      <List>
        {title && <Title>{title}</Title>}
        {data
          .filter((e, index) => defaultCount > index)
          .map(({ img, name }) => (
            <>
              <Item key={name}>
                <ImgItem src={img} />
                <ItemName> {name}</ItemName>
              </Item>
            </>
          ))}
        {data && (
          <>
            {more &&
              data
                .filter((e, index) => defaultCount <= index)
                .map(({ img, name }) => (
                  <Item key={name}>
                    <ImgItem src={img} />
                    {name}
                  </Item>
                ))}
            {defaultCount < data.length && (
              <Item onClick={moreItem}>
                <ImgItem
                  src={
                    more
                      ? "https://cdn4.iconfinder.com/data/icons/arrow-part-3-64-px/64/Artboard_52-512.png"
                      : "https://cdn4.iconfinder.com/data/icons/arrow-part-3-64-px/64/Artboard_51-512.png"
                  }
                />
                {more ? "간략히 보기" : "더 보기"}
              </Item>
            )}
          </>
        )}
      </List>
    </>
  );
};
const ItemName = styled.div`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

const Title = styled.div`
  padding: 8px 16px;
  font-size: 14px;
`;
const ImgItem = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 8px;
`;
const List = styled.ul`
  list-style: none;
  border-bottom: 1px solid #ddd;
  padding: 0 10px;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #ece4e4;
  }
`;

export default Menu;
