import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Button = styled.button`
  cursor: pointer;
  border: none;
  font-size: 20px;
`;
const Menu = styled.ul`
  position: absolute;
  background: #fff;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ddd;
  width: 150px;
  border-radius: 4px;
`;
const Item = styled.li`
  padding: 10px 15px;

  & + & {
    border-top: 1px solid #dddddd;
  }
  &:hover {
    background: #dddddd;
  }
`;

const Dropdown = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "item1",
    },
    {
      id: 2,
      name: "item2",
    },
    {
      id: 3,
      name: "item3",
    },
    {
      id: 4,
      name: "item4",
    },
  ]);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    // if (active === false) {
    //   setActive(true);
    // } else {
    //   setActive(false);
    // }
    // active === false ? setActive(true) : setActive(false);
    setActive(!active);
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>Dropdown</Button>
      {active && (
        <Menu>
          {data.map(({ id, name }) => (
            <Item>{name}</Item>
          ))}
        </Menu>
      )}
    </Wrapper>
  );
};

export default Dropdown;
