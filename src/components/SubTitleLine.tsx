import React from "react";
import * as T from "./TitleLine.style";

interface Props {
  title: string;
}

const SubTitleLine: React.FC<Props> = ({ title }) => {
  return (
    <T.Container>
      <T.SubLine>
        <T.SubTitleBox>
          <T.SubTitleLabel>{title}</T.SubTitleLabel>
        </T.SubTitleBox>
      </T.SubLine>
    </T.Container>
  );
};

export default SubTitleLine;
