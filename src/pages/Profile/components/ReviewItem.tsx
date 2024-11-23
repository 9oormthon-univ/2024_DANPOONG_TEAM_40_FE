import styled from "styled-components";

interface Review {
  placeName: string;
  date: string;
  review: string;
}

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <Container>
      <div>
        <Title>
          <Place>{review.placeName}</Place>
          <Date>{review.date}</Date>
        </Title>
        <Content>{review.review}</Content>
      </div>
      <Image />
    </Container>
  );
};

export default ReviewItem;

// style
const Container = styled.div`
  width: 333px;
  padding: 15px;

  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);

  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Place = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 15px;
`;

const Date = styled.p`
  color: #cccccc;
  font-size: 12px;
`;

const Content = styled.div`
  width: 210px;
  font-size: 13px;

  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 보여줄 줄 수 설정 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  width: 75px;
  height: 75px;

  background-color: #cccccc;
  border-radius: 10px;
`;
