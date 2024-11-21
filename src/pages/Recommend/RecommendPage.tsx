import React from "react";
import * as R from "./RecommendPage.style";
import Tabbar from "../../components/Tabbar";
import TitleLine from "../../components/TitleLine";

const RecommendPage = () => {
  return (
    <R.Container>
      <TitleLine title="🎄12월의 길🎄" />
      <Tabbar />
    </R.Container>
  );
};

export default RecommendPage;
