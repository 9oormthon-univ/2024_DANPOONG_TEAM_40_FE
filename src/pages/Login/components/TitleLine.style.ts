import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 17.5px 0;
`;

export const Line = styled.div`
  background-color: #3db44a;
  height: 35px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 190px;
  height: 70px;

  background-color: #ffffff;
  border: 7px solid #3db44a;
  border-radius: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftLabel = styled.p`
  width: 86px;
  color: white;

  font-family: "NanumSquareNeoExtraBold";
  font-size: 12px;

  margin-left: 10px;
`;

export const RightLabel = styled.p`
  width: 86px;
  color: white;

  font-family: "NanumSquareNeoExtraBold";
  font-size: 12px;

  text-align: end;
  margin-right: 10px;
`;

export const TitleLabel = styled.p`
  font-family: "NanumSquareNeoHeavy";
  font-size: 24px;
`;
