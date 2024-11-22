import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import heartIcon from "../../../assets/icon/icon_savelist.svg";
import addIcon from "../../../assets/icon/icon_save_add.svg";
import checkIcon from "../../../assets/icon/icon_save_check.svg";
import cancelIcon from "../../../assets/icon/icon_save_cancel.svg";

interface SaveModalProps {
  onClose: () => void;
  onSave: () => void;
}

const SaveModal: React.FC<SaveModalProps> = ({ onClose, onSave }) => {
  const { placeName } = useParams<{ placeName: string }>();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleSelection = (index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Container>
      <Cancel onClick={onClose}>
        <img src={cancelIcon} alt="cancel" />
      </Cancel>
      <Title>{placeName}</Title>
      <List onClick={() => toggleSelection(0)}>
        <ListTitle>
          <img src={heartIcon} alt="save" />
          <p>내가 좋아하는 길</p>
        </ListTitle>
        <img src={selectedIndex === 0 ? checkIcon : addIcon} alt="toggle" />
      </List>
      <List onClick={() => toggleSelection(1)}>
        <ListTitle>
          <img src={heartIcon} alt="save" />
          <p>내가 가고 싶은 길</p>
        </ListTitle>
        <img src={selectedIndex === 1 ? checkIcon : addIcon} alt="toggle" />
      </List>
      <Button isActive={selectedIndex !== null} onClick={onSave}>
        저장
      </Button>
    </Container>
  );
};

export default SaveModal;

// style
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const Cancel = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Title = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 15px;
`;

const List = styled.button`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
`;

const ListTitle = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  font-size: 13px;
`;

const Button = styled.button<{ isActive: boolean }>`
  width: 200px;
  height: 35px;

  background-color: ${(props) => (props.isActive ? "#484848" : "#d9d9d9")};
  border-radius: 10px;

  font-family: "NanumSquareNeoExtraBold";
  font-size: 15px;
  color: #ffffff;
`;
