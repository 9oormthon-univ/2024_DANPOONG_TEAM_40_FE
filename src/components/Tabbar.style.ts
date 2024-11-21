import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75px;

  outline: 1px solid #cccccc;
  border-radius: 20px 20px 0 0;

  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabbarContainer = styled.div`
  width: 100%;
  height: 75px;

  background-color: #ffffff;
  border-radius: 20px 20px 0 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HomeIcon = styled.button`
  width: 78px;
  height: 78px;

  background-color: #ffffff;
  border-radius: 39px;

  position: relative;
  bottom: 20px;
  left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBorder = styled.div`
  width: 80px;
  height: 80px;

  background-color: #cccccc;
  border-radius: 40px;

  position: absolute;
  bottom: 17px;

  z-index: -1;
`;
