import { useEffect, useState } from "react";
import ModalSidebar from "./ModalSidebar";
import Topbar from "./Topbar";
import VideoList from "./VideoList";
import ChipList from "./ChipList";
import videoData from "./Video";

const Youtube = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = () => setShowSidebar(true);
  const hideSidebar = () => setShowSidebar(false);

  const [category, setCategory] = useState("all");
  const [videoList, setVideoList] = useState(videoData[category]);

  const chipChange = (category) => {
    setCategory(category);
  };
  useEffect(() => {
    setVideoList(videoData[category] || []);
  }, [category]);

  return (
    <div>
      <Topbar onOpenSidebar={openSidebar} />
      <ChipList category={category} chipChange={chipChange} />
      {showSidebar && <ModalSidebar onClose={hideSidebar} />}
      <VideoList data={videoList} />
    </div>
  );
};

export default Youtube;
