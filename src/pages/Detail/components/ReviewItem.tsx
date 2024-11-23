import styled from "styled-components";

const ReviewItem = () => {
  return (
    <Container>
      <ProfileImage />
      <ContentContainer>
        <InfoContainer>
          <Name>햄스터</Name>
          <Date>2024.11.03</Date>
        </InfoContainer>
        <ReviewContent>
          너무 맛있고 직원분들도 정말 친절해요! 후기가 길어지면 이렇게
          생략됩니다~~~
        </ReviewContent>
      </ContentContainer>
      <ReviewImage />
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

const ProfileImage = styled.img`
  width: 65px;
  height: 65px;

  background-color: #cccccc;
  border-radius: 32.5px;
`;

const ContentContainer = styled.div``;

const InfoContainer = styled.div`
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
  width: 180px;
  font-size: 13px;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* 보여줄 줄 수 설정 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReviewImage = styled.img`
  width: 65px;
  height: 65px;

  background-color: #cccccc;
  border-radius: 10px;
`;
