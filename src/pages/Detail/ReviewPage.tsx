import React, { useState, useEffect } from "react";
import * as R from "./ReviewPage.style";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewStar from "./components/ReviewStar";

import backIcon from "../../assets/icon/icon_back.svg";
import pictureUpload from "../../assets/review_upload.svg";

const ReviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [place, setPlace] = useState<{ name: string } | null>(null);
  const [text, setText] = useState("");
  const [ratings, setRatings] = useState({
    wheelchairAccess: 0,
    service: 0,
    taste: 0,
  });
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const isButtonActive =
    text.length >= 20 && Object.values(ratings).every((rating) => rating > 0);

  // 장소 정보 가져오기
  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(
          `http://3.37.95.121:3000/places/search/${id}`
        );
        setPlace(response.data.data);
      } catch (err) {
        console.error("장소 정보를 불러오는 데 실패했습니다.", err);
        setPlace(null);
      }
    };

    fetchPlace();
  }, [id]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleRatingChange = (category: string, rating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: rating,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files)); // 이미지 파일 배열로 저장
    }
  };

  const handleSubmit = async () => {
    if (!isButtonActive) return;

    const formData = new FormData();
    formData.append("reviewText", text); // 리뷰 텍스트
    formData.append("wheelchairAccess", String(ratings.wheelchairAccess)); // 휠체어 접근성 점수
    formData.append("service", String(ratings.service)); // 서비스 점수
    formData.append("taste", String(ratings.taste)); // 맛 점수

    // 이미지 파일 추가
    images.forEach((image) => {
      formData.append("images", image); // 서버는 배열로 받음
    });

    try {
      setLoading(true);
      await axios.post(`http://3.37.95.121:3000/review/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("리뷰가 성공적으로 작성되었습니다.");
      navigate(`/detail/${id}`);
    } catch (err) {
      console.error("리뷰 작성에 실패했습니다.", err);
      alert("리뷰 작성에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!place) {
    return <h1>해당 장소를 찾을 수 없습니다.</h1>;
  }

  return (
    <R.Container>
      <R.Title>{place.name}</R.Title>
      <R.Back type="button" onClick={handleBackClick}>
        <img src={backIcon} alt="back" />
      </R.Back>
      <R.GraphContainer>
        <ReviewStar
          title={"휠체어 이용"}
          onRatingChange={(rating) =>
            handleRatingChange("wheelchairAccess", rating)
          }
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
          <label htmlFor="file-upload">
            <img src={pictureUpload} alt="pictureUpload" />
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
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
      <R.Button
        isActive={isButtonActive}
        disabled={!isButtonActive || loading}
        onClick={handleSubmit}
      >
        {loading ? "작성 중..." : "작성 완료"}
      </R.Button>
    </R.Container>
  );
};

export default ReviewPage;
