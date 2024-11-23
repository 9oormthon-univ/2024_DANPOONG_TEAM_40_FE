import React from "react";
import styled from "styled-components";

interface ReviewItemProps {
  userId: string;
  createdAt: string;
  reviewText: string;
  images: string[];
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  userId,
  createdAt,
  reviewText,
}) => {
  return (
    <Container>
      <ProfileImage />
      <ContentContainer>
        <InfoContainer>
          <Name>{userId}</Name>
          <Date>{createdAt}</Date>
        </InfoContainer>
        <ReviewContent>{reviewText}</ReviewContent>
      </ContentContainer>
    </Container>
  );
};

export default ReviewItem;

// style
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 65px;
  height: 65px;

  background-color: #cccccc;
  border-radius: 32.5px;
`;

const ContentContainer = styled.div``;

const InfoContainer = styled.div`
  margin-left: 10px;

  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

const Name = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 15px;
`;

const Date = styled.p`
  font-size: 12px;
  color: #cccccc;
`;

const ReviewContent = styled.div`
  margin-left: 10px;
  font-size: 13px;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* 보여줄 줄 수 설정 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
