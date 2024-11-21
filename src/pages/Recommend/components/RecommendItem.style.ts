import styled from "styled-components";

export const Container = styled.div``;

export const Image = styled.img`
  width: 313px;
  height: 213px;

  background-color: #ffffff;
  border-radius: 10px;

  margin-top: 20px;
`;

export const Title = styled.div`
  font-family: "NanumSquareNeoBold";
  font-size: 17px;
  color: #282828;

  display: flex;
  gap: 5px;
  margin: 10px 0;

  span {
    font-family: "NanumSquareNeoExtraBold";
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Tag = styled.p`
  font-family: "NanumSquareNeoBold";
  color: #a2a2a2;
  font-size: 12px;

  padding: 5px 10px;

  background-color: #efefef;
  border-radius: 5px;
`;
