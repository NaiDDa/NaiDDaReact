import { useState } from "react";

const EventPractice = () => {
  // const [message, satMessage] = useState("");
  // const [username, setUserName] = useState("");
  // const handleChangeUsername = (e) => setUserName(e.target.value);
  // const handleChange = (e) => satMessage(e.target.value);
  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message } = form;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    // const nextForm = {
    //   ...form,
    //   [name]: value,
    // };
    // setForm(nextForm);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    alert(username + " : " + message + "입니다");
    setForm({ username: "", message: "" });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <h1>EventPractice</h1>
      <input
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="입력"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};
export default EventPractice;
