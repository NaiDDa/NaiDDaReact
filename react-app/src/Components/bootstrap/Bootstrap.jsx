import Carousels from "./Carousels";
import Accordion2 from "./Accordion2";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import Backdrop from "./backdrop";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { accordionData, imageList } from "./data";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  const ModalOpen = () => {
    if (showModal === false) {
      setShowModal(true);
    }
  };

  return (
    <div>
      <button onClick={ModalOpen}>모오달여얼기</button>

      <Dropdown />
      <Accordion2 data={accordionData} />
      <Carousels imageList={imageList} />

      {showModal && <Modal onClose={hideModal} />}
      {showModal && <Backdrop onClick={() => setShowModal(false)} />}
    </div>
  );
};
export default Bootstrap;
