import styled from "styled-components";

export const Container = styled.div``;

export const BarrierConTainer = styled.div`
`;

export const Image = styled.img`
  width: 313px;
  height: 213px;

  background-color: #ffffff;
  border-radius: 10px;

  margin-top: 20px;
`;

export const BarrierImage = styled.img`
  width: 360px;
  height: 210px;

  background-color: #ffffff;
  border-radius: 10px;

  margin-top: 20px;
  margin-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
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

export const BarrierTitle = styled.div`
  font-family: "NanumSquareNeoBold";
  font-size: 17px;
  color: #282828;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;`;

export const TagContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const BarrierTagContainer = styled.div`
  display: flex;
  justify-content: center;
  items-align: center;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-family: "NanumSquareNeoBold";
  color: #a2a2a2;
  font-size: 12px;

  padding: 5px 10px;

  background-color: #efefef;
  border-radius: 5px;
`;
