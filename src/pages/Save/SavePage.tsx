import React from "react";
import * as S from "./SavePage.style";
import Tabbar from "../../components/Tabbar";
import TitleLine from "../../components/TitleLine";
import SaveSubway from "./components/SaveSubway";

const SavePage = () => {
  const dummyData = [
    {
      name: "서울숲",
      address: "서울 성동구 뚝섬로 273",
      tags: ["숲", "숲길"],
    },
    {
      name: "뚝섬유원지",
      address: "서울 성동구 뚝섬로 200",
      tags: ["유원지", "한강"],
    },
    {
      name: "성수동 카페거리",
      address: "서울 성동구 성수이로 147",
      tags: ["카페", "거리"],
    },
    {
      name: "성수동 카페거리",
      address: "서울 성동구 성수이로 147",
      tags: ["카페", "거리"],
    },
  ];

  return (
    <S.Container>
      <TitleLine title="저장한 길" />
      <S.ListContainer>
        <button>내가 좋아하는 길</button>
        <button>내가 가고 싶은 길</button>
      </S.ListContainer>
      <SaveSubway subway="뚝섬역" data={dummyData} />
      <Tabbar />
    </S.Container>
  );
};

export default SavePage;
