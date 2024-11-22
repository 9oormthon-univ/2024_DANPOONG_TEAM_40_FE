import React, { useState, useEffect } from "react";

interface StarRatingProps {
  totalStars?: number; // 별의 총 개수
  initialRating?: number; // 초기 별점 값
  readOnly?: boolean; // 읽기 전용 모드 여부
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  readOnly = false,
}) => {
  const [hoveredStars, setHoveredStars] = useState(0); // 마우스 오버 상태
  const [selectedStars, setSelectedStars] = useState(0); // 클릭된 별 상태

  useEffect(() => {
    setSelectedStars(initialRating); // 초기 별점 반영
  }, [initialRating]);

  const handleMouseEnter = (index: number) => {
    if (!readOnly) setHoveredStars(index); // 읽기 전용 모드에서는 무시
  };
  const handleMouseLeave = () => {
    if (!readOnly) setHoveredStars(0); // 읽기 전용 모드에서는 무시
  };
  const handleClick = (index: number) => {
    if (!readOnly) setSelectedStars(index); // 읽기 전용 모드에서는 무시
  };

  const getStarFill = (star: number): string => {
    const activeStars = hoveredStars || selectedStars; // 현재 활성화된 별
    if (star <= Math.floor(activeStars)) {
      return "gold"; // 완전히 채운 별
    } else if (star === Math.ceil(activeStars)) {
      const fractionalPart = activeStars - Math.floor(activeStars); // 소수점 부분
      if (fractionalPart >= 0.5) {
        return `url(#half-gold)`; // 절반 채운 별
      }
    }
    return "gray"; // 채워지지 않은 별
  };

  return (
    <div style={{ display: "flex", cursor: readOnly ? "default" : "pointer" }}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="half-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="50%"
              style={{ stopColor: "#ffd95c", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#cccccc", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      {Array.from({ length: totalStars }, (_, i) => i + 1).map((star) => (
        <svg
          key={star}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
          width="27"
          height="27"
          fill={getStarFill(star)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.88 1.414 8.697L12 18.347 4.586 24l1.414-8.697-6-5.88 8.332-1.268z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
