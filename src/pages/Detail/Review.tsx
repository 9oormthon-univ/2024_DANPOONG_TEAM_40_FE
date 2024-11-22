import React from "react";
import styled from "styled-components";
import StarRating from "./components/StarRating";

const Review = () => {
  return (
    <Container>
      <ReviewDesc>
        <p>리뷰 3개</p>
        <button type="button">리뷰 쓰기</button>
      </ReviewDesc>
      <StarRating totalStars={5} initialRating={4.9} readOnly={true} />
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
