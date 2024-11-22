import React, { useState } from "react";
import * as R from "./ReviewPage.style";
import { useParams } from "react-router-dom";
import ReviewStar from "./components/ReviewStar";

import backIcon from "../../assets/icon/icon_back.svg";
import pictureUpload from "../../assets/review_upload.svg";

// 더미 데이터
import { places } from "../../data/placeData";

const ReviewPage = () => {
  const { placeName } = useParams<{ placeName: string }>();
  const place = places.find((item) => item.name === placeName);
  const [text, setText] = useState("");
  const [ratings, setRatings] = useState({
    wheelchair: 0,
    service: 0,
    taste: 0,
  });

  const isButtonActive =
    text.length >= 20 && Object.values(ratings).every((rating) => rating > 0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleRatingChange = (category: string, rating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: rating, // 특정 카테고리의 별점 업데이트
    }));
  };

  if (!place) {
    return <h1>해당 장소를 찾을 수 없습니다.</h1>;
  }

  return (
    <R.Container>
      <R.Title>{place.name}</R.Title>
      <R.Back type="button">
        <img src={backIcon} alt="back" />
      </R.Back>
      <R.GraphContainer>
        <ReviewStar
          title={"휠체어 이용"}
          onRatingChange={(rating) => handleRatingChange("wheelchair", rating)}
        />
        <ReviewStar
          title={"서비스"}
          onRatingChange={(rating) => handleRatingChange("service", rating)}
        />
        <ReviewStar
          title={"맛"}
          onRatingChange={(rating) => handleRatingChange("taste", rating)}
        />
      </R.GraphContainer>
      <R.Line />
      <R.PictureContainer>
        <R.PictureTitle>사진 업로드</R.PictureTitle>
        <R.PictureDesc>
          이용한 장소와 관련된 사진을 업로드해주세요. <br />
          초상권 침해 사진의 경우 삭제될 수 있습니다.
        </R.PictureDesc>
        <R.PictureUpload>
          <img src={pictureUpload} alt="pictureUpload" />
        </R.PictureUpload>
      </R.PictureContainer>
      <R.ReviewContainer>
        <R.ReviewGuide>
          <R.ReviewTitle>
            리뷰 작성 <span>*</span>
          </R.ReviewTitle>
          <R.ReviewNumber>
            {text.length}
            <span>/최소 20자 이상</span>
          </R.ReviewNumber>
        </R.ReviewGuide>
        <R.ReviewTextArea
          placeholder="유저들에게 도움이 되는 따뜻한 리뷰를 작성해주세요."
          value={text}
          onChange={handleTextChange}
        />
      </R.ReviewContainer>
      <R.Button isActive={isButtonActive} disabled={!isButtonActive}>
        작성 완료
      </R.Button>
    </R.Container>
  );
};

export default ReviewPage;
