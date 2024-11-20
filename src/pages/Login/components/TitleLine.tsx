import React from "react";
import * as T from "./TitleLine.style";

interface Props {
  title: string;
}

const TitleLine: React.FC<Props> = ({ title }) => {
  return (
    <T.Container>
      <T.Line>
        <T.LeftLabel>{"< 함께 해서"}</T.LeftLabel>
        <T.TitleBox>
          <T.TitleLabel>{title}</T.TitleLabel>
        </T.TitleBox>
        <T.RightLabel>{"더 걷기 좋은 >"}</T.RightLabel>
      </T.Line>
    </T.Container>
  );
};

export default TitleLine;
