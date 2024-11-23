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

export const ListContainer = styled.div`
  width: 333px;
  height: 40px;
  margin: 10px 0;

  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);

  display: flex;
  padding: 0 20px;
  justify-content: space-evenly;
  align-items: center;

  font-family: "NanumSquareNeoExtraBold";
  font-size: 13px;
  color: #cccccc;
`;
