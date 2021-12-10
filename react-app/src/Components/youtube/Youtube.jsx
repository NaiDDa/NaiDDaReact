import { useState } from "react";
import ModalSidebar from "./ModalSidebar";
import Topbar from "./Topbar";
import VideoList from "./VideoList";
import SubBar from "./SubBar";

const Youtube = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = () => setShowSidebar(true);
  const hideSidebar = () => setShowSidebar(false);

  return (
    <div>
      <Topbar onOpenSidebar={openSidebar} />
      <SubBar />
      {/* <button onClick={() => setShowSidebar(true)}>sidebar</button> */}
      {showSidebar && <ModalSidebar onClose={hideSidebar} />}
      <VideoList />
    </div>
  );
};

export default Youtube;
