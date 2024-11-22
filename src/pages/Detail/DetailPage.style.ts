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

export const Image = styled.img`
  width: 100%;
  height: 262px;

  object-fit: cover;
`;

export const TagContainer = styled.div`
  width: 100%;
  padding: 15px 20px;

  display: flex;
  gap: 5px;
`;

export const Tag = styled.div`
  padding: 5px 10px;

  background-color: #efefef;
  border-radius: 5px;
  color: #a2a2a2;
`;

export const Name = styled.p`
  width: 100%;
  padding: 0 20px;

  font-size: 20px;
`;

export const Address = styled.div`
  width: 100%;
  padding: 15px 20px;

  font-size: 13px;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Back = styled.button`
  position: absolute;
  top: 26px;
  left: 30px;
`;

export const Save = styled.button`
  position: absolute;
  top: 355px;
  right: 20px;
`;

export const Line = styled.div`
  width: 353px;
  height: 1px;
  margin: 10px;

  background-color: #cccccc;
`;

export const MenuContainer = styled.div`
  width: 353px;

  display: flex;
  justify-content: space-around;
`;

export const Menu = styled.button`
  font-size: 18px;
  color: #cccccc;
`;
