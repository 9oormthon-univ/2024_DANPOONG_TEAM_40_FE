import React from "react";

interface GraphProps {
  value: number; // 비율 값 (0 ~ 100)
}

const Graph: React.FC<GraphProps> = ({ value }) => {
  // 비율 값이 0~100 범위를 벗어날 경우 조정
  const normalizedValue = Math.max(0, Math.min(value, 100));

  return (
    <div style={styles.container}>
      <div style={{ ...styles.bar, width: `${normalizedValue}%` }} />
    </div>
  );
};

const styles = {
  container: {
    width: "100px",
    height: "10px",
    backgroundColor: "#d9d9d9", // 배경색 (그래프 배경)
    borderRadius: "5px",
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    backgroundColor: "#3db44a", // 초록색 막대
  },
};

export default Graph;
