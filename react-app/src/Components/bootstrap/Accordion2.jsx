import { useState } from "react";
import styled, { css } from "styled-components";

const Accordion2 = () => {
  //   const [arr, setArr] = useState();
  const [data, setData] = useState([
    {
      id: 1,
      title: " Item #1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      active: true,
    },
    {
      id: 2,
      title: " Item #2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      active: false,
    },
    {
      id: 3,
      title: " Item #3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      active: false,
    },
  ]);
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
    line-height: 25px;
    padding: 10px;
  `;
  const handleClick = (id) => {
    const newData = data.map((item) => ({
      ...item,
      active: item.id === id ? !item.active : false,
    }));
    setData(newData);
  };
  const [groupData, setGroupData] = useState([
    {
      groupUid: 1,
      name: "Group1",
      items: [
        {
          itemUid: 1,
          name: "Item1",
        },
        {
          itemUid: 2,
          name: "Item2",
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <List>
          {data.map(({ title, content, id, active }) => (
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
    </>
  );
};
export default Accordion2;
