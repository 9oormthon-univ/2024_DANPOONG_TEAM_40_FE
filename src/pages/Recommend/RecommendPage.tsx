import * as R from "./RecommendPage.style";
import Tabbar from "../../components/Tabbar";
import TitleLine from "../../components/TitleLine";
import GuideBox from "./components/GuideBox";
import { RecommendItem } from "./components/RecommendItem";

interface Place {
  stationName: string;
  placeName: string;
  tags: string[];
}

interface MonthlyContent {
  icon: string;
  message: JSX.Element;
  places: Place[];
}

export const getContentByMonth = (): MonthlyContent => {
  const month = new Date().getMonth() + 1;

  const contents: Record<number, MonthlyContent> = {
    1: {
      icon: "🐍",
      message: (
        <>
          <span>새해</span>엔 떡만둣국과 새 다이어리로 힘차게 출발해요! 🐍✨
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    2: {
      icon: "🎀",
      message: (
        <>
          따뜻한 실내에서 <span>초콜릿</span>보다 <span>달콤</span>한 데이트를
          즐겨보세요! 💕
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    3: {
      icon: "🌱",
      message: (
        <>
          3월에는 <span>봄바람</span> 맞으며 <span>나들이</span> 떠나볼까요? 🌿
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    4: {
      icon: "🌸",
      message: (
        <>
          <span>벚꽃</span>이 활짝 피는 계절! <br /> 나들이 가방 챙기고,{" "}
          <span>벚꽃 명소</span>로 떠나보세요! 📸✨
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    5: {
      icon: "👨‍👩‍👧‍👦",
      message: (
        <>
          5월에는 <span>온 가족 모두</span>가 행복한 하루를 만들어 보세요! 🌈
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    6: {
      icon: "🍨",
      message: (
        <>
          <span>더위</span>엔 빙수가 정답! 🍧 <span>빙수</span> 맛집을 방문해
          보세요!
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    7: {
      icon: "⛱️",
      message: (
        <>
          7월에는 <span>휴일</span>을 재밌게 보내는 법을 알려드릴게요! 🎲📚
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    8: {
      icon: "🌡️",
      message: (
        <>
          너무 더운 8월, <span>시원</span>한 실내로 피신해볼까요? ❄️
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    9: {
      icon: "🌕",
      message: (
        <>
          <span>천고마비</span>의 계절, <br /> 9월에는
          <span>'오늘 뭐 먹지?'</span>가 가장 즐거운 고민! 🍱
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    10: {
      icon: "🍁",
      message: (
        <>
          짧은 <span>가을</span>을 놓치지 마세요! 🍂 <br />
          지금이 바로 최적의 타이밍! 🚶‍♂️✨
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    11: {
      icon: "🍴",
      message: (
        <>
          가래떡데이? 알차게 보내야죠! <br /> <span>떡볶이</span> 맛집 투어를
          떠나보세요! 🥘
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
    12: {
      icon: "🎄",
      message: (
        <>
          12월에는 소중한 사람과 <span>따뜻한</span> 장소를 방문해 보세요! 🥂
        </>
      ),
      places: [
        {
          stationName: "잠실",
          placeName: "앤티크커피",
          tags: ["카페", "디저트"],
        },
        { stationName: "강남", placeName: "스타벅스", tags: ["커피", "음료"] },
        {
          stationName: "홍대",
          placeName: "빵지순례",
          tags: ["베이커리", "맛집"],
        },
        { stationName: "명동", placeName: "롯데호텔", tags: ["숙박", "고급"] },
        {
          stationName: "이태원",
          placeName: "카사블랑카",
          tags: ["샌드위치", "현지맛"],
        },
      ],
    },
  };

  return contents[month] || contents[1];
};

const RecommendPage = (): JSX.Element => {
  const { icon, message, places } = getContentByMonth();
  const month = new Date().getMonth() + 1;

  return (
    <R.Container>
      <TitleLine title={`${icon} ${month}월의 길 ${icon}`} />
      <GuideBox>{message}</GuideBox>
      {places.map((place, index) => (
        <RecommendItem
          key={index}
          icon={icon}
          stationName={place.stationName}
          placeName={place.placeName}
          tags={place.tags}
        />
      ))}
      <Tabbar />
    </R.Container>
  );
};

export default RecommendPage;
