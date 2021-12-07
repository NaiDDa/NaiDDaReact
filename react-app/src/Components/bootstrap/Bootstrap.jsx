import Carousels from "./Carousels";
import Accordion2 from "./Accordion2";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import Backdrop from "./backdrop";
import NickName from "./NickName";
import ModalSidebar from "../youtube/ModalSidebar";
import { useState } from "react";
import { accordionData, imageList } from "./data";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [youTube, setYouTube] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const hideModal = () => {
    setShowModal(false);
    setShowModal2(false);
    setYouTube(false);
  };
  const NickNameOpen = () => {
    if (showModal2 === false) {
      setShowModal2(true);
    }
  };

  const ModalOpen = () => {
    if (showModal === false) {
      setShowModal(true);
    }
  };
  const YoutubeModal = () => {
    if (youTube === false) {
      setYouTube(true);
    }
  };

  const onSunmitName = (name) => {
    setName(name);
  };
  const onSunmitNickName = (text) => {
    setText(text);
  };

  return (
    <div style={{ height: 2000 }}>
      <button onClick={YoutubeModal}>=</button>
      <br />
      {youTube && <ModalSidebar onClose={hideModal} />}
      <button onClick={ModalOpen}>Edit Name Modal</button>
      <p>Name: {name}</p>
      <button onClick={NickNameOpen}>Edit NickName Modal</button>
      {showModal2 && (
        <NickName onClose={hideModal} onSubmitNick={onSunmitNickName} />
      )}
      <p>NickName : {text}</p>
      <Dropdown />
      <Accordion2 data={accordionData} />
      <Carousels imageList={imageList} />

      {showModal && <Modal onClose={hideModal} onSubmit={onSunmitName} />}
      {showModal && <Backdrop onClick={() => setShowModal(false)} />}
      {showModal2 && <Backdrop onClick={() => setShowModal2(false)} />}
    </div>
  );
};
export default Bootstrap;
