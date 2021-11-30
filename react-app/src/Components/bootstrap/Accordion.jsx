import { useState } from "react";
import styled, { css } from "styled-components";
const List = styled.ul`
  width: 500px;
  margin: 10px;
  padding: 0;
  list-style: none;
  border: 1px solid #c2c2c2;
  border-radius: 6px;
`;
const Item = styled.li`
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: #0c63e4;
        background-color: #e7f1ff;
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid #c2c2c2;
`;
const Body = styled.div`
  border-top: 1px solid #c2c2c2;
  display: none;
  padding: 10px;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;

const Accordion = ({ oData }) => {
  const [data, setData] = useState(oData);
  const handleClick = (id) => {
    const newData = data.map((item) => ({
      ...item,
      active: item.id === id ? !item.active : false,
    }));

    // const newData = data.map((item) => {
    //   item.active = item.id === id ? !item.active : false;
    //   return item;

    //   //   if (item.id === id) {
    //   //     item.active = !item.active;
    //   //   } else {
    //   //     item.active = false;
    //   //   }
    //   return item;

    // });
    setData(newData);
  };
  return (
    <div>
      <List>
        {oData.map(({ active, title, content, id }) => (
          <Item active={active}>
            <Header onClick={() => handleClick(id)}>
              {title}
              <Button />
            </Header>
            <Body>{content}</Body>
          </Item>
        ))}
      </List>
    </div>
  );
};
export default Accordion;
