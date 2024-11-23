import React from "react";
import * as R from "./RecommendItem.style";
import { useNavigate } from "react-router-dom";

interface RecommendItemProps {
  icon: string;
  stationName: string;
  placeName: string;
  tags: string[];
}

const RecommendItem: React.FC<RecommendItemProps> = ({
  icon,
  stationName,
  placeName,
  tags,
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 동작 차단
    e.stopPropagation(); // 이벤트 전파 차단
    navigate(`/detail/${placeName}`);
  };

  return (
    <R.Container onClick={handleClick}>
      <R.Image />
      <R.Title>
        <p>{icon}</p>
        <span>{stationName}</span>
        <p>|</p>
        <p>{placeName}</p>
      </R.Title>
      <R.TagContainer>
        {tags.map((tag, index) => (
          <R.Tag key={index}>{tag}</R.Tag>
        ))}
      </R.TagContainer>
    </R.Container>
  );
};

export default RecommendItem;
