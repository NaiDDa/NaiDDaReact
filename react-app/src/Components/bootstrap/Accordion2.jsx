import { useState } from "react";
import styled, { css } from "styled-components";

const List = styled.div`
  border: 1px solid #817f7df9;
  border-radius: 6px;
  width: 600px;
  margin: 50px;
`;
const Item = styled.div`
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: #2b5783;
        background-color: #71849e;
      }
      ${Body} {
        display: block;
        transition: 0.5s;
      }
      ${Button} {
        transform: rotate(180deg);
      }
    `}
`;
const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #817f7df9;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.5s ease-in-out;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;
const Body = styled.div`
  display: none;
  transition: 0.5s;
  line-height: 25px;
  padding: 10px;
`;
const Accordion2 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = () => {
    // const newData = data.map((item) => ({
    //   ...item,
    //   active: item.id === id ? !item.active : false,
    // }));
    // setData(newData);
  };

  const handleIndex = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
    // const nextIndex = index === activeIndex ? index : -1;
    // setActiveIndex(nextIndex);
  };

  return (
    <>
      <div>
        <List>
          {data.map(({ title, content, id }, index) => (
            <Item active={activeIndex === index} key={id}>
              <Header onClick={() => handleIndex(index)}>
                {title}
                <Button />
              </Header>
              <Body>{content}</Body>
            </Item>
          ))}
        </List>
      </div>
    </>
  );
};
export default Accordion2;
