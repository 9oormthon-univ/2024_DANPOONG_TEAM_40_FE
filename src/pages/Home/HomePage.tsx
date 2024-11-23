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
      <S.RecentVisitTitle>최근 방문한 장소</S.RecentVisitTitle>
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
      <Tabbar />
      <Tabbar />
    </R.Container>
  );
};

export default HomePage;
