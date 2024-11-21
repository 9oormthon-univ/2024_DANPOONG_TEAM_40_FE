import React from "react";
import * as R from "./RecommendItem.style";

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
  return (
    <R.Container>
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
