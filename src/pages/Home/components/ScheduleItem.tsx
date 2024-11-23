import styled from "styled-components";

const ScheduleItem = ({ time, minute, direction }) => {
  return (
    <Container>
      <Time>{time}</Time>
      <Minute>{minute}</Minute>
      <Direction>{direction}</Direction>
    </Container>
  );
};

export default ScheduleItem;

// style
const Container = styled.div`
  display: flex;
  gap: 7px;

  font-family: "NanumSquareNeoBold";
  font-size: 12px;
  color: #282828;
`;

const Time = styled.p`
  font-family: "NanumSquareNeoHeavy";
`;

const Minute = styled.p`
  color: #ef6e6e;
`;

const Direction = styled.p`
  color: #a2a2a2;
`;
