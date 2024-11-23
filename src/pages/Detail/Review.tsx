import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import StarRating from "./components/StarRating";
import ReviewGraph from "./components/ReviewGraph";
import ReviewItem from "./components/ReviewItem";

interface ReviewData {
  _id: string;
  userId: string;
  placeId: string;
  wheelchairAccess: number;
  service: number;
  taste: number;
  reviewText: string;
  images: string[];
  createdAt: string;
}

interface ReviewResponse {
  averageRatings: string;
  ratingPercentages: {
    taste: string;
    service: string;
    wheelchairAccess: string;
  };
  reviews: ReviewData[];
}

const Review = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [reviewData, setReviewData] = useState<ReviewResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://3.37.95.121:3000/review/${id}`
        );
        setReviewData(response.data.data);
      } catch (err) {
        console.error("리뷰 데이터를 가져오는 데 실패했습니다.", err);
        setError("리뷰 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchReviews();
    }
  }, [id]);

  const handleWriteReview = () => {
    if (id) {
      navigate(`/review/${id}`);
    }
  };

  if (loading) {
    return <Container>로딩 중...</Container>;
  }

  if (error || !reviewData) {
    return (
      <Container>{error || "리뷰 데이터를 불러올 수 없습니다."}</Container>
    );
  }

  const { averageRatings, ratingPercentages, reviews } = reviewData;

  // 안전하게 값 읽기 (기본값 설정)
  const wheelchairAccessRate = ratingPercentages?.wheelchairAccess || "0";
  const serviceRate = ratingPercentages?.service || "0";
  const tasteRate = ratingPercentages?.taste || "0";

  return (
    <Container>
      <ReviewDesc>
        <p>리뷰 {reviews.length}개</p>
        <button type="button" onClick={handleWriteReview}>
          리뷰 쓰기
        </button>
      </ReviewDesc>
      <StarContainer>
        <StarRating
          totalStars={5}
          initialRating={parseFloat(averageRatings || "0")}
          readOnly
        />
        <p>
          <span>{averageRatings}</span>/5
        </p>
      </StarContainer>
      <GraphContainer>
        <ReviewGraph
          title={"휠체어 이용이 편해요"}
          rate={parseInt(wheelchairAccessRate)}
        />
        <ReviewGraph title={"친절해요"} rate={parseInt(serviceRate)} />
        <ReviewGraph title={"맛있어요"} rate={parseInt(tasteRate)} />
      </GraphContainer>
      <Line />
      <ReviewContainer>
        {reviews.map((review) => (
          <ReviewItem
            key={review._id}
            userId={review.userId}
            createdAt={review.createdAt}
            reviewText={review.reviewText}
            images={review.images}
          />
        ))}
      </ReviewContainer>
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

const Line = styled.div`
  width: 353px;
  height: 1px;

  background-color: #cccccc;
  margin: 20px 0;
`;

const ReviewContainer = styled.div``;
