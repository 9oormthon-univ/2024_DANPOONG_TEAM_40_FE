import styled from "styled-components";

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background-color: #faf9f1;
`;

export const GuideLabel = styled.p`
  color: #282828;
  font-size: 30px;
  font-family: "NanumSquareNeoBold";

  margin-top: 45px;

  span {
    font-family: "NanumSquareNeoHeavy";
  }
`;

export const Profile = styled.button`
  width: 145px;
  height: 145px;

  background-color: #efefef;
  border-radius: 75.5px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 45px 0 30px 0;
`;

export const NicknameInput = styled.input`
  width: 333px;
  height: 40px;
  padding: 0 20px;

  background-color: #efefef;
  border-radius: 20px;

  font-family: "NanumSquareNeoBold";
  color: #282828;
  font-size: 15px;

  font &::placeholder {
    color: #a2a2a2;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 333px;
  height: 40px;
  position: absolute;
  bottom: 50px;

  background-color: ${({ isActive }) => (isActive ? "#484848" : "#cccccc")};
  border-radius: 10px;

  font-family: "NanumSquareNeoBold";
  color: #ffffff;
  font-size: 15px;

  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
`;
