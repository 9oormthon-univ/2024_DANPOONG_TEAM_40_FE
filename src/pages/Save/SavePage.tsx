import React, { useState } from "react";
import * as S from "./SavePage.style";
import Tabbar from "../../components/Tabbar";
import TitleLine from "../../components/TitleLine";
import LikeWay from "./LikeWay";
import WantWay from "./WantWay";

const SavePage = () => {
  const [activeTab, setActiveTab] = useState("like");

  const likeSubway = ["뚝섬역", "시청역"];
  const wantSubway = ["을지로입구역", "성수역"];

  return (
    <S.Container>
      <TitleLine title="저장한 길" />
      <S.ListContainer>
        <S.TabButton
          isActive={activeTab === "like"}
          onClick={() => setActiveTab("like")}
        >
          내가 좋아하는 길
        </S.TabButton>
        <S.TabButton
          isActive={activeTab === "want"}
          onClick={() => setActiveTab("want")}
        >
          내가 가고 싶은 길
        </S.TabButton>
      </S.ListContainer>
      {activeTab === "like" && <LikeWay subway={likeSubway} />}
      {activeTab === "want" && <WantWay subway={wantSubway} />}
      <Tabbar />
    </S.Container>
  );
};

export default SavePage;
