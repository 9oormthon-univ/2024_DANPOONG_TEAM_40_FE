import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const Icon = styled.img`
  height: 25px;
`;

export const Label = styled.p<{ isActive: boolean }>`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 10px;
  color: ${(props) => (props.isActive ? "#3db44a" : "#cccccc")};
`;
