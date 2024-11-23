import styled from "styled-components";

import location from "../../../assets/icon/icon_address.svg";

const SearchItem = ({ name, address }: { name: string; address: string }) => {
  return (
    <Container>
      <SubContainer>
        <img src={location} alt="location" />
        <Place>
          <Name>{name}</Name>
          <Address>{address}</Address>
        </Place>
      </SubContainer>
      <Line />
    </Container>
  );
};

export default SearchItem;

// style
const Container = styled.div`
  width: 100%;
  padding: 15px 30px;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  img {
    height: 20px;
  }
`;

const Place = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Name = styled.p`
  font-size: 15px;
`;

const Address = styled.p`
  font-size: 12px;
  color: #a2a2a2;
  margin-bottom: 15px;
`;

const Line = styled.div`
  width: 333px;
  height: 1px;

  background-color: #efefef;
`;
