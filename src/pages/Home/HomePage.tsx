import { useEffect, useState } from "react";
import * as R from "../Recommend/RecommendPage.style";
import * as S from "./HomePage.style";
import TitleLine from "../../components/TitleLine";
import Tabbar from "../../components/Tabbar";
import SubTitleLine from "../../components/SubTitleLine";
import subwayLine2 from "../../assets/subway_2.png";
import markerMine from "../../assets/marker_mine.png";
import { BarrierFreeRecommendItem } from "../Recommend/components/RecommendItem";
import Search from "../../components/Search";
import barrierRecommendReviewerProfile from "../../assets/barrierRecommendReviewerProfile.png";
import map from "../../assets/icon/icon_map.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface RecommendItem {
  id: number;
  icon: string;
  name: string;
  imageUrl: string;
}

const HomePage = () => {
  const navigate = useNavigate();
  const [recommendItem, setRecommendItem] = useState<RecommendItem | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 현재 월 가져오기
  const month = new Date().getMonth() + 1;

  useEffect(() => {
    const fetchRecommendItem = async () => {
      try {
        const response = await axios.get(
          `http://3.37.95.121:3000/recommend/${month}`
        );
        if (response.data.data && response.data.data.length > 0) {
          setRecommendItem(response.data.data[0]); // 첫 번째 추천 아이템 설정
        }
      } catch (err) {
        console.error("추천 데이터를 불러오는 데 실패했습니다.", err);
        setError("추천 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendItem();
  }, [month]);

  const handleSearchClick = () => {
    navigate("/search"); // /search 경로로 이동
  };

  return (
    <R.Container>
      <TitleLine title={"모두의 길"} />
      <Search onfocus={handleSearchClick} />
      <SubTitleLine title={"노선도"} />
      <div className="w-full flex flex-row pl-[20px]">
        <img
          src={map}
          alt="map_icon"
          className="w-[10px] h-[12px] my-auto mx-4"
        />
        <span className=" flex flex-col font-NanumSquareNeo font-Bold font-[12px]">
          최근 방문한 장소
        </span>
      </div>
      <S.SubwayMapContainer>
        {/* Subway 이미지 */}
        <S.SubwayImage src={subwayLine2} alt="subwayLine2" />

        {/* 마커 표시 */}
        {[
          { id: 1, top: 31, left: 86.5 }, // 역 1
        ].map((position) => (
          <S.MarkerImage
            key={position.id}
            src={markerMine}
            alt="markerMine"
            top={position.top}
            left={position.left}
          />
        ))}
      </S.SubwayMapContainer>
      <SubTitleLine title={"베리어프리 추천"} />
      <div className="bg-white mt-4 justify-center items-center rounded-md">
        {loading && <p>로딩 중...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && recommendItem && (
          <div className="pd-4">
            <span className="font-NanumSquareNeo flex flex-row  justify-center items-center text-center font-bold mt-10 mb-[-8px]">
              {month}월의 길 {recommendItem.icon}
            </span>
            <BarrierFreeRecommendItem
              id={recommendItem.id}
              icon={recommendItem.icon}
              image={recommendItem.imageUrl}
              placeName={recommendItem.name}
              tags={["분식"]} // 태그는 필요에 따라 변경
            />
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg mt-10 min-w-[353px]">
        <div className="flex flex-row p-10 w-full">
          <img src={barrierRecommendReviewerProfile} alt="recommendThumbnail" />
          <div className="flex flex-col justify-start items-start ml-10">
            <span className="font-NanumSquareNeo font-extrabold text-[15px]">
              햄스터
            </span>
            <span className="font-NanumSquareNeo font-regular text-[12px] text-center mt-4">
              휠체어 타고 크리스마스 느끼기에 딱이에요!
            </span>
          </div>
        </div>
      </div>
      <Tabbar />
    </R.Container>
  );
};

export default HomePage;
