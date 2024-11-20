import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-color: #faf9f1;
`;

export const Image = styled.img`
  margin-bottom: -4px;
`;

export const KakaoLogin = styled.img`
  margin: 45px 0 20px 0;
`;

export const Login = styled.button`
  width: 300px;
  height: 45px;

  background-color: #efefef;
  border-radius: 5px;

  color: #282828;
  font-size: 14px;
  font-family: "NanumSquareNeoExtraBold";
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
`;
