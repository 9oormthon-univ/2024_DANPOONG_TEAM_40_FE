import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface SaveItemProps {
  name: string;
  address: string;
  tags: string[];
}

const SaveItem: React.FC<SaveItemProps> = ({ name, address, tags }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${name}`);
  };

  return (
    <Container onClick={handleClick}>
      <Image />
      <div>
        <Title>{name}</Title>
        <Address>{address}</Address>
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
      </div>
    </Container>
  );
};

export default SaveItem;

// style
const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  width: 120px;
  height: 80px;

  background-color: #cccccc;
  border-radius: 10px;
`;

const Title = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 15px;
`;

const Address = styled.p`
  font-size: 12px;
  color: #a2a2a2;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`;

const Tag = styled.p`
  font-size: 12px;
  color: #a2a2a2;

  background-color: #efefef;
  padding: 3px 7px;
  border-radius: 5px;
`;
