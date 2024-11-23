import * as R from "../Recommend/RecommendPage.style";
import * as S from "./HomePage.style";
import TitleLine from "../../components/TitleLine";
import Tabbar from "../../components/Tabbar";
import SubTitleLine from "../../components/SubTitleLine";
import subwayLine2 from "../../assets/subway_2.png";
import markerMine from "../../assets/marker_mine.png";
import { BarrierFreeRecommendItem } from "../Recommend/components/RecommendItem";
import BarrierFreeRecommendImage from "../../assets/recommendThumbnail.png"
import { getContentByMonth } from "../Recommend/RecommendPage";
import Search from "../../components/Search";
import barrierRecommendReviewerProfile from "../../assets/barrierRecommendReviewerProfile.png";
import map from "../../assets/icon/icon_map.svg";

const HomePage = () => {
  const { icon } = getContentByMonth();
  // 마커의 위치: 퍼센트 값 (예: 2호선 특정 역 위치)
  const markerPositions = [
    { id: 1, top: 31, left: 86.5}, // 역 1
  ];

  return (
    <R.Container>
      <TitleLine title={"모두의 길"} />
      <Search />
      <SubTitleLine title={"노선도"} />
      <div className="w-full flex flex-row pl-[20px]" >
        <img src={map} alt="map_icon" className="w-[10px] h-[12px] my-auto mx-4"/>
        <span className=" flex flex-col font-NanumSquareNeo font-Bold font-[12px]">최근 방문한 장소</span>
      </div>
      <S.SubwayMapContainer>
        {/* Subway 이미지 */}
        <S.SubwayImage src={subwayLine2} alt="subwayLine2" />
        
        {/* 마커 표시 */}
        {markerPositions.map((position) => (
          <S.MarkerImage
            key={position.id}
            src={markerMine}
            alt="markerMine"
            top={position.top}
            left={position.left}
          />
        ))}
      </S.SubwayMapContainer>
      <SubTitleLine title={"베리어프리 추천"}/>
        <div className="bg-white mt-4 justify-center items-center rounded-md">
          <div className="pd-4">
            <span className="font-NanumSquareNeo flex flex-row  justify-center items-center text-center font-bold mt-10 mb-[-8px]">12월의 길 🎄</span>
            <BarrierFreeRecommendItem
              icon={icon}
              image={BarrierFreeRecommendImage}
              stationName="잠실"
              placeName="앤티크커피"
              tags={["카페", "디저트"]}
            />
          </div>
        </div>
       <div className="bg-white rounded-lg mt-10 min-w-[353px]">
        <div className="flex flex-row p-10 w-full">
          <img src={barrierRecommendReviewerProfile} alt="recommendThumbnail"/>
          <div className="flex flex-col justify-start items-start ml-10">
            <span className="font-NanumSquareNeo font-extrabold text-[15px]">햄스터</span>
            <span className="font-NanumSquareNeo font-regular text-[12px] text-center mt-4">휠체어 타고 크리스마스 느끼기에 딱이에요!</span>
        </div>

      </div>
      </div>
      <Tabbar />
    </R.Container>
  );
};

export default HomePage;
