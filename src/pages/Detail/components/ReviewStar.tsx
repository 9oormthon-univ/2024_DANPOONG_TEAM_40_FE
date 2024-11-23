import React, { useState } from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

interface ReviewStarProps {
  title: string;
  onRatingChange: (rating: number) => void;
}

const ReviewStar: React.FC<ReviewStarProps> = ({ title, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    onRatingChange(newRating);
    console.log(`${title} 별점:`, newRating); // 선택된 별점 출력
    console.log({ rating });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <StarRating onRatingChange={handleRatingChange} />
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
