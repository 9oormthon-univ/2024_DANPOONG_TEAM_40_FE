import React from "react";
import styled from "styled-components";
import Graph from "./Graph";

interface ReviewGraphProps {
  title: string;
  rate: number;
}

const ReviewGraph: React.FC<ReviewGraphProps> = ({ title, rate }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <GraphContainer>
        <Graph value={rate} />
        <p>{rate}%</p>
      </GraphContainer>
    </Container>
  );
};

export default ReviewGraph;

const Container = styled.div`
  width: 333px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);
`;

const Title = styled.p`
  font-size: 15px;
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 15px;
`;
