import styled from "styled-components";
const DropdownMenu = ({ data }) => {
  return (
    <>
      <Menu>
        {data.map(({ img, name }) => (
          <Item key={name}>
            <ImgItem src={img} />
            {name}
          </Item>
        ))}
      </Menu>
    </>
  );
};
const ImgItem = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 8px;
`;
const Menu = styled.ul`
  list-style: none;
  border-bottom: 1px solid #ddd;
  padding: 0 10px;
`;
const Item = styled.li`
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #ece4e4;
  }
`;

export default DropdownMenu;
