import React from "react";
import styled from "styled-components";
import StarRating from "./components/StarRating";
import ReviewGraph from "./components/ReviewGraph";

const Review = () => {
  const rating = 4.7;
  return (
    <Container>
      <ReviewDesc>
        <p>리뷰 3개</p>
        <button type="button">리뷰 쓰기</button>
      </ReviewDesc>
      <StarContainer>
        <StarRating totalStars={5} initialRating={rating} readOnly={true} />
        <p>
          <span>{rating}</span>/5
        </p>
      </StarContainer>
      <GraphContainer>
        <ReviewGraph title={"휠체어 이용이 편해요"} rate={80} />
        <ReviewGraph title={"친절해요"} rate={90} />
        <ReviewGraph title={"맛있어요"} rate={70} />
      </GraphContainer>
    </Container>
  );
};

export default Review;

// style
const Container = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const ReviewDesc = styled.div`
  width: 100%;
  padding: 0 10px;

  display: flex;
  justify-content: space-between;

  font-size: 15px;

  button {
    color: #3db44a;
    text-decoration: underline;
  }
`;

const StarContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;

  font-size: 20px;

  span {
    font-family: "NanumSquareNeoHeavy";
  }
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin: 10px 0;
`;
