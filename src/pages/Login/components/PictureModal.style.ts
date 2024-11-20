import styled from "styled-components";

export const Container = styled.div`
  width: 257px;

  background-color: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Title = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  color: #282828;
  font-size: 15px;

  margin-top: 20px;
`;

export const Option = styled.button`
  width: 227px;
  text-align: start;

  font-family: "NanumSquareNeoBold";
  color: #282828;
  font-size: 13px;
`;

export const CancelButton = styled.button`
  width: 100%;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

export const Cancel = styled.div`
  font-family: "NanumSquareNeoExtraBold";
  color: #282828;
  font-size: 13px;

  margin: 10px 0;
`;
