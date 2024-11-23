import React from "react";
import styled from "styled-components";
import SaveSubway from "./components/SaveSubway";

interface LikeWayProps {
  subway: string[];
}

const WantWay: React.FC<LikeWayProps> = ({ subway }) => {
  const wantData = [
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
  ];

  return (
    <Container>
      {subway.map((station, index) => (
        <SaveSubway key={index} subway={station} data={wantData} />
      ))}
    </Container>
  );
};

export default WantWay;

// style
const Container = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;
