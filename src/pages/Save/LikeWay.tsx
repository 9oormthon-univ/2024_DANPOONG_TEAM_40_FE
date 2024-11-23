import React from "react";
import styled from "styled-components";
import SaveSubway from "./components/SaveSubway";

interface LikeWayProps {
  subway: string[];
}

const LikeWay: React.FC<LikeWayProps> = ({ subway }) => {
  const likeData = [
    {
      name: "서울숲",
      address: "서울 성동구 뚝섬로 273",
      tags: ["숲", "숲길"],
    },
    {
      name: "뚝섬유원지",
      address: "서울 성동구 뚝섬로 200",
      tags: ["유원지", "한강"],
    },
    {
      name: "성수동 카페거리",
      address: "서울 성동구 성수이로 147",
      tags: ["카페", "거리"],
    },
    {
      name: "성수동 카페거리",
      address: "서울 성동구 성수이로 147",
      tags: ["카페", "거리"],
    },
  ];

  return (
    <Container>
      {subway.map((station, index) => (
        <SaveSubway key={index} subway={station} data={likeData} />
      ))}
    </Container>
  );
};

export default LikeWay;

// style
const Container = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;
