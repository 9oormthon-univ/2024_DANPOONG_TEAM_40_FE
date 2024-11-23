import styled from "styled-components";

import box from "../../../assets/information.svg";
import modumong from "../../../assets/modumong_cap.svg";

interface InformationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InformationModal = ({ isOpen, onClose }: InformationModalProps) => {
  if (!isOpen) return null;

  return (
    <Background onClick={onClose}>
      <Container>
        <img src={box} alt="information box" />
        <Comment>
          이 항목은 교통약자와 비교통약자 모두가 평가할 수 있습니다.
          <br />
          <span>'접근성'</span>을 고려하여, 계단이나 엘리베이터 유무 등<br />
          다양한 요소를 바탕으로 여러분의 소중한 의견을 남겨주세요.
        </Comment>
        <Modumong data={modumong}></Modumong>
      </Container>
    </Background>
  );
};

export default InformationModal;

// style
const Background = styled.div`
  z-index: 1;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(40, 40, 40, 0.3);
`;

const Container = styled.div`
  position: relative;
`;

const Comment = styled.p`
  position: absolute;
  bottom: 70px;
  left: 20px;

  text-align: center;
  font-size: 12px;
  span {
    font-family: "NanumSquareNeoHeavy";
  }
`;

const Modumong = styled.object`
  position: absolute;
  left: 25px;
  top: 90px;
`;
