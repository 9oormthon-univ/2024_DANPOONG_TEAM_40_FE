import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-color: #faf9f1;
`;

export const Title = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 40px;
`;

export const Subtitle = styled.p`
  font-family: "NanumSquareNeoBold";
  font-size: 32px;
  color: #282828;

  margin: 10px 0 90px 0;

  span {
    font-family: "NanumSquareNeoHeavy";
    color: #3db44a;
  }
`;

export const Button = styled.button`
  width: 333px;
  height: 40px;

  background-color: #484848;
  border-radius: 10px;

  font-family: "NanumSquareNeoBold";
  font-size: 15px;
  color: #ffffff;

  position: absolute;
  bottom: 50px;
`;
