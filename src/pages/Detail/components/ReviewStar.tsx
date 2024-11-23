import React, { useState } from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

import informationIcon from "../../../assets/icon/icon_information.svg";
import InformationModal from "./InformationModal";

interface ReviewStarProps {
  title: string;
  onRatingChange: (rating: number) => void;
}

const ReviewStar: React.FC<ReviewStarProps> = ({ title, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    onRatingChange(newRating);
    console.log(`${title} 별점:`, newRating, { rating });
  };

  return (
    <Container>
      <Title>{title}</Title>
      {title === "휠체어 이용" && (
        <Info type="button" onClick={openModal}>
          <img src={informationIcon} alt="infomation" />
        </Info>
      )}
      <StarRating onRatingChange={handleRatingChange} />
      <InformationModal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
};

export default ReviewStar;

const Container = styled.div`
  width: 333px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);
`;

const Title = styled.p`
  font-size: 15px;
`;

const Info = styled.button`
  position: absolute;
  left: 125px;
`;
