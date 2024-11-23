import React from "react";
import * as R from "./RecommendItem.style";
import { useNavigate } from "react-router-dom";

interface RecommendItemProps {
  id: number; // 장소 ID 추가
  icon: string;
  placeName: string;
  tags: string[];
  image: string; // 이미지 URL
}

interface BarrierFreeRecommendItemProps {
  id: number; // 장소 ID 추가
  icon: string; // 아이콘 (역 아이콘 등)
  placeName: string; // 장소 이름
  tags: string[]; // 태그 배열
  image: string; // 이미지 URL
}

// 일반 추천 아이템
export const RecommendItem: React.FC<RecommendItemProps> = ({
  id,
  icon,
  placeName,
  tags,
  image,
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/detail/${id}`, {
      state: {
        icon,
        placeName,
        tags,
        image,
      },
    });
  };

  return (
    <R.Container onClick={handleClick}>
      <R.Image src={image} alt={`${placeName} 이미지`} />
      <R.Title>
        <p>{icon}</p>
        <span>{placeName}</span>
      </R.Title>
      <R.TagContainer>
        {tags.map((tag, index) => (
          <R.Tag key={index}>{tag}</R.Tag>
        ))}
      </R.TagContainer>
    </R.Container>
  );
};

// 배리어 프리 추천 아이템
export const BarrierFreeRecommendItem: React.FC<
  BarrierFreeRecommendItemProps
> = ({ id, icon, placeName, tags, image }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!id) {
      console.error("ID가 없습니다. navigate 호출이 중단됩니다.");
      return;
    }

    navigate(`/detail/${id}`, {
      state: {
        icon,
        placeName,
        tags,
        image,
      },
    });
  };

  return (
    <R.BarrierConTainer onClick={handleClick}>
      <R.BarrierImage src={image} alt={`${placeName} 이미지`} />
      <R.BarrierTitle>
        <div className="flex flex-row gap-[5px] mt-5">
          <p>{icon}</p>
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
};
