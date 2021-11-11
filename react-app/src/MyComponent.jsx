const MyComponent = ({ name, children, name2 }) => {
  return (
    <div>
      나의 컴포넌트 {name}
      <br />
      {children}
      {name2}
    </div>
  );
};
export default MyComponent;
