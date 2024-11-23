import React from "react";
import * as R from "./RecommendItem.style";
import { useNavigate } from "react-router-dom";

interface RecommendItemProps {
  icon: string;
  stationName: string;
  placeName: string;
  tags: string[];
}

interface BarrierFreeRecommendItemProps {
  icon: string; // 아이콘 (역 아이콘 등)
  stationName: string; // 역 이름
  placeName: string; // 장소 이름
  tags: string[]; // 태그 배열
  image: string; // 이미지 URL
}

export const RecommendItem: React.FC<RecommendItemProps> = ({
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

export const BarrierFreeRecommendItem: React.FC<BarrierFreeRecommendItemProps> = ({
  icon,
  stationName,
  placeName,
  tags,
  image,
}) => {
  return (
    <R.BarrierConTainer>
      <R.BarrierImage src={image} alt="recommendThumbnail"/>
      <R.BarrierTitle >
        <div className="flex flex-row gap-[5px] mt-5">
          <p>{icon}</p>
          <span>{stationName}</span>
          <p>|</p>
          <p>{placeName}</p>
        </div>
      </R.BarrierTitle>
      <R.BarrierTagContainer>
        {tags.map((tag, index) => (
          <R.Tag key={index}>{tag}</R.Tag>
        ))}
      </R.BarrierTagContainer>
    </R.BarrierConTainer>
  );
}


