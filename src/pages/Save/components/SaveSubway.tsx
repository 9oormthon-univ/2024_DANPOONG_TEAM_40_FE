import React from "react";
import styled from "styled-components";
import SaveItem from "./SaveItem";

import subwayIcon from "../../../assets/icon/icon_subway.svg";

interface SaveSubwayProps {
  subway: string;
  data: { name: string; address: string; tags: string[] }[];
}

const SaveSubway: React.FC<SaveSubwayProps> = ({ subway, data }) => {
  return (
    <Container>
      <Subway>
        <img src={subwayIcon} alt="subway" />
        <p>{subway}</p>
      </Subway>
      <ItemContainer>
        {data.map((item, index) => (
          <SaveItem
            key={index}
            name={item.name}
            address={item.address}
            tags={item.tags}
          />
        ))}
      </ItemContainer>
    </Container>
  );
};

export default SaveSubway;

// style
const Container = styled.div`
  width: 100%;
  padding: 0 35px;
`;

const Subway = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;

  font-family: "NanumSquareNeoExtraBold";
  font-size: 17px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;
