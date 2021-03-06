import styled from "styled-components";
import videoimg from "../../a/images/videoimg.png";
import logo192 from "../../a/images/logo192.png";

const VideoList = ({ data }) => {
  return (
    <Content>
      <>
        {data.map(({ title, Nick1, Views1, Day1 }) => (
          <Box>
            <VideoImg src={videoimg} />
            <Item>
              <>
                <ProfileImg src={logo192} />
                <Text>
                  <Title>{title}</Title>
                  <By>
                    <Nick>{Nick1}</Nick>
                  </By>
                  <Info>
                    <Views>{Views1}</Views>
                    <Dot> º </Dot>
                    <Day>{Day1}</Day>
                  </Info>
                </Text>
              </>
            </Item>
          </Box>
        ))}
      </>
    </Content>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;
  margin: 20px auto;
  width: 1200px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 900px;
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    width: 600px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 300px;
  }
`;
const VideoImg = styled.img`
  height: 158px;
  width: 100%;
`;
const Item = styled.div`
  display: flex;
`;
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Text = styled.div``;
const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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
