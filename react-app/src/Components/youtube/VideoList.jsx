import styled from "styled-components";
import videoimg from "../../a/images/videoimg.wedp";
const videoData = [
  {
    img: videoimg,
    title: "비디오테이프에 녹화된 소름 돋는 장면(공포게임)",
    Nick: "수탉",
    Views: "조회수 1회",
    Dot: "º",
    Day: "1시간 전",
  },
  {
    img: videoimg,
    title: "비디오테이프에 녹화된 소름 돋는 장면(공포게임)",
    Nick: "수탉",
    Views: "조회수 1회",
    Dot: "º",
    Day: "1시간 전",
  },
];
const VideoList = () => {
  return (
    <Content>
      <VideoImg></VideoImg>
      <Item>
        {videoData.map(() => (
          <>
            <ProfileImg />
            <Text>
              <Title>비디오테이프에 녹화된 소름 돋는 장면(공포게임)</Title>
              <By>
                <Nick>수탉</Nick>
              </By>
              <Info>
                <Views>조회수 1 회</Views>
                <Dot> º </Dot>
                <Day>1시간 전</Day>
              </Info>
            </Text>
          </>
        ))}
      </Item>
    </Content>
  );
};
const Content = styled.div`
  margin: 20px 50px;
  width: 210px;
  height: 120px;
`;
const VideoImg = styled.img`
  width: 210px;
  height: 120px;
`;
const Item = styled.div``;
const ProfileImg = styled.img``;
const Text = styled.div``;
const Title = styled.p`
  font-size: 14px;
  margin: 0;
`;
const By = styled.div``;
const InfoText = styled.span`
  font-size: 12px;
  color: #646262;
`;
const Nick = styled(InfoText)``;
const Info = styled.div``;

const Views = styled(InfoText)``;
const Dot = styled(InfoText)``;
const Day = styled(InfoText)``;
export default VideoList;
