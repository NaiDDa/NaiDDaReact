import { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Button = styled.button`
  cursor: pointer;
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
const Item = styled.a`
  padding: 10px;
  display: flex;
  text-decoration: none;
  padding-left: ${({ stage }) => stage * 40};
  & + & {
    border-top: 1px solid #dddddd;
  }
  &:hover {
    background: #dddddd;
  }
`;

const Dropdown = () => {
  const [menuList, setMenuList] = useState([
    {
      name: "YouTube 프리미엄1",
      link: "https://www.youtube.com/",
      subMenu: [
        {
          name: "YouTube 프리미엄1-1",
          link: "https://www.youtube.com/",
        },
        {
          name: "YouTube 프리미엄1-2",
          link: "https://www.youtube.com/",
        },
      ],
    },
    {
      name: "YouTube 프리미엄2",
      link: "https://www.youtube.com/",
      subMenu: [],
    },
    {
      name: "YouTube 프리미엄3",
      link: "https://www.youtube.com/",
      subMenu: [
        {
          name: "YouTube 프리미엄3-1",
          link: "https://www.youtube.com/",
        },
      ],
    },
  ]);
  const dropdownEl = useRef(null);
  const [active, setActive] = useState(false);
  const handleClick = useCallback(() => {
    setActive(!active);
  }, [active]);
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownEl.current && !dropdownEl.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, [dropdownEl, handleClick]);

  return (
    <Wrapper ref={dropdownEl}>
      <Button onClick={handleClick}>Dropdown</Button>
      {active && (
        <Menu>
          {menuList.map(({ name, link, subMenu }) => (
            <div key={name}>
              <Item href={link} target="_blank">
                {name}
              </Item>
              {subMenu.map(({ name, link }) => (
                <Item stage={1} href={link} target="_blank">
                  {name}
                </Item>
              ))}
            </div>
          ))}
        </Menu>
      )}
    </Wrapper>
  );
};

export default Dropdown;
