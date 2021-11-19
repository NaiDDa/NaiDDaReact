import { useState, useEffect, useRef } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const nameInputEL = useRef(null);
  const load = useRef();

  useEffect(() => {
    console.log("최초렌더링완료");
  }, []);
  useEffect(() => {
    console.log("새로운렌더링완료");
    console.log(name, nickName);
  }, [name, nickName]);

  const inName = (e) => {
    setName(e.target.value);
  };
  const inNickName = (e) => {
    setNickName(e.target.value);
  };
  const reset = () => {
    setName("");
    setNickName("");
    nameInputEL.current.value = "hihi";
  };
  const upload = () => {
    load.current.click();
  };
  return (
    <>
      <input
        ref={nameInputEL}
        placeholder="name"
        value={name}
        onChange={inName}
      />
      <input placeholder="nickname" value={nickName} onChange={inNickName} />
      <button onClick={reset}>초기화</button>
      <div>이름: {name}</div>
      <div>닉네임: {nickName}</div>
      <input ref={load} type="file" style={{ display: "none" }} />
      <button onClick={upload}>파일 업로드</button>
    </>
  );
};
export default Info;
