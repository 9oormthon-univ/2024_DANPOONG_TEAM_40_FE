import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background-color: #faf9f1;
  font-family: "NanumSquareNeoBold";
  color: #282828;
`;

export const Profile = styled.div`
  width: 100%;
  padding: 15px 30px;

  display: flex;
  gap: 15px;
`;

export const ProfileSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: 30px;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;

  background-color: #cccccc;
  border-radius: 60px;
`;

export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: "NanumSquareNeoExtraBold";
  font-size: 24px;
`;

export const ProfileReview = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  color: #cccccc;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  padding: 10px 30px 100px 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-family: "NanumSquareNeoExtraBold";
    font-size: 18px;

    span {
      color: #3db44a;
    }
  }
`;
