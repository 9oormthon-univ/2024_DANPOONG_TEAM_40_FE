import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background-color: #ffffff;
  font-family: "NanumSquareNeoBold";
  color: #282828;
`;

export const Title = styled.div`
  height: 68px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumSquareNeoExtraBold";
  font-size: 24px;
`;

export const Back = styled.button`
  position: absolute;
  top: 26px;
  left: 30px;
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 10px 0;
`;

export const Line = styled.div`
  width: 353px;
  height: 1px;
  margin: 10px;

  background-color: #cccccc;
`;

export const PictureContainer = styled.div`
  width: 100%;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PictureTitle = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 15px;
`;

export const PictureDesc = styled.p`
  font-size: 11px;
  color: #cccccc;
`;

export const PictureUpload = styled.div`
  border-radius: 5px;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  padding: 0 30px;
`;

export const ReviewGuide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const ReviewTitle = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 15px;

  span {
    color: #ef6e6e;
  }
`;

export const ReviewNumber = styled.p`
  font-size: 11px;

  span {
    color: #cccccc;
  }
`;

export const ReviewTextArea = styled.textarea`
  width: 333px;
  height: 160px;
  padding: 15px;
  margin: 5px 0;

  font-size: 11px;

  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button<{ isActive: boolean }>`
  width: 333px;
  height: 45px;

  background-color: ${({ isActive }) => (isActive ? "#484848" : "#cccccc")};
  border-radius: 10px;

  font-family: "NanumSquareNeoHeavy";
  font-size: 17px;
  color: #ffffff;

  position: absolute;
  bottom: 35px;
`;
