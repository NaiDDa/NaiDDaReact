import Carousels from "./Carousels";
import Accordion2 from "./Accordion2";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import Backdrop from "./backdrop";
import NickName from "./NickName";
import Email from "./Email"
import ModalSidebar from "../youtube/ModalSidebar";
import { useState } from "react";
import { accordionData, imageList } from "./data";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNickNameModal, setShowNickNameModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [youTube, setYouTube] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const hideModal = () => {
    setShowModal(false);
    setShowNickNameModal(false);
    setShowEmailModal(false);
    setYouTube(false);
  };
  const emailOpen = () => {
    if (showEmailModal === false) {
      setShowEmailModal(true);
    }
  }
  const nickNameOpen = () => {
    if (showNickNameModal === false) {
      setShowNickNameModal(true);
    }
  };

  const modalOpen = () => {
    if (showModal === false) {
      setShowModal(true);
    }
  };
  const youtubeModal = () => {
    if (youTube === false) {
      setYouTube(true);
    }
  };
  const onSubmitEmail = (email) => setEmail(email);
  const onSunmitName = (name) => setName(name);
  const onSunmitNickName = (text) => setText(text);

  return (
    <div style={{ height: 2000 }}>
      <button onClick={youtubeModal}>=</button>
      <br />
      <br />
      <button onClick={emailOpen}>Edit Email Modal</button>
      <p>Email : {email}</p>

      {youTube && <ModalSidebar onClose={hideModal} />}
      <button onClick={modalOpen}>Edit Name Modal</button>
      <p>Name : {name}</p>
      <button onClick={nickNameOpen}>Edit NickName Modal</button>

      <p>NickName : {text}</p>
      <Dropdown />
      <Accordion2 data={accordionData} />
      <Carousels imageList={imageList} />
      {showEmailModal && <Email onClose={hideModal} onSubmitEmail={onSubmitEmail} />}
      {showNickNameModal && (
        <NickName onClose={hideModal} onSubmitNick={onSunmitNickName} />
      )}
      {showModal && <Modal onClose={hideModal} onSubmit={onSunmitName} />}
      {showEmailModal && <Backdrop onClick={() => setShowEmailModal(false)} />}
      {showModal && <Backdrop onClick={() => setShowModal(false)} />}
      {showNickNameModal && <Backdrop onClick={() => setShowNickNameModal(false)} />}
    </div>
  );
};
export default Bootstrap;
