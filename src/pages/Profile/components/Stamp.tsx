import styled from "styled-components";
import StampItem from "./StampItem";

interface MonthlyIcon {
  icon: string;
}

const getIconByMonth = (): MonthlyIcon => {
  const month = new Date().getMonth() + 1;

  const icons: Record<number, MonthlyIcon> = {
    1: {
      icon: "🐍",
    },
    2: {
      icon: "🎀",
    },
    3: {
      icon: "🌱",
    },
    4: {
      icon: "🌸",
    },
    5: {
      icon: "👨‍👩‍👧‍👦",
    },
    6: {
      icon: "🍨",
    },
    7: {
      icon: "⛱️",
    },
    8: {
      icon: "🌡️",
    },
    9: {
      icon: "🌕",
    },
    10: {
      icon: "🍁",
    },
    11: {
      icon: "🍴",
    },
    12: {
      icon: "🎄",
    },
  };

  return icons[month] || icons[1];
};

const Stamp = () => {
  const { icon } = getIconByMonth();
  const month = new Date().getMonth() + 1;

  return (
    <Container>
      <Title>
        {icon} {month}월의 길 {icon}
      </Title>
      <SubTitle>리뷰를 작성하고 도장을 모아보세요!</SubTitle>
      <StampContainer>
        <StampItem isActive={true} />
        <StampItem isActive={true} />
        <StampItem isActive={false} />
      </StampContainer>
    </Container>
  );
};

export default Stamp;

// style
const Container = styled.div`
  width: 333px;
  height: 200px;
  margin: 15px 0;

  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-family: "NanumSquareNeoExtraBold";
  font-size: 16px;
  margin-top: 20px;
`;

const SubTitle = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;

const StampContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
